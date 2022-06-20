import Image from "next/image";
import styles from "./../../student/topInClass.module.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const topInClass = ({ data }) => {
  // console.log(data.thumbnailUrl);

  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <>
      {/* <SubHeading title={`Top in ${title.class}`} /> */}
      <div className={styles.cont}>
        <div className={styles.contList}>
          <Image
            alt={"afrilearn marketing video"}
            src={data?.thumbnailUrl}
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
          <div className={styles.play_text}>
            <h6>{data?.subject}</h6>
            <p>{data?.title}</p>
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
            src={data?.videoUrl}
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
    </>
  );
};
export default topInClass;
