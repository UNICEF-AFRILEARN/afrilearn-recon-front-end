import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../school/dashbord.module.css";
import Subjects from "../../student/extra/subjects";
import PastQuestionaira from "../../student/extra/pastQuestionaira";
import Image from "next/image";
import Link from "next/link";
import { getSchoolCourses } from "../../../../../redux/actions/subject";

const Schoolsubject = () => {
  const dispatch = useDispatch();
  const { schoolProfile } = useSelector((state) => state.school);
  const { user } = useSelector((state) => state.auth);
  const subject = useSelector((state) => state.mySubjectCourse);
  const schoolClasses = schoolProfile?.schoolClassesData;
  console.log(subject);
  useEffect(() => {
    dispatch(getSchoolCourses(user?.user?.schoolId?._id));
  }, [getSchoolCourses]);

  const [courseIndex, setCourseIndex] = useState(0);

  return (
    <>
      <div>
        <div className={`row ${styles.subHero}`}>
          <div className={` col-md-2 ${styles.heading}`}>
            {" "}
            <h3>My Subjects</h3>
          </div>
          <div className={` col-md-1 `}>
            <select
              className={styles.headingSelect}
              onChange={(e) => {
                e.preventDefault();
                setCourseIndex(e.target.value);
              }}
            >
              <option 
              value={"default"}>Select a Class
              </option>
              {schoolClasses &&
                schoolClasses.map((schoolClass, i) => (
                  <option value={i}>{schoolClass.className}</option>
                ))}
            </select>
          </div>
          <div className={` col-md-3 ${styles.headingImage}`}></div>
        </div>
        <Subjects
          subData={
            subject?.schcourse?.courses &&
            subject?.schcourse?.courses[courseIndex]?.relatedSubjects
          }
          schoolClasses={schoolClasses && schoolClasses[courseIndex]?.className}
        />
        <PastQuestionaira
          subData={
            subject?.schcourse?.courses &&
            subject?.schcourse?.courses[courseIndex]?.relatedPastQuestions
          }
        />
      </div>
    </>
  );
};

export default Schoolsubject;
