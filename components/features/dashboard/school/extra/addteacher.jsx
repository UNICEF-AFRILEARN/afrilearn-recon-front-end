import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router'
import { fetchRoles } from "../../../../../redux/actions/auth";
import { addNewTeacherInitiate } from '../../../../../redux/actions/school';
import styles from "../../school/addstudent.module.css"

const Addnewteacher = () => {
    const { user, registerUser, roles } = useSelector((state) => state.auth);
    const { schoolProfile, classMembers } = useSelector((state) => state.school);
    const dispatch = useDispatch();

    const [classSelected, setClassSelected ] = useState('');
    const [classId, setClassId] = useState('');
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Teacher");
    const [courseId, setCourseId] = useState("");
    const [studentClassId, setStudentClassId] = useState("");

    
    const schoolClassName = schoolProfile?.schoolClassesData
    const schoolId = user.user?.schoolId.id || registerUser.user?.schoolId.id
    const schoolClasses = schoolProfile?.schoolClassesData;
    // course = courseSelected.split("-")
    console.log("schoolId from addteacher ==>", schoolId)


    const filterClassIds = () => {
      schoolClassName && schoolClassName.filter((filteredClass) => {
          if(filteredClass.className === classSelected ){
               setClassId(filteredClass.classId)
          }
      })
  }

  useEffect(() => {
    filterClassIds()
}, [classSelected])


    const handleSubmit = (e) => {
      e.preventDefault()
      console.log("Email ====>", email, schoolId, classId)
        dispatch(addNewTeacherInitiate(classId, email, schoolId))
    }
 
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />

                <button className={styles.studentButton} type='submit'>SEND INVITE</button>
            </form>
         </div>
        </>
       
    )
};

export default Addnewteacher;