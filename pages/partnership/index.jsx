import React from 'react';
import Head from 'next/head'

import styles from './partnership.module.css';

const index = () => {
  return (
    <div className={styles.faqmainwrapper}>
    <Head>
      <title> Partnership | Future of learning</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.headerwrapper}>
       
       <div className={styles.innerheader}>
            <h1>Invest in Africa's future today! </h1>

            <h4>Together, let's transform Africa's education sector forever.</h4>
       </div>
    </div>
    </div>
  )
}

export default index