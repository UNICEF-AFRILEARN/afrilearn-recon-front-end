import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchoolProfileInitiate } from '../../../../../redux/actions/school'
import styles from "../../school/schoolpeople.module.css";
import { BsPersonCircle } from 'react-icons/bs'
import Spinner from '../../../../widgets/spinner';

const MiddleNavbar = () => {
  const { schoolProfile } = useSelector((state) => state.school);
  const { user, registerUser, roles } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const schoolId = user.user?.schoolId.id || registerUser.user?.schoolId.id


  useEffect(() => {
    dispatch(fetchSchoolProfileInitiate(schoolId))
  },[schoolId])
  return (
    
    <div className={styles.middlenavmainwrapper}>
        <div className={styles.circleinnerwrapper}>
           {/* wrapper for icon */}
        </div>
        {schoolProfile?
          <>
            <div className={styles.middleinnerwrapper}>
                <h4> Teacher(s): </h4>
                <h3>0{schoolProfile?.numOfTeachers}</h3>
          </div>
          <div className={styles.middleinnerwrapper}>
                <h4> Student(s): </h4>
                <h3>0{schoolProfile?.numOfStudents}</h3>
          </div>
          </> : <div className={styles.loaderstyling}>
            <Spinner  />
            </div>
        }
    </div>

  )
}

export default MiddleNavbar