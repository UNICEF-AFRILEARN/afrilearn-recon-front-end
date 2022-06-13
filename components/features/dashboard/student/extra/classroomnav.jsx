import Link from 'next/link';
import React from 'react';
import styles from "../../../../../styles/classroom.module.css";
import Announcesment from './announcesment';

const Classroomnav = ({props}) => {
  console.log(props)
  return (
    <div className={styles.maincontainer}>
        <nav className={styles.navbar}>
          <ul>
            <li>Announcements</li>
            
            <li>Materials</li>
            <li>Classwork</li>
            <li>People</li>
            <li>Class Performance</li>
          </ul>
        </nav>

        <Announcesment />
    </div>
  )
}

export default Classroomnav