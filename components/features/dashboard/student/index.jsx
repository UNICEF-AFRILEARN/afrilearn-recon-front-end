import styles from "./student.module.css";
import SubHeading from "./extra/subHeading";
import PastQuestionaira from "./extra/pastQuestionaira";
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
import _ from "lodash";
import StudentHeropage from "./studentHeropage";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCoursesInitiate,
  fetchGetFavouriteInitiate,
  fetchGetUnfinishedVideosInitiate,
  fetchGetWebInitiate,
  fetchSendClassRequest,
  fetchstoreSubject,
  fetchSubjectInitiate,
} from "../../../../redux/actions/subject";
import Swal from "sweetalert2";
import {
  // fetchCourseInitiate,
  fetchReconLessonInitiate,
  fetchUnicefReconInitiate,
  fetchActivitiesInitiate,
  fetchSingleLessonInitiate,
  fetchLessonsInitiate,
} from "../../../../redux/actions/courses";
import { Button, Col, Modal, Row, Tooltip } from "react-bootstrap";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { reconLesson, lessons, unicefRecon, activities } = useSelector(
    (state) => state.Mycourses,
  );
  const { user, registerUser } = useSelector((state) => state.auth);
  // const { registerUser } = useSelector((state) => state.auth);
  const subject = useSelector((state) => state.mySubjectCourse);
  console.log(subject);

  console.log(
    "Register registerUser from dashboard INDEX =====>",
    registerUser.user,
  );
  console.log("Register user from dashboard INDEX =====>", user);

  const userId = "62a0bc984af2d90016b72096";
  const token = user.token;
  const lessonId = "6012c2a7cfe09249249f7f9c";
  // To be changed later

  const personData = {
    personClass: user.user?.enrolledCourses[0]
      ? user.user?.enrolledCourses[0].courseId.name
      : user.user?.enrolledCourses[1].courseId.name,
    personName: user.user?.fullName,
  };
  const person_id = user.user?.enrolledCourses[0]
    ? user.user?.enrolledCourses[0].courseId._id
    : user.user?.enrolledCourses[1].courseId._id;
  const user_id = user.user?.enrolledCourses[0]
    ? user.user?.enrolledCourses[0].userId
    : user.user?.enrolledCourses[1].userId;
  useEffect(() => {
    // dispatch(fetchLessonsInitiate());
    dispatch(fetchSingleLessonInitiate(lessonId));
    dispatch(fetchActivitiesInitiate(token));
    // dispatch(fetchUnicefReconInitiate(schoollevel, Subject, lesson));
    dispatch(fetchReconLessonInitiate(userId, token));
    dispatch(fetchSubjectInitiate(person_id, token));
    dispatch(fetchGetFavouriteInitiate(token));
    dispatch(fetchGetUnfinishedVideosInitiate(token));
    // dispatch(fetchGetWebInitiate(person_id, token));
  }, [
    // fetchCourseInitiate,
    fetchReconLessonInitiate,
    fetchUnicefReconInitiate,
    fetchActivitiesInitiate,
    fetchLessonsInitiate,
    fetchSubjectInitiate,
    fetchGetUnfinishedVideosInitiate,
    // fetchGetWebInitiate,
  ]);

  console.log("activities from Dashboard index call ====>", activities);

  return (
    <>
      <StudentHeropage data={personData} />
      <div>
        <SubHeading title="My Subject" />
        <Subjects
          subData={subject?.subject[2]?.enrolledCourse.courseId.relatedSubjects}
        />
      </div>
      <PastQuestionaira
        subData={
          subject?.subject[2]?.enrolledCourse.courseId.relatedPastQuestions
        }
      />
      <UnfinshedVideos classData={subject?.unfinishedStore.unFinishedVideos} />
      <MyFavs classData={subject?.favourite?.favouriteVideos} />
      <TopInClasses
        classData={subject?.subject[1]?.lessons}
        classed={personData.personClass}
      />
      <PerfomanceSumm />
      <GetSolution />
      <ClassRoom data={subject?.subject[0]?.classMembership} />
      <Recommended
        recommend={reconLesson?.recommendation}
        unicefRecon={unicefRecon}
        lessons={lessons}
      />
      <RecentActivity activities={activities?.recentActivities} />
    </>
  );
};

const TopInClasses = ({ classData, classed }) => {
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
    rows: "1",
  };
  return (
    <>
      <SubHeading title={`Top in ${classed}`} />
      <div className={styles.contai}>
        <section className="parnet-frag-color">
          {classData?.length > 4 ? (
            <Slider {...settings} ref={customeSlider}>
              {classData?.map((data, i) => (
                <TopInClass data={data} key={i} />
              ))}
            </Slider>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              {classData?.map((data, i) => (
                <TopInClass data={data} key={i} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
};
const UnfinshedVideos = ({ classData }) => {
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
    rows: "1",
  };
  return (
    <>
      <SubHeading title={`Unfinished Videos`} />
      <div className={styles.contai}>
        <section className="parnet-frag-color">
          {classData?.length > 4 ? (
            <Slider {...settings} ref={customeSlider}>
              {classData?.map((data, i) => (
                <TopInClass data={data} key={i} />
              ))}
            </Slider>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              {classData?.map((data, i) => (
                <TopInClass data={data} key={i} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
};
const MyFavs = ({ classData }) => {
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
      <SubHeading title={`Favourites`} />
      <div className={styles.contai}>
        <section className="parnet-frag-color">
          {classData?.length > 4 ? (
            <Slider {...settings} ref={customeSlider}>
              {classData?.map((data, i) => (
                <TopInClass data={data} key={i} />
              ))}
            </Slider>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              {classData?.map((data, i) => (
                <TopInClass data={data} key={i} />
              ))}
            </div>
          )}
        </section>
      </div>
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
                <Recommendation data={recData} />
              ))}
            </section>
          </div>
        </>
      )}
    </>
  );
};

const ClassRoom = ({ data }) => {
  const subject = useSelector((state) => state.mySubjectCourse);

  const handleJoinClass = async () => {
    // e.preventDefault();
    const { value: ipAddress } = await Swal.fire({
      title: "Enter the class code below",
      input: "text",
      inputLabel: "",
      inputValue: "",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "Enter class code!";
        }
      },
    });

    if (ipAddress) {
      dispatch(fetchSendClassRequest(ipAddress, token));
    }
    if (ipAddress && subject?.classRequestInfo) {
      Swal.fire(subject?.classRequestInfo);
    }
  };
  return (
    <>
      <Row>
        <Col>
          <SubHeading title="Classroom" />
        </Col>
        <Col className="m-5 d-flex flex-row justify-content-end pe-5">
          {/* <Tooltip
            placement="top"
            trigger={["hover"]}
            overlay={
              <span>
                Enter your Class Code to attend a class and interact with top
                Educators.
              </span>
            }
          > */}
          <button
            onClick={handleJoinClass}
            // onClick={() => setModalShow(true)}
            className={` ${styles.joinClass}`}
          >
            JOIN A CLASSROOM
          </button>{" "}
          {/* </Tooltip> */}
        </Col>
      </Row>

      <div className={styles.join}>
        {data?.length === 0 ? (
          <div className={styles.classComment}>
            <div className={styles.classCommentRight}></div>
            <div className={styles.classCommentleft}>
              You have not joined any classroom
            </div>
          </div>
        ) : (
          data?.map((dta, i) => {
            return (
              <Row key={i} className="pb-5">
                <Col>
                  <p>{`${dta.classId?.name} - ${dta.classId?.classCode}`}</p>
                </Col>
                <Col>
                  <p>{`Instructor: ${
                    dta?.classId?.userId && dta?.classId?.userId.fullName
                  }`}</p>
                </Col>
                <Col>
                  {dta?.status === "approved" ? (
                    <Link
                      passHref
                      href={{
                        pathname: "/classroom",
                        query: dta?.classId._id,
                      }}
                    >
                      {/* <Row style={{ width: "250px", margin: "auto" }}> */}
                      <Button clasName="w-25">Enter Classroom</Button>
                      {/* </Row> */}
                    </Link>
                  ) : (
                    <Row style={{ width: "250px", margin: "auto" }}>
                      <Button className="w-25">{dta?.status}</Button>
                    </Row>
                  )}
                </Col>
              </Row>
            );
          })
        )}
      </div>
    </>
  );
};
export default Dashboard;
