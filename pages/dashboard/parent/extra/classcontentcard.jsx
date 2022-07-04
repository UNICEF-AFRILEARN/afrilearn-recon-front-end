import React, { useState } from 'react';

import { BsCheck } from 'react-icons/bs';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown 
} from 'react-icons/md';


import styles from '../../../../styles/parentdashboard.module.css';


const Classcontentcard = () => {
  const [selectedItem, setSelectedItem] = useState(null)

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
        <h4> <BsCheck className={styles.checkbg} color="white"/> Geometrical Construction (1):  Lines <span>{selectedItem === 1 ? <MdOutlineKeyboardArrowDown size={30} /> : <MdOutlineKeyboardArrowUp size={30}/>}</span></h4>
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