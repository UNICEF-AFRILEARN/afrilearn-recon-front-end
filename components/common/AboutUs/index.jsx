import React, { useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { aboutData } from './aboutData';
import { MdOutlineNoteAlt } from 'react-icons/md'
import { BsEmojiSmileFill, BsFillPersonFill } from 'react-icons/bs'
import { FaAward, FaBomb } from 'react-icons/fa'

import styles from './aboutus.module.css';

const AboutUs = () => {
    const [index, setIndex] = useState(0);


  return (
    <div className={styles.aboutuswrapper}>
       <div className={styles.aboutusmain}>
            <h1>About Us</h1>
            <p>Afrilearn is an education technology enterprise leveraging seasoned teachers, animators and developers to deliver affordable, world-class education for Africans, anywhere.</p>
        <Carousel>
      {
        aboutData.map((slide, index) => {
          return (
            <Carousel.Item>
        <img
          className={styles.slidingimage}
          src={slide.image}
          alt={slide.alt}
        />
      </Carousel.Item>
          )
        })  
      }
        
    </Carousel>
            
       </div>
       <div className={styles.valuesmain}>
            <h1>Our Values</h1>
            <div className={styles.valuescontentwrapper}>
                <div className={styles.contenticonwrapper}>

                </div>
                <div className={styles.maincontentwrapper}>
                  <div className={styles.iconwrapper}>
                      <BsEmojiSmileFill size={30} color='#00d9b6'/>
                  </div>
                    <div>
                    <h2>Fun…</h2>
                    <p>We are super deliberate about pleasure, joy, and fulfillment. On purpose, we work to deliver awesome content and experiences that make learning fun, engaging, yet highly effective.</p>
                    </div>

                </div> 
            </div>
            <div className={styles.valuescontentwrapper}>
                <div className={styles.contenticonwrapper}>
                        
                </div>
                <div className={styles.maincontentwrapper}>
                <div className={styles.iconwrapper}>
                      <FaAward size={30} color='#00d9b6'/>
                  </div>
                    <div>
                    <h2>Excellence…</h2>
                    <p>We habitually churn out life-changing education products with superior value and outstanding features that deliver transformative results, raising high-flying learners.</p>
                    </div>
                </div> 
            </div>
            <div className={styles.valuescontentwrapper}>
                <div className={styles.contenticonwrapper}>
                        
                </div>
                <div className={styles.maincontentwrapper}>
                    <div className={styles.iconwrapper}>
                      <FaBomb size={30} color='#00d9b6'/>
                  </div>
                    <div>
                    <h2>Disruption…</h2>
                    <p>We passionately spearhead radical shifts in Africa’s edtech sector by creating new approaches to solve Africa’s education challenges.</p>
                    </div>
                </div> 
            </div>
            <div className={styles.valuescontentwrapper}>
                <div className={styles.contenticonwrapper}>
                        
                </div>
                <div className={styles.maincontentwrapper}>
                <div className={styles.iconwrapper}>
                      <BsFillPersonFill size={30} color='#00d9b6'/>
                  </div>
                    <div>
                    <h2>Customer Obsession…</h2>
                    <p>We emphatically listen to customers and consumers for insights to consistently improve, enhance, and deliver the best experiences possible across the global edtech space.</p>
                    </div>
                </div> 
            </div>
       </div>
    </div>
  )
}

export default AboutUs