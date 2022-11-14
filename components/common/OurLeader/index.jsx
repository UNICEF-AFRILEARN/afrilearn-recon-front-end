import React from 'react';

import styles from './leadership.module.css';
import MyFlipCard from '../../layouts/MyFlipCard'
import { flipData } from './flipData';
import FlipableCard from '../../FlipableCard';

const OurLeader = () => {
  return (
    <div className={styles.leadershipmainwrapper}>

        <div className={styles.headerwrapper}>
            <h1>Our Leadership Team</h1>
        </div>
       <div className={styles.flipperswrapper}>
           {
            flipData.map((flippers, index) => {
              return (
                <FlipableCard  flippers={flippers}/>
              )
            })
           }
       </div>
        
    </div>
  )
}

export default OurLeader