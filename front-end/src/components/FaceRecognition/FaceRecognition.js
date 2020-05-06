import React from 'react';
import './FaceRecognition.css';
// import Tilt from 'react-tilt';
// import Face from './Face.png'

const FaceRecognition = ({ imageUrl, box }) => {
  // console.log('check', imageUrl)
  return (
  		<div className='center ma'>
  		  <div className='absolute mt2'>
  		    <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
  		  	<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
  		  </div>
  		</div>
  );
}

export default FaceRecognition;