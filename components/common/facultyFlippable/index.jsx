import React from 'react';

import styles from './flipboard.module.css';
import FacultyCard from './../../facultyCards/index';

const FacultyFlippable = ({boardMember}) => {
  return (
    <div className={styles.flippablecardcontainer}>
        <FacultyCard boardMember={boardMember}/>
    </div>
  )
}

export default FacultyFlippable