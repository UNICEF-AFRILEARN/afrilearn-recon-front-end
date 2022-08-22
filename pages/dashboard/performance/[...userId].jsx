import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';

import  styles  from "../../../styles/classroom.module.css"
// import  styles  from "../../styles/classroom.module.css"
import ClassPerfomance from '../../../components/features/dashboard/student/extra/ClassPerfomance';
import { fetchStudentPerformanceInitiate } from '../../../redux/actions/dashboard';
import SubjectChart from '../../../components/features/dashboard/student/extra/SubjectChart';
import { fetchClassMembersInitiate } from '../../../redux/actions/classes';



const Performance = () => {
  const { studentPerformance } = useSelector((state) => state.dashboard);
  const { classMembers } = useSelector((state) => state.schoolClasses);
  const { user} = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const router = useRouter();
  const { query } = useRouter();
 

  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJmNGFkOGM5OWJjNjgwMDE2NjE2NTFkIiwicm9sZSI6IjYwMmYzY2UzOWIxNDZiMzIwMWMyZGMxZCIsImZ1bGxOYW1lIjoiSm9obiBkb2UifSwiaWF0IjoxNjYxMTc3NjgyLCJleHAiOjE2NjM3Njk2ODJ9.J5eGjZiTHSeSU1Dwt7dVhIxHESXcxd2juGIDnrPTp8g'

  const userId = query.userId
  const courseId = "5fff72b3de0bdb47f826feaf"
  let classId = query.classId;
  //to make performance dynamic which use query for api call:
  // console.log("query from performance ===> ", query)
  // console.log("user from performance ===> ", user)
  console.log("classMembers from performance ===> ", classMembers.classMembers)

  console.log("studentPerformance =====>", studentPerformance)

  //Filter current student
  let currentStudent = [];
  const filterSTudent = () => {
    classMembers.classMembers.filter((student) => {
     console.log("student from func", student.id)
    })
  }

  filterSTudent()

  useEffect(() => {
    dispatch(fetchStudentPerformanceInitiate(userId, courseId, token))
  }, [userId])
  
  useEffect(() => {
    dispatch(fetchClassMembersInitiate(classId))
  },[classId]);


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
                <h1>Query Performance Analysis: userid {query.userId}</h1>
                <h1>Performance Analysis: courseId {courseId}</h1>
                <h1>Performance Analysis: classId {classId}</h1>
            </div>
       <div className={styles.paddingbody}>
          <ClassPerfomance />
          <SubjectChart />
       </div>
    </div>
  )
}

export default Performance