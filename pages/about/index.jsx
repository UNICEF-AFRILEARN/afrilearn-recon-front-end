import React from 'react';
import styles from './about.module.css';

import AboutHeaders from '../../components/widgets/AboutHeaders/AboutHeaders'

const index = () => {
  return (
    <div className={styles.aboutmainwrapper}>
        <AboutHeaders />
    </div>
  )
}

export default index