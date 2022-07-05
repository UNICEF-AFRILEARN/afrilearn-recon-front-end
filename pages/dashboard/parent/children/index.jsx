import React from 'react';
import { BiUnlink } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaLink } from 'react-icons/fa';


import styles from '../../../../styles/parentdashboard.module.css';
import ParentHeader from '../extra/header';

const Chidren = () => {
  return (
    <div className={styles.childrenmainwrapper}>
           <div className={styles.childrenheaderwrapper}>
                <ParentHeader />
           </div>
            <div className={styles.linkwrapper}>
                <div className={styles.leftlinkswrapper}>
                    <p> <span><BiUnlink /></span> Unlink account</p>
                    <p> <span><RiDeleteBin6Line /></span> Delete</p>
                </div>
                <div className={styles.rightlinkswrapper}>
                    <p> <span><FaLink /></span> Link Existing Account</p>
                </div>
            </div>
    </div>
  )
}

export default Chidren