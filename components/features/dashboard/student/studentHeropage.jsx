import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./student.module.css";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckChangeSuccess } from "../../../../redux/actions/subject";

const studentHeropage = ({ data }) => {
  

  const studentdata = [
    { classData: data.personClass, firstName: data.personName },
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

  return <StudentPage stuData={studentdata}  />;
};

export default studentHeropage;

export const StudentPage = ({ stuData }) => {
  const dispatch = useDispatch();
  const subject = useSelector((state) => state.MySubject);
 const user = useSelector((state) => state.auth);

  const greetings = (firstName) => {
    return `Welcome ${firstName}!`;
  };
  return (
    <>
      <div
        id="dashboardFirstSection"
        className={`container-fluid relative ${styles.dashboardFirstSection}`}
      >
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-capitalize">{stuData[0].classData}</h1>
          </div>
        </div>
        <div className={`row ${styles.push2}`}>
          <div className="col-md-12">
            {stuData[0].firstName && <h2>{greetings(stuData[0].firstName)}</h2>}
            {stuData[0].subject && <h2>{stuData[0].subject}</h2>}
            <p>Explore the fun in learning💃</p>
            <Row>
              {user.user.user?.enrolledCourses.length === 2 &&
              user.user.user?.enrolledCourses[1].courseId ? (
                <Col md={10}>
                  <h5 style={{ color: " #00D9B6", opacity: "0.4" }}>
                    Kids Codes Subscribed
                  </h5>
                </Col>
              ) : (
                ""
              )}
              {user.user.user?.enrolledCourses.length === 2 &&
              !user.user.user?.enrolledCourses[1].courseId ? (
                <Col
                  style={{
                    backgroundColor: " #00D9B6",
                    opacity: "1",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    dispatch(fetchCheckChangeSuccess(!subject.checkChange))
                  }
                >
                  {subject.checkChange ? (
                    <h5
                      style={{
                        color: "white",
                        opacity: "1",
                        textAlign: "center",
                        margin: "4px auto",
                      }}
                    >
                      Entry to Kids code
                    </h5>
                  ) : (
                    <h5
                      style={{
                        color: "white",
                        opacity: "1",
                        textAlign: "center",
                        margin: "4px auto",
                      }}
                    >
                      Back to Class
                    </h5>
                  )}
                </Col>
              ) : (
                ""
              )}
            </Row>
          </div>
        </div>
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
    </>
  );
};
