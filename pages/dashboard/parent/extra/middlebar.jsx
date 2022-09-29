import React from "react";
import Image from "next/image";
import styles from "../../../../styles/parentdashboard.module.css";
import { ProfilePicture } from "../../../../components/features/dashboard/student/studentProfile";
import { useSelector } from "react-redux";

const Middlebar = ({ childrenCount, childrenCourseCount }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className={styles.avatarwrapper}>
      <ProfilePicture user={user} />
      <div className={styles.counterwrapper}>
        <div className={styles.childrencounterwrapper}>
          <h4>Number of Children </h4>
          <h5>0{childrenCount}</h5>
        </div>
        <div className={styles.classesncounterwrapper}>
          <h4>Number of Classes Registered</h4>
          <h5>0{childrenCourseCount}</h5>
        </div>
      </div>
    </div>
  );
};

export default Middlebar;
