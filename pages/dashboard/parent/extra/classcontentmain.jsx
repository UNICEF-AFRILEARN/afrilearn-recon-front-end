import React from 'react';

import styles from '../../../../styles/parentdashboard.module.css';
import { dataContentNav } from './classcontentmainData';

const Classcontentmain = () => {
  return (
    <div className={styles.contentmainwrapper}>
        <div className={styles.contentinnernavwrapper}>
            <ul>
               {dataContentNav && dataContentNav.map((navData) => <li key={navData.id}>{navData.name}</li>) }
            </ul>    
        </div>
        <div className={styles.innercontentwrapper}>
            <div className={styles.contentquestionwrapper}>
                <h4>Geometrical Construction (1):  Lines</h4>
            </div>
             <ul>
                 <li>Class note</li>
                 <li>Practice quiz</li>
             </ul>   
        </div>
    </div>
  )
}

export default Classcontentmain