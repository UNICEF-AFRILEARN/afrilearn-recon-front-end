import Image from "next/image";
import styles from "./../../student/topInClass.module.css";
import { useState } from "react";

const topInClass = ({ data }) => {
  const img = ["Group 2323", "Group 2324", "Group 2327", "Group 2328"];
  const randomise = () => {
    const num = Math.floor(Math.random() * 4);
    return img[num];
  };
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <>
      <div className={styles.cont}>
        <div className={styles.contList}>
          <div className={styles.rect} onClick={toggleModal}>
            {data.thumbnailUrl ? (
              <Image
                alt={"afrilearn marketing video"}
                src={data.thumbnailUrl}
                width={240}
                height={160}
              />
            ) : data.videoUrls.length ? (
              <Image
                alt={"afrilearn marketing video"}
                src={`/assets/img/features/dashboard/student/random/${randomise()}.png`}
                width={240}
                height={160}
              />
            ) : (
              <Image
                alt={"afrilearn marketing video"}
                src={`/assets/img/features/dashboard/student/random/classnote.png`}
                width={240}
                height={160}
              />
            )}{" "}
          </div>
        </div>
      </div>
      <div className={styles.play_text}>
        <h6>{data?.subjectId?.mainSubjectId.name}</h6>
        <p>{data?.title}</p>
      </div>
    </>
  );
};
export default topInClass;
