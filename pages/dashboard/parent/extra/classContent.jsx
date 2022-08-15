import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseInitiate } from '../../../../redux/actions/course';

import { BiChevronDown } from 'react-icons/bi';
import styles from '../../../../styles/parentdashboard.module.css';
import Classcontentmain from './classcontentmain';

const ClassContent = ({courseContext, children}) => {

  const [selectedCourse, setCourseSelected] = useState("");
  const [classId, setClassId] = useState("");


  const myChildren = children;
  const mappedCoursesCount = myChildren?.map((children) =>  
    children.enrolledCourses)
    
    const classList = mappedCoursesCount?.filter((filterClass) => filterClass.length > 0).map((mappinClass) => mappinClass[0].courseId.name)

    let sortclassId = mappedCoursesCount?.filter((filterClass) => filterClass.length > 0).map((mappinClass) => mappinClass) 
    
    let sortedClassIds = [];

    //function to sort child course object
    let sortedClass_ids = [];
    const sortClassIds = () => {
      sortedClassIds = sortclassId.filter((sortIds) =>  sortIds).map((sort_ids) => sort_ids)

      for(let i = 0; i < sortedClassIds.length; i++){
          for(let j = 0; j < sortedClassIds[i].length; j++){
            sortedClass_ids = sortedClassIds[i][j].courseId
          }
      }
      
    }
    
    //function to extract ids and name:
    const get_class_child_ids = (messages) => {
      return messages
        .filter((obj) => {
         return obj.enrolledCourses && obj.enrolledCourses.length > 0 ;
        })
        .map((obj) =>{
          return obj.enrolledCourses;
        });
    }
    

    const set_found_ids = () => {
      let sorting_ids = get_class_child_ids(myChildren)
        for(let i = 0; i < sorting_ids.length; i++){
            for(let j = 0; j < sorting_ids[i].length; j++){
                if(sorting_ids[i][j].courseId.name === selectedCourse){
                    setClassId(sorting_ids[i][j].courseId.id)
                }
            }
        }
    }

      sortClassIds();
    console.log("sortedClass_ids from inner course content =>>>>>", sortedClass_ids);

  

    const setStudentClassId = () => {
      if(selectedCourse === 'JSS One'){
        setClassId("60b8a33dca964400154bdbf8")
      }else if(selectedCourse === "JSS Two"){
        setClassId("62f6aee70e20330016bd1132")
      }else if(selectedCourse === "JSS Three"){
        setClassId("62f6aee70e20330016bd1137")
      }else if(selectedCourse === 'SSS One'){
        setClassId("62f6aee70e20330016bd113c")
      }else if(selectedCourse === 'SSS Two'){
        setClassId("62f6aee80e20330016bd1141")
      }else if(selectedCourse === 'SSS Three'){
        setClassId("62f6aee80e20330016bd1146")
      }else if(selectedCourse === 'Afrilearn KidsCode'){
        setClassId("62f6aee80e20330016bd114b")
      }
         
    }

    useEffect(() => {
      set_found_ids()
      }, [set_found_ids]);

    useEffect(() => {
      setStudentClassId()
      }, [setStudentClassId]);

  return (
    <div className={styles.classcontentwrapper}>
        <div className={styles.contentheaderwrapper}>
          <h3>Class Contents</h3>
          <div className={styles.labelwrapper}>
            <ul>
              <li>Filter by class</li>
              <select
                        // className={`${styles.pushDown} form-control form-control-sm`}
                        value={selectedCourse}
                        defaultValue={"default"}
                        onChange={(e) => setCourseSelected(e.target.value)}
                        >
                          <option value={"default"}>
                              Select a class
                          </option>
            
                        {classList && classList.map((childClass) => 
                        <option 
                        placeholder='Select a Role'
                            >{childClass}
                        </option>
                        )}
                    </select>
              <li>Class note <BiChevronDown /> </li>
            </ul>
          </div>
        </div>
        <Classcontentmain  myChildren={myChildren}/>
    </div>
  )
}

export default ClassContent