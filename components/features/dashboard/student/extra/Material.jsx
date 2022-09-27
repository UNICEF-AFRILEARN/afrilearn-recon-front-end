import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../../../../styles/material.module.css";
import styles2 from "../classnote/classnote.module.css";
// import PastQuestion from "./pastQuestionaira";
// import Mathematics from "./Mathematics";
// import EnglishLanguage from "./EnglishLanguage";
// import BusinessStudies from "./BusinessStudies";
// import ComputerScience from "./ComputerScience";
// import Crk from "./Crk";
// // import pastQuestion from './pastQuestion';
// import BasicTechnologies from "./BasicTechnologies";
// import French from "./French";
// import BasicScience from "./BasicScience";
// import Yoruba from "./Yoruba";
import { useDispatch, useSelector } from "react-redux";
import { Accordion, Col, Container, Dropdown, Row } from "react-bootstrap";
import Link from "next/link";
import {
  fetchPastQuestionInitiate,
  fetchPastQuestionSubjInitiate,
} from "../../../../../redux/actions/subject";

export const Material = ({ past }) => {
  const dispatch = useDispatch();
  const subject = useSelector((state) => state.mySubjectCourse);
  const subjectDat =
    subject.dashboardWeb?.enrolledCourse.courseId.relatedPastQuestions;
  const lessons = subject?.stuTeacherSub[0]?.subjects;
  useEffect(() => {
    dispatch(fetchPastQuestionInitiate(1));
    //   if (subData && subData.length > 0) {
    //     dispatch(
    //       fetchPastQuestionInitiate(subData[0].pastQuestionTypes[0].categoryId),
    //     );
    //   }
  }, []);
  const [toggleState, setToggleState] = useState(0);

  const toggleTabs = (index) => {
    setToggleState(index);
  };
  return (
    <div className={styles.classworkwrapper}>
      <Row>
        <Col md={2}>
          <nav className={styles.sidenavbar}>
            <h5>All Subjects</h5>
            <ul className="p-0">
              {lessons?.map((data, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => toggleTabs(i)}
                    className={`p-0 ${
                      toggleState === i ? styles.activetab : styles.tabs
                    }`}
                  >
                    {data?.mainSubjectId.name}
                  </li>
                );
              })}
              <li
                onClick={() => toggleTabs(-1)}
                className={toggleState === -1 ? styles.activetab : styles.tabs}
              >
                pastQuestion
              </li>
            </ul>
          </nav>
        </Col>
        <Col>
          {toggleState !== -1 ? (
            lessons && (
              <Row>
                <ClassNoteVideo
                  lessons={lessons[toggleState]?.relatedLessons}
                />
              </Row>
            )
          ) : (
            <div
              className={
                toggleState === -1 ? styles.activecontent : styles.content
              }
            >
              <PastQuestionFace pastQue={subjectDat} />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

const ClassNoteVideo = ({ lessons }) => {
  const terms = [
    "5fc8d1b20fae0a06bc22db5c",
    "600047f67cabf80f88f61735",
    "600048197cabf80f88f61736",
  ];
  const termsNumber = (number) => {
    let lessonNum = [];
    lessons?.map((lesson) => {
      if (lesson.termId === terms[number] && lesson.videoUrls[0]) {
        lessonNum.push(lesson);
      }
    });
    return lessonNum.length;
  };
  const FirstTerm = () => {
    return (
      <Accordion className={styles2.accord}>
        <Accordion.Item eventKey={0} className={styles2.accord_button}>
          <Accordion.Header className={styles2.accordHead}>
            <Row md={8}>
              <Col md={5}>
                <h5 style={{ colour: "#00d9b6 !important" }}>First Term</h5>
              </Col>
              <Col>
                <h6 style={{ colour: "#00d9b6 !important" }}>
                  {termsNumber(0)} lessons available
                </h6>
              </Col>
            </Row>
          </Accordion.Header>
          <Accordion.Body>
            {lessons?.map((lesson, i) => {
              if (lesson.termId === terms[0] && lesson.videoUrls[0]) {
                // console.log(lesson);
                return (
                  <Accordion key={i} className={styles2.accord}>
                    <Accordion.Item
                      eventKey={i}
                      className={styles2.accord_button}
                    >
                      <Accordion.Header className={styles2.accordHead}>
                        <span className={styles2.accordance}></span>{" "}
                        {lesson.title}
                      </Accordion.Header>
                      <Accordion.Body className={styles2.accordLeft}>
                        {lesson.videoUrls.map((data, j) => {
                          return (
                            <div key={i} className={styles2.accordButtonLeft}>
                              <Link
                                href={{
                                  pathname:
                                    "/dashboard/student/video/videoPage/",
                                  query: {
                                    Exam: j,
                                    Lesson: i,
                                    term: "First Term",
                                  },
                                }}
                              >
                                <div
                                  className={styles2.buttonStyle}
                                  style={{ cursor: "pointer" }}
                                >
                                  <div className={styles2.buttonStyleImage}>
                                    <Image
                                      alt={"afrilearn marketing video"}
                                      src={`/assets/img/features/dashboard/student/arrowhead.png`}
                                      width={13}
                                      height={13}
                                    />
                                  </div>
                                  Lesson {j + 1}
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                        <div className={styles2.accordButtonLeft}>
                          <Link href="/quiz">
                            <div
                              className={styles2.buttonStyle}
                              style={{ cursor: "pointer" }}
                            >
                              <div className={styles2.buttonStyleImage}>
                                <Image
                                  alt={"afrilearn marketing video"}
                                  src={`/assets/img/features/dashboard/student/Activity.png`}
                                  width={13}
                                  height={13}
                                />
                              </div>
                              Practice quiz
                            </div>
                          </Link>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                );
              }
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };
  const SecondTerm = () => {
    return (
      <Accordion className={styles2.accord}>
        <Accordion.Item eventKey={0} className={styles2.accord_button}>
          <Accordion.Header className={styles2.accordHead}>
            <Row md={8}>
              <Col md={5}>
                <h5 style={{ colour: "#00d9b6 !important" }}>Second Term</h5>
              </Col>
              <Col>
                <h6 style={{ colour: "#00d9b6 !important" }}>
                  {termsNumber(1)} lessons available
                </h6>
              </Col>
            </Row>
          </Accordion.Header>
          <Accordion.Body>
            {lessons?.map((lesson, i) => {
              if (lesson.termId === terms[1] && lesson.videoUrls[0]) {
                // console.log(lesson);
                return (
                  <Accordion key={i} className={styles2.accord}>
                    <Accordion.Item
                      eventKey={i}
                      className={styles2.accord_button}
                    >
                      <Accordion.Header className={styles2.accordHead}>
                        <span className={styles2.accordance}></span>{" "}
                        {lesson.title}
                      </Accordion.Header>
                      <Accordion.Body className={styles2.accordLeft}>
                        {lesson.videoUrls.map((data, j) => {
                          return (
                            <div key={i} className={styles2.accordButtonLeft}>
                              <Link
                                href={{
                                  pathname:
                                    "/dashboard/student/video/videoPage/",
                                  query: {
                                    Exam: j,
                                    Lesson: i,
                                    term: "Second Term",
                                  },
                                }}
                              >
                                <div
                                  className={styles2.buttonStyle}
                                  style={{ cursor: "pointer" }}
                                >
                                  <div className={styles2.buttonStyleImage}>
                                    <Image
                                      alt={"afrilearn marketing video"}
                                      src={`/assets/img/features/dashboard/student/arrowhead.png`}
                                      width={13}
                                      height={13}
                                    />
                                  </div>
                                  Lesson {i + 1}
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                        <div className={styles2.accordButtonLeft}>
                          <Link href="/dashboard/student/classnote/classnotePage">
                            <div
                              className={styles2.buttonStyle}
                              style={{ cursor: "pointer" }}
                            >
                              <div className={styles2.buttonStyleImage}>
                                <Image
                                  alt={"afrilearn marketing video"}
                                  src={`/assets/img/features/dashboard/student/Activity.png`}
                                  width={13}
                                  height={13}
                                />
                              </div>
                              Practice quiz
                            </div>
                          </Link>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                );
              }
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };
  const ThirdTerm = () => {
    return (
      <Accordion className={styles2.accord}>
        <Accordion.Item eventKey={0} className={styles2.accord_button}>
          <Accordion.Header className={styles2.accordHead}>
            <Row md={8}>
              <Col md={5}>
                <h5 style={{ colour: "#00d9b6 !important" }}>Third Term</h5>
              </Col>
              <Col>
                <h6 style={{ colour: "#00d9b6 !important" }}>
                  {termsNumber(2)} lessons available
                </h6>
              </Col>
            </Row>
          </Accordion.Header>
          <Accordion.Body>
            {lessons?.map((lesson, i) => {
              if (lesson.termId === terms[2] && lesson.videoUrls[0]) {
                // console.log(lesson);
                return (
                  <Accordion key={i} className={styles2.accord}>
                    <Accordion.Item
                      eventKey={i}
                      className={styles2.accord_button}
                    >
                      <Accordion.Header className={styles2.accordHead}>
                        <span className={styles2.accordance}></span>{" "}
                        {lesson.title}
                      </Accordion.Header>
                      <Accordion.Body className={styles2.accordLeft}>
                        <div
                          style={{
                            width: "800px",
                            height: "50px",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          {lesson.videoUrls.map((data, i) => {
                            return (
                              <div key={i} className={styles2.accordButtonLeft}>
                                <Link
                                  href={{
                                    pathname:
                                      "/dashboard/student/video/videoPage/",
                                    query: { Exam: i },
                                  }}
                                >
                                  <div
                                    className={styles2.buttonStyle}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <div className={styles2.buttonStyleImage}>
                                      <Image
                                        alt={"afrilearn marketing video"}
                                        src={`/assets/img/features/dashboard/student/arrowhead.png`}
                                        width={13}
                                        height={13}
                                      />
                                    </div>
                                    Lesson {i + 1}
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                          <div className={styles2.accordButtonLeft}>
                            <Link href="/dashboard/student/classnote/classnotePage">
                              <div
                                className={styles2.buttonStyle}
                                style={{ cursor: "pointer" }}
                              >
                                <div className={styles2.buttonStyleImage}>
                                  <Image
                                    alt={"afrilearn marketing video"}
                                    src={`/assets/img/features/dashboard/student/Activity.png`}
                                    width={13}
                                    height={13}
                                  />
                                </div>
                                Practice quiz
                              </div>
                            </Link>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                );
              }
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };
  return (
    <Container>
      <Row className="mt-3">
        <FirstTerm />
      </Row>
      <Row className="mt-3">
        <SecondTerm />
      </Row>
      <Row className="mt-3">
        <ThirdTerm />
      </Row>
    </Container>
  );
};

const PastQuestionFace = ({ pastQue }) => {
  // const dispatch = useDispatch();
  const subject = useSelector((state) => state.mySubjectCourse);
  const subjData = subject.pastQuestion[0]?.subjects;
  console.log(pastQue);
  return (
    <div>
      {/* {pastQue?.map((data, i) => { */}
      {/* return ( */}
      <Row className=" pt-5 mt-5 rounded">
        <div>
          <Col className=" w-100 mx-auto">
            <h4 className="ms-5 text-dark">
              {pastQue && pastQue[0].pastQuestionTypes[0].name}
            </h4>
            <div className="border-bottom border-2 border-dark text-dark pb-2 "></div>
          </Col>
          {subjData?.map((subjectData, i) => (
            <>
              <Row className="d-flex justify-content-between">
                <Col>
                  <h5 className="  mt-2 text-secondary">
                    {subjectData.subject}
                  </h5>
                </Col>
                <Col>
                  <Dropdown className="align-self-end">
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      Select Year
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {subjectData.years?.map((data, i) => (
                        <Link
                          key={i}
                          passHref
                          href={{
                            pathname:
                              "/dashboard/student/pastQuestion/pastQuestionPage",
                            query: { Exam: data.subject_id },
                          }}
                        >
                          <Dropdown.Item href="#/action-1">
                            {data.exam_year}
                          </Dropdown.Item>
                        </Link>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
              <div className="border-bottom text-dark pb-2 "></div>
            </>
          ))}
          {/*  {text[1].map((title, i) => (
                <Accordion key={i} className="w-75 pt-2 bg-light">
                  <Accordion.Item eventKey={i}>
                    <Accordion.Header>{title.term}</Accordion.Header>
                    <Accordion.Body className="bg-light">
                      {title.topics.map((topic, i) => (
                        <div
                          key={i}
                          v
                          className={`pb-0 text-normal bg-light ${styles2.highlightText}`}
                        >
                          {topic}
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}*/}
        </div>
      </Row>
      {/* })} */}
    </div>
  );
};

export default Material;
