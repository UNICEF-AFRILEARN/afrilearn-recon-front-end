import React, {useState, useEffect} from 'react';
import Router, { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles } from "../../../../../redux/actions/auth";
import { addNewTeacherInitiate } from '../../../../../redux/actions/school';
import styles from "../../school/addstudent.module.css"

const Addnewteacher = () => {
    const { user, registerUser, roles } = useSelector((state) => state.auth);
    const { schoolProfile } = useSelector((state) => state.school);
    const dispatch = useDispatch();

    const [fullName, setfullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Teacher");
    const [courseId, setCourseId] = useState("");
    const [studentClassId, setStudentClassId] = useState("");
    const [course, setCourse] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [courseSelected, setCourseSelected] = useState("");
    
    const schoolId = user.user?.schoolId.id;
    const schoolClasses = schoolProfile?.data?.schoolClassesData;
    course = courseSelected.split("-")
    console.log("schoolProfile from addteacher ==>", schoolClasses)

    const handleSubmit = (e) => {
      e.preventDefault()
        dispatch(addNewTeacherInitiate(
          courseId,
          studentClassId,
          fullName, 
          email, 
          password,
          confirmPassword,
          schoolId
            ))
    }
    const setClassId = () => {
        if(course[0] === 'JSS One'){
          setCourseId('5fc8cfbb81a55b4c3c19737d')
          setStudentClassId("62f6aee70e20330016bd112d")
        }else if(course[0] === "JSS Two"){
          setCourseId('5fff7329de0bdb47f826feb0')
          setStudentClassId("62f6aee70e20330016bd1132")
        }else if(course[0] === "JSS Three"){
          setCourseId('5fff734ade0bdb47f826feb1')
          setStudentClassId("62f6aee70e20330016bd1137")
        }else if(course[0] === 'SSS One'){
          setCourseId('5fff7371de0bdb47f826feb2')
          setStudentClassId("62f6aee70e20330016bd113c")
        }else if(course[0] === 'SSS Two'){
          setCourseId('5fff7380de0bdb47f826feb3')
          setStudentClassId("62f6aee80e20330016bd1141")
        }else if(course[0] === 'SSS Three'){
          setCourseId('5fff7399de0bdb47f826feb4')
          setStudentClassId("62f6aee80e20330016bd1146")
        }else if(courseSelected === 'Afrilearn KidsCode'){
          setCourseId('629dbb4c5a5f270016033712')
          setStudentClassId("62f6aee80e20330016bd114b")
        }
           
      }

      useEffect(() => {
        setClassId()
      }, [setClassId]);

    useEffect(() => {
        dispatch(fetchRoles())
      }, [])
 
    return (
        <>
        <div className={styles.videoheropage}> 
         <h4 className={styles.heading}>Add New Teacher</h4>
         </div>
         <div  className={styles.addstudentContainer}>
            <div className={styles.heading1}><h4>Add New Teacher</h4></div>
            <div>Send invite to your teachers for them to access the virtual classroom</div>
            <form className= { `row ${styles.form}`} onSubmit={handleSubmit}>
                <input 
                    className={styles.input} 
                    type="text"
                    value={role}
                    onChange={(e)=> setRole(e.target.value)}
                    placeholder="Teacher"
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
                    value={fullName}
                    onChange={(e) => setfullName(e.target.value)}
                    placeholder="Fullname"
                />
                <input 
                    className={styles.input} 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input 
                    className={styles.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <input 
                    className={styles.input}
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                />
                <button className={styles.studentButton} type='submit'>SEND INVITE</button>
            </form>
         </div>
        </>
       
    )
};

export default Addnewteacher;