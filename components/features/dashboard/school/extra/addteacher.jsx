import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles } from "../../../../../redux/actions/auth";
import { addNewTeacherInitiate } from '../../../../../redux/actions/school';
import styles from "../../school/addstudent.module.css"

const Addnewteacher = () => {
    const { user, registerUser, roles } = useSelector((state) => state.auth);
    const dispatch = useDispatch();


    const [fullName, setfullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Teacher");
    const [courseId, setCourseId] = useState("");
    const [course, setCourse] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [courseSelected, setCourseSelected] = useState("");

    const schoolId = user.user?.schoolId.id;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(course, courseId, fullName, email, role, courseSelected, password, schoolId, confirmPassword)
        dispatch(addNewTeacherInitiate(
            courseId, 
            fullName, 
            email, 
            password,
            confirmPassword,
            schoolId
            ))
    }
    const setClassId = () => {
        if(courseSelected === 'Primary One'){
          setCourseId('5fc8cfbb81a55b4c3c19737d')
        }else if(courseSelected === 'Primary Two'){
          setCourseId('5fd12c70e74b15663c5f4c6e')
        }else if(courseSelected === 'Primary Three'){
          setCourseId('5fff5a67de0bdb47f826fea8')
        }else if(courseSelected === 'Primary Four'){
          setCourseId('5fff5a7ede0bdb47f826fea9')
        }else if(courseSelected === 'Primary Five'){
          setCourseId('5fff5aaede0bdb47f826feaa')
        }else if(courseSelected === 'Primary Six'){
          setCourseId('5fff5abede0bdb47f826feab')
        }else if(courseSelected === 'JSS One'){
          setCourseId('5fff72b3de0bdb47f826feaf')
        }else if(courseSelected === 'JSS Two'){
          setCourseId('5fff7329de0bdb47f826feb0')
        }else if(courseSelected === 'Jss Three'){
          setCourseId('5fff734ade0bdb47f826feb1')
        }else if(courseSelected === 'SSS One'){
          setCourseId('5fff7371de0bdb47f826feb2')
        }else if(courseSelected === 'SSS Two'){
          setCourseId('5fff7380de0bdb47f826feb3')
        }else if(courseSelected === 'SSS Three'){
          setCourseId('5fff7399de0bdb47f826feb4')
        }else if(courseSelected === 'Afrilearn KidsCode'){
          setCourseId('629dbb4c5a5f270016033712')
        }else if(courseSelected === 'Secondary'){
          setCourseId('605b218f8636bc00158b4ad7')
        }else if(courseSelected === 'Primary'){
          setCourseId('605b21868636bc00158b4ad6')
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
                        roles.courses && roles.courses.map((role) => 
                        <option value={role.name}> {role.name}</option>
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