import React from 'react';

import styles from '../../../../styles/parentdashboard.module.css';
import Classcontentmain from './classcontentmain';

const ClassContent = () => {
  return (
    <div className={styles.classcontentwrapper}>
        <div className={styles.contentheaderwrapper}>
          <h3>Class Contents</h3>
          <div className={styles.labelwrapper}>
            <ul>
              <li>Filter by class</li>
              <li>JSS 1</li>
              <li>Class note</li>
            </ul>
          </div>
        </div>
        <Classcontentmain />
    </div>
  )
}

export default ClassContent