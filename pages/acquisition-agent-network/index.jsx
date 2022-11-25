import React from 'react';

import styles from './acquisition.module.css';
import { BsFillSquareFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {Footer} from './../../components/common/homepage';

const AcquisitionAgentNetwork = () => {
  return (
    <>
    <div className={styles.acquisitionmainwrapper}>
        <div className={styles.leftcontentwrapper}>
          <h1>Become an Agent</h1>
          <p>Share in our success, change lives and achieve  financial freedom!</p>
          <button>Apply Now</button>
        </div>
        <div className={styles.rightimagewrapper}>
        </div>
    </div>
    <div className={styles.breifmainwrapper}>
        <div className={styles.breifheaderwrapper}>
            <h1>THE BRIEF</h1>
        </div>
        <div className={styles.detailswrapper}>
            <div className={styles.innerdetails}>
              <div className={styles.innercontent}>
              <p>Afrilearn provides complete world-class Primary & Secondary Education online (Ages 6-18) for Best Grades and Success in life. Afrilearn was launched in 2019 and currently serves 8000+ Students, Schools, Teachers and Parents across Nigeria</p>
              </div>
            </div>
            <div className={styles.innerdetails}>
            <div className={styles.innercontent}>
                <p>We are currently hiring ACQUISITION AGENTS to register and sell premium education subscription services to Schools, Families and Business owners</p>
                </div>
            </div>
            <div className={styles.innerdetails}>
            <div className={styles.innercontent}>
                <p>We are looking for individuals who are results-driven, passionate about education and possess exceptional sales and acquisition skills. Afrilearn is the best international edtech organization to build a great career in Sales while changing lives — including your own</p>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.jobrolewrapper}>
        <div className={styles.jobroleheader}>
          <h1>JOB ROLE: WHAT YOU WILL BE DOING</h1>
        </div>
        <div className={styles.innerrolecontent}>

        <div className={styles.innermaincontent}>
        <div className={styles.rolecontent}>
        <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>You will work daily on the Market to REGISTER and MANAGE Schools,
              Families and Organizations from various sectors like: Real Estate,
              Banking, Development Partners, Civil Society, etc.</p>
          </div>
          <div className={styles.rolecontent}>
          <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>Your main target is to sell the multi-award-winning Afrilearn Subscription packages for Schools to boost their performance and enrollment, Families to help their children achieve Best Grades and Organizations to empower to boost their sales while empowering their staff/customers’ children for success in life.</p>
          </div>
          <div className={styles.rolecontent}>
          <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>You will be responsible for the entire sales process from prospecting to Selling the Education Subscription packages and consistent follow-up</p>
          </div>
          <div className={styles.rolecontent}>
          <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>Ensuring you meet and exceed individual weekly and monthly sales targets</p>
          </div>
          <button>Apply Now</button>
        </div>

        <div className={styles.imagewrapper}>
            <img 
              src='./assets/img/jobrole.png'
            />
        </div>
        </div>
    </div>
    <div className={styles.jobrolewrapper}>
        <div className={styles.innerrolecontentrequire}>

        <div className={styles.innermaincontent}>
        <div className={styles.jobroleheaderrequire}>
          <h1>REQUIRED QUALIFICATIONS</h1>
        </div>
        <div className={styles.rolecontent}>
        <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>OND/Bachelor degree</p>
          </div>
          <div className={styles.rolecontent}>
          <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>Outstanding sales skills and ability to convert prospects into paying clients</p>
          </div>
          <div className={styles.rolecontent}>
          <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>Should have a Working Android or iOS Phone</p>
          </div>
          <div className={styles.rolecontent}>
          <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>Sales/Marketing Experience is an added Advantage</p>
          </div>
          <div className={styles.rolecontent}>
          <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>Must live in Lagos</p>
          </div>
        </div>

        <div className={styles.imagewrapper}>
            <img 
              src='./assets/img/require.png'
            />
        </div>
        </div>
    </div>
    <div className={styles.jobrolewrapper}>
        <div className={styles.jobroleheader}>
          <h1>WHAT WE ARE OFFERING/BENEFITS</h1>
        </div>
        <div className={styles.innerrolecontent}>

        <div className={styles.innermaincontent}>
        <div className={styles.rolecontent}>
        <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>Bestselling agents steadily get ₦100,000+ per month</p>
          </div>
          <div className={styles.rolecontent}>
          <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>Free Marketing Tool Kit and Training from Afrilearn</p>
          </div>
          <div className={styles.rolecontent}>
          <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>Unlimited sales commissions of 20% of total sales with instant payment</p>
          </div>
          <div className={styles.rolecontent}>
          <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>Competitive Sales Bonuses and Weekly Allowances</p>
          </div>
          <div className={styles.rolecontent}>
          <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>Clearly Career Growth path: Sales Agent <AiOutlineArrowRight /> Team Lead <AiOutlineArrowRight /> Sales Manager</p>
          </div>
          <div className={styles.rolecontent}>
          <span><BsFillSquareFill color='#00d9b6' size={20}/></span>
              <p>Monthly team bonding and empowerment activities</p>
          </div>
        </div>

        <div className={styles.imagewrapper}>
            <img 
              src='./assets/img/offer.png'
            />
        </div>
        </div>
    </div>
    <div className={styles.callfinal}>
        <h1>Become an agent today</h1>
        <p>Join one of the world’s best online learning 
        <br/>
        marketplaces.
        </p>
        <button>Apply Now</button>
    </div>
    <Footer />
  </>
  )
}

export default AcquisitionAgentNetwork