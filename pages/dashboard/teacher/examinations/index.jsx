import React, { useState} from 'react';
import { Heropage, HeropageWelcome } from '../../../../components/features/dashboard/teacher';
import { getCookie } from 'cookies-next';
import styles from '../../../../styles/teacher.module.css';
import Examsholder from '../extra/examsholder';
import Middletab from '../extra/middletab';
import Searchbar from '../extra/searchbar';
import SetupExams from '../extra/setupexams';
import Setupxamssidebar from '../extra/setupxamssidebar';

const Examinations = () => {
  const [showTab, setShowTab] = useState(false);
  // getCookie(user); 
  const toggleTaggleTab = () => {
     setShowTab(!showTab)
  }

  // console.log("cookies", getCookie(user))

  return (
    <div className={styles.examinationwrapper}>
      <Heropage />
      {/* <HeropageWelcome /> */}
        <div className={styles.examsheaderwrapper}>

        </div>
        <Middletab toggleTaggleTab ={toggleTaggleTab} showTab={showTab} />
        <Searchbar  />
        { showTab == true && <SetupExams />}
        { showTab === false &&  <Examsholder />}
         {/* {showTab === true &&  <Setupxamssidebar /> } */}
    </div>
  )
}

export default Examinations