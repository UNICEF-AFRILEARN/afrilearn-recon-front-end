import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../../../../styles/classwork.module.css'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import moment from 'moment'

const Classwork = () => {
  const { user } = useSelector((state) => state.auth)
  const subject = useSelector((state) => state.mySubjectCourse)
  const lessons = subject?.stuTeacherSub[0]?.subjects
  // console.log(subject)
  const [toggleState, setToggleState] = useState(0)
  const clazz = subject?.announcement[2]
  const toggleTabs = (index) => {
    setToggleState(index)
  }

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  // const [courseId, setCourseId] = useState(0)
  const truncate = (str) => {
    return str.length > 55 ? str.substring(0, 55) + '...' : str
  }
  const AssignContent = () => {
    const minDigit = clazz?.assignedContents.filter((data) => {
      return data.audience === 'all' || data.userId?.id === user?.user.id
    })
    const minsDigit = minDigit?.map((data) => {
      return new Date(data.dueDate).getTime() - new Date().getTime()
    })
    const minAssign =
      minDigit &&
      // minDigit > 0 &&
      minDigit[minsDigit?.indexOf(...minsDigit)]
    console.log(minsDigit)
    // return <p>ti moba tiri</p>;
    return minsDigit?.length > 0 ? (
      minsDigit?.map((dat, i) => {
        let data = minDigit[i]
        console.log(dat)
        return (
          lessons &&
          lessons[toggleState].mainSubjectId.name ===
            data.subjectId.mainSubjectId.name && (
            <div key={i} style={{ marginLeft: '30px', marginBottom: '10px' }}>
              <Row className={styles.subjectdetails}>
                <Col md={1} className={styles.innersubject}>
                  <Image
                    src="/assets/img/proavatar.svg"
                    alt="teacher"
                    width={50}
                    height={70}
                  />
                </Col>
                <Col md={11}>
                  {' '}
                  <Row>
                    <Col md={7} className="mt-2 text-dark">
                      <p className="mb-0">
                        {truncate(capitalizeFirst(data.description))}
                      </p>
                      <span className="p-0 text-secondary">
                        Posted: {moment(data.createdAt).format('LL')}
                      </span>
                    </Col>
                    <Col md={4}>
                      <span>Due Date: {moment(data.dueDate).format('LL')}</span>
                    </Col>
                    <Col md={1}>
                      <span>
                        <Image
                          src="/assets/img/dots.svg"
                          alt="teacher"
                          width={40}
                          height={10}
                        />
                      </span>
                    </Col>
                  </Row>
                </Col>
                <Row></Row>
              </Row>
            </div>
          )
        )
      })
    ) : (
      <p style={{ textAlign: 'center' }}>"Oh oh! No work due soon!"</p>
    )
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
          <>
            <h3 style={{ color: '#333', marginLeft: '30px' }}>
              {lessons && lessons[toggleState].mainSubjectId.name}
            </h3>
            <div
              style={{ border: '1px solid #A6A6A6', background: '#A6A6A6' }}
            ></div>
            <AssignContent />
          </>
        </Col>
      </Row>
    </div>
  )
}

export default Classwork
