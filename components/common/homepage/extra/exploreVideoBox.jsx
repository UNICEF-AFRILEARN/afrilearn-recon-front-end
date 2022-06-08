import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "next/image";
import { toProperCase, cutString } from "../../../../utils/helper";
import styles from "./../homepage.module.css";

const ExploreVideoBox = ({ data }) => {
  console.log(data);
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  return (
    <>
      <div
        className="col-md-3 relative video-corrected-responsive"
        onClick={toggleModal}
      >
        <Image
          alt={"afrilearn marketing video"}
          src={data?.thumbnailUrl}
          width={303}
          height={150}
        />
        <span>
          {data?.subject}
          <hr />
          <small>
            {data?.class} ||{" "}
            {data && data.title
              ? toProperCase(cutString(data.title, 20))
              : null}
          </small>
        </span>
      </div>
      <Modal
        show={show}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
        className={styles.trendingModalClass}
      >
        {/* <div className={styles.videoPlaying}> */}
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
        {/* </div> */}
      </Modal>
    </>
  );
};

export default ExploreVideoBox;
