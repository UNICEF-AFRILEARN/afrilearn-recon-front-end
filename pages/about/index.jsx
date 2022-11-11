import React from 'react';
import styles from './about.module.css';

import AboutHeaders from '../../components/widgets/AboutHeaders/AboutHeaders'
import AboutUs from '../../components/common/AboutUs';

const index = () => {
  return (
    <div className={styles.aboutmainwrapper}>
        <AboutHeaders />
        <AboutUs />
    </div>
  )
}

export default index