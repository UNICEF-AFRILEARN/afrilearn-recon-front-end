import React, { useState } from 'react';

import { BsCheck } from 'react-icons/bs';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown 
} from 'react-icons/md';


import styles from '../../../../styles/parentdashboard.module.css';


const Classcontentcard = ({contentId, course_sorted}) => {
  const [selectedItem, setSelectedItem] = useState(null)

  console.log("contentId*****", contentId)


  //function to extract ids and name:
  const get_child_course_sorted = (messages) => {
    return messages?.filter((obj) => {
      return obj.mainSubjectId && obj.mainSubjectId.id === contentId ;
      })
      .map((obj) =>{
        return obj.relatedLessons;
      });
  }

  const get_student_courses_sorted = () => {
    let student_sorted_courses = get_child_course_sorted(course_sorted);
    for(let i = 0; i < student_sorted_courses.length; i++){
      for(let j = 0; j < student_sorted_courses.length; j++){
        
        console.log("student_sorted_courses ***", student_sorted_courses[i][j])
      }

    }

  }

  get_student_courses_sorted()


      
  const toggleItem = (id) => {
    if(selectedItem === id){
      return setSelectedItem(null)
    }

    setSelectedItem(id)
  }

  return (
    <div className={styles.cardcontentwrapper}>
      <div className={styles.innercontentwrapper} onClick={() => toggleItem(1)}>
      <div className={styles.contentquestionwrapper}>
        {/* {student_sorted_courses && student_sorted_courses.map((mapped_courses) =>
          <h4> <BsCheck className={styles.checkbg} color="white"/> {console.log("mapped_courses", mapped_courses)} (1):  Lines <span>{selectedItem === 1 ? <MdOutlineKeyboardArrowDown size={30} /> : <MdOutlineKeyboardArrowUp size={30}/>}</span></h4>
        )

        } */}
        </div>
        <div className={ selectedItem === 1  ? styles.contentshow :  styles.contenthidewrapper}>
          <ul>
              <li>Class note</li>
              <li>Practice quiz</li>
          </ul>
          </div>  
      </div>

      <div className={styles.innercontentwrapper} onClick={() => toggleItem(2)}>
      <div className={styles.contentquestionwrapper}>
        <h4> <BsCheck className={styles.checkbg} color="white"/> Geometrical Construction (1):  Lines  <span>{selectedItem === 2 ? <MdOutlineKeyboardArrowDown size={30} /> : <MdOutlineKeyboardArrowUp size={30}/>}</span></h4>
        </div>
        <div className={ selectedItem === 2  ? styles.contentshow :  styles.contenthidewrapper}>
          <ul>
              <li>Class note</li>
              <li>Practice quiz</li>
          </ul>
          </div>  
      </div>
      <div className={styles.innercontentwrapper} onClick={() => toggleItem(3)}>
      <div className={styles.contentquestionwrapper}>
        <h4> <BsCheck className={styles.checkbg} color="white"/> Geometrical Construction (1):  Lines <span>{selectedItem === 3 ? <MdOutlineKeyboardArrowDown size={30} /> : <MdOutlineKeyboardArrowUp size={30}/>}</span></h4>
        </div>
        <div className={ selectedItem === 3  ? styles.contentshow :  styles.contenthidewrapper}>
          <ul>
              <li>Class note</li>
              <li>Practice quiz</li>
          </ul>
          </div>  
      </div>
      <div className={styles.innercontentwrapper} onClick={() => toggleItem(4)}>
      <div className={styles.contentquestionwrapper}>
        <h4> <BsCheck className={styles.checkbg} color="white"/> Geometrical Construction (1):  Lines <span>{selectedItem === 4 ? <MdOutlineKeyboardArrowDown size={30} /> : <MdOutlineKeyboardArrowUp size={30}/>}</span></h4>
        </div>
        <div  className={ selectedItem === 4  ? styles.contentshow :  styles.contenthidewrapper}>
          <ul>
              <li>Class note</li>
              <li>Practice quiz</li>
          </ul>
          </div>  
      </div>
    </div>
  )
}

export default Classcontentcard