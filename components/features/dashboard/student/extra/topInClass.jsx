import Image from "next/image";
import styles from "./../../student/topInClass.module.css";
import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const topInClass = ({ data }) => {
  const img = ["Group 2323", "Group 2324", "Group 2327", "Group 2328"];
  const randomise = () => {
    const num = Math.floor(Math.random() * 4);
    return img[num];
  };
  const subject = useSelector((state) => state.mySubjectCourse);
  const lessons = subject.subjectDetails[1]?.relatedLessons;

  const videoId = (id) => {
    let dat;
    for (let i = 0; i < lessons.length; i++) {
      if (lessons[i].id === id) {
        dat = i;
      }
    }
    return dat;
  };
  // const videoIds = (id) => {
  //   let dat;
  //   // const lesson = lessons[videoId("6012db92cfe09249249f973a")].videoUrls;
  //   for (let i = 0; i < lesson.length; i++) {
  //     if (lesson[i]._id === id) {
  //       dat = i;
  //     }
  //   }
  //   return dat;
  // };
  // videoIds("6279ec6fe8aff90016cd2918");
  // console.log(videoId("6012db92cfe09249249f973a"));
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  // console.log(data);
  return (
    <section>
      <div className={styles.cont}>
        <div className={styles.contList}>
          <Link
            passHref
            href={{
              pathname: "/dashboard/student/video/videoPage",
              query: {
                // Exam: data.id,
                // Lesson: i,
                term: "First Term",
              },
            }}
          >
            <div className={styles.rect} onClick={toggleModal}>
              {data?.thumbnailUrl ? (
                <Image
                  alt={"afrilearn marketing video"}
                  src={data.thumbnailUrl}
                  width={240}
                  height={160}
                />
              ) : data?.videoUrls?.length ||
                data?.lessonId?.videoUrls?.length ? (
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
              )}
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.play_text}>
        <h6>{data?.subjectId?.mainSubjectId.name}</h6>
        <p>{data?.title ? data?.title : data?.lessonId.title}</p>
      </div>
    </section>
  );
};
export default topInClass;
