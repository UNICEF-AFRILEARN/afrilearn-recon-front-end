import Image from "next/image";
import styles from "./../../student/topInClass.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseDetailsInitiate } from "../../../../../redux/actions/subject";

const topInClass = ({ data }) => {
  const dispatch = useDispatch();
  const img = ["Group 2323", "Group 2324", "Group 2327", "Group 2328"];
  const randomise = () => {
    const num = Math.floor(Math.random() * 4);
    return img[num];
  };
  const subject = useSelector((state) => state.mySubjectCourse);
  const lessons = subject.subjectDetails[1]?.relatedLessons;

  // console.log(data);
  // const [show, setShow] = useState(false);
  const [subjCourId, setsubjCourId] = useState({});
  const toggleModal = (cour, subj) => {
    // setShow(!show);
    setsubjCourId({ courId: cour, subjId: subj });
  };

  useEffect(() => {
    console.log(subjCourId);
    if (Object.keys(subjCourId).length !== 0) {
      dispatch(
        fetchCourseDetailsInitiate(subjCourId.courId, subjCourId.subjId),
      );
    }
  }, [subjCourId]);

  return (
    <section>
      <div className={styles.cont}>
        <div className={`pointer ${styles.contList}`}>
          <Link
            passHref
            href={
              (data.lessonId && data.lessonId.videoUrls.length) ||
              (data.videoUrls && data.videoUrls.length)
                ? {
                    pathname: "/dashboard/student/video/videoPage",
                    query: [
                      data.lessonId ? data.lessonId.id : data.id,
                      data.lessonId
                        ? data.lessonId.videoUrls[0]._id
                        : data.videoUrls[0]._id,
                    ],
                  }
                : {
                    pathname: "/dashboard/student/classnote/classnotePage",
                    query: [data.lessonId ? data.lessonId.id : data.id],
                  }
            }
          >
            <div
              className={styles.rect}
              onClick={() => {
                console.log(data);
                toggleModal(data.courseId.id, data.subjectId.id);
              }}
            >
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
