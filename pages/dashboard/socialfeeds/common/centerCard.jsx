import Image from 'next/image'
import React from 'react'
import styles from '../../../../styles/search.module.css'

import { BsHash, BsEmojiSmile } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useSelector } from 'react-redux'

const CenterCard = () => {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className={styles.centercardwrapper}>
      <div className={styles.cardimagewrapper}>
        {user?.user.profilePhotoUrl !== undefined ? (
          <Image
            alt={'afrilearn marketing video'}
            src={user?.user.profilePhotoUrl}
            width={35}
            height={35}
            className={styles.profileavatar1}
          />
        ) : (
          <BsPersonCircle size={25} className={styles.profileavatar} />
        )}
        <div className={styles.conversationline}>
          <input
            className={styles.conversationlineInput}
            type="text"
            placeholder="Start a conversation..."
          />
        </div>
      </div>
      <div className={styles.socialiconswrapper}>
        <div className={styles.iconswrapper}>
          <BsHash size={20} color="#00D9B6" />
          <BsEmojiSmile size={20} color="gray" />
          <Image
            src="/assets/img/iconly.svg"
            alt="student avatar"
            width={18}
            height={18}
          />
        </div>
        <span>Post</span>
      </div>
      <div className={styles.innercardwrapper}>
        <div className={styles.cardonerwrapper}>
          <span>
            Class <MdOutlineKeyboardArrowDown />
          </span>
        </div>
        <div className={styles.cardtworwrapper}>
          <span>
            Subject <MdOutlineKeyboardArrowDown />
          </span>
        </div>
        <div className={styles.cardthreerwrapper}>
          <span>
            Topic <MdOutlineKeyboardArrowDown />
          </span>
        </div>
      </div>
    </div>
  )
}

export default CenterCard
