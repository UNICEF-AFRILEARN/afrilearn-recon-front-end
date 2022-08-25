import Image from 'next/image';
import React from 'react';

import { BsShieldFillCheck } from 'react-icons/bs';
import styles from '../../../../styles/search.module.css';

const Profilecard = () => {
  return (
    <div className={styles.profilecardwrapper}>
        <div className={styles.shieltitlewrapper}>
            <h3>My Profile</h3>
            <BsShieldFillCheck color="green" size={20}/>
        </div>
        <div className={styles.avatarwrapper}>
            <div className={styles.inneravatarwrapper}>
                <Image
                src="/assets/img/classavatar.svg"
                alt="student avatar"
                width={50}
                height={50}
                />

                <span>Alli Olatunbosunmioluwa</span>
             </div>
             <div className={styles.followerwrapper}>
                <div className={styles.followerinnerwrapper}>
                    <h5>Followers</h5>
                    <h5>462</h5>
                </div>
                <div className={styles.followinginnerwrapper}>
                    <h5>Following</h5>
                    <h5>462</h5>

                </div>
             </div>

        </div>  
    </div>
  )
}

export default Profilecard