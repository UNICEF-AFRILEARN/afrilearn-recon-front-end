import Image from "next/image";
import styles from "./../../student/topInClass.module.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Link from "next/link";

const recommendation = ({ data }) => {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  return (
    <>
      {data.videoUrl !== undefined && (
        <div className={`${styles.contList} ${styles.contRec}`}>
          <div className={`${styles.contList}`}>
            <Image
              alt={"afrilearn marketing video"}
              src={data.thumbnailUrl}
              width={240}
              height={160}
              className={styles.rectBox}
            />
            <div className={styles.rect}>
              <Image
                alt={"afrilearn marketing video"}
                src={`/assets/img/features/dashboard/student/Rectangle 7862.png`}
                width={240}
                height={160}
              />
            </div>

            <div className={styles.play_pause} onClick={toggleModal}>
              <Image
                alt={"afrilearn marketing video"}
                src={`/assets/img/features/dashboard/student/Play.png`}
                width={35}
                height={35}
              />
            </div>
          </div>
          <div className={styles.play_textRec}>
            <h6>Because you watched "{data.subject}"</h6>
            <p className={styles.play_textRecFirstp}>Recommended:</p>
            <p className={styles.play_textRecsecondp}>{data.title}</p>
            <div className={styles.buttonPlay}>
              <button className={styles.buttonStyle} onClick={toggleModal}>
                <div className={styles.buttonStyleImage}>
                  <Image
                    alt={"afrilearn marketing video"}
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
              src={data.videoUrl}
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

      {data.videoUrl === undefined && (
        <div className={`${styles.contList} ${styles.contRec}`}>
          <Link href="/dashboard/student">
            <div className={styles.contListRead}>
              <Image
                alt={"afrilearn marketing video"}
                src={data.thumbnailUrl}
                width={65}
                height={52}
                className={styles.rectBox}
              />
              <div className={styles.contList}>
                <p>{data.subjectRecommended}</p>
              </div>
            </div>
          </Link>
          <div className={styles.play_textRec}>
            <h6>Because you read "{data.subject}"</h6>
            <p className={styles.play_textRecFirstp}>Recommended:</p>
            <p className={styles.play_textRecsecondp}>{data.title}</p>
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
      )}
    </>
  );
};

export default recommendation;
