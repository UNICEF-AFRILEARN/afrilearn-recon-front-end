import React from 'react';
import styles from '../../../../styles/parentdashboard.module.css';


const Classcontentcard = () => {
  return (
    <div className={styles.innercontentwrapper}>
    <div className={styles.contentquestionwrapper}>
        <h4>Geometrical Construction (1):  Lines</h4>
    </div>
     <ul>
         <li>Class note</li>
         <li>Practice quiz</li>
     </ul>   
</div>
  )
}

export default Classcontentcard