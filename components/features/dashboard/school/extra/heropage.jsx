// import styles from "../../school/dashbord.module.css"
// import Image from "next/image";
// import Link from "next/link";

// const Schoolheropage = () => {
    
//     const school  ={
//         name: "Larin Comprehensive School",
//         teachers: "15",
//         pupils:"235"
//     }
//     return (
//     <>
//         <div className={styles.heroSchool}>
//         <div className={styles.videoheropage}></div>
//         <div className={`row ${styles.heroinputsection}`} > 
//         <Image src="/assets/img/school/person_2\ 1.svg" width={"174px"} height={"174px"} className= {`col-md-3 ${styles.avatarCoin}`} />
//         <div className={`col-md-7 ${styles.heroInputs}`}>
//             <h4> {school.name}</h4>
//             <div className={styles.inputdetails}>  <h5>Total number of teachers : {school.teachers}</h5>
//            <h5>Total number of students : {school.pupils}</h5></div>
//         </div>
//         </div>
//      </div>   
//     </>
//     )
// };

import styles from "../../school/dashbord.module.css"
import Image from "next/image";
import Link from "next/link";

const Schoolheropage = () => {
    return (
    <>
    <div>
        <div className={styles.heroSchool}>
        <div className={styles.videoheropage}>  
     <Image src="/assets/img/school/person_2\ 1.svg" width={"174px"} height={"174px"}   className={styles.avatarCoin} />
     </div>
      </div>  
    </div>
    </>
    )
};

export default Schoolheropage;