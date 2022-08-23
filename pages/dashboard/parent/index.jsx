import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRoles } from '../../../redux/actions/auth';
import { fetchChildrenInitiate, signUpChildInitiate } from '../../../redux/actions/parent';
import styles from '../../../styles/parentdashboard.module.css';
import ClassContent from './extra/classContent';
import GeneratePerformance from './extra/generatePerformance';
import ParentHeader from './extra/header';
import Middlebar from './extra/middlebar';
import Proaddvert from './extra/proaddvert';


const Parent = ({test_body}) => {
  const dispatch = useDispatch();
  const user_login = useSelector(state => state.auth)
  const coursesCollected = useSelector((state) => state.auth)
  const {children} = useSelector(state => state.parentR);

  const courseContext = coursesCollected.roles.courses;
  const token  = user_login.user.token;
  const childrenCount  = children.children?.length;
  let childrenCourseCount = 0;
  const myChildren = children.children;
  const mappedCoursesCount = myChildren?.map((children) =>  
    children.enrolledCourses.length)

    childrenCourseCount = mappedCoursesCount?.reduce((a,b) => a+b, 0)
  
    console.log("test_body", test_body)
  useEffect(() => {
    dispatch(fetchChildrenInitiate(token))
  }, [])

useEffect(() => {
  dispatch(fetchRoles())
}, [])

  return (
    <div className={styles.parentcomponentwrapper}>
           <div className={styles.innerparentwrapper}>
                <ParentHeader />
                <Middlebar 
                childrenCount={childrenCount} 
                childrenCourseCount={childrenCourseCount}
                />
                <Proaddvert />
           </div>
           {/* <SearchChild /> */}
            <GeneratePerformance 
            children={children.children} 
            courseContext={courseContext}
            />
            <ClassContent
             courseContext={courseContext}
             children={children.children}
            />
    </div>
  )
}

export default Parent

export function getServerSideProps({req, res }){
  return { props: {test_body: req.body || ""}}
}