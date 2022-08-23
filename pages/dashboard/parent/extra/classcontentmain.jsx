import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentClassSubjectInitiate } from '../../../../redux/actions/studentClass';
import styles from '../../../../styles/parentdashboard.module.css';
import Classcontentcard from './classcontentcard';
import { dataContentNav } from './classcontentmainData';


const Classcontentmain = ({myChildren, course, classId}) => {
  const [contentId, setContentId] = useState('');

  const dispatch = useDispatch();

  const getContentIds = (id) =>{
    setContentId(id)
    console.log("contentId from coursecontent==", contentId)
  }



  let course_sorted = course?.course?.relatedSubjects

  course_sorted?.map((course_sorted) => console.log("course_sorted ==>", course_sorted.mainSubjectId.name))
 console.log("course from course content main =>", course_sorted)
  return (
    <div className={styles.contentmainwrapper}>
        <div className={styles.contentinnernavwrapper}>
            <ul >
               {course_sorted && course_sorted?.map((course_sorted) => <li key={course_sorted.mainSubjectId.id} onClick={() => getContentIds(course_sorted.mainSubjectId.id)} >{course_sorted.mainSubjectId.name}</li>) }
            </ul>    
        </div>
        <Classcontentcard 
        contentId={contentId} 
        course_sorted={course_sorted}
        classId={classId}
        />
    </div>
  )
}

export default Classcontentmain