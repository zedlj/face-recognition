import React from 'react';
// import Tilt from 'react-tilt';
// import Face from './Face.png'

const Navigation = () => {
  return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
		  <p className='f3 linkn dim black underline pa3 pointer'>Sign Out</p>
		  
		{/*  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
  	        <Tilt className="Tilt br2 shadow-2" options={{ max : 70 }} style={{ height: 90, width: 90,}} >
 		       <div className="Tilt-inner pa3"><img style={{paddingTop : '0.7px'}} alt='Logo' src={Face}/></div>
	        </Tilt>
	      </div> */}

		</nav>
  );
}

export default Navigation;
