import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./student.module.css";
import SubHeading from "./extra/subHeading";
import PastQuestion from "./extra/pastQuestion";
import TopInClass from "./extra/topInClass";
import Recommendation from "./extra/recommendation";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import Subjects from "./extra/subjects";
import GetSolution from "./extra/getSolution";
import PerfomanceSumm from "./extra/PerfomanceSumm";
import RecentActivity from "./extra/recentActivity";
import Q from "./extra/recentActivity";
import _ from "lodash";
import StudentHeropage from "./studentHeropage";
import {
  fetchCourseInitiate,
  // fetchReconLessonInitiate,
  fetchUnicefReconInitiate,
  fetchActivitiesInitiate,
  fetchSingleLessonInitiate,
  fetchLessonsInitiate,
} from "../../../../redux/actions/courses";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { user, registerUser } = useSelector((state) => state.auth);
  const subject = useSelector((state) => state.mySubjectCourse);
  console.log(subject);
  const dispatch = useDispatch();
  const router = useRouter();
  let quary = router.query.id;

  const enrolledCourses = user.user?.enrolledCourses[quary];

  // const { reconLesson, lessons, unicefRecon, activities } = useSelector(
  //   (state) => state.Mycourses,
  // );

  console.log(
    "Register registerUser from dashboard INDEX =====>",
    registerUser.user,
  );
  console.log("Register user from dashboard INDEX =====>", user);

  const schoollevel = "JSS One";
  const Subject = "Basic Technology"; /*static data"*/
  const lesson = "6012c173cfe09249249f7ece"; /*static data"*/
  const userId = "62a0bc984af2d90016b72096"; /*static data"*/
  const lessonId = "6012c2a7cfe09249249f7f9c"; /*static data"*/

  // const schoollevel = "JSS One"
  // const subject = "Home Economics"
  // const lesson  = "6012d3aacfe09249249f8b20"

  const personData = {
    personClass: enrolledCourses.courseId.name,
    personName: user.user?.fullName,
  };
  const token = user.token;

  useEffect(() => {
    console.log(subject);

    dispatch(fetchLessonsInitiate());
    dispatch(fetchSingleLessonInitiate(lessonId));
    dispatch(fetchActivitiesInitiate(token));
    dispatch(fetchUnicefReconInitiate(schoollevel, Subject, lesson));
    // dispatch(fetchReconLessonInitiate(userId, token));
    dispatch(fetchCourseInitiate());
  }, [
    fetchCourseInitiate,
    // fetchReconLessonInitiate,
    fetchUnicefReconInitiate,
    fetchActivitiesInitiate,
    fetchLessonsInitiate,
  ]);

  // console.log("activities from Dashboard index call ====>", activities);

  return (
    <>
      <StudentHeropage data={personData} />
      <div>
        <SubHeading title="My Subject" />
        <Subjects
          subData={subject?.subject[1]?.enrolledCourse.courseId.relatedSubjects}
        />
        ;
      </div>
      <PastQuestion
        subData={
          subject?.subject[1]?.enrolledCourse.courseId.relatedPastQuestions
        }
      />
      <TopInClasses
        classData={subject?.subject[0]?.lessons}
        classes={personData.personClass}
      />
      <PerfomanceSumm />
      <GetSolution />
      <ClassRoom />
      {/* <Recommended
        recommend={reconLesson?.recommendation}
        unicefRecon={unicefRecon}
        lessons={lessons}
      /> */}
      {/* <RecentActivity activities={activities?.recentActivities} /> */}
    </>
  );
};;

const TopInClasses = ({ classData, classes }) => {
  const customeSlider = useRef();

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    cssEase: "linear",
    initialSlide: 0,
    arrows: false,
  };
  return (
    <>
      <SubHeading title={`Top in ${classes}`} />
      <div className={styles.contai}>
        <section className="parnet-frag-color">
          <Slider {...settings} ref={customeSlider}>
            {classData?.map((data, i) => (
              <TopInClass data={data} key={i} />
            ))}
          </Slider>
        </section>
      </div>
      ;
    </>
  );
};

const Recommended = ({ recommend, unicefRecon, lessons }) => {
  console.log("From recommendation COmponent ====>", recommend);
  console.log("unicefRecon from recommendation COmponent ====>", unicefRecon);
  console.log("lessons From recommendation COmponent ====>", lessons);

  const reconBucket = [];
  const finalReconLessons = [];

  const extractRecon = (buckets) => {
    const unicefRecons = Object.values(buckets);
    for (let i = 0; i < unicefRecons.length; i++) {
      _.forEach(unicefRecons[i], (recon) => reconBucket.push(recon));
    }
    return reconBucket;
  };

  const getFinalRecon = () => {
    const myBucket = extractRecon(unicefRecon);
    const myLessons = Object.values(lessons);

    for (let i = 0; i < myLessons.length; i++) {
      if (myLessons[i].id !== myBucket[i]) {
        return myLessons[i];
      }
    }
  };
  console.log("Final answer", getFinalRecon());
  // const unicefRecons = Object.values(unicefRecon);
  return (
    <>
      {recommend !== 0 && (
        <>
          <SubHeading title="Recommended For You" />

          <div className={styles.contai}>
            <section className="parnet-frag-color">
              {recommend?.map((recData) => (
                <Recommendation dataRecon={recData} />
              ))}
            </section>
          </div>
        </>
      )}
    </>
  );
};

const ClassRoom = () => {
  return (
    <>
      <section className={styles.join}>
        <SubHeading title="Classroom" />

        <button className={styles.joinClass}>JOIN A CLASSROOM</button>
        <div className={styles.classComment}>
          <div className={styles.classCommentRight}></div>

          <div className={styles.classCommentleft}>
            You have not joined any classroom
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
