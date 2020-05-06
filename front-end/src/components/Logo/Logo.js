import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Face from './Face.png'

const Logo = () => {
  return (
  	<div className='ma4 mt0'>
  	  <Tilt className="Tilt br2 shadow-2" options={{ max : 70 }} style={{ height: 90, width: 90, display: 'flex', justifyContent: 'flex-start'}} >
 		<div className="Tilt-inner pa3"><img style={{paddingTop : '0.7px'}} alt='Logo' src={Face}/></div>
	  </Tilt>
	</div>
  );
}

export default Logo;