import React from 'react';
import styles from '../../../../styles/search.module.css';
import Feedcard from './feedcard';
import Profilecard from './profilecard';

const Feedholder = () => {
  return (
    <div className={styles.rightfeedholder}>
       <Feedcard />
       <Profilecard />
    </div>
  )
}

export default Feedholder