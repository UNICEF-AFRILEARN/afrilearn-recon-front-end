import styles from "../tutor/tutorhelp.module.css"
import Link from "next/link";
import React, { useState } from 'react';
import { useRouter } from 'next/router'


const Studenthelp = () => {

    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const uploadToClient = (event) => {
      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];
        setImage(i);
        setCreateObjectURL(URL.createObjectURL(i));
      }
    };

    const router = useRouter()
    const signIn = (e) => {
        e.preventDefault();
          router.push("/dashboard/student");
      };

    return (
        <>
        <div className={`row ${styles.tutorhelpContainer}`}> 
        <div className={`col-md-5 ${styles.helpIntro}`}>
            <h4>How it works</h4>
            <div className="row">
<div className={`col-md-2 ${styles.questionIntro}`}></div>
<div className="col-md-10">
    <div><h5>Ask your doubt</h5></div>
    <div><p>Need any clarifications or answers to a question? Simply type your questions on the form</p></div>
</div>
            </div>
            <div className="row">
<div className={`col-md-2 ${styles.questionIntro1}`}></div>
<div className="col-md-10">
    <div><h5>Question review</h5></div>
    <div><p>Our expert tutors will review your questions and provide solutions to them instantly</p></div>
</div>
            </div>
            <div className="row">
<div className={`col-md-2 ${styles.questionIntro2}`}></div>
<div className="col-md-10">
    <div><h5>Prompt response</h5></div>
    <div><p>Response to your questions would be sent  to your mail ASAP</p></div>
</div>
            </div>
            <div className={styles.linkTutor}><Link passHref href="">View Response Inbox</Link></div>
        </div>
    <div className={`col-md-7 ${styles.helpForm}`}>
            <h5>Submit your Homework for Instant Solution 24/7</h5>
            <form>
                <div className="row">
                <label className="col-md-3"><strong>Email</strong>
                <input className={`col-md-6 ${styles.input1}`} type="text" name="email"/>
                </label>
                </div>
                <div className="row">
                <label className="col-md-3"><strong>Phone Number *</strong>
                <input className={`col-md-6 ${styles.input1}`} type="text" name="email" placeholder="input phone number" required/>
                </label>
                </div>
                <div className="row">
                <label className="col-md-3"><strong>Question*</strong>
                <textarea className={`col-md-6 ${styles.input1}`} type="text" name="email" placeholder="I need help"  required />
                </label>
                </div>
                <div className="row">
                <label className="col-md-5"><strong>Upload document (optional)</strong>
                <input className={`col-md-7 ${styles.input1upload}`}  onChange={uploadToClient}  type="file"  />
                <span placeholder=""></span>
                </label>
                </div>
                <div className="row">
                <label className="col-md-3"><strong>Select Class*</strong>
                <select className={`col-md-6 ${styles.inputclassSelect}`}   required>
                    <option >Input Class/Level</option>
                </select>
                </label>
                </div>
                <div className="row">
                <label className="col-md-3"> <strong>Select Subject *</strong>
                <input className={`col-md-6 ${styles.inputsubjectSelect}`} type="text" name="email" placeholder="select subject"/>
                </label>
                </div>
                </form>
                <div className={styles.buttonTutor}><button onClick={() => router.push('tutorhelp/response')}>SUBMIT QUESTION</button></div>
            </div>   
        </div>
    
</>
        )
}
export default Studenthelp;