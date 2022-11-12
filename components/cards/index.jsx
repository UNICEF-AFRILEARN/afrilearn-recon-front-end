import React from 'react';

import styles from './cards.module.css';


const Cards = ({flippers}) => {
  return (
    <div className={styles.cardwrapper}>
        <div className={styles.cardback}>
            <p>{flippers.summary}</p>
        </div>
        <div className={styles.cardfront}>
           <img 
            src={flippers.image}
            alt={flippers.alt}
           />
           <div>
           <h4 className={styles.leadername}>{flippers.name}</h4>
           <h5 className={styles.leaderrole}>{flippers.role}</h5>
           </div>
        </div>
    </div>
  )
}

export default Cards