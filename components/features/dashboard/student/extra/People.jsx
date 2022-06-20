import React from 'react';
import Image from 'next/image';
import styles from "../../../../../styles/people.module.css";

const People = () => {
  return (
    <div className={styles.mainwrapper}>
        <div className={styles.titlehead}>
          <h4>Teacher</h4>
        </div>
        <div className={styles.personseg}>
            <div className={styles.innerimage}>
            <Image
                src="/assets/img/messageavatar.svg"
                alt="teacher"
                width={30}
                height={30}
              />
              <span>Mr Abraham O.</span>
            </div>
            <div className={styles.peoplecounter}>
              <h4>Classmates</h4> <span>46 people</span>
        </div>

        <div className={styles.classmate}>
            <Image
                src="/assets/img/messageavatar.svg"
                alt="teacher"
                width={30}
                height={30}
              />
              <span>Mr Abraham O.</span>
            </div>
            <div className={styles.classmate}>
            <Image
                src="/assets/img/messageavatar.svg"
                alt="teacher"
                width={30}
                height={30}
              />
              <span>Mr Abraham O.</span>
            </div>
            <div className={styles.classmate}>
            <Image
                src="/assets/img/messageavatar.svg"
                alt="teacher"
                width={30}
                height={30}
              />
              <span>Mr Abraham O.</span>
            </div>
            <div className={styles.classmate}>
            <Image
                src="/assets/img/messageavatar.svg"
                alt="teacher"
                width={30}
                height={30}
              />
              <span>Mr Abraham O.</span>
            </div>
            <div className={styles.classmate}>
            <Image
                src="/assets/img/messageavatar.svg"
                alt="teacher"
                width={30}
                height={30}
              />
              <span>Mr Abraham O.</span>
            </div>
            <div className={styles.classmate}>
            <Image
                src="/assets/img/messageavatar.svg"
                alt="teacher"
                width={30}
                height={30}
              />
              <span>Mr Abraham O.</span>
            </div>
        </div>
        
    </div>
  )
}

export default People