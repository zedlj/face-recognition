const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors())


const database = {
	users: [
	  {
	  	id: '123',
	  	name: 'john',
	  	email: 'john@gmail.com',
	  	password: 'cookies',
	  	entries: 0,
	  	joined: new Date()
	  },
	  	  {
	  	id: '124',
	  	name: 'joe',
	  	email: 'joe@gmail.com',
	  	password: 'apples',
	  	entries: 0,
	  	joined: new Date()
	  }
	],
	// login: [
	//  {
	// 	id: '987',
	// 	hash:'',
	// 	email: 'john@gmail.com'
	//  }
	// ]
}


app.get('/', (req, res)=> {
	res.send(database.users);
})

//res.json recieves in json instead of res.send
app.post('/signin', (req,res) => {
// 	bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// 	bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });
	if (req.body.email === database.users[0].email && 
		req.body.password === database.users[0].password) {
		res.json(database.users[0]);
	} else {
		res.status(400).json('error logging in');
	}
	//res.json('siginin');
})


app.post('/register', (req, res)=> {
	const { email, name, password} = req.body;
	// bcrypt.hash(password, null, null, function(err, hash) {
 //    console.log(hash);
// });
	database.users.push({
	  	id: '125',
	  	name: name,
	  	email: email,
	  	//password: password,
	  	entries: 0,
	  	joined: new Date()
	  })
	//-1 grabs last item in array
	res.json(database.users[database.users.length-1]);
})

//access id through request.params
app.get('/profile/:id', (req, res) => {
	const { id } = req.params;
	let found = false;
	//loop through user ids
	database.users.forEach(user => { 
		if (user.id === id) {
			found = true;
			return res.json(user);
		}
	})
	if (!found) {
		res.status(400).json('not found')
	}
})

app.put('/image', (req, res) => {
	const { id } = req.body;
	let found = false;
	database.users.forEach(user => { 
		if (user.id === id) {
			found = true;
			user.entries++
			return res.json(user.entries);
		}
	})
		if (!found) {
			res.status(400).json('not found')
	    }
})


// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });



//port 3000
app.listen(3000, () => {
	console.log('app running on port 3000');
})



/*
/ --> res = this is working 
/signin --> POST (posting JSON user data) success/fail (use post instead of query so password is secure)
/register --> POST (add data to database) new user object
/profile/:userId --> GET (get user info) = user
/image --> PUT (update user info) --> updated user object/ count (user score)
 */