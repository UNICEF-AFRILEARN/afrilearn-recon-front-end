import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentClassSubjectInitiate } from '../../../../redux/actions/studentClass';
import styles from '../../../../styles/parentdashboard.module.css';
import Classcontentcard from './classcontentcard';
import { dataContentNav } from './classcontentmainData';


const Classcontentmain = ({myChildren}) => {
  const dispatch = useDispatch();
  const { classSubjects } = useSelector((state) => state.studentClass);


  useEffect(() => {
    dispatch(fetchStudentClassSubjectInitiate())
  }, fetchStudentClassSubjectInitiate)
 console.log("classSubjects from course content main =>", classSubjects)
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