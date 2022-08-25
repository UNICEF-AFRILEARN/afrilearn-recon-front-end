import React from 'react';
import Image from 'next/image';
import styles from "../../../../../styles/announcement.module.css";

const Announcesment = () => {
  return (
    <div className={styles.mainwrapper}>
        <div className={styles.announcementcontainer}>
            <div className={styles.anounceimage}>
            <Image
              src="/assets/img/crown.svg"
              alt="teacher"
              width={200}
              height={50}
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
                <div className={styles.innerdate}>
                  <p>Posted:</p><span>03 Sept 2020</span></div>
                <div className={styles.innerdate}><p>Due Date:</p>
                <span>06 Sept 2020</span>
                </div>
                <p className={styles.subtitle}>Agricultural Science</p>
                <p className={styles.subtitleview}>View All</p>
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

            <div className={styles.seconmessage}>
            <div className={styles.innermessage}>
              <Image
                src="/assets/img/messageavatar.svg"
                alt="teacher"
                width={50}
                height={50}
              />
            <div className={styles.teachertitle}><p>Announcements from teacher</p><span>06 Sept 2020</span></div>
            </div>

           <div className={styles.teacherarticle}>
             <p>Huloo! 
               <br />
               
                Well done to those that were able to complete the video lessons for this week. <br/><br />

                Cheers!</p>
           </div>

          </div>
          <div className={styles.seconmessage}>
            <div className={styles.innermessage}>
              <Image
                src="/assets/img/messageavatar.svg"
                alt="teacher"
                width={50}
                height={50}
              />
            <div className={styles.teachertitle}><p>Announcements from teacher</p><span>06 Sept 2020</span></div>
            </div>

           <div className={styles.teacherarticle}>
             <p>Huloo! 
               <br />
               
                Well done to those that were able to complete the video lessons for this week. <br/><br />

                Cheers!</p>
           </div>
           <div className={styles.commentmessage}>
             
             {/* <p>1 class comment</p> */}
              <div className={styles.commentimagecont}>
              <Image
                src="/assets/img/messageavatar.svg"
                alt="teacher"
                width={50}
                height={50}
              />
             
            <div className={styles.teachertitle}>
              <p>Mr Abraham O.(Teacher) </p><span>Course to be read for second week will be shared soon</span>
            </div>
              </div>
              <div className={styles.dividerclass}>
                <div className={styles.addclasscomment}>
                <span>Add class comment</span>
                <Image
                  src="/assets/img/arrow.svg"
                  alt="teacher"
                  width={20}
                  height={20}
                />
              </div>
              </div>
            </div>
          </div>
          <div className={styles.posttage}>
            <Image
              src="/assets/img/annouceimg.svg"
              alt="teacher"
              width={50}
              height={50}
            />
           <div className={styles.teachertitle}><p>Mr Abraham O.(Teacher)  posted a new study link: Hello everyone, here is the ...</p><span>06 Sept 2020</span></div>
            </div>
          <div className={styles.seconmessage}>
            <div className={styles.innermessage}>
              <Image
                src="/assets/img/messageavatar.svg"
                alt="teacher"
                width={50}
                height={50}
              />
            <div className={styles.teachertitle}><p>Announcements from teacher</p><span>06 Sept 2020</span></div>
            </div>

           <div className={styles.teacherarticle}>
             <p>Huloo! 
               <br />
               
                Well done to those that were able to complete the video lessons for this week. <br/><br />

                Cheers!</p>
           </div>

          </div>

        </div>
    </div>
  )
}

export default Announcesment