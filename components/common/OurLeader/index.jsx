import React from 'react';

import styles from './leadership.module.css';
import MyFlipCard from '../../layouts/MyFlipCard'
import { flipData } from '../../layouts/MyFlipCard/flipData';
import FlipableCard from '../../FlipableCard';

const OurLeader = () => {
  return (
    <div className={styles.leadershipmainwrapper}>

        <div className={styles.headerwrapper}>
            <h1>Our Leadership Team</h1>
        </div>
       <div className={styles.flipperswrapper}>
            <FlipableCard />
            {/* <FlipableCard />
            <FlipableCard />
            <FlipableCard />
            <FlipableCard /> */}
       </div>
        
    </div>
  )
}

export default OurLeader