import Image from 'next/image';
import React from 'react';

import styles from '../../../../styles/search.module.css';


const FollowCard = () => {
  return (
    <div className={styles.followcardwrapper}>
        <div className={styles.innerfollowcardwrapper}>
            <h4>Who to follow</h4>
        </div>
        <div className={styles.avatarfollowcardwrapper}>
        <Image
              src="/assets/img/followavarta.svg"
              alt="student avatar"
              width={30}
              height={30}
              />
              <span>Adgbolowologba Felix</span>
              <p>follow</p>
        </div>
        <div className={styles.avatarfollowcardwrapper}>
        <Image
              src="/assets/img/followavarta.svg"
              alt="student avatar"
              width={30}
              height={30}
              />
              <span>Adgbolowologba Felix</span>
              <p>follow</p>
        </div>
        <div className={styles.avatarfollowcardwrapper}>
        <Image
              src="/assets/img/followavarta.svg"
              alt="student avatar"
              width={30}
              height={30}
              />
              <span>Adgbolowologba Felix</span>
              <p>follow</p>
        </div>
        <div className={styles.avatarfollowcardwrapper}>
        <Image
              src="/assets/img/followavarta.svg"
              alt="student avatar"
              width={30}
              height={30}
              />
              <span>Adgbolowologba Felix</span>
              <p>follow</p>
        </div>
       
    </div>
  )
}

export default FollowCard