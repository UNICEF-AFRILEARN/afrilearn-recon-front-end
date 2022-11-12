import React from 'react';

import styles from './cards.module.css';


const Cards = () => {
  return (
    <div className={styles.cardwrapper}>
        <div className={styles.cardback}>
            Card back
        </div>
        <div className={styles.cardfront}>
            Card front
        </div>
    </div>
  )
}

export default Cards