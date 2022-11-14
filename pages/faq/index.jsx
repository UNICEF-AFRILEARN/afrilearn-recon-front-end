import Head from 'next/head'
import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap'
import { Faq, Footer } from '../../components/common/homepage';

import styles from './faq.module.css';

const index = () => {
    
  const faqQuestions = [
    {
      id: 1,
      faq: 'What is Afrilearn?',
      answ: "Afrilearn is an education streaming service that provides Nigerian and West African Secondary School Students (JSS1-SS3) freedom to learn complete curriculum-relevant subjects and topics anytime, anywhere. With Afrilearn, there's always something exciting to learn as new contents are added weekly!",
    },
    {
      id: 2,
      faq: 'What is included in Afrilearn subscription?',
      answ: "Subscription includes unlimited access to all video lessons, audio lessons, class notes, practice quizzes, live classes and more, covering all subjects and topics, in your chosen class. Brace yourself for a profoundly life-changing experience.",
    },
    {
      id: 3,
      faq: 'How much does Afrilearn cost?',
      answ: "Afrilearn has a variety of plans to suit your learning goals. Subscription Plans include Monthly - ₦999 ($2.99), Quarterly - ₦2499 ($6.99), Bi-Annual - ₦4999 ($13.99), Annual - ₦9999 ($26.99).",
    },
    {
      id: 4,
      faq: 'Where can I watch?',
      answ: "You can learn on Afrilearn via your smartphone, tablet, Smart TV, laptop, or streaming device. Learn as much as you want, whenever you want without a single commercial – all for one low monthly price.",
    },
    {
      id: 5,
      faq: 'How do I cancel?',
      answ: "Our focus is to transform users into ambassadors through the best learning experience possible. You can easily cancel your subscription in two clicks. If you have more questions, please click",
    },
    {
      id: 6,
      faq: 'Got more Question?',
      answ: 'We’ve got you! Simply visit our COMPLETE FAQ PAGE, which regularly gets updated based on new data and insights from our awesome users.',
    },
  ]
  return (
    <div className={styles.faqmainwrapper}>
        <Head>
          <title>Frequently Asked Questions | Future of learning</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={styles.headerwrapper}>
            <h1>Frequently <span>Asked Questions</span> </h1>
        </div>

        <div
        id="landingpage-faq"
        className={`row ${styles.faq}`}
        style={{ margin: '25px' }}
      >
        <h5>Our FAQs</h5>
        <h2>Have any Questions?</h2>
        <div className={styles.innernavbar}>
            <ul>
                <li>GENERAL</li>
                <li>SERVICES</li>
                <li>CLASSES</li>
                <li>PAYMENT</li>
            </ul>
        </div>
        <section>
          {faqQuestions.map((faq, i) => {
            return (
              <Accordion key={i}>
                <Accordion.Item eventKey={i}>
                  <Accordion.Header>{faq.faq}</Accordion.Header>

                  <Accordion.Body
                    key={i}
                    className="border-0 accordion-body-com"
                  >
                    {faq.answ}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )
          })}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default index