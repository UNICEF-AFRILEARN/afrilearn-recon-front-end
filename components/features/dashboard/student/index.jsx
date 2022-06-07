import styles from './student.module.css';
import SubHeading from './extra/subHeading';
import Image from 'next/image';
import Link from "next/link";

const Dashboard = () => {
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
              <div className= {`row ${styles.mySubjecttt}`}>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Plant Growing.png'} width={70} height={70}/>
                  <p>Agricultural Science</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Research Virus.png'} width={70} height={70}/>
                  <p>Biology</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Business.png'} width={70} height={70}/>
                  <p>Chemistry</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Bible.png'} width={70} height={70}/>
                  <p>Christian religion</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Product.png'} width={70} height={70}/>
                  <p>Commerce</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Computerr.png'} width={70} height={70}/>
                  <p>Computer Science</p>
                </div>
              </div>
              <div className={`row ${styles.mySubjecttt}`}>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/_Group_.png'} width={70} height={70}/>
                  <p>Civic Education</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Marketing Data.png'} width={70} height={70}/>
                  <p>Data Science</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Consumer Economic.png'} width={70} height={70}/>
                  <p>CEconomic</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Alphabetic Blocks.png'} width={70} height={70}/>
                  <p>English Language</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/accounting.png'} width={70} height={70}/>
                  <p>Financial accounting</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Table Globe.png'} width={70} height={70}/>
                  <p>Geography</p>
                </div>
              </div> 
              <div className={`row ${styles.mySubjecttt}`}>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Government Building.png'} width={70} height={70}/>
                  <p>Government</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Bookk.png'} width={70} height={70}/>
                  <p>Literature in English</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/calculator 8.png'} width={70} height={70}/>
                  <p>Mathematics</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Einstein Formula.png'} width={70} height={70}/>
                  <p>English Language</p>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                  <Image alt={"design image"} src={'/assets/img/features/dashboard/student/accounting.png'} width={70} height={70}/>
                  <p>Financial accounting</p>
                </div>
              </div> 
          </div>
          <div className='container'>
            <div className='row'>
              <div className={`col-md-6 ${styles.mySolutionBox}`}>
                <div className='row'>
                <div className={`col-md-7 ${styles.LinkBox}`}>
              <h5>Submit your Assignment for Instant Solutions 24/7</h5>
            <div className={`${styles.LinkBoxxs}`}> <Link passHref href="/">GET SOLUTION NOW</Link></div> 
              </div>
              <div className={`col-md-5 ${styles.LinkBox2}`}></div>
                </div>
              </div>
        <div className={`col-md-5 ${styles.mySolutionBox2}`}>
          <div className={`row ${styles.mySolutionBox22}`}>
<div className={` ${styles.mySolutionBoxCoin}`}> 
<Image alt={"design image"} src={'/assets/img/features/dashboard/student/Group.png'} width={"20.36 px"} height={"20.36 px"}/> 100
</div>
<div className={` ${styles.mySolutionBoxSword}`}> 
<p>Battle with others to win</p>
</div>
<div className={` ${styles.mySolutionBoxWord}`}><p>J1 Combat</p> <Image alt={"design image"} src={'/assets/img/features/dashboard/student/sword.png'} width={"31.13px"} height={"31.13px px"}/></div>
<div className={` ${styles.mySolutionBoxMin}`}><p>08 Days 01:58:27 minutes</p></div>
          </div>
              </div>
            </div>
            
          </div>
    </>
  )
}

export default Dashboard
