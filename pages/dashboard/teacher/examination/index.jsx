import React from 'react';

import styles from '../../../../styles/teacher.module.css';
import Middletab from '../extra/middletab';
import Searchbar from '../extra/searchbar';

const Examinations = () => {
  return (
    <div className={styles.examinationwrapper}>
        <div className={styles.examsheaderwrapper}>

        </div>
        <Middletab />
        <Searchbar />
    </div>
  )
}

export default Examinations