import React from 'react'
import styles from '../../../../styles/teacher.module.css';

import { BsSearch } from 'react-icons/bs';

const Searchbar = () => {
  return (
    <div className={styles.teachersearchwrapper}>
        <span><BsSearch /></span> Search Exams by name
    </div>
  )
}

export default Searchbar