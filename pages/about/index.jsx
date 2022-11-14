import React from 'react';
import Head from 'next/head'

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
        <Head>
          <title>About Us | Future of learning</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
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