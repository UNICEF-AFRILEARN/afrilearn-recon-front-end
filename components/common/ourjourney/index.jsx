import React from 'react';
import { TbArrowBigRightLines, TbArrowBigLeftLines } from 'react-icons/tb'
import { MdOutlineNoteAlt } from 'react-icons/md'
import { FaHandshake, FaRocket, FaUsers } from 'react-icons/fa'
import { BsTrophy, BsGraphUp } from 'react-icons/bs'

import styles from './journey.module.css';

const OurJourney = () => {
  return (
    <div className={styles.journeymain}>
        <div className={styles.journeyheader}>
            <h1>Our Journey</h1>
        </div>
        <div className={styles.innerrightcontent}>
            <div className={styles.rightempty}></div>

            <div className={styles.rightfilled}>
                <div>
                <h4> 
                    <span className={styles.imageleftwrapper}><span className={styles.innerimageleftwrapper}><MdOutlineNoteAlt 
                    size={30}
                /></span></span>Apr 2019 </h4>
                </div>
                <div className={styles.rightfilledcontent}>
                    <p> We’re incorporated as Afrilearn International Limited</p>
                </div>
            </div>
        </div>
        <div className={styles.innerrightcontent}>
            <div className={styles.rightfilled}>
               
                <div className={styles.rightfilledcontent}>
                    <p> 
                         We get selected for the Orange Corners Business Incubation
                    </p>
                </div>
                <div>
                    <h4>  Feb 2020 <span className={styles.imagelrightwrapper}><span className={styles.innerimageleftwrapper}><FaHandshake 
                    size={30}
                /></span></span></h4>
                </div>
            </div>

            <div className={styles.rightempty}>
                
            </div>
        </div>
        <div className={styles.innerrightcontent}>
            <div className={styles.rightempty}></div>

            <div className={styles.rightfilled}>
                <div>
                    <h4> <span className={styles.imageleftwrapper}><span className={styles.innerimageleftwrapper}><BsTrophy 
                    size={30}
                /></span></span> Mar 2020 </h4>
                </div>
                <div className={styles.rightfilledcontent}>
                    <p> We emerge 1st of 20,200 businesses in Friends of Prof. Osinbajo SME Competition

                    </p>
                </div>
            </div>
        </div>
        <div className={styles.innerrightcontent}>
            <div className={styles.rightfilled}>
                
                <div className={styles.rightfilledcontent}>
                    <p> Our MVP ClassNotes.ng launches, listed #1 Education Platform in Nigeria</p>
                </div>
                <div>
                    <h4>  Apr 2020 <span className={styles.imagelrightwrapper}><span className={styles.innerimageleftwrapper}><BsGraphUp 
                    size={30}
                /></span></span> </h4>
                </div>
            </div>

            <div className={styles.rightempty}>
                
            </div>
        </div>
        <div className={styles.innerrightcontent}>
            <div className={styles.rightempty}></div>

            <div className={styles.rightfilled}>
                <div className={styles.rightfilleddate}>
                    <h4><span className={styles.imageleftwrapper}><span className={styles.innerimageleftwrapper}><BsTrophy 
                    size={30}
                /></span></span> Jun 2020 </h4>
                </div>
                <div className={styles.rightfilledcontent}>
                    <p> We win the Netherland’s Business Innovation Fund</p>
                </div>
            </div>
        </div>
        <div className={styles.innerrightcontent}>
            <div className={styles.rightfilled}>
               
                <div className={styles.rightfilledcontent}>
                    <p> 
                    We launch Exambly Mobile App and Web to wide adoption by private and public schools across Nigeria
                    </p>
                </div>
                <div>
                    <h4> Nov 2020 <span className={styles.imagelrightwrapper}><span className={styles.innerimageleftwrapper}><FaRocket 
                    size={30}
                /></span></span> </h4>
                </div>
            </div>

            <div className={styles.rightempty}>
                
            </div>
        </div>
        <div className={styles.innerrightcontent}>
            <div className={styles.rightempty}></div>

            <div className={styles.rightfilled}>
                <div>
                    <h4> <span className={styles.imageleftwrapper}><span className={styles.innerimageleftwrapper}><BsTrophy 
                    size={30}
                /></span></span> Dec 2020 </h4>
                </div>
                <div className={styles.rightfilledcontent}>
                    <p > 
                    We win the U.S. Chamber Digital Innovation Award
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.innerrightcontent}>
            <div className={styles.rightfilled}>
               
                <div className={styles.rightfilledcontent}>
                    <p> 
                    We get selected for UK-Nigeria Tech Hub’s Top 10 Accelerator
                    </p>
                </div>
                <div>
                    <h4>  Mar 2021 <span className={styles.imagelrightwrapper}><span className={styles.innerimageleftwrapper}><FaHandshake 
                    size={30}
                /></span></span> </h4>
                </div>
            </div>

            <div className={styles.rightempty}>
                
            </div>
        </div>
        <div className={styles.innerrightcontent}>
            <div className={styles.rightempty}></div>

            <div className={styles.rightfilled}>
                <div>
                    <h4> <span className={styles.imageleftwrapper}><span className={styles.innerimageleftwrapper}><FaHandshake 
                    size={30}
                /></span></span> Apr 2021 </h4>
                </div>
                <div className={styles.rightfilledcontent}>
                    <p> 
                        We get selected for the Future of Work Africa 2021 Accelerator by Village Capital & IFC
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.innerrightcontent}>
            <div className={styles.rightfilled}>
               
                <div className={styles.rightfilledcontent}>
                    <p> 
                        Afrilearn activates Board of Directors
                    </p>
                </div>
                <div>
                    <h4>  May 2021 <span className={styles.imagelrightwrapper}><span className={styles.innerimageleftwrapper}><FaUsers 
                    size={30}
                /></span></span> </h4>
                </div>
            </div>

            <div className={styles.rightempty}>
                
            </div>
        </div>
         <div className={styles.innerrightcontent}>
            <div className={styles.rightempty}></div>

            <div className={styles.rightfilled}>
                <div>
                    <h4> <span className={styles.imageleftwrapper}><span className={styles.innerimageleftwrapper}><BsTrophy 
                    size={30}
                /></span></span> Sept 2021 </h4>
                </div>
                <div className={styles.rightfilledcontent}>
                    <p> 
                    Awarded Changemaker Innovation of the Year 2021 by ACT Foundation.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurJourney