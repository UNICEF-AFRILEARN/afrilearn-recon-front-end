import React, { useState} from 'react';

import styles from '../../../../styles/teacher.module.css';
import Examsholder from '../extra/examsholder';
import Middletab from '../extra/middletab';
import Searchbar from '../extra/searchbar';
import Setupxamssidebar from '../extra/setupxamssidebar';

const Examinations = () => {
  const [showTab, setShowTab] = useState(false);

  const toggleTaggleTab = () => {
     setShowTab(!showTab)
  }

  return (
    <div className={styles.examinationwrapper}>
        <div className={styles.examsheaderwrapper}>

        </div>
        <Middletab toggleTaggleTab ={toggleTaggleTab} showTab={showTab} />
        <Searchbar  />
        { showTab === false &&  <Examsholder />}
         {showTab === true &&  <Setupxamssidebar /> }
    </div>
  )
}

export default Examinations