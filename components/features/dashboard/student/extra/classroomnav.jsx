import Link from 'next/link';
import React from 'react';
import styles from "../../../../../styles/classroom.module.css";

const Classroomnav = () => {
  return (
    <div>
        <nav className={styles.navbar}>
          <ul>
            <Link href="/announcesment"><li>Announcements</li></Link>
            
            <li>Materials</li>
            <li>Classwork</li>
            <li>People</li>
            <li>Class Performance</li>
          </ul>
        </nav>
    </div>
  )
}

export default Classroomnav