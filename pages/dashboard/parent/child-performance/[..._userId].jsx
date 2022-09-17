import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';

import  styles  from "../../../../styles/classroom.module.css"
import Childperformance from '../../parent/extra/chilperformance';
import { fetchStudentPerformanceInitiate } from '../../../../redux/actions/dashboard';
// import SubjectChart from '../../../components/features/dashboard/student/extra/SubjectChart';
import { fetchClassMembersInitiate, fetchClassDetailsInitiate, fetchClassPerformanceInitiate } from '../../../../redux/actions/classes';

import { fetchChildpastQuestionInitiate } from '../../../../redux/actions/parent';

const Performance = () => {
  const [userId, setUserId] = useState('');
  const [courseId, setCourseId] = useState('');
  const { studentPerformance } = useSelector((state) => state.dashboard);
  const { childPastQustionPerformance } = useSelector((state) => state.parentR);
  const { classMembers, classDetails, classPerformance } = useSelector((state) => state.schoolClasses);
  const { user} = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const router = useRouter();
  // const { query } = useRouter();
 

  let token = user.token

  // let {_userId} = router.query;
  // let userId;
  // const courseId = ""
  const {course_id} = router.query
  // let classId = query.classId;
  let classId = ""

  // console.log("userId from studentPerformance ===>",  userId  )
  console.log("studentPerformance from child-performance =====>&", studentPerformance)
  
  //Filter current student to show student details
  let currentStudent = [];
  const filterSTudent = () => {
    classMembers?.classMembers?.filter((student) => {
      if(student.userId.id === userId[0]){
        currentStudent.push(student)
      }
    })
  }
  
  filterSTudent()
  
  useEffect(() => {
    if(!router.isReady) return
    setUserId(router.query._userId[0])
    setCourseId(router.query.course_id)
    // userId = router.query?._userId[0]
  }, [router.isReady])

  useEffect(() => {
    dispatch(fetchClassPerformanceInitiate(courseId, token))
     }, [courseId])


  useEffect(() => {
    dispatch(fetchChildpastQuestionInitiate(courseId, token))
  }, [courseId])
  
  useEffect(() => {
          dispatch(fetchStudentPerformanceInitiate(userId, courseId, token))
         }, [userId, courseId])

      
  return (
    <div className={styles.maincotainer}>
    <div className={styles.videoheropage}>
            <div className={styles.subheadings}>
                <Image
            src="/assets/img/classavatar.svg"
            alt="teacher"
            width={200}
            height={200}
            />
            </div>
      </div>
          {/* <div className={styles.titlehoder}>
              <h1>Performance Analysis: userid {userId}</h1>
              <h1>Query Performance Analysis: userid {query.userId}</h1>
              <h1>Performance Analysis: courseId {courseId}</h1>
              <h1>Performance Analysis: classId {classId}</h1>
          </div> */}
     <div className={styles.paddingbody}>
          <Childperformance
          userId={userId}
          studentPerformance={studentPerformance}
          />
        {/* <ClassPerfomance
           currentStudent={currentStudent}
           studentPerformance={studentPerformance}
           classPerformance={classPerformance}
          classDetails={classDetails}
        /> */}
        {/* <SubjectChart /> */}
     </div>
  </div>
  )
}

export default Performance