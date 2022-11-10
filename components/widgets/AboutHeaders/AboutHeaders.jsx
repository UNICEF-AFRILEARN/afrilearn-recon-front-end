import React from 'react';
import styles from './header.module.css';

const AboutHeaders = () => {
  return (
    <div className={styles.aboutheaderwrapper}>
        <div className={styles.innercontainer}>
              <div className={styles.contentwrapper}>
                  Content
              </div>
              <div className={styles.slidderwrapper}>
                  Image slider
              </div>
        </div>
    </div>
  )
}

export default AboutHeaders