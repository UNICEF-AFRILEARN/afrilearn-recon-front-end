import Image from 'next/image';
import React from 'react'
import styles from '../../../../styles/parentdashboard.module.css';


const Proaddvert = () => {
  return (
    <div className={styles.proaddwrapper}>
        <Image
            src='/assets/img/proavatar-two.svg'
            width={200}
            height={50}
        />
    </div>
  )
}

export default Proaddvert