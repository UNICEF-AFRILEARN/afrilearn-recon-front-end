import WhyAfrilearn from "../../../../../pages/dashboard/student/studentProfile/studentProfileEdit/profileEdit";
import styles from "../../school/dashbord.module.css"
import Image from "next/image";
import Link from "next/link";

const Schooledit = () => {
    return (
       <>
      {/* <div className={styles.videoheropage}></div> */}
        {/* <div className={`row ${styles.heroinputsection}`} > 
        <Image src="/assets/img/school/person_2\ 1.svg" width={"174px"} height={"174px"} className= {`col-md-3 ${styles.avatarCoin}`} />
       
        </div> */}
       <WhyAfrilearn className={styles.schooledit}/>
       </>
    )
}
export default Schooledit;