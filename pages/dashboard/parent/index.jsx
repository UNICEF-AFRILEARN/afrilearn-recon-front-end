import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signUpChildInitiate } from '../../../redux/actions/parent';
import styles from '../../../styles/parentdashboard.module.css';
import ClassContent from './extra/classContent';
import GeneratePerformance from './extra/generatePerformance';
import ParentHeader from './extra/header';
import Middlebar from './extra/middlebar';
import Proaddvert from './extra/proaddvert';


const Parent = () => {
  const parentData = useSelector(state => state.parentR);
  const dispatch = useDispatch();

  
  return (
    <div className={styles.parentcomponentwrapper}>
           <div className={styles.innerparentwrapper}>
                <ParentHeader />
                <Middlebar />
                <Proaddvert />
           </div>
           {/* <SearchChild /> */}
            <GeneratePerformance />
            {/* <ClassContent /> */}
    </div>
  )
}

export default Parent