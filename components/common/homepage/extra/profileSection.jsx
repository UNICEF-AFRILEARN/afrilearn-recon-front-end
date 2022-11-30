import styles from '../homepage.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { BiCheckCircle} from 'react-icons/bi';

const ProfileSection = ({data}) => {
   return (     
      <section className={`row other-style-added ${styles.profiles} `}>
        <div className={`${styles.detailswrapper} col-md-6`}>
          <h3 className={styles.profilesh3}>{data?.title}<br className="desktopOnly"/>{data?.titlePart2}</h3>
          {data?.description.map((item)=>{
            return <p key={item}>
              <BiCheckCircle
              size={20}
               />
              <span className={styles.bulletText}>{item}</span></p>
          })}        
          <div className={`${styles.mobileDownloadSection}`}>
          {/* <div className={`${styles.joinfreebtn} join-btn-wrapper`}> */}
                <button className={` ${styles.joinbuttonwrap} btn-class-corrected`}><Link passHref href='/register'>JOIN FOR FREE</Link></button>
   
                <Link passHref href="https://play.google.com/store/apps/details?id=com.afrilearn">
                  <Image alt={"design image"} src='/assets/img/google-play.png' width={150} height={55}/> 
                </Link>             
              <Link passHref href="https://apps.apple.com/ng/app/afrilearn/id1587978653">
                <Image 
                className={styles.storeimage}
                alt={"design image"} src='/assets/img/apple-store.png' width={150} height={55}/> 
              </Link>
            {/* </div> */}
          {/* </div> */}
          </div>
        </div>
        <div className={`col-md-6 ${styles.profileImagePosition}`}>
          <Image alt={"design image"} src={data?.imageURL} width={434} height={371}/> 
        </div>
      </section>  
  )
}

export default ProfileSection
