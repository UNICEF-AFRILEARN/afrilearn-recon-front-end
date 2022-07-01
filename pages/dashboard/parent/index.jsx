import React from 'react';

import styles from '../../../styles/parentdashboard.module.css';
import ParentHeader from './extra/header';
import Middlebar from './extra/middlebar';


const Parent = () => {
  return (
    <div className={styles.parentcomponentwrapper}>
            <ParentHeader />
            <div>
                <Middlebar />
            </div>
    </div>
  )
}

export default Parent