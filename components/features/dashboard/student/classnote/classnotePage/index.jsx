import React from 'react'
import styles1 from "../../../student/student.module.css";


const ClassnotePage = () => {
  const stuData=[{subject:'Geometrical Construction: Angles'},]
      return (
        <>
          <div
            id="dashboardFirstSection"
            className={`container-fluid relative ${styles1.dashboardFirstSection}`}
          >
            <div className="row">
              <div className="col-md-12">
                <h1 className={styles1.fontSize}>{stuData[0].subject}</h1>
              </div>
            </div>
            
          </div>
        </>
      );
    };


export default ClassnotePage