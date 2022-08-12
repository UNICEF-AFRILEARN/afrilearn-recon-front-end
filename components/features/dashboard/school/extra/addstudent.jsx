import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import styles from "../../school/addstudent.module.css";
 import { fetchRoles } from "../../../../../redux/actions/auth";

const Addnewstudent = () => {
    const { user, registerUser, roles } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [fullName, setfullName] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [schoolId, setschoolId] = useState("");
    const [role, setRole] = useState("");
    const [courseId, setcourseId] = useState("");
    const [course, setCourse] = useState("");
    const [courseSelelcted, setcourseSelelcted] = useState("");

    console.log("School logged in from add student==>",user.user?.schoolId.id)
    console.log("roles in from add student==>",roles.courses)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(course, courseId, fullName, email, role)
    }
    const setClassId = () => {
        if(course === 'Primary One'){
          setCourseId('5fc8cfbb81a55b4c3c19737d')
        }else if(course === 'Primary Two'){
          setCourseId('5fd12c70e74b15663c5f4c6e')
        }else if(course === 'Primary Three'){
          setCourseId('5fff5a67de0bdb47f826fea8')
        }else if(course === 'Primary Four'){
          setCourseId('5fff5a7ede0bdb47f826fea9')
        }else if(course === 'Primary Five'){
          setCourseId('5fff5aaede0bdb47f826feaa')
        }else if(course === 'Primary Six'){
          setCourseId('5fff5abede0bdb47f826feab')
        }else if(course === 'JSS One'){
          setCourseId('5fff72b3de0bdb47f826feaf')
        }else if(course === 'JSS Two'){
          setCourseId('5fff7329de0bdb47f826feb0')
        }else if(course === 'Jss Three'){
          setCourseId('5fff734ade0bdb47f826feb1')
        }else if(course === 'SSS One'){
          setCourseId('5fff7371de0bdb47f826feb2')
        }else if(course === 'SSS Two'){
          setCourseId('5fff7380de0bdb47f826feb3')
        }else if(course === 'SSS Three'){
          setCourseId('5fff7399de0bdb47f826feb4')
        }else if(course === 'Afrilearn KidsCode'){
          setCourseId('629dbb4c5a5f270016033712')
        }else if(course === 'Secondary'){
          setCourseId('605b218f8636bc00158b4ad7')
        }else if(course === 'Primary'){
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
            <form className= { `row ${styles.form}`}>
                <input  className={styles.input} type="text" placeholder="student"/>
                <select className={styles.schoolselect} type="text">
                    {
                        roles.courses && roles.courses.map((role) => 
                        <option > {role.name}</option>
                        )
                    }
                </select>
                <input  className={styles.input} type="text" placeholder="Fullname"/>
                <input className={styles.input} type="text"  placeholder="Email"/>
            </form>
            <button className={styles.studentButton}>REGISTER</button>
         </div>
        </>
       
    )
};

export default Addnewstudent;