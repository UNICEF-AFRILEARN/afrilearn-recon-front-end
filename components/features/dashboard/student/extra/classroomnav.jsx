import Link from 'next/link';
import React, { useState } from 'react';
import styles from "../../../../../styles/classroom.module.css";
import Announcesment from './announcesment';

const Classroomnav = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <div className={styles.maincontainer}>
        <nav className={styles.navbar}>
          <ul>
            <li 
            onClick={() => toggleTab(1)}
            className={toggleState === 1 ? styles.activetab : styles.tabs}
            >Announcements</li>
            <li 
            onClick={() => toggleTab(2)}
            className={toggleState === 2 ? styles.activetab : styles.tabs}
            >Materials</li>
            <li 
            onClick={() => toggleTab(3)}
            className={toggleState === 3 ? styles.activetab : styles.tabs}
            >Classwork</li>
            <li 
            onClick={() => toggleTab(4)}
            className={toggleState === 4 ? styles.activetab : styles.tabs}
            >People</li>
            <li 
            onClick={() => toggleTab(5)}
            className={toggleState === 5 ? styles.activetab : styles.tabs}
            >Class Performance</li>
          </ul>
        </nav>

        <Announcesment />
    </div>
  )
}

export default Classroomnav