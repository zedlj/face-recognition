import React from 'react';
// import Tilt from 'react-tilt';
// import Face from './Face.png'

const Navigation = ({onRouteChange, isSignedIn}) => {
  	  if(isSignedIn) {
  	  	return(
		  <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
		    <p onClick={() => onRouteChange('signout')} className='f3 linkn dim black underline pa3 pointer'>Sign Out</p>
		  </nav>
		);
	  } else {
	  	return(
	  	  <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
		    <p onClick={() => onRouteChange('signin')} className='f3 linkn dim black underline pa3 pointer'>Sign In</p>
		    <p onClick={() => onRouteChange('Register')} className='f3 linkn dim black underline pa3 pointer'>Register</p>
		  </nav>
		 );
	   }
}

export default Navigation;
