import React from 'react';

import styles from '../../../styles/Home.module.css'
import Gamified from './extraPages/Gamified';

function HomePage() {
  return (
    <div className={styles.container}>
       <h1> I am home page</h1>
       <Gamified />
       {/* all other components goes inside the hopage component */}
    </div>
  )
}

export default HomePage