import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "../../school/addstudent.module.css"

const Addnewteacher = () => {
    const { user, registerUser } = useSelector((state) => state.auth);

    console.log("School logged in from add teacher==>",user.user?.schoolId.id)
    return (
        <>
        <div className={styles.videoheropage}> 
         <h4 className={styles.heading}>Add New Teacher</h4>
         </div>
         <div  className={styles.addstudentContainer}>
            <div className={styles.heading1}><h4>Add New Teacher</h4></div>
            <div>Send invite to your teachers for them to access the virtual classroom</div>
            <form className= { `row ${styles.form}`}>
                <input  className={styles.input} type="text" placeholder="Teacher"/>
                <select className={styles.schoolselect} type="text"><option > Select class</option></select>
                <input  className={styles.input} type="text" placeholder="Fullname"/>
                <input className={styles.input} type="text"  placeholder="Email"/>
            </form>
            <button className={styles.studentButton}>SEND INVITE</button>
         </div>
        </>
       
    )
};

export default Addnewteacher;