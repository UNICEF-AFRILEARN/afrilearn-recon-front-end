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

  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJlNzc1OGUxN2ZlNTYwMDE2YjI5Yjc0Iiwicm9sZSI6IjYwNmVkODJlNzBmNDBlMThlMDI5MTY1ZSIsImZ1bGxOYW1lIjoiSm9obiBkb2UifSwiaWF0IjoxNjYwNTczMzE4LCJleHAiOjE2NjMxNjUzMTh9.dUEWWMoI56TJHovHX-NmaXtc-YJSg36KEYIzfzkvqNk"


  console.log("studentPerformance =====>", studentPerformance)

  useEffect(() => {
    dispatch(fetchStudentPerformanceInitiate(userId, token))
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
            </div>
       <div className={styles.paddingbody}>
          <ClassPerfomance />
          <SubjectChart />
       </div>
    </div>
  )
}

export default Performance