import styles from "./student.module.css";
import SubHeading from "./extra/subHeading";
import PastQuestion from "./extra/pastQuestion";
import TopInClass from "./extra/topInClass";
import Recommendation from "./extra/recommendation";
import Image from "next/image";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Subjects from "./extra/subjects";
import GetSolution from "./extra/getSolution";
import PerfomanceSumm from "./extra/PerfomanceSumm";
import RecentActivity from "./extra/recentActivity";
import Q from "./extra/recentActivity";
import StudentHeropage from "./studentHeropage";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourseInitiate } from "../../../../redux/actions/subject";

const Dashboard = () => {
  const recommendationDatas = [
    {
      _id: "6012d2b2cfe09249249f8a0e",
      subject: "Civic Education",
      class: "JSS One",
      title: "Adverbial Phrase and Adjectival Clause",
      thumbnailUrl:
        "https://afrilearn-media.s3.eu-west-3.amazonaws.com/jss-one/civic-education/third-term/national-unity/thumbnail/national-unity.jpeg",
      videoUrl: "Adverbial Phrase and Adjectival Clause",
    },
    {
      _id: "6012d9fecfe09249249f9358",
      subjectRecommended: "Data Science",
      subject: "Literature in English",
      class: "SSS One",
      title: "Environmental Health and Science",
      thumbnailUrl: "/assets/img/features/dashboard/student/Bookk.png",
    },
    {
      _id: "6012d9fecfe09249249f9358",
      subject: "Literature in English",
      class: "SSS One",
      title: "Environmental Health and Science",
      thumbnailUrl:
        "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/literature-in-english/third-term/thumbnail/figures-of-speech.jpeg",
      videoUrl:
        "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/literature-in-english/third-term/figures-of-speech-ii/video-lessons/1622635953448Figures+Of+Speech+_+Antithesis+_+Afrilearn.mp4",
    },
  ];

  const user = useSelector((state) => state.auth);
  const subject = useSelector((state) => state.MySubject);
  const dispatch = useDispatch();

  const checkIf = () => {
    let check;
    if (
      user.user.user?.enrolledCourses.length === 1 &&
      user.user.user?.enrolledCourses[0].courseId
    ) {
      check = user.user.user?.enrolledCourses[0];
    }
    if (
      user.user.user?.enrolledCourses.length === 2 &&
      user.user.user?.enrolledCourses[0].courseId && subject.checkChange
    ) {
      check = user.user.user?.enrolledCourses[0];
    }
    if (
      user.user.user?.enrolledCourses.length === 2 &&
      user.user.user?.enrolledCourses[0].courseId && !subject.checkChange
    ) {
      check = user.user.user?.enrolledCourses[1];
    }
    if (
      user.user.user?.enrolledCourses.length === 2 &&
      !user.user.user?.enrolledCourses[0].courseId
    ) {
      check = user.user.user?.enrolledCourses[1];
    }
    return check;
  };

  const personData = {
    personClass: checkIf().courseId.name,
    personName: user.user.user?.fullName,
  };

  const person_id = checkIf()._id;
  const personId = checkIf().courseId.id;
  const token = user.user.token;
  useEffect(() => {
    dispatch(fetchCourseInitiate(personId, person_id, token));
    console.log(subject);
  }, [personId]);

  return (
    <>
      <StudentHeropage data={personData} />
      <div>
        <SubHeading title="My Subject" />
        <Subjects
          subData={subject.subject[1]?.enrolledCourse.courseId.relatedSubjects}
        />
        ;
      </div>
      <PastQuestion
        subData={
          subject.subject[1]?.enrolledCourse.courseId.relatedPastQuestions
        }
      />
      <TopInClasses
        classData={subject.subject[0]?.lessons}
        classes={personData.personClass}
      />
      <PerfomanceSumm />
      <GetSolution />
      <ClassRoom />
      <Recommended recommend={recommendationDatas} />
      <RecentActivity />
    </>
  );
};

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
            {classData?.map((data) => (
              <TopInClass data={data} />
            ))}
          </Slider>
        </section>
      </div>
      ;
    </>
  );
};

const Recommended = ({ recommend }) => {
  return (
    <>
      {recommend !== 0 && (
        <>
          <SubHeading title="Recommended For You" />

          <div className={styles.contai}>
            <section className="parnet-frag-color">
              {recommend.map((recData) => (
                <Recommendation data={recData} />
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
