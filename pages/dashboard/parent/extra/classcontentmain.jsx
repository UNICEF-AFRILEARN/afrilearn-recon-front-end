import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentClassSubjectInitiate } from "../../../../redux/actions/studentClass";
import { fetchCourseDetailsInitiate } from "../../../../redux/actions/subject";
import styles from "../../../../styles/parentdashboard.module.css";
import Classcontentcard from "./classcontentcard";
import { dataContentNav } from "./classcontentmainData";

const Classcontentmain = ({ myChildren, course, classId }) => {
  const dispatch = useDispatch();

  const getContentIds = (id) => {
    setContentId(id);
    console.log("contentId from coursecontent==", contentId);
  };

  let course_sorted = course?.course?.relatedSubjects;
  console.log(course_sorted);
  // course_sorted?.map((course_sorted) => course_sorted.mainSubjectId.name);
  const [contentId, setContentId] = useState(
    course_sorted && course_sorted[0].mainSubjectId.id,
  );

  const [subjCourId, setsubjCourId] = useState({
    courId: course_sorted && course_sorted[0].courseId,
    subjId: course_sorted && course_sorted[0].id,
  });
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
    <div className={styles.contentmainwrapper}>
      <div className={styles.contentinnernavwrapper}>
        <ul>
          {course_sorted &&
            course_sorted?.map((course_sorted) => (
              <li
                key={course_sorted.mainSubjectId.id}
                onClick={() => {
                  console.log(course_sorted);
                  getContentIds(course_sorted.mainSubjectId.id);
                  toggleModal(course_sorted.courseId, course_sorted.id);
                }}
                className="pointer"
                // onClick={() => {
                //   console.log(data);
                //   toggleModal(data.courseId.id, data.subjectId.id);
                // }}
              >
                {course_sorted.mainSubjectId.name}
              </li>
            ))}
        </ul>
      </div>
      <Classcontentcard
        contentId={contentId}
        course_sorted={course_sorted}
        classId={classId}
      />
    </div>
  );
};

export default Classcontentmain;
