import React from 'react'
import Image from 'next/image';

import  styles  from "../../../styles/classroom.module.css"
// import  styles  from "../../styles/classroom.module.css"
import ClassPerfomance from '../../../components/features/dashboard/student/extra/ClassPerfomance';



const Performance = () => {
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
       <div className={styles.paddingbody}>
          <ClassPerfomance />
       </div>
    </div>
  )
}

export default Performance