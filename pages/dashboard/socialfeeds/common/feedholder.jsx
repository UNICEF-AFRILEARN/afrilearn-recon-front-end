import React from 'react';
import styles from '../../../../styles/search.module.css';
import Feedcard from './feedcard';
import FollowCard from './followCard';

const Feedholder = () => {
  return (
    <div className={styles.rightfeedholder}>
       <Feedcard />
    </div>
  )
}

export default Feedholder