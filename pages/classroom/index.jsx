import React from "react";
import Image from "next/image";
import styles from "../../styles/classroom.module.css";
import Classroomnav from "../../components/features/dashboard/student/extra/classroomnav";
// import Announcesment from './announcesment';

const Classroom = () => {
  return (
    <div className={styles.maincotainer} >
      <div className={styles.videoheropage}></div>
      <div style={{  }}>
        <div className={styles.heroheader}>
          <Classroomnav />
        </div>
      </div>
    </div>
  );
};

export default Classroom;
