import Image from "next/image";
import SubHeading from "./subHeading";
import styles from "./../../student/student.module.css";
// import SubjectModal from "./extra/subjectModal";

const Subjects = () => {
  return (
    <>

     <div className='container'>
              <div className= {`row ${styles.mySubjecttt}`}>
      <div className={`col-md-6 ${styles.mySubjectt}`}>
        <button>
        <Image alt={"design image"} src={'/assets/img/features/dashboard/student/Plant Growing.png'} width={70} height={70}/>
                  <p>Agricultural Science</p>
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
export default Subjects;
