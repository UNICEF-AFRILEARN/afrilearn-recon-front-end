import styles from "../../school/profile.module.css";
import Image from "next/image";
import Link from "next/link";


const Schoolprofile = () => {
    const schoolprofile  ={
        name: "Larin Comprehensive School",
        email: "Larinschool@gmail.com",
        location:"Lagos State, Nigeria",
    }
const schooldata ={
    phoneNum : "08111111111",
    satte: "Lagos",
    city:"ikeja",
    role:"School"
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
                <div className={styles.input1}><Image src="/assets/img/school/Location.svg"width={"18px"} height={"18px"} className= {`col-md-3 ${styles.avatarCoin}`} />{schoolprofile.location}</div>
                <div className={styles.input2}>  <Image src="/assets/img/school/Edit.svg"width={"18px"} height={"18px"}  /><Link passHref href="">Edit Profile</Link></div>
           </div>
        </div>
        </div>
        <div className={`row ${styles.personalSection}`}>
       <div className="col-md-3"><h5>Personal Details</h5></div>
       <div className={`col-md-4 ${styles.Image}`}></div>
        </div>
    
        <div className={styles.dataSection}>
            <div className={`row  ${styles.datavalues}`}>
                <div className="col-md-3">
                    <div className="row">
                    <div className={`col-md-6 ${styles.number}`} >Phone Number:</div>
                <div className={`col-md-3 ${styles.value}`}>{schooldata.phoneNum}</div>
                    </div>
                </div>
                <div className="col-md-5">  
                <div className={`row ${styles.role}`}>
                <div className={`col-md-3 ${styles.number}`}>Role:</div>
                   <div className={`col-md-3 ${styles.rolevalue}`}>{schooldata.role}</div>
                </div>
                   
                 </div>
            </div>
            <div className={`row  ${styles.datavalues}`}>
                <div className={`col-md-1 ${styles.number}`}>State:</div>
                <div className={`col-md-2 ${styles.value}`}>{schooldata.satte}</div>
            </div>
            <div className={`row  ${styles.datavalues}`}>
                <div className={`col-md-1 ${styles.number}`}>City:</div>
                <div className={`col-md-2 ${styles.value}`}>{schooldata.city}</div>
            </div>
            <div className={`row ${styles.status}`} >
         <div className="col-md-3">Class(es)</div>
          <div className={`col-md-3 ${styles.mainstatus}`} >Status</div>
        </div>
        <div className={`row  ${styles.datavalues}`}>
                <div className={`col-md-3 ${styles.number}`}>Junior Secondary School 1 (JSS1)</div>
            <button className={`col-md-3 ${styles.valuebutton}`}>Subscribed</button>
            </div>
            <div className={`row ${styles.referral}`}>Referral</div>
            <div className={styles.refferalwords}>Copy and share your referral code with friends and stand a chance to have access to free study materials</div>
        </div>
     <div className={styles.profilelink}>
            <input  placeholder="blzdblugzblujhbluybgfdliu"  className={styles.copylink} />
            <button className={styles.linkbutton}>
              COPY LINK
            </button>
     </div>
     </div>
     
    </>
    )
};

export default Schoolprofile;