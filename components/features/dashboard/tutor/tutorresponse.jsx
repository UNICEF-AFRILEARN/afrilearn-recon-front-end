import styles from "../tutor/tutorhelp.module.css"
import Link from "next/link";

const tutordataResponse = { 
    time : '10:00',
    response: "The origin of Nigeria is dated back to 1298 when the ...",
    file:"2 files attach...",
    size:"2kb"
}
const formDetails={
    name: "Muhammed Johnson",
    email : "johnson567@gmail.com",
    time: "10.00",
    number: "09073738292",
    class:'SSS 3',
subject:"History",
question: "Explain the history of Nigerian from 1298 till date, stating important events that occured till date also.",
}

const Tutorresponse = () => {
    return (
        <>
       <div className= {` row ${styles.reponseContainer}`}>
       <h4>Response Inbox</h4>   
       <div className= {` col-md-4 ${styles.reponsefirstContainer}`}>
            <div className="row">
            <div className={` col-md-4 ${styles.reponsefirstContainer1}`} ><h5>Afrilearn Int’l</h5></div>
            <div className= {` col-md-6 ${styles.reponsefirstContainer2}`}>{tutordataResponse?.time}</div>
            <div><h6>Response: History assignment</h6></div>
            <div className={styles.responseP}><p>{tutordataResponse.response}</p></div>
            <div className={styles.responsefile}><Link passHref href="">{tutordataResponse.file}</Link></div>
            </div>
        </div>
       <div className={` col-md-7 ${styles.reponseSecondtContainer}`}>
        <div>
        <div className={`row ${styles.reponseDiv}`}>
            <div className={` col-md-1 ${styles.reponseElipse}`}></div>
        <div className={` col-md-4 ${styles.reponseSecondtContainer1}`}><h5>{formDetails?.name}</h5> <p>{formDetails.email}</p></div>
            <div className="col-md-3">{formDetails?.time}</div>
        </div>
        <div className={styles.details}>Phone number : {formDetails?.number}</div>
        <div className={styles.details}>Subject : {formDetails?.subject}</div>
        <div className={styles.details}> Class : {formDetails?.class}</div>
        <div className={styles.details}><p>Question :</p>{formDetails?.question}</div>
        <div className={styles.linkk}><Link passHref href=" ">{tutordataResponse?.file}</Link></div>
        </div>
      <div>
<div className={`row ${styles.reponseSecondtContainer2}`}>
    <div className={`col-md-1 ${styles.reponseStar}`}></div>
    <div className={`col-md-4 `}><h5>Afrilearn Int’l</h5></div>
    <div className={`col-md-7 ${styles.reponseHelp}`}><Link passHref href="" className={styles.reponselinkHelp}>Get more help</Link></div>
</div>
<div className={styles.reponseAfr}><h6>Response: {formDetails?.subject} assignment</h6></div>
<div className={styles.responseP}>{tutordataResponse.response}</div>
<div className={`row ${styles.fileSize}`}>
    <div className={` col-md-1 ${styles.folder}`}></div>
    <div className={`col-md-4 ${styles.linkk}`}>{tutordataResponse?.file}</div>
    <div className={`col-md-2 ${styles.linkk2}`}>{tutordataResponse?.size}</div>
    <div className={`col-md-1 ${styles.download}`}></div>
</div>
      </div>
        </div> 
       </div>

        </>
       
        )
}
export default Tutorresponse;