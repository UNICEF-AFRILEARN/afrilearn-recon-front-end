import React from 'react'
import Link from 'next/link';

import styles from './faculty.module.css';

import { Footer } from '../../components/common/homepage'
import OurFaculty from '../../components/common/OurFaculty/index';

const Faculty = () => {
  return (
    <>
    <div className={styles.facultymainwrapper}>
        <div className={styles.contentwrapper}>
            <h1>Meet our Faculty!</h1>
            <p>Afrilearn would like to thank every individual, organization, and government who has dedicated their time, resources, and expertise to our mission of delivering quality education to Africans anywhere. The vast content on Afrilearn is made possible by the selfless commitment of our in-house team alongside our seasoned network of highly experienced teachers, volunteers, and partners.</p>
        </div>
        <OurFaculty />

        <div className={styles.inspirewrapper}>
          <p>________________</p>
          <h4><strong>You too can inspire Africa to love learning!</strong></h4>
          <p>
          Join our network of genius tutors and content faculty to deliver quality education for Africans anywhere.

          <br/>
          To get started, simply indicate your interest  <Link href='/join-the-team'> HERE </Link>
          </p>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Faculty