import React, { useState, useEffect } from "react";

import Link from "next/link";
import styles from "./student.module.css";
import { fetchCourseInitiate } from "../../../../redux/actions/courses";
import { fetchReconLessonInitiate } from "../../../../redux/actions/courses";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";

const studentHeropage = ({ data }) => {
  const subject = useSelector((state) => state.mySubjectCourse);

  const studentdata = [
    { classData: data?.personClass, firstName: data?.personName },
    [
      {
        linkdata: "#subjects",
        title: "My Subjects",
      },
      {
        linkdata: "#pastQuestions",
        title: "Past Questions",
      },
      {
        linkdata: "#resumePlaying",
        title: "Resume Watching",
      },
      {
        linkdata: "#topTen",
        title: "Top Ten Video",
      },
      {
        linkdata: "#performance",
        title: "Performance Summary",
      },
      {
        linkdata: "#classroom",
        title: "Classroom",
      },
      {
        linkdata: "#favourite",
        title: "My Favourite",
      },
      {
        linkdata: "#recommendations",
        title: "Recommendations",
      },
      {
        linkdata: "#recentActivities",
        title: "Recent Activities",
      },
    ],
  ];

  return <StudentPage stuData={studentdata} />;
};

export default studentHeropage;

export const StudentPage = ({ stuData }) => {
  const { user, registerUser } = useSelector((state) => state.auth);
  // const courses = useSelector(state => state.Mycourses);
  const dispatch = useDispatch();
  // const {reconLesson } = useSelector(state => state.Mycourses);

  console.log("User from UI ==>>>", registerUser.user);
  // console.log("token from UI =>>>", token)
  console.log(
    "From student dashboard",
    user.user?.enrolledCourses.length > 1
      ? user.user?.enrolledCourses[1]?.courseId?.name
      : user.user?.enrolledCourses[0]?.courseId?.name,
  );
  const greetings = (firstName) => {
    return `Welcome ${firstName}!`;
  };

  // console.log("Lesson from recon ==>", reconLesson);

  // const userId = "62a0bc984af2d90016b72096"
  // const token = user.token

  // useEffect(() => {
  //   // dispatch(fetchReconLessonInitiate(userId, token))
  //   dispatch(fetchCourseInitiate());
  // }, [fetchCourseInitiate]);

  return (
    <Container fluid id="subjects" className="p-0">
      <div
        id="subjects"
        className={`container-fluid relative ${styles.dashboardFirstSection}`}
      >
        <div className="row">
          <div className="col-md-12">
            <h1 className={`text-capitalize ${styles.capH1}`}>
              {stuData[0].classData}
            </h1>
          </div>
        </div>
        <div className={`row ps-3 ${styles.pus}`}>
          <div className="col-md-12">
            {stuData[0].firstName && (
              <h2>{greetings(stuData[0].firstName.split(" ")[0])}</h2>
            )}
            {stuData[0].subject && <h2>{stuData[0].subject}</h2>}
            <p>Explore the fun in learning💃</p>
          </div>
        </div>
        <Link passHref href="/trial">
          <div
            className={`row ms-3 ${styles.push2e}`}
            style={{ cursor: "pointer" }}
          ></div>
        </Link>
        <div className={`row pt-5 ${styles.pointers}`}>
          <div className="col-md-12">
            {stuData[0].firstName &&
              stuData[1].map((data, i) => (
                <Link key={i} href={data.linkdata}>
                  <a>{data.title}| </a>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
