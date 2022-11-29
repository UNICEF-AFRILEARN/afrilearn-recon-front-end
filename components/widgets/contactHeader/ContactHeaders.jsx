import React from 'react';
import styles from './header.module.css';
import ImageSlider from '../../ImageSlider/index';
import { sliderData } from '../../ImageSlider/sliderData';

const ContactHeaders = () => {
  return (
    <div className={styles.aboutheaderwrapper}>
        <div className={styles.innercontainer}>
              <div className={styles.contentwrapper}>
                  <h1>We'd absolutely love to hear from you!</h1>

                  <h3>Please fill the form below and we will get back to you as soon as possible.</h3>
              </div>

        </div>
    </div>
  )
}

export default ContactHeaders