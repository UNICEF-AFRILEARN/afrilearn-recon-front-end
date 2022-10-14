import Image from 'next/image'
import styles from './../../student/topInClass.module.css'
import { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const recommendation = ({ dataRecon, recData, recIndex }) => {
  const [show, setShow] = useState(false)
  const toggleModal = () => setShow(!show)

  // const filterRecon = () => {

  // }

  return (
    <>
      {recData?.videourl !== undefined && (
        <div
          key={recData?.videourl}
          className={`${styles.contList} ${styles.contRec}`}
        >
          <div className={`${styles.contList}`}>
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

            <div className={styles.play_pause} onClick={toggleModal}>
              <Image
                alt={'afrilearn marketing video'}
                src={`/assets/img/features/dashboard/student/Play.png`}
                width={35}
                height={35}
              />
            </div>
          </div>
          <div className={styles.play_textRec}>
            <h6>Because "{recData.reason}"</h6>
            <p className={styles.play_textRecFirstp}>Recommended:</p>
            <p className={styles.play_textRecsecondp}>
              {recData.recommended_subject}
            </p>
            <div className={styles.buttonPlay}>
              <button className={styles.buttonStyle} onClick={toggleModal}>
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

          <Modal
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
          </Modal>
        </div>
      )}

      {/* {dataRecon?.recommended.videoUrls[0]?.videoUrl === undefined && (
        <div className={`${styles.contList} ${styles.contRec}`}>
          <Link href="/dashboard/student">
            <div className={styles.contListRead}>
              <Image
                alt={"afrilearn marketing video"}
                src={dataRecon?.recommended.thumbnailUrl}
                width={65}
                height={52}
                className={styles.rectBox}
              />
              <div className={styles.contList}>
                <p>{dataRecon?.subjectRecommended}</p>
              </div>
            </div>
          </Link>
          <div className={styles.play_textRec}>
            <h6>Because you read "{dataRecon?.reason.title}"</h6>
            <p className={styles.play_textRecFirstp}>Recommended:</p>
            <p className={styles.play_textRecsecondp}>
              {dataRecon?.recommended.title}
            </p>
            <div className={styles.buttonPlay}>
              <Link href="/dashboard/student">
                <button className={styles.buttonStyle}>
                  <div className={styles.buttonStyleImage}>
                    <Image
                      alt={"afrilearn marketing video"}
                      src={`/assets/img/features/dashboard/student/Document.png`}
                      width={13}
                      height={13}
                    />
                  </div>
                  Class note
                </button>
              </Link>
            </div>
          </div>
        </div>
      )} */}
    </>
  )
}

export default recommendation
