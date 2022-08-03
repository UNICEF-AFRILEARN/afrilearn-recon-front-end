import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChildrenInitiate, signUpChildInitiate } from '../../../redux/actions/parent';
import styles from '../../../styles/parentdashboard.module.css';
import ClassContent from './extra/classContent';
import GeneratePerformance from './extra/generatePerformance';
import ParentHeader from './extra/header';
import Middlebar from './extra/middlebar';
import Proaddvert from './extra/proaddvert';


const Parent = () => {
  const user_login = useSelector(state => state.auth)
  const {children} = useSelector(state => state.parentR);
  const dispatch = useDispatch();

  const token  = user_login.user.token;
  const childrenCount  = children.children.length;
  console.log("parent dashboadt data =>", children.children, token)
  
  useEffect(() => {
    dispatch(fetchChildrenInitiate(token))
  }, [])


  return (
    <div className={styles.parentcomponentwrapper}>
           <div className={styles.innerparentwrapper}>
                <ParentHeader />
                <Middlebar childrenCount={childrenCount}/>
                <Proaddvert />
           </div>
           {/* <SearchChild /> */}
            <GeneratePerformance />
            {/* <ClassContent /> */}
    </div>
  )
}

export default Parent