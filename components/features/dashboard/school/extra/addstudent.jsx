import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import styles from "../../school/addstudent.module.css";
 import { fetchRoles } from "../../../../../redux/actions/auth";

const Addnewstudent = () => {
    const { user, registerUser, roles } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [fullName, setfullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const [schoolId, setSchoolId] = useState("");
    const [role, setRole] = useState("Student");
    const [courseId, setCourseId] = useState("");
    const [course, setCourse] = useState("");
    const [courseSelected, setCourseSelected] = useState("");

    console.log("School logged in from add student==>",user.user?.schoolId.id)
    console.log("roles in from add student==>",roles.courses)
    const schoolId = user.user?.schoolId.id 

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(course, courseId, fullName, email, role, courseSelected, password, schoolId)
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
                        roles.courses && roles.courses.map((role) => 
                        <option value={role.name}> {role.name}</option>
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