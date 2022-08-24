import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchoolProfileInitiate } from '../../../../../redux/actions/school'
import styles from "../../school/schoolpeople.module.css";
import { BsPersonCircle } from 'react-icons/bs'

const MiddleNavbar = () => {
  const { schoolProfile } = useSelector((state) => state.school);
  const { user, registerUser, roles } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log("schoolProfile from middlenaV=>", schoolProfile);
  const schoolId = user.user?.schoolId.id || registerUser.user?.schoolId.id
  console.log("schoolId from middlenaV=>", schoolId);

  useEffect(() => {
    dispatch(fetchSchoolProfileInitiate(schoolId))
  },[schoolId])
  return (
    
    <div className={styles.middlenavmainwrapper}>
        <div className={styles.circleinnerwrapper}>
           
        </div>
        <div className={styles.middleinnerwrapper}>
            <h4> Teacher</h4>
            <h3>0{schoolProfile?.numOfTeachers}</h3>
        </div>
        <div className={styles.middleinnerwrapper}>
            <h4> Students</h4>
            <h3>0{schoolProfile?.numOfStudents}</h3>
        </div>
    </div>

  )
}

export default MiddleNavbar