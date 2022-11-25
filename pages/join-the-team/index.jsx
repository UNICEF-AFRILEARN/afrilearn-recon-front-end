import React from 'react'

import { Footer } from '../../components/common/homepage'
import styles from './jointeam.module.css'

const JoinTheTeam = () => {
  return (
    <>
    <div className={styles.teammainwrapper}>
        <div className={styles.innerheaderwarpper}>
            <h1>Join the Afrilearn Team!</h1>
            <h3> Make a global impact by teaching and empowering people around the world.</h3>
            <p>If you are a Teacher, Animator, or Developer and you want to reach millions of students every year, simply send us a request here.</p>
        </div>

        <div className={styles.imagewrapper}>
            <img 
                src='./assets/img/team.jpg'
            />
        </div>
    </div>
        <Footer />
    </>
  )
}

export default JoinTheTeam