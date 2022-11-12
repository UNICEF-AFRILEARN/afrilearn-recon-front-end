import React from 'react';
import Cards from '../Cards';

import styles from './flipable.module.css';

const FlipableCard = () => {
  return (
    <div className={styles.flippablecardcontainer}>
        <Cards />
    </div>
  )
}

export default FlipableCard