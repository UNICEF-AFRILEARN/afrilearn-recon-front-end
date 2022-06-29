import styles from "../tutor/tutorhelp.module.css"
import Link from "next/link";


const Studenthelp = () => {
    return (
        <>
        <div className={`row ${styles.tutorhelpContainer}`}> 
        <div className={`col-md-5 ${styles.helpIntro}`}>
            <h4>How it works</h4>
            <div className="row">
<div className="col-md-2"></div>
<div className="col-md-10">
    <div><h5>Ask your doubt</h5></div>
    <div><p>Need any clarifications or answers to a question? Simply type your questions on the form</p></div>
</div>
            </div>
            <div className="row">
<div className="col-md-2"></div>
<div className="col-md-10">
    <div><h5>Question review</h5></div>
    <div><p>Our expert tutors will review your questions and provide solutions to them instantly</p></div>
</div>
            </div>
            <div className="row">
<div className="col-md-2"></div>
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
                <label className="col-md-3">Email
                <input className={`col-md-6 ${styles.input1}`} type="text" name="email"/>
                </label>
                </div>
                <div className="row">
                <label className="col-md-3">Phone Number *
                <input className={`col-md-6 ${styles.input1}`} type="text" name="email" placeholder="input phone number" required/>
                </label>
                </div>
                <div className="row">
                <label className="col-md-3">Question*
                <textarea className={`col-md-6 ${styles.input1}`} type="text" name="email" placeholder="I need help"  required />
                </label>
                </div>
                <div className="row">
                <label className="col-md-5">Upload document (optional)
                <input className={`col-md-7 ${styles.input1}`} type="text" name="email" />
                </label>
                </div>
                <div className="row">
                <label className="col-md-3">Select Class*
                <select className={`col-md-6 ${styles.input1}`}   required>
                    <option >Input Class/Level</option>
                </select>
                </label>
                </div>
                <div className="row">
                <label className="col-md-3">Select Subject *
                <input className={`col-md-6 ${styles.input1}`} type="text" name="email" placeholder="Input phone number"/>
                </label>
                </div>
                </form>
            </div>   
        </div>
    
</>
        )
}
export default Studenthelp;