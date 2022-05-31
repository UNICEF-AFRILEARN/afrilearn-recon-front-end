import styles from '../homepage.module.css';
import Image from 'next/image';
import Link from 'next/link';

const ProfileSection = ({data}) => {
   return (     
      <section className={`row other-style-added ${styles.profiles} `}>
        <div className="col-md-6">
          <h3 className={styles.profilesh3}>{data?.title}<br className="desktopOnly"/>{data?.titlePart2}</h3>
          {data?.description.map((item)=>{
            return <p key={item}><Image alt={"design image"} src='/assets/img/common/homepage/Check.png' width={25} height={25}/><span className={styles.bulletText}>{item}</span></p>
          })}        
          <section className={`${styles.mobileDownloadSection} button-setions`}>
          <div className="join-btn-wrapper">
                <span className={` btn-class-corrected`}><Link passHref href='/'>JOIN FOR FREE</Link></span>
              </div>
              <div className="play-store-class">
              <div className="class-play-store">
              <Link passHref href="https://play.google.com/store/apps/details?id=com.afrilearn">
                <Image alt={"design image"} src='/assets/img/common/homepage/Google Play Badge.png' width={150} height={55}/> 
              </Link>             
            </div>
            <div className="class-play-store">            
              <Link passHref href="https://apps.apple.com/ng/app/afrilearn/id1587978653">
                <Image alt={"design image"} src='/assets/img/common/homepage/App Store Badge.png' width={150} height={55}/> 
              </Link>
            </div>
          </div>
          </section>
        </div>
        <div className={`col-md-6 ${styles.profileImagePosition}`}>
          <Image alt={"design image"} src={data?.imageURL} width={434} height={371}/> 
        </div>
      </section>  
  )
}

export default ProfileSection
