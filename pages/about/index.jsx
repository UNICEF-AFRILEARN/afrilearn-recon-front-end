import React from 'react';
import styles from './about.module.css';

import AboutHeaders from '../../components/widgets/AboutHeaders/AboutHeaders'
import AboutUs from '../../components/common/AboutUs';
import OurLeader from '../../components/common/OurLeader';
import OurBoard from '../../components/common/ourboard';
import OurJourney from '../../components/common/ourjourney';
import { Footer } from '../../components/common/homepage';

const index = () => {
  return (
    <div className={styles.aboutmainwrapper}>
        <AboutHeaders />
        <AboutUs />
        <OurJourney />
        <OurLeader />
        <OurBoard />
        <Footer />

    </div>
  )
}

export default index