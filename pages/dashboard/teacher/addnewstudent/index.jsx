import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router'
 import styles from "../../../../components/features/dashboard/school/addstudent.module.css";
 import { sendClassInviteInitiate} from '../../../../redux/actions/classes';


const Addnewstudent = () => {
    const { user, registerUser, roles } = useSelector((state) => state.auth);
    const { schoolProfile } = useSelector((state) => state.school);
    const dispatch = useDispatch();

    const [fullName, setfullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const [schoolId, setSchoolId] = useState("");
    const [token, setToken] = useState("Student");
    const [courseId, setCourseId] = useState("");
    let [classCode, setClassCode] = useState("");
    const [classId, setClassId] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [courseSelected, setCourseSelected] = useState("");
    
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(sendClassInviteInitiate(classCode, email, token))

    }


    useEffect(() => {
      setClassCode(user?.user?.classOwnership[0]?.classCode)
    }, [classCode]);

    useEffect(() => {
      setToken(user?.token)
    }, [token]);


    return (
        <>
        <div className={styles.videoheropage}> 
         <h4 className={styles.heading}>Add New Student</h4>
         </div>
         <div  className={styles.addstudentContainer}>
            <div className={styles.heading1}><h4>Add New Student</h4></div>
            <div>Add your student to the league of world class learners on Afrilearn</div>
            <form className= { `row ${styles.form}`} onSubmit={handleSubmit}>
                
                <input 
                    className={styles.input}
                    type="text" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input 
                    className={styles.input}
                    type="text" 
                    // placeholder="classcode"
                    value={classCode}
                    onChange={(e) => setClassCode(e.target.value)}
                    />
            <button className={styles.studentButton} type='submit'>Send Invite</button>
            </form>
         </div>
        </>
       
    )
};

export default Addnewstudent;