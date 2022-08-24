import React, {useState, useEffect} from 'react';
import Router, { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
 import styles from "../../school/addstudent.module.css";
 import { fetchRoles } from "../../../../../redux/actions/auth";
import { addNewStudentInitiate } from '../../../../../redux/actions/school';

const Addnewstudent = () => {
  const { user, registerUser, roles } = useSelector((state) => state.auth);
  const { schoolProfile, classMembers } = useSelector((state) => state.school);
    const dispatch = useDispatch();

    const [fullName, setfullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Student");
    const [courseId, setCourseId] = useState("");
    const [course, setCourse] = useState("");
    const [classId, setClassId] = useState("");
    const [classSelected, setClassSelected ] = useState('');

    const schoolClassName = schoolProfile?.data?.schoolClassesData
    const schoolId = user.user?.schoolId.id || registerUser.user?.schoolId.id
    const schoolClasses = schoolProfile?.data?.schoolClassesData;
    
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log("course =====>", fullName, email, classId, courseId)
        // dispatch(addNewStudentInitiate(
        //     courseId,
        //     classId,
        //     fullName, 
        //     email, 
        //     password,
        //     confirmPassword,
        //     schoolId
        // ))
    }

  
    const filterClassIds = () => {
      schoolClassName && schoolClassName.filter((filteredClass) => {
          if(filteredClass.className === classSelected ){
               setClassId(filteredClass.classId)
               setCourseId(filteredClass.courseId)
          }
      })
  }

  useEffect(() => {
    filterClassIds()
}, [classSelected]);

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
                value={classSelected}
                defaultValue={"default"}
                onChange={(e) => setClassSelected(e.target.value)}
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
            <button className={styles.studentButton} type='submit'>REGISTER</button>
            </form>
         </div>
        </>
       
    )
};

export default Addnewstudent;