import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "../../school/schoolpeople.module.css";
import Image from "next/image";
import Link from "next/link";
import { 
fetchSchoolMemberClassInitiate, 
fetchSchoolProfileInitiate 
} from '../../../../../redux/actions/school';


const Schooldata = () => {
    const { schoolProfile, classMembers } = useSelector((state) => state.school);
    const { user, registerUser, roles } = useSelector((state) => state.auth);
    const [classSelected, setClassSelected ] = useState('');
    const [classId, setClassId] = useState('');

    const dispatch = useDispatch();
  
    console.log("classMembers from schoolpeople=>", classMembers);
    const schoolClassName = schoolProfile?.schoolClassesData
    const schoolId = user.user?.schoolId.id || registerUser.user?.schoolId.id
    console.log("schoolProfile from schooldata=>", schoolProfile);
  
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

    useEffect(() => {
      dispatch(fetchSchoolMemberClassInitiate(classId))
    },[classId]);

    useEffect(() => {
      dispatch(fetchSchoolProfileInitiate(schoolId))
    },[classSelected])

   
    return (
    <>
    <div className={styles.videoheropage}> 
         <h4 className={styles.heading}>People</h4>
         </div>
         <div className={` row ${styles.schdatasection}`}> 
         <h3 className={` col-md-2 ${styles.heading2}`} >Class</h3>
         <div className={` col-md-5 `} >
             < select 
             className={styles.headingSelect}
             value={classSelected}
             defaultValue={"default"}
             onChange={(e) => setClassSelected(e.target.value)}
             >
                 <option value={'default'}>Select a class</option>
                { schoolClassName && schoolClassName.map((schoolClass) => 
                     <option 
                     className={styles.headingOption}
                     value={schoolClass.className}
                     >{schoolClass.className} 
                     </option>
                )

                }
                
                 
            </select>
        </div>
            <div className={` col-md-2 ${styles.addTeacher}`}>
                <div className={styles.schooladd}></div>
                <div>
                    <Link passHref href="/school/addteacher">Add new teacher</Link>
                </div>
            </div>
            <div className={` col-md-2 ${styles.addTeacher}`}>
                <div className={styles.schooladownload}></div>
                <div><Link passHref href="">Download List</Link></div>
            </div>
            </div>
            <div className={styles.dataContainer}>
            <div>
            <div className={` row ${styles.teachersection}`}> 
                <div className={`col-md-2 ${styles.teacherHeading}`}><h4>Teacher</h4></div>
                <div className={`col-md-4 ${styles.numberoffteacher}`}> {classMembers?.data?.admins?.length? classMembers?.data?.admins?.length : 0 } teachers</div>
            </div>
            <div className={styles.teacherContrainer}>
                { classMembers?.data?.admins && classMembers?.data?.admins?.map((classTeacher) => 
                    <div className="row">
                    <div className=  {`col-md-3 ${styles.teacherdata} `}>           {classTeacher.userId.fullName}
                    </div>
                    <div className={`col-md-3 ${styles.teacherdata}`}>
                        {classTeacher.userId.email}
                    </div>
                    <div className={`col-md-3 ${styles.schoolgroup}`}></div>
                    </div>
                )

                }

            </div>
            </div>
            <div className={` row ${styles.studentsection}`}> 
                <div className={`col-md-2 ${styles.teacherHeading}`}><h4>Classmates</h4></div>
                <div className={`col-md-4 ${styles.numberoffteacher}`}>{classMembers?.data?.classMembers.length? classMembers?.data?.classMembers.length : 0 } Pupil[s]</div>
            </div>
            <div className={styles.teacherContrainer}>
                {classMembers?.data?.classMembers && classMembers?.data?.classMembers?.map((classStudent) => 
                
                <div className="row">
                <div className=  {`col-md-3 ${styles.teacherdata} `}> <Image alt={"design image"} src="/../../../public/assets/img/school/man\ 2.svg" width="22.8px" height="22.8px" /> {classStudent.userId.fullName}</div>
                <div className={`col-md-3 ${styles.teacherdata}`}>{classStudent.userId.email}</div>
                <div className={`col-md-3 ${styles.schoolgroup}`}></div>
                 </div>

                )

                }
           
            {/* <div className="row">
                <div className=  {`col-md-3 ${styles.teacherdata} `}> <Image alt={"design image"} src="/../../../public/assets/img/school/man\ 2.svg" width="22.8px" height="22.8px" /> {schooldata.teacherName}</div>
                <div className={`col-md-3 ${styles.teacherdata}`}>{classmates?.studentEmail}</div>
                <div className={`col-md-3 ${styles.schoolgroup}`}></div>
            </div> */}
            {/* <div className="row">
                <div className=  {`col-md-3 ${styles.teacherdata} `}> <Image alt={"design image"} src="/../../../public/assets/img/school/man\ 2.svg" width="22.8px" height="22.8px" /> {schooldata.teacherName}</div>
                <div className={`col-md-3 ${styles.teacherdata}`}>{classmates?.studentEmail}</div>
                <div className={`col-md-3 ${styles.schoolgroup}`}></div>
            </div> */}
            </div>
            </div>
           
    </>

    )
};

export default Schooldata;