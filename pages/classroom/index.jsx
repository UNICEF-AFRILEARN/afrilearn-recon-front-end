import React from 'react';
import Image from 'next/image';
import  styles  from "../../styles/classroom.module.css"
import Classroomnav from '../../components/features/dashboard/student/extra/classroomnav';
// import Announcesment from './announcesment';

const Classroom = () => {
  return (
    <div className={styles.maincotainer}>
        <div className={styles.videoheropage}>
              <div className={styles.heroheader}>
                <Classroomnav />
              </div>
              <div className={styles.subheadings}>
                  <Image
              src="/assets/img/classavatar.svg"
              alt="teacher"
              width={200}
              height={200}
            />
              </div>
        </div>
  
    </div>
  )
}

export default Classroom