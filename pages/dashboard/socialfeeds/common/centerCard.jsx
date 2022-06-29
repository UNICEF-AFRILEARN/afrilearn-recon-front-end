import Image from 'next/image';
import React from 'react';
import styles from '../../../../styles/search.module.css';

import { BsHash, BsEmojiSmile } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const CenterCard = () => {
  return (
    <div className={styles.centercardwrapper}>
        <div className={styles.cardimagewrapper}>
        <Image
              src="/assets/img/classavatar.svg"
              alt="student avatar"
              width={30}
              height={30}
              />
            <div className={styles.conversationline}>
                    <span>Start a conversation...</span>
            </div>
        </div>
        <div className={styles.socialiconswrapper}>
            <div className={styles.iconswrapper}>
                <BsHash />
                <BsEmojiSmile />
                <Image
              src="/assets/img/iconly.svg"
              alt="student avatar"
              width={15}
              height={15}
              />
            </div>
            <span>Post</span>
        </div>
        <div className={styles.innercardwrapper}>
            <div className={styles.cardonerwrapper}>
                <span>Class <MdOutlineKeyboardArrowDown /></span>
            </div>
            <div className={styles.cardtworwrapper}>
                <span>Subject <MdOutlineKeyboardArrowDown /></span>
            </div>
            <div className={styles.cardthreerwrapper}>
                <span>Topic <MdOutlineKeyboardArrowDown /></span>
            </div>
        </div>
    </div>
  )
}

export default CenterCard