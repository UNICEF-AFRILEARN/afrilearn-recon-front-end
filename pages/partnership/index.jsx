import React from 'react';
import Head from 'next/head'

import { Faq, Footer } from '../../components/common/homepage';

import styles from './partnership.module.css';

import Migration from '../../public/assets/img/migration.jpg'

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
    <div className={styles.maincontentwrapper}>
        <div className={styles.partnerinnercontent}>
            <div className={styles.childcontent}>
                <h1>Partnerships</h1>
                <p>Afrilearn actively seeks strategic partnerships with discerning federal and state governments, schools, corporates and academic institutions to deliver superior learning experiences leveraging our vast library with thousands of curriculum-relevant and richly animated video lessons, live lessons, courses, quizzes and exam practice with detailed solutions.</p>
            </div>
            <div className={styles.childcontentsecond}>
                <img
                    src='/assets/img/migration.jpg'
                    alt="Migration"
                />
                <p>For partnership enquiries, please email hello@myafrilearn.com or contact [+234]  802 785 5262, [+234] 805 154  4949.</p>
            </div>
        </div>
        <div className={styles.investorinnercontent}>
            <div className={styles.childcontent}>
                <h1>Investors</h1>
                <p>Africa’s education system is broken and Afrilearn is the solution. To this end, Afrilearn is currently open to partnering with the right impact investors to enable swift delivery of our solution at scale. This is not just an investment in Afrilearn – it’s an investment into Africa’s future.</p>
            </div>
            <div className={styles.childcontentsecond}>
                <img
                    src='/assets/img/Investor.jpg'
                    alt="Migration"
                />
                <p>For Investment enquiries, please email hello@myafrilearn.com or contact [+234]  802 785 5262, [+234] 805 154  4949.</p>
            </div>
        </div>
        <div className={styles.partnerinnercontent}>
            <div className={styles.childcontent}>
                <h1>Sales Reps/Agents</h1>
                <p>On this mission to deliver the future of education and empower the African child, we need you.
                <br />
                <br />
                Think about it, now that we’re making learning fun with animated video lessons, gamified exam practice, live classes and more, who will help us tell the world about these sweet offerings?
                <br />
                <br />
                That’s why we need audacious Sales Rep and Agents who will become Ambassadors of this life-changing product. Interested in joining our team to spread the word and grow richer? Get in touch!

                </p>
            </div>
            <div className={styles.childcontentsecond}>
                <img
                    src='/assets/img/Sales.jpg'
                    alt="Migration"
                />
                <p>To make money as an Afrilearn Sales Rep/Agent, please email hello@myafrilearn.com or contact [+234]  802 785 5262, [+234] 805 154  4949.</p>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default index