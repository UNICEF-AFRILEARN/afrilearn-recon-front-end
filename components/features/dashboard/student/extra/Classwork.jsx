import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../../../../styles/classwork.module.css'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Classwork = () => {
  const subject = useSelector((state) => state.mySubjectCourse)
  const lessons = subject?.stuTeacherSub[0]?.subjects
  console.log(subject)
  const [toggleState, setToggleState] = useState(0)

  const toggleTabs = (index) => {
    setToggleState(index)
  }
  return (
    <div className={styles.classworkwrappers}>
      <Row>
        <Col md={3}>
          <nav className={styles.sidenavbar}>
            <h5>All Subjects</h5>
            <ul className="p-0">
              {lessons?.map((data, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => toggleTabs(i)}
                    className={`p-0 pointer ${
                      toggleState === i ? styles.activetab : styles.tabs
                    }`}
                  >
                    {data?.mainSubjectId.name}
                  </li>
                )
              })}
              {/* <li
                onClick={() => toggleTabs(-1)}
                className={toggleState === -1 ? styles.activetab : styles.tabs}
              >
                pastQuestion
              </li> */}
            </ul>
          </nav>
        </Col>
        <Col md={9}>
          <div className={styles.subjectwrappers}>
            <h3 style={{ color: '#333' }}>Mathematics</h3>
          </div>
          <div className={styles.subjectdetails}>
            <div className={styles.innersubject}>
              <Image
                src="/assets/img/proavatar.svg"
                alt="teacher"
                width={50}
                height={50}
              />
              <p>Attached is the link,complete the video lesson for ...</p>
              <span>Due 06 Sept 2020</span>
              <span>
                <Image
                  src="/assets/img/dots.svg"
                  alt="teacher"
                  width={40}
                  height={10}
                />
              </span>
              <span className={styles.posted}>Posted: 02 Sept 2020</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Classwork
