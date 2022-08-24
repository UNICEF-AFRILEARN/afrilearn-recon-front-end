import React, { useState, useEffect } from "react";

import Link from "next/link";
import styles from "./student.module.css";
import { fetchCourseInitiate } from "../../../../redux/actions/courses";
import { fetchReconLessonInitiate } from "../../../../redux/actions/courses";
import { useDispatch, useSelector } from "react-redux";

const studentHeropage = ({ data }) => {
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
  const { user, registerUser}  = useSelector(state => state.auth);
  // const courses = useSelector(state => state.Mycourses);
  const dispatch = useDispatch();
  // const {reconLesson } = useSelector(state => state.Mycourses);


  console.log("User from UI ==>>>", registerUser.user)
  // console.log("token from UI =>>>", token)
  console.log("From student dashboard", user.user?.enrolledCourses.length > 1? user.user?.enrolledCourses[1]?.courseId?.name : user.user?.enrolledCourses[0]?.courseId?.name)
  const greetings = (firstName) => {
    return `Welcome ${firstName}!`;
  };

  // console.log("Lesson from recon ==>", reconLesson);

  // const userId = "62a0bc984af2d90016b72096"
  // const token = user.token

  

useEffect(() => {
  // dispatch(fetchReconLessonInitiate(userId, token))
  // dispatch(fetchCourseInitiate())
}, [fetchCourseInitiate])


  return (
    <>
      <div
        id="dashboardFirstSection"
        className={`container-fluid relative ${styles.dashboardFirstSection}`}
      >
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-capitalize">{user.user?.enrolledCourses.length > 1? user.user?.enrolledCourses[1]?.courseId?.name : user.user?.enrolledCourses[0]?.courseId?.name}</h1>

          </div>
            {stuData[0].subject && <h2>{stuData[0].subject}</h2>}
        <div className={`row ${styles.push2e}`}></div>
        <div className={`row ${styles.push2} ${styles.push3}`}>
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
      </div>
    </>
  );
};
