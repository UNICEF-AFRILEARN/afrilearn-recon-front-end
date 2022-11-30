import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import { pressData } from './pressData'

import styles from './press.module.css'


  
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
        <Carousel className={styles.curouselwrapper}>
      {
        pressData && pressData.map((slide, index) => {
          return (
          <Carousel.Item>
            <img
              className={styles.slidingimage}
              src={slide.image}
              // alt={slide.alt}
            />
          </Carousel.Item>
          )
        })  
      }
        
    </Carousel>
      </div>
        </div>
    </div>
  )
}

export default Press