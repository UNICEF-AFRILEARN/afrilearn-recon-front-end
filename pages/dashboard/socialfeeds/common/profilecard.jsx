import Image from 'next/image'
import React from 'react'

import { BsPersonCircle, BsShieldFillCheck } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import styles from '../../../../styles/search.module.css'

const Profilecard = () => {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className={styles.profilecardwrapper}>
      <div className={`mx-3 ${styles.shieltitlewrapper}`}>
        <h3>My Profile</h3>
        {user?.user?.role === '5fd08fba50964811309722d5' ? (
          <BsShieldFillCheck color="green" size={20} />
        ) : user?.user?.role === '602f3ce39b146b3201c2dc1d' ? (
          <BsShieldFillCheck color="yellow" size={20} />
        ) : user?.user?.role === '607ededa2712163504210684' ? (
          <BsShieldFillCheck color="blue" size={20} />
        ) : (
          ''
        )}
      </div>
      <div className={styles.avatarwrapper}>
        <div className={`mt-3 ${styles.inneravatarwrapper}`}>
          {user?.user.profilePhotoUrl !== undefined ? (
            <Image
              alt={'afrilearn marketing video'}
              src={user?.user.profilePhotoUrl}
              width={45}
              height={45}
              className={styles.profileavatar1}
            />
          ) : (
            <BsPersonCircle size={35} className={styles.profileavatar} />
          )}

          <span>{user?.user?.fullName}</span>
        </div>
        <div className={styles.followerwrapper}>
          <div className={styles.followerinnerwrapper}>
            <h5 style={{ color: '#A8A8A8' }}>Followers</h5>
            <h5 style={{ color: '#00D9B6', textAlign: 'center' }}>462</h5>
          </div>
          <div className={styles.followinginnerwrapper}>
            <h5 style={{ color: '#A8A8A8' }}>Following</h5>
            <h5 style={{ color: '#00D9B6', textAlign: 'center' }}>462</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profilecard
