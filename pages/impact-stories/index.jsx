import React from 'react';

import YouTube from "react-youtube";
import styles from'./impact.module.css';

// import Impact from '../../public/assets/img/impact.jpg'
import {Footer} from './../../components/common/homepage';
import Link from 'next/link';

const InpactStories = () => {

  const opts = {
    height: "190",
    width: "340",
    playerVars: {
      autoplay: 0,
    },
  };


  return (
 
    <div className={styles.impactstoriesmainwrapper}>
        <div className={styles.impactheaderwrapper}>
         
            <div className={styles.leftcontentwrappercon}>
                <h1>Impact Stories & Features</h1>
                <h3>Whatever goes into a mind comes out in a life.</h3>
            </div>
            <div className={styles.rightimagewrapper}>
                <img
                  src='/assets/img/impact.jpg'
                 />
            </div>
        </div>
        <div className={styles.challengewrapper}>
           <div className={styles.headervideo}>
            <h1>AFRILEARN CHALLENGE WINNERS</h1>
              <p>What the weekly winners of #AfrilearnChallenge have to say</p>
           </div>

            <div className={styles.videowrapper}>
                <div className={styles.videocontent}>

                  <div className={styles.vontentchild}>
                  <YouTube 
                  videoId="vztXJceboTA" 
                    opts={opts} 
                    />
                      <div className={styles.innercontent}>
                        <h1>AFRICHALLENGE IMP...</h1>
                        <p>In a world where humans are quick to move on from people and places, the consistent ...</p>
                        <small className={styles.miniinner}>Oct 14, 2021
                          <small>
                            <Link href='/impactstory/1'>
                              <b>Read More</b>
                            </Link>
                          </small>
                        </small>
                      </div>
                  </div>
                </div>
                <div className={styles.videocontent}>

                  <div className={styles.vontentchild}>
                  <YouTube videoId="isoFbsZCSgA" 
                    opts={opts} 
                    />
                      <div className={styles.innercontent}>
                        <h1>Teachers' Impact ...</h1>
                        <p>When you think you have heard it all from the students, the teachers shared how impa...</p>
                        <small className={styles.miniinner}>Oct 8, 2021
                          <small>
                          <Link href='/impactstory/2'>
                              <b>Read More</b>
                            </Link>
                          </small>
                        </small>
                      </div>
                  </div>
                </div>
                <div className={styles.videocontent}>

                  <div className={styles.vontentchild}>
                  <YouTube videoId="1EEg63IeRwk" 
                    opts={opts} 
                    />
                      <div className={styles.innercontent}>
                        <h1>AFRILEARN CHALLEN...</h1>
                        <p>When it comes to the gamified learning challenge on the Afrilearn App, Fathia Bakare...</p>
                        <small className={styles.miniinner}>Oct 8, 2021
                          <small>
                            <Link href='/impactstory/1'>
                              <b>Read More</b>
                            </Link>
                          </small>
                        </small>
                      </div>
                  </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default InpactStories