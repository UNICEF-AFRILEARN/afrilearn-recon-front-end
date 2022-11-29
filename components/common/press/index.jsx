import React from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import styles from './press.module.css'

const slideImages = [
    {
      url: '',
    //   caption: 'Slide 1'
    },
    {
      url: 'images/slide_3.jpg',
    //   caption: 'Slide 2'
    },
    {
      url: 'images/slide_4.jpg',
    //   caption: 'Slide 3'
    },
  ];

  
const Press = () => {
  return (
    <div className={styles.pressmainwrapper}>
        <div className={styles.careerwrapper}>
            <h2>Careers</h2>
            <h5>Inspire Africa to love learning!</h5>
        <p>We're learners first, and we’re passionate about making learning fun. Join us and grow your career at Afrilearn.            
        </p>
        <p>Please follow our LinkedIn page  for fresh openings.</p>
        </div>
        <div className={styles.presswrapper}>
        <h2>Press</h2>
        <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                {/* <span>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
        </div>
    </div>
  )
}

export default Press