import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';

import  styles  from "../../../styles/classroom.module.css"
// import  styles  from "../../styles/classroom.module.css"
import ClassPerfomance from '../../../components/features/dashboard/student/extra/ClassPerfomance';
import { fetchStudentPerformanceInitiate } from '../../../redux/actions/dashboard';
import SubjectChart from '../../../components/features/dashboard/student/extra/SubjectChart';



const Performance = () => {
  const { studentPerformance } = useSelector((state) => state.dashboard)
  const dispatch = useDispatch();
  const router = useRouter();
  const userId = router.query.user_id
  const courseId = router.query.course_id

  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJmNGFkOGM5OWJjNjgwMDE2NjE2NTFkIiwicm9sZSI6IjYwMmYzY2UzOWIxNDZiMzIwMWMyZGMxZCIsImZ1bGxOYW1lIjoiSm9obiBkb2UifSwiaWF0IjoxNjYwNjc5MDQ5LCJleHAiOjE2NjMyNzEwNDl9.t_ROAm1r1UQuSeCp8RfG2FUCv3PrZqoRc0pgcZfBb1k'


  console.log("studentPerformance =====>", studentPerformance)

  useEffect(() => {
    dispatch(fetchStudentPerformanceInitiate(userId, token, courseId))
  }, [fetchStudentPerformanceInitiate])
  
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
            <div className={styles.titlehoder}>
                <h1>Performance Analysis: userid {userId}</h1>
                <h1>Performance Analysis: courseId {courseId}</h1>
            </div>
       <div className={styles.paddingbody}>
          <ClassPerfomance />
          <SubjectChart />
       </div>
    </div>
  )
}

export default Performance