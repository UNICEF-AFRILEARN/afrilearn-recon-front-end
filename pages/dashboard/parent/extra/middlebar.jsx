import React from 'react';
import Image from 'next/image';
import styles from '../../../../styles/parentdashboard.module.css';

const Middlebar = ({childrenCount, childrenCourseCount}) => {
  return (
    <div className={styles.avatarwrapper}>
        <Image
            src="/assets/img/parentavatar.svg"
            width={200}
            height={200}
        />
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
  )
}

export default Middlebar