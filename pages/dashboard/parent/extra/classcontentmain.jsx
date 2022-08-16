import React from 'react';

import styles from '../../../../styles/parentdashboard.module.css';
import Classcontentcard from './classcontentcard';
import { dataContentNav } from './classcontentmainData';

const Classcontentmain = ({myChildren}) => {
 console.log("myChildren from course content main =>", myChildren)
  return (
    <div className={styles.contentmainwrapper}>
        <div className={styles.contentinnernavwrapper}>
            <ul>
               {dataContentNav && dataContentNav.map((navData) => <li key={navData.id}>{navData.name}</li>) }
            </ul>    
        </div>
        <Classcontentcard />
    </div>
  )
}

export default Classcontentmain