import React, {useState, useEffect} from 'react';
import Router, { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
 import styles from "../../school/addstudent.module.css";
 import { fetchRoles } from "../../../../../redux/actions/auth";
import { addNewStudentInitiate } from '../../../../../redux/actions/school';

const Addnewstudent = () => {
    const { user, registerUser, roles } = useSelector((state) => state.auth);
    const { schoolProfile } = useSelector((state) => state.school);
    const dispatch = useDispatch();

    const [fullName, setfullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const [schoolId, setSchoolId] = useState("");
    const [role, setRole] = useState("Student");
    const [courseId, setCourseId] = useState("");
    const [course, setCourse] = useState("");
    const [classId, setClassId] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [courseSelected, setCourseSelected] = useState("");

    const schoolClasses = schoolProfile?.data.schoolClassesData
    course = courseSelected.split("-")
    const schoolId = user.user?.schoolId.id

    
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log("course =====>", course[0])
        dispatch(addNewStudentInitiate(
            courseId,
            classId,
            fullName, 
            email, 
            password,
            confirmPassword,
            schoolId
        ))
    }

    const setStudentClassId = () => {
      if(course[0] === 'JSS One'){
        setCourseId('5fc8cfbb81a55b4c3c19737d')
        setClassId("62f6aee70e20330016bd112d")
      }else if(course[0] === "JSS Two"){
        setCourseId('5fff7329de0bdb47f826feb0')
        setClassId("62f6aee70e20330016bd1132")
      }else if(course[0] === "JSS Three"){
        setCourseId('5fff734ade0bdb47f826feb1')
        setClassId("62f6aee70e20330016bd1137")
      }else if(course[0] === 'SSS One'){
        setCourseId('5fff7371de0bdb47f826feb2')
        setClassId("62f6aee70e20330016bd113c")
      }else if(course[0] === 'SSS Two'){
        setCourseId('5fff7380de0bdb47f826feb3')
        setClassId("62f6aee80e20330016bd1141")
      }else if(course[0] === 'SSS Three'){
        setCourseId('5fff7399de0bdb47f826feb4')
        setClassId("62f6aee80e20330016bd1146")
      }else if(course[0] === 'Afrilearn KidsCode'){
        setCourseId('629dbb4c5a5f270016033712')
        setClassId("62f6aee80e20330016bd114b")
      }
         
    }

    useEffect(() => {
      setStudentClassId()
      }, [setStudentClassId]);

    useEffect(() => {
        dispatch(fetchRoles())
      }, [])

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
                    value={role}
                    type="text" 
                    placeholder="student"
                    onChange={(e) => setRole(e.target.value)}
                    />
                <select 
                className={styles.schoolselect} 
                type="text"
                value={courseSelected}
                defaultValue={"default"}
                onChange={(e) => setCourseSelected(e.target.value)}
                    >
                      <option value={"default"}>
                         Select a Class
                      </option>
                    {
                        schoolClasses && schoolClasses.map((schoolClass) => 
                        <option value={schoolClass.className}> {schoolClass.className}</option>
                        )
                    }
                </select>
                <input 
                    className={styles.input} 
                    type="text" 
                    placeholder="Fullname"
                    value={fullName}
                    onChange={(e) => setfullName(e.target.value)}
                />
                <input 
                    className={styles.input}
                    type="text" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input 
                    className={styles.input}
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <input 
                    className={styles.input}
                    type="password" 
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
            <button className={styles.studentButton} type='submit'>REGISTER</button>
            </form>
         </div>
        </>
       
    )
};

export default Addnewstudent;