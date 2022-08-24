import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "../../school/profile.module.css";
import Image from "next/image";
import Link from "next/link";


const Schoolprofile = () => {
    const { schoolProfile, classMembers } = useSelector((state) => state.school);
    const { user, registerUser, roles } = useSelector((state) => state.auth);
    
    let currentUser = user || registerUser
    const schoolprofile  ={
        name: "Larin Comprehensive School",
        email: "Larinschool@gmail.com",
        location:"Lagos State, Nigeria",
    }
    console.log("schoolProfile from main schoolProfile ====>", schoolProfile)
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
            <h4> {schoolProfile.profile.name}</h4>
            <div className={styles.inputdetails}>
                <div className=''>{schoolProfile.profile.email}</div>
                <div className={styles.input1}><Image src="/assets/img/school/Location.svg"width={"18px"} height={"18px"} className= {`col-md-3 ${styles.avatarCoin}`} />{schoolProfile.profile.location? schoolProfile.profile.location : "No Location Added"}</div>
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
                <div className={`col-md-3 ${styles.value}`}>{currentUser.user.phoneNumber}</div>
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
                <div className={`col-md-2 ${styles.value}`}>{currentUser.state? currentUser.state : "No state added"}</div>
            </div>
            <div className={`row  ${styles.datavalues}`}>
                <div className={`col-md-1 ${styles.number}`}>City:</div>
                <div className={`col-md-2 ${styles.value}`}>{currentUser.state? currentUser.state : "No city added"}</div>
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