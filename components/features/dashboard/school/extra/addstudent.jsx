 import styles from "../../school/addstudent.module.css"

const Addnewstudent = () => {
    return (
        <>
        <div className={styles.videoheropage}> 
         <h4 className={styles.heading}>Add New Student</h4>
         </div>
         <div  className={styles.addstudentContainer}>
            <div className={styles.heading1}><h4>Add New Student</h4></div>
            <div>Add your student to the league of world class learners on Afrilearn</div>
            <form className= { `row ${styles.form}`}>
                <input  className={styles.input} type="text" placeholder="student"/>
                <select className={styles.schoolselect} type="text"><option > Select class</option></select>
                <input  className={styles.input} type="text" placeholder="Fullname"/>
                <input className={styles.input} type="text"  placeholder="Email"/>
            </form>
            <button className={styles.studentButton}>REGISTER</button>
         </div>
        </>
       
    )
};

export default Addnewstudent;