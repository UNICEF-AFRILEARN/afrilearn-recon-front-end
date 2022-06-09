import Image from "next/image";
import SubHeading from "./subHeading";
import styles from "./../../student/student.module.css";
import {useState} from "react"

const Subjects = () => {
  const [openModal, setOpenModal] = useState(false);



  return (
    <>
   <SubHeading  title="My Subject" />
     <div className='container'>
              <div className= {`row ${styles.mySubjecttt}`}>
      <div className={`col-md-6 ${styles.mySubjectt}`}>
        <button className="modalButton" onClick={() => {setOpenModal(true)}}  >
        <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Plant Growing.png'} width={70} height={70}/>
                  <p>Agricultural Science</p>
                  { openModal && <SubjectModal />}
        </button>
      
      </div>
      <div className={`col-md-2 ${styles.mySubjectt}`}>
          <button>
          <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Research Virus.png'} width={70} height={70}/>
                  <p>Biology</p>
          </button>
         
                </div>
     <div className={`col-md-2 ${styles.mySubjectt}`}>
         <button>
         <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Business.png'} width={70} height={70}/>
     <p>Chemistry</p>
         </button>
                </div>
   <div className={`col-md-2 ${styles.mySubjectt}`}>
       <button>
       <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Bible.png'} width={70} height={70}/>
     <p>Christian religion</p>
       </button>
                </div> 
       <div className={`col-md-2 ${styles.mySubjectt}`}>
                    <button>
                    <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Product.png'} width={70} height={70}/>
                  <p>Commerce</p>
                    </button>
                </div>   
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                    <button>
                    <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Computerr.png'} width={70} height={70}/>
                  <p>Computer Science</p>
                    </button>
                 
                </div> 
                </div> 
             <div className={`row ${styles.mySubjecttt}`}>
             <div className={`col-md-2 ${styles.mySubjectt}`}>
                 <button>
                 <Image alt={"design image"} src={'/assets/img/features/dashboard/student/_Group_.png'} width={70} height={70}/>
                  <p>Civic Education</p>
                 </button>  
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                    <button> <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Marketing Data.png'} width={70} height={70}/>
                  <p>Data Science</p></button> 
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                    <button>
                    <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Consumer Economic.png'} width={70} height={70}/>
                  <p>Economic</p>
                    </button>     
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                    <button>
                    <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Alphabetic Blocks.png'} width={70} height={70}/>
                  <p>English Language</p>
                    </button>
                  
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                    <button>
                    <Image alt={"design image"} src={'/assets/img/features/dashboard/student/accounting.png'} width={70} height={70}/>
                  <p>Financial accounting</p>
                    </button>          
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                    <button>
                    <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Table Globe.png'} width={70} height={70}/>
                  <p>Geography</p>
                    </button>
               
                </div>
                </div>
                <div className={`row ${styles.mySubjecttt}`}>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                    <button>
                    <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Government Building.png'} width={70} height={70}/>
                  <p>Government</p>
                    </button>
                  
                </div> 
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                    <button>
                    <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Bookk.png'} width={70} height={70}/>
                  <p>Literature in English</p>
                    </button>
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                    <button>
                    <Image alt={"design image"} src={'/assets/img/features/dashboard/student/calculator 8.png'} width={70} height={70}/>
                  <p>Mathematics</p>
                    </button>
                 
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                    <button>
                    <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Einstein Formula.png'} width={70} height={70}/>
                  <p>Physics</p>
                    </button>
                  
                </div>
                <div className={`col-md-2 ${styles.mySubjectt}`}>
                    <button>
                    <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Vector1.png'} width={70} height={70}/>
                  <p>Further Math</p>
                    </button>
                  
                </div>
                    </div>
                </div>
              
    </>
  );
};
const SubjectModal =() => {
  const data = {
    subject: ["SSS-ONE"],
    title: "Basic Technology",
    description:"Basic Technology is a very important subject in todays curriculum for students especially at the junior secondary  level as knowledge impacted prepares them for the various experiences at the senior level not withstanding their carrier paths.",
    class:"Senior Sceondary School One",
    lessons: "116 Video Lessons",
   students : "13,000 Registered Students"
  };

  return (
    <> 
<div className="container" >
  <div className={`row ${styles.modalHero}`}>
  {data?.subject.map((item) => { return <h1 key={item}>{item}</h1> })}
    <div className="modalSec">
  <h5 className="">{data?.title}</h5>
<p>Explore the fun in learning</p>
<h6><Image alt={"design image"} src={'/assets/img/features/dashboard/student/crown.png'} width={"23.04 px"} height={"18.48px"}/>Activate Afrilearn Pro</h6>
          </div>
  </div>
<div className={`row ${styles.modalSecond}`}>
<div className="col-md-7">
<h6 className="">{data?.title}</h6>
  <p>{data?.description}</p>
</div>
<div className="col-md-5">
   <p>Class : <span>{data?.class}</span></p>
   <p>Lessons : <span>{data?.lessons}</span></p>
   <p>Students : <span>{data?.students}</span></p>
</div>
</div>
<div className={`row ${styles.modalThird}`}>
<div className="col-md-2">
<Image alt={"design image"} src={'/assets/img/features/dashboard/student/user 3.png'} width={"72.4px"} height={"72.4px"}/>
</div>
<div className="col-md-8">
  <h4>Class Notes</h4>
  <p>Learn with curriculum specific class notes and practice quizess</p>
</div>
<div className="col-md-2"> <h6>FREE</h6></div>
</div>
<div className={`row ${styles.modalThird}`}>
<div className="col-md-2">
<Image alt={"design image"} src={'/assets/img/features/dashboard/student/GroupVideo.png'} width={"72.4px"} height={"72.4px"}/>
</div>
<div className="col-md-8">
  <h4>Video Lessons</h4>
  <p>Learn with curriculum specific class notes and practice quizess</p>
</div>
</div>
</div>

    </>
    );
  };

export default Subjects;
