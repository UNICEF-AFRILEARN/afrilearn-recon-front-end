import React from 'react'
import Image from 'next/image'
import styles from '../../../../../styles/people.module.css'
import { useSelector } from 'react-redux'

const People = () => {
  const subject = useSelector((state) => state.mySubjectCourse)
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
          {subject?.announcement[1]?.admins.map((data, i) => {
            return <span key={i}>{data.userId.fullName}</span>
          })}
        </div>
        <div className={styles.peoplecounter}>
          <h4>Classmates</h4>{' '}
          <span>{subject?.announcement[1]?.classMembers.length}</span>
        </div>
        {subject?.announcement[1]?.classMembers.map((data, i) => {
          return (
            <div key={i} className={styles.classmate}>
              <Image
                src="/assets/img/messageavatar.svg"
                alt="teacher"
                width={30}
                height={30}
              />
              <span>{data.userId.fullName}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default People
