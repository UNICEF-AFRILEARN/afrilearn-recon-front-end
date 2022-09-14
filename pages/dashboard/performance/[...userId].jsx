import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';

import  styles  from "../../../styles/classroom.module.css"
import ClassPerfomance from '../../../components/features/dashboard/student/extra/ClassPerfomance';
import { fetchStudentPerformanceInitiate } from '../../../redux/actions/dashboard';
import SubjectChart from '../../../components/features/dashboard/student/extra/SubjectChart';
import { fetchClassMembersInitiate, fetchClassDetailsInitiate, fetchClassPerformanceInitiate } from '../../../redux/actions/classes';



const Performance = () => {
  const { studentPerformance } = useSelector((state) => state.dashboard);
  const { classMembers, classDetails, classPerformance } = useSelector((state) => state.schoolClasses);
  const { user} = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const router = useRouter();
  const { query } = useRouter();
 

  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJmNGFkOGM5OWJjNjgwMDE2NjE2NTFkIiwicm9sZSI6IjYwMmYzY2UzOWIxNDZiMzIwMWMyZGMxZCIsImZ1bGxOYW1lIjoiSm9obiBkb2UifSwiaWF0IjoxNjYzMTUxNzI0LCJleHAiOjE2NjU3NDM3MjR9.MN1RXkpWvFF0Jjx_ZI6hT3bqXNyZHiAWOmc_f9Hm2nc'

  const userId = query.userId
  const courseId = user?.user?.enrolledCourses[0]?.courseId.id
  let classId = query.classId;
  //to make performance dynamic which use query for api call:
  // console.log("query from performance ===> ", query)
  // console.log("user from performance ===> ", user)
  // console.log("classMembers from performance ===> ", classMembers?.classMembers)
  // const { email } = user?.user
  console.log("classPerformance from studentPerformance ===>",   courseId)
  // console.log("email from performance =====>&", email)
  
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
    dispatch(fetchClassPerformanceInitiate(courseId, token))
     }, [])

  useEffect(() => {
    if(classId){
      dispatch(fetchClassDetailsInitiate(classId))
    }
  }, [classId])
  
  // useEffect(() => {
    //   if(userId){
      //     dispatch(fetchStudentPerformanceInitiate(userId, courseId, token))
      //   }
      //    }, [userId, courseId])
      
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
            {/* <div className={styles.titlehoder}>
                <h1>Performance Analysis: userid {userId}</h1>
                <h1>Query Performance Analysis: userid {query.userId}</h1>
                <h1>Performance Analysis: courseId {courseId}</h1>
                <h1>Performance Analysis: classId {classId}</h1>
            </div> */}
       <div className={styles.paddingbody}>
          <ClassPerfomance
             currentStudent={currentStudent}
             studentPerformance={studentPerformance}
             classPerformance={classPerformance}
            classDetails={classDetails}
          />
          <SubjectChart />
       </div>
    </div>
  )
}

export default Performance