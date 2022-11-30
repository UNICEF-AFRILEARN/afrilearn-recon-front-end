import React from 'react';
import Head from 'next/head'

import ContactHeaders from '../../components/widgets/contactHeader/ContactHeaders'

import styles from './contact.module.css'
import ContactForm from '../../components/common/contactForm';
import { Footer } from '../../components/common/homepage'
import Press from '../../components/common/press';

const Contact = () => {
  return (
    <div className={styles.contactmainwrapper}>
        <Head>
            <title>Contact Us | Future of learning</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <ContactHeaders />
        <ContactForm />
        <Press id='press'/>
        <Footer />
    </div>
  )
}

export default Contact