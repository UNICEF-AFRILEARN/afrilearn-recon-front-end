import React from 'react';
import Head from 'next/head'

import ContactHeaders from '../../components/widgets/contactHeader/ContactHeaders'

import styles from './contact.module.css'
import ContactForm from '../../components/common/contactForm';

const Contact = () => {
  return (
    <div className={styles.contactmainwrapper}>
        <Head>
            <title>About Us | Future of learning</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <ContactHeaders />
        <ContactForm />
    </div>
  )
}

export default Contact