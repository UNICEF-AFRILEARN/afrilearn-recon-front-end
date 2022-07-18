import { FC } from 'react';
import styles from './student.module.css';
import SubHeading from './extra/subHeading';
import Image from 'next/image';
//import Modal from '././Popup/popup.js' ;

const Dashboard: FC = () => {
  return (
    <>   
      <div id="dashboardFirstSection" className={`container-fluid relative ${styles.dashboardFirstSection}`}>
        <div className="row">
          <div className="col-md-12">
            <h1>PRIMARY-ONE</h1>
          </div>
        </div>
        <div className={`row ${styles.push2}`}>
          <div className="col-md-12">
            <h2>Welcome Emmanuel!</h2>
            <p>Explore the fun in learning💃</p>
          </div>
        </div>
        <div className={`row ${styles.push2}`}></div>
        <div className={`row ${styles.push2} ${styles.push3}`}>
          <div className="col-md-12">
            <a href="#subjects">My Subjects</a> &nbsp;|&nbsp;{" "}
            <a href="#pastQuestions">Past Questions</a> &nbsp;|&nbsp;{" "}
            <a href="#resumePlaying">Resume Watching</a> &nbsp;|&nbsp;{" "}
            <a href="#topTen">Top Ten Video</a> &nbsp;|&nbsp;{" "}
            <a href="#performance">Performance Summary</a> &nbsp;|&nbsp;{" "}
            <a href="#classroom">Classroom</a> &nbsp;|&nbsp;{" "}
            <a href="#favourite">My Favourite</a> &nbsp;|&nbsp;{" "}
            <a href="#recommendations">Recommendations</a>
            &nbsp;|&nbsp; <a href="#recentActivities">Recent Activities</a>
          </div>
        </div>
      </div>
      <SubHeading title='My Subjects'/>
      <div className='container'>
          <div className='row'>
              <div className='col-md-2'>
                <span>
                  <Image src={'/assets/img/features/dashboard/student/Plant Growing.png'} width={70} height={70}/>
                  <p>Agricultural Science</p>
                </span>
              </div>
          </div>
      </div>
    </>
  )
}

export default Dashboard
