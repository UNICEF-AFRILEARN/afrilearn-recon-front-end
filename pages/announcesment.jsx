import Image from 'next/image';
import React from 'react';
import styles from "../styles/announcement.module.css";

const Announcesment = () => {
  return (
    <div className={styles.mainwrapper}>
        <div className={styles.announcementcontainer}>
            <div className={styles.anounceimage}>
            <Image
              src="/assets/img/crown.svg"
              alt="teacher"
              width={200}
              height={200}
            />
            </div>
            <div className={styles.detailscard}>
                <h2>Alaka Feyikemi</h2>
                <p>feyikemi199@gmail.com</p>
                <h3>JSS 1</h3>
            </div>
            <div className={styles.upcomingcard}>
            <h2>Upcoming</h2>
            <p>Mr Abraham O.(Teacher)  posted a new ...</p>
                <div className={styles.innerdate}><p>Posted:</p><span>03 Sept 2020</span></div>
                <div className={styles.innerdate}><p>Due Date:</p><span>06 Sept 2020</span></div>
         
            </div>
        </div>
        <div className={styles.messagescontainer}>
            <div className={styles.firstmessage}>
            <Image
              src="/assets/img/messageavatar.svg"
              alt="teacher"
              width={50}
              height={50}
            />
           <p>Announcements from teacher</p>
            </div>

            <div className={styles.firstmessage}>
            <Image
              src="/assets/img/messageavatar.svg"
              alt="teacher"
              width={50}
              height={50}
            />
           <p>Announcements from teacher</p>
            </div>
        </div>
    </div>
  )
}

export default Announcesment