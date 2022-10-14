import styles from './student.module.css'
import SubHeading from './extra/subHeading'

import PastQuestion from './extra/pastQuestionaira'
import TopInClass from './extra/topInClass'
import Recommendation from './extra/recommendation'
import Image from 'next/image'
import Slider from 'react-slick'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Subjects from './extra/subjects'
import GetSolution from './extra/getSolution'
import PerfomanceSumm from './extra/PerfomanceSumm'
import RecentActivity from './extra/recentActivity'
import Q from './extra/recentActivity'
import _ from 'lodash'
import StudentHeropage from './studentHeropage'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchClassMember,
  fetchCoursesInitiate,
  fetchGetFavouriteInitiate,
  fetchGetUnfinishedVideosInitiate,
  fetchGetWebInitiate,
  fetchSendClassRequest,
  fetchstoreSubject,
  fetchSubjectInitiate,
  fetchTopInClassInitiate,
} from '../../../../redux/actions/subject'
import Swal from 'sweetalert2'
import {
  // fetchCourseInitiate,
  fetchReconLessonInitiate,
  fetchUnicefReconInitiate,
  fetchSingleLessonInitiate,
  fetchLessonsInitiate,
} from '../../../../redux/actions/courses'
import { fetchRecentActivitiesInitiate } from '../../../../redux/actions/classes'
import { Button, Col, Modal, Row, Tooltip } from 'react-bootstrap'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { reconLesson, lessons, unicefRecon } = useSelector(
    (state) => state.Mycourses
  )
  const { user, registerUser } = useSelector((state) => state.auth)
  const { activities } = useSelector((state) => state.Mycourses)
  // const { registerUser } = useSelector((state) => state.auth);
  const subject = useSelector((state) => state.mySubjectCourse)

  const userId = '62a0bc984af2d90016b72096'
  const token = user.token
  const lessonId = '6012c2a7cfe09249249f7f9c'
  const schoollevel = 'Primary One'
  const reco_subject = 'Agricultural Science'
  // To be changed later

  const personData = {
    personClass: user.user?.enrolledCourses[0].courseId
      ? user.user?.enrolledCourses[0].courseId?.name
      : user.user?.enrolledCourses[1].courseId.name,
    personName: user.user?.fullName,
  }
  const person_id = user.user?.enrolledCourses[0].courseId
    ? user.user?.enrolledCourses[0].id
    : user.user?.enrolledCourses[1].id
  const user_id = user.user?.enrolledCourses[0]
    ? user.user?.enrolledCourses[0].userId
    : user.user?.enrolledCourses[1].userId
  console.log(reconLesson)
  useEffect(() => {
    dispatch(fetchGetWebInitiate(person_id, token))
    // dispatch(fetchLessonsInitiate());
    dispatch(fetchSingleLessonInitiate(lessonId))
    dispatch(fetchLessonsInitiate())
    dispatch(fetchRecentActivitiesInitiate(token, userId))
    dispatch(fetchUnicefReconInitiate(schoollevel, reco_subject, lessonId))
    dispatch(fetchReconLessonInitiate(userId, token))
    // dispatch(fetchSubjectInitiate(person_id, token));
    dispatch(fetchGetFavouriteInitiate(token))
    dispatch(fetchGetUnfinishedVideosInitiate(token))
    dispatch(fetchTopInClassInitiate(person_id, token))
    dispatch(fetchClassMember(person_id, token))
  }, [
    // fetchCourseInitiate,
    fetchReconLessonInitiate,
    fetchUnicefReconInitiate,
    fetchRecentActivitiesInitiate,
    fetchLessonsInitiate,
    // fetchSubjectInitiate,
    fetchGetUnfinishedVideosInitiate,
    fetchGetWebInitiate,
    fetchTopInClassInitiate,
    fetchClassMember,
    activities,
  ])

  return (
    <>
      <StudentHeropage data={personData} />
      <div id="subject">
        <Subjects
          subData={
            subject?.dashboardWeb?.enrolledCourse?.courseId?.relatedSubjects
          }
        />
      </div>
      <div id="pastQuestions">
        <PastQuestion
          subData={
            subject?.dashboardWeb?.enrolledCourse?.courseId.relatedPastQuestions
          }
        />
      </div>
      <div id="resumePlaying">
        <UnfinshedVideos
          classData={subject?.unfinishedStore?.unFinishedVideos}
        />
      </div>
      <div id="favourite">
        <MyFavs classData={subject?.favourite?.favouriteVideos} />
      </div>
      <div id="topTen">
        {' '}
        <TopInClasses
          classData={subject?.topInclass?.lessons}
          classed={personData.personClass}
        />
      </div>
      <div id="performance">
        <PerfomanceSumm />
      </div>
      <GetSolution />
      <div id="classroom">
        <ClassRoom data={subject?.classroom?.classMembership} />
      </div>
      <div id="recommendations" className={styles.recomendationmainwrapper}>
        <Recommended
          recommend={reconLesson?.recommendation}
          unicefRecon={unicefRecon}
          lessons={lessons}
        />
      </div>
      <div id="recentActivities">
        <RecentActivity activities={activities?.recentActivities} />
      </div>
    </>
  )
}

const TopInClasses = ({ classData, classed }) => {
  const customeSlider = useRef()

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    initialSlide: 0,
    arrows: false,
    rows: '1',
  }
  return (
    classData?.length > 0 && (
      <section>
        <SubHeading title={`Top in ${classed}`} />
        <div className={styles.contai}>
          <section
            className="parnet-frag-color"
            style={{
              marginLeft: '25px',
            }}
          >
            {classData?.length > 4 ? (
              <Slider {...settings} ref={customeSlider}>
                {classData?.map((data, i) => (
                  <TopInClass data={data} key={i} />
                ))}
              </Slider>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '15px',
                }}
              >
                {classData?.map((data, i) => (
                  <TopInClass data={data} key={i} />
                ))}
              </div>
            )}
          </section>
        </div>
      </section>
    )
  )
}
const UnfinshedVideos = ({ classData }) => {
  const customeSlider = useRef()

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    initialSlide: 0,
    arrows: false,
    rows: '1',
  }
  return (
    classData?.length > 0 && (
      <>
        <SubHeading title={`Unfinished Videos`} />
        <div className={styles.contai}>
          <section
            className="parnet-frag-color"
            style={{
              marginLeft: '25px',
            }}
          >
            {classData?.length > 4 ? (
              <Slider {...settings} ref={customeSlider}>
                {classData?.map((data, i) => (
                  <TopInClass data={data} key={i} />
                ))}
              </Slider>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '15px',
                }}
              >
                {classData?.map((data, i) => (
                  <TopInClass data={data} key={i} />
                ))}
              </div>
            )}
          </section>
        </div>
      </>
    )
  )
}
const MyFavs = ({ classData }) => {
  const customeSlider = useRef()

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    classData?.length > 0 && (
      <>
        <SubHeading title={`Favourites`} />
        <div className={styles.contai}>
          <section
            className="parnet-frag-color"
            style={{
              marginLeft: '25px',
            }}
          >
            {classData?.length > 4 ? (
              <Slider {...settings} ref={customeSlider}>
                {classData?.map((data, i) => (
                  <TopInClass data={data} key={i} />
                ))}
              </Slider>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '15px',
                }}
              >
                {classData?.map((data, i) => (
                  <TopInClass data={data} key={i} />
                ))}
              </div>
            )}
          </section>
        </div>
      </>
    )
  )
}

const Recommended = ({ recommend, unicefRecon, lessons }) => {
  // let reduceRecon = () => {
  //   recommend?.forEach((recon, index) => {
  //     if(index === 3) return
  //   })
  // }

  // console.log(" 3reduceRecon From recommendation COmponent ====>", reduceRecon());
  const reconBucket = []
  const finalReconLessons = []

  const extractRecon = (buckets) => {
    const unicefRecons = Object.values(buckets)
    for (let i = 0; i < unicefRecons.length; i++) {
      _.forEach(unicefRecons[i], (recon) => reconBucket.push(recon))
    }
    return reconBucket
  }

  const getFinalRecon = () => {
    const myBucket = extractRecon(unicefRecon)
    const myLessons = Object.values(lessons)

    for (let i = 0; i < myLessons.length; i++) {
      if (myLessons[i].id !== myBucket[i]) {
        return myLessons[i]
      }
    }
  }

  return (
    <>
      {unicefRecon !== 0 && (
        <>
          <SubHeading title="Recommended For You" />

          <div className={`${styles.contai}`}>
            <section className="parnet-frag-color">
              {unicefRecon?.map((recData, index) => (
                <Recommendation recData={recData} recIndex={index} />
              ))}
            </section>
          </div>
        </>
      )}
    </>
  )
}

const ClassRoom = ({ data }) => {
  const { user } = useSelector((state) => state.auth)
  const subject = useSelector((state) => state.mySubjectCourse)
  const dispatch = useDispatch()
  const token = user?.token

  //remove async and await
  const handleJoinClass = async () => {
    // e.preventDefault();
    const { value: ipAddress } = await Swal.fire({
      title: 'Enter the class code below',
      input: 'text',
      inputLabel: '',
      inputValue: '',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Enter class code!'
        }
      },
    })

    if (ipAddress) {
      dispatch(fetchSendClassRequest(ipAddress, token))
    }
    if (ipAddress && subject?.classRequestInfo) {
      await Swal.fire(subject?.classRequestInfo)
    }
  }

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <>
      <Row>
        <Col>
          <SubHeading title="Classroom" />
        </Col>
        <Col className="m-5 d-flex flex-row justify-content-end pe-5">
          {/* <Tooltip
            placement="top"
            trigger={["hover"]}
            overlay={
              <span>
                Enter your Class Code to attend a class and interact with top
                Educators.
              </span>
            }
          > */}
          <button
            onClick={handleJoinClass}
            // onClick={() => setModalShow(true)}
            className={` ${styles.joinClass}`}
          >
            JOIN A CLASSROOM
          </button>{' '}
          {/* </Tooltip> */}
        </Col>
      </Row>

      <div className={styles.join}>
        {data?.length === 0 ? (
          <div className={styles.classComment}>
            <div className={styles.classCommentRight}></div>
            <div className={styles.classCommentleft}>
              You have not joined any classroom
            </div>
          </div>
        ) : (
          data?.map((dta, i) => {
            return (
              <Row key={i} className="pb-5">
                <Col md={4} lg={5}>
                  <p>{`${capitalize(dta.classId?.name)} - ${
                    dta.classId?.classCode
                  }`}</p>
                </Col>
                <Col md={4} lg={5}>
                  <p>{`Instructor: ${capitalize(
                    dta?.classId?.userId && dta?.classId?.userId.fullName
                  )}`}</p>
                </Col>
                <Col md={4} lg={2}>
                  {dta?.status === 'approved' ? (
                    <Link
                      passHref
                      href={{
                        pathname: '/classroom',
                        query: dta?.classId._id,
                      }}
                    >
                      {/* <Row style={{ width: "250px", margin: "auto" }}> */}
                      <Button clasName="w-25">Enter Classroom</Button>
                      {/* </Row> */}
                    </Link>
                  ) : (
                    <Button className={` ${styles.graybutton}`}>
                      {capitalize(dta?.status)}
                    </Button>
                  )}
                  {/* // : ( //{' '}
                  <Row style={{ width: '250px', margin: 'auto' }}>
                    // <Button className="w-25">{dta?.status}</Button>
                    //{' '}
                  </Row>
                  // )} */}
                </Col>
              </Row>
            )
          })
        )}
      </div>
    </>
  )
}
export default Dashboard
