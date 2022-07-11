import styles from "../../school/profile.module.css";
import Image from "next/image";

const Schoolprofile = () => {
    const schoolprofile  ={
        name: "Larin Comprehensive School",
        email: "Larinschool@gmail.com",
        location:"Lagos State, Nigeria"
    }

    return (
    <>
     <div className={styles.heroSchool}>
        <div className={styles.videoheropage}></div>
        <div className={`row ${styles.heroinputsection}`} > 
        <Image src="/assets/img/school/person_2\ 1.svg" width={"174px"} height={"174px"} className= {`col-md-3 ${styles.avatarCoin}`} />
        <div className={`col-md-7 ${styles.heroInputs}`}>
            <h4> {schoolprofile.name}</h4>
            <div className={styles.inputdetails}>
                <div className=''>{schoolprofile.email}</div>
                <div className={styles.input1}>{schoolprofile.location}</div>
                <div className={styles.input1}>Edit Profile</div>
           </div>
        </div>
        </div>
        <div className="row">
<div><h4>Personal Details</h4></div>
<div><Image src= "" width={""} height={""} /></div>
        </div>
     </div>
     
    </>
    )
};

export default Schoolprofile;