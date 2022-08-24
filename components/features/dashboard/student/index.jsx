import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from "./student.module.css";
import SubHeading from "./extra/subHeading";
import PastQuestion from "./extra/pastQuestion";
import TopInClass from "./extra/topInClass";
import Recommendation from "./extra/recommendation";
// import Image from "next/image";
import Slider from "react-slick";
import { useRef } from "react";
import Link from "next/link";
import Subjects from "./extra/subjects";
import GetSolution from "./extra/getSolution";
import PerfomanceSumm from "./extra/PerfomanceSumm";
import RecentActivity from "./extra/recentActivity";
import Q from "./extra/recentActivity";
import _ from "lodash";
import StudentHeropage from "./studentHeropage";
import { fetchCourseInitiate, fetchReconLessonInitiate, fetchUnicefReconInitiate, fetchActivitiesInitiate, fetchSingleLessonInitiate, fetchLessonsInitiate} from "../../../../redux/actions/courses";


const Dashboard = () => {
  const dispatch = useDispatch();
  const {reconLesson, lessons, unicefRecon, activities } = useSelector(state => state.Mycourses);
  const { user }  = useSelector(state => state.auth);
  const {registerUser}  = useSelector(state => state.auth);

  console.log("Register registerUser from dashboard INDEX =====>", registerUser.user);
  console.log("Register user from dashboard INDEX =====>", user);

  const userId = "62a0bc984af2d90016b72096"
  const token = user.token
  const lessonId = '6012c2a7cfe09249249f7f9c'

  useEffect(() => {
    dispatch(fetchLessonsInitiate())
    dispatch(fetchSingleLessonInitiate(lessonId))
    dispatch(fetchActivitiesInitiate(token))
    // dispatch(fetchUnicefReconInitiate(schoollevel, subject, lesson))
    dispatch(fetchReconLessonInitiate(userId, token))
    // dispatch(fetchCourseInitiate())
  }, [fetchCourseInitiate, fetchReconLessonInitiate, fetchUnicefReconInitiate,fetchActivitiesInitiate, fetchLessonsInitiate])

  console.log("activities from Dashboard index call ====>", activities)

  const datas = [
    { class: "SSS One" },
    [
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
        subject: "Literature in English",
        class: "SSS One",
        title: "Environmental Health and Science",
        thumbnailUrl:
          "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/literature-in-english/third-term/thumbnail/figures-of-speech.jpeg",
        videoUrl:
          "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/literature-in-english/third-term/figures-of-speech-ii/video-lessons/1622635953448Figures+Of+Speech+_+Antithesis+_+Afrilearn.mp4",
      },
      {
        _id: "6012d94ecfe09249249f921a",
        subject: "Economics",
        title: "Indices and Algorithm Part 1",
        class: "SSS One",
        thumbnailUrl:
          "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/meaning-of-economics/thumbnail/economics.jpeg",
        videoUrl:
          "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/meaning-of-economics/video-lessons/1622627851376Meaning+Of+Economics+_+Economics+_+Afrilearn.mp4",
      },
      {
        _id: "6012d94ecfe09249249f9222",
        subject: "Economics",
        class: "SSS One",
        title: "Scale of Preference",
        thumbnailUrl:
          "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/theory-of-production/thumbnail/production.jpeg",
        videoUrl:
          "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/theory-of-production/video-lessons/1622626857471Production+_+Economics+_+Afrilearn.mp4",
      },
      {
        _id: "6012d94ecfe09249249f921a",
        subject: "Economics",
        title: "Importance of Socio-Economic Relationship in the Society",
        class: "SSS One",
        thumbnailUrl:
          "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/meaning-of-economics/thumbnail/economics.jpeg",
        videoUrl:
          "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/meaning-of-economics/video-lessons/1622627851376Meaning+Of+Economics+_+Economics+_+Afrilearn.mp4",
      },
      {
        _id: "6012d94ecfe09249249f9222",
        subject: "Economics",
        class: "SSS One",
        title: "Scale of Preference",
        thumbnailUrl:
          "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/theory-of-production/thumbnail/production.jpeg",
        videoUrl:
          "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/theory-of-production/video-lessons/1622626857471Production+_+Economics+_+Afrilearn.mp4",
      },
      {
        _id: "6012d94ecfe09249249f921a",
        subject: "Economics",
        title: "Importance of Socio-Economic Relationship in the Society",
        class: "SSS One",
        thumbnailUrl:
          "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/meaning-of-economics/thumbnail/economics.jpeg",
        videoUrl:
          "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/meaning-of-economics/video-lessons/1622627851376Meaning+Of+Economics+_+Economics+_+Afrilearn.mp4",
      },
    ],
  ];

  return (
    <>
      <StudentHeropage />
      <div>
      <SubHeading title="My Subject" />
      <Subjects />
      </div>
      <PastQuestion />
      <TopInClasses classData={datas} />
      <PerfomanceSumm />
      <GetSolution />
      <ClassRoom />
      <Recommended recommend={reconLesson?.recommendation} unicefRecon={unicefRecon} lessons={lessons} />
      <RecentActivity activities={activities?.recentActivities}/>
    </>
  );
};



const TopInClasses = ({ classData }) => {
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
      <SubHeading title={`Top in ${classData[0].class}`} />
      <div className={styles.contai}>
        <section className="parnet-frag-color">
          <Slider {...settings} ref={customeSlider}>
            {classData[1].map((data) => (
              <TopInClass data={data} />
            ))}
          </Slider>
        </section>
      </div>
      
      ;
    </>
  );
};

const Recommended = ({recommend, unicefRecon, lessons}) => {
  console.log("From recommendation COmponent ====>", recommend)
  console.log("unicefRecon from recommendation COmponent ====>", unicefRecon)
  console.log("lessons From recommendation COmponent ====>", lessons)


  const reconBucket = []
  const finalReconLessons = []

  const extractRecon = (buckets) => {
      const unicefRecons = Object.values(buckets);
      for (let i = 0; i < unicefRecons.length; i++) {
        _.forEach(unicefRecons[i], (recon) => reconBucket.push(recon));
        
      }
      return reconBucket
    }

    
    const getFinalRecon = () => {
      const myBucket = extractRecon(unicefRecon)
      const myLessons = Object.values(lessons);

      for (let i = 0; i < myLessons.length; i++) {
          if(myLessons[i].id !== myBucket[i]){
            return myLessons[i]
          }
      }
      

    }
    console.log("Final answer", getFinalRecon())
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
