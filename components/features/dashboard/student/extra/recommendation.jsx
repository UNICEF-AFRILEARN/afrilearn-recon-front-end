import Image from 'next/image'
import styles from './../../student/topInClass.module.css'
import { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseDetailsInitiate } from '../../../../../redux/actions/subject'
import { useRouter } from 'next/router'

const Recommendation = ({ dataRecon, recData, recIndex }) => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const [subjectName, setSubjectName] = useState('')
  const subject = useSelector((state) => state.mySubjectCourse)
  const toggleModal = (id) => {
    const reconId =
      subject.dashboardWeb.enrolledCourse?.courseId?.relatedSubjects?.filter(
        (data) => {
          return data.mainSubjectId.name === recData.recommended_subject
        }
      )

    dispatch(
      fetchCourseDetailsInitiate(
        reconId && reconId[0].courseId,
        reconId && reconId[0].id
      )
    )

    const lessonVideoId =
      reconId &&
      reconId[0].relatedLessons?.filter((data) => {
        return data.id === id
      })
    console.log(lessonVideoId)
    // useEffect(() => {
    // lessonVideoId?.videoUrls &&
    reconId &&
    reconId[0].relatedLessons.filter((data) => {
      return data.id === id
    })[0].videoUrls[0]
      ? router.push({
          pathname: '/dashboard/student/video/videoPage/',
          query: [
            id,
            reconId[0].relatedLessons.filter((data) => {
              return data.id === id
            })[0].videoUrls[0]._id,
          ],
        })
      : router.push({
          pathname: '/dashboard/student/classnote/classnotePage',
          query: [id],
        })
    // }, [lessonVideoId])
  }

  // const lessons = subject.subjectDetails[1]?.relatedLessons
  // console.log(lessons)
  console.log(subject)
  // const filterRecon = () => {

  // }
  console.log('recData from test', recData)

  return (
    <>
      {recData?.videourl !== undefined && (
        <div
          className={`${styles.contList} ${styles.contRec}`}
          data-testid="reconlist"
        >
          {' '}
          <div className={`${styles.contList} `}>
            <Image
              alt={'afrilearn marketing video'}
              src="/assets/img/thumbnail.jpg"
              width={240}
              height={160}
              className={styles.rectBox}
            />
            <div className={styles.rect}>
              <Image
                alt={'afrilearn marketing video'}
                src={`/assets/img/features/dashboard/student/Rectangle 7862.png`}
                width={240}
                height={160}
              />
            </div>

            <div
              className={`pointer ${styles.play_pause}`}
              onClick={() => toggleModal(recData.recommended_id)}
            >
              <Image
                alt={'afrilearn marketing video'}
                src={`/assets/img/features/dashboard/student/Play.png`}
                width={35}
                height={35}
              />
            </div>
          </div>
          <div
            className={styles.play_textRec}
            style={{ width: '85%', margin: 'auto' }}
          >
            <h6>Because "{recData.reason}"</h6>
            <p className={styles.play_textRecFirstp}>Recommended:</p>
            <p className={styles.play_textRecsecondp}>
              {recData.recommended_subject}
            </p>
            <div className={styles.buttonPlay}>
              <button
                className={styles.buttonStyle}
                onClick={() => toggleModal(recData.recommended_id)}
              >
                <div className={styles.buttonStyleImage}>
                  <Image
                    alt={'afrilearn marketing video'}
                    src={`/assets/img/features/dashboard/student/arrowhead.png`}
                    width={13}
                    height={13}
                  />
                </div>
                lesson 1
              </button>
            </div>
          </div>
          {/* <Modal
            show={show}
            onHide={toggleModal}
            backdrop="static"
            keyboard={false}
            className={styles.trendingModalClass}
          >
            <video
              src={recData.videoUrl}
              width="800px"
              height="auto"
              controls
              autoPlay
            />
            <Button
              variant="secondary"
              onClick={toggleModal}
              className={styles.backgroundColor}
            >
              Close
            </Button>
          </Modal> */}
        </div>
      )}
    </>
  )
}

export default Recommendation
