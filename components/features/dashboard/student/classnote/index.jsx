<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { HeaderHeropage } from "../extra/subjects";
import styles from "./classnote.module.css";

const Classnote = () => {
  const classnoteData = [
    [
      {
        icon: "Document",
        text: "Classnote",
      },
      {
        icon: "Activity",
        text: "Practice quiz",
      },
    ],
  ];

  return (
    <>
      <HeaderHeropage />
      <div className={styles.classs}>
        <ClassNoteVideoHeader />
        <ClassNoteVideo classData={classnoteData} style={{ margin: "25px" }} />
      </div>
    </>
  );
};

export default Classnote;

const ClassNoteVideo = ({ classData }) => {
  const subject = useSelector((state) => state.MySubject);
  const lessons = subject.subjectDetails[1]?.relatedLessons;
  const terms = [
    "5fc8d1b20fae0a06bc22db5c",
    "600047f67cabf80f88f61735",
    "600048197cabf80f88f61736",
  ];
  const termsNumber = (number) => {
    let lessonNum = []
    lessons?.map((lesson) => {
      if (lesson.termId === terms[number]) {
        lessonNum.push(lesson)
      }
    });
    return(lessonNum.length);
  };
  const FirstTerm = () => {
    return (
      <Accordion className={styles.accord}>
        <Accordion.Item eventKey={0} className={styles.accord_button}>
          <Accordion.Header className={styles.accordHead}>
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
              if (lesson.termId === terms[0]) {
                return (
                  <Accordion key={i} className={styles.accord}>
                    <Accordion.Item
                      eventKey={i}
                      className={styles.accord_button}
                    >
                      <Accordion.Header className={styles.accordHead}>
                        <span className={styles.accordance}></span>{" "}
                        {lesson.title}
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordLeft}>
                        {classData[0].map((data, i) => {
                          return (
                            <div key={i} className={styles.accordButtonLeft}>
                              <Link href="/dashboard/student/classnote/classnotePage">
                                <div className={styles.buttonStyle}>
                                  <div className={styles.buttonStyleImage}>
                                    <Image
                                      alt={"afrilearn marketing video"}
                                      src={`/assets/img/features/dashboard/student/${data.icon}.png`}
                                      width={13}
                                      height={13}
                                    />
                                  </div>
                                  {data.text}
                                </div>
                              </Link>
                            </div>
                          );
                        })}
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
      <Accordion className={styles.accord}>
        <Accordion.Item eventKey={0} className={styles.accord_button}>
          <Accordion.Header className={styles.accordHead}>
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
              if (lesson.termId === terms[1]) {
                return (
                  <Accordion key={i} className={styles.accord}>
                    <Accordion.Item
                      eventKey={i}
                      className={styles.accord_button}
                    >
                      <Accordion.Header className={styles.accordHead}>
                        <span className={styles.accordance}></span>{" "}
                        {lesson.title}
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordLeft}>
                        {classData[0].map((data, i) => {
                          return (
                            <div key={i} className={styles.accordButtonLeft}>
                              <Link href="/dashboard/student/classnote/classnotePage">
                                <div className={styles.buttonStyle}>
                                  <div className={styles.buttonStyleImage}>
                                    <Image
                                      alt={"afrilearn marketing video"}
                                      src={`/assets/img/features/dashboard/student/${data.icon}.png`}
                                      width={13}
                                      height={13}
                                    />
                                  </div>
                                  {data.text}
                                </div>
                              </Link>
                            </div>
                          );
                        })}
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
      <Accordion className={styles.accord}>
        <Accordion.Item eventKey={0} className={styles.accord_button}>
          <Accordion.Header className={styles.accordHead}>
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
              if (lesson.termId === terms[2]) {
                return (
                  <Accordion key={i} className={styles.accord}>
                    <Accordion.Item
                      eventKey={i}
                      className={styles.accord_button}
                    >
                      <Accordion.Header className={styles.accordHead}>
                        <span className={styles.accordance}></span>{" "}
                        {lesson.title}
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordLeft}>
                        {classData[0].map((data, i) => {
                          return (
                            <div key={i} className={styles.accordButtonLeft}>
                              <Link href="/dashboard/student/classnote/classnotePage">
                                <div className={styles.buttonStyle}>
                                  <div className={styles.buttonStyleImage}>
                                    <Image
                                      alt={"afrilearn marketing video"}
                                      src={`/assets/img/features/dashboard/student/${data.icon}.png`}
                                      width={13}
                                      height={13}
                                    />
                                  </div>
                                  {data.text}
                                </div>
                              </Link>
                            </div>
                          );
                        })}
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

const ClassNoteVideoHeader = () => {
  return (
    <div className={styles.headerTop}>
      <div className={styles.headerTopLeft}>Class Notes</div>
      <div className="uhiuh"></div>
      <div className="uhiuh"></div>
      <div className="uhiuh"></div>
      <div className={styles.headerTopRight}></div>
    </div>
  );
};
=======
import Image from "next/image";
import Link from "next/link";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { HeaderHeropage } from "../extra/subjects";
import styles from "./classnote.module.css";

const Classnote = () => {
  const classnoteData = [
    [
      {
        icon: "Document",
        text: "Classnote",
      },
      {
        icon: "Activity",
        text: "Practice quiz",
      },
    ],
  ];

  return (
    <>
      <HeaderHeropage />
      <div className={styles.classs}>
        <ClassNoteVideoHeader />
        <ClassNoteVideo classData={classnoteData} style={{ margin: "25px" }} />
      </div>
    </>
  );
};

export default Classnote;

const ClassNoteVideo = ({ classData }) => {
  const subject = useSelector((state) => state.mySubjectCourse);
  const lessons = subject.subjectDetails[1]?.relatedLessons;
  console.log(lessons);
  console.log(subject);
  const terms = [
    "5fc8d1b20fae0a06bc22db5c",
    "600047f67cabf80f88f61735",
    "600048197cabf80f88f61736",
  ];
  const termsNumber = (number) => {
    let lessonNum = [];
    lessons?.map((lesson) => {
      if (lesson.termId === terms[number]) {
        lessonNum.push(lesson);
      }
    });
    return lessonNum.length;
  };
  const FirstTerm = () => {
    return (
      <Accordion className={styles.accord}>
        <Accordion.Item eventKey={0} className={styles.accord_button}>
          <Accordion.Header className={styles.accordHead}>
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
              if (lesson.termId === terms[0]) {
                return (
                  <Accordion key={i} className={styles.accord}>
                    <Accordion.Item
                      eventKey={i}
                      className={styles.accord_button}
                    >
                      <Accordion.Header className={styles.accordHead}>
                        <span className={styles.accordance}></span>{" "}
                        {lesson.title}
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordLeft}>
                        <div className={styles.accordButtonLeft}>
                          <Link
                            href={{
                              pathname:
                                "/dashboard/student/classnote/classnotePage",
                              query: { Exam: i },
                            }}
                          >
                            <div
                              className={styles.buttonStyle}
                              style={{ cursor: "pointer" }}
                            >
                              <div className={styles.buttonStyleImage}>
                                <Image
                                  alt={"afrilearn marketing video"}
                                  src={`/assets/img/features/dashboard/student/Activity.png`}
                                  width={13}
                                  height={13}
                                />
                              </div>
                              Classnote
                            </div>
                          </Link>
                        </div>
                        <div className={styles.accordButtonLeft}>
                          <Link
                            href={{
                              pathname: "/quiz",
                              query: { Exam: i },
                            }}
                          >
                            <div
                              className={styles.buttonStyle}
                              style={{ cursor: "pointer" }}
                            >
                              <div className={styles.buttonStyleImage}>
                                <Image
                                  alt={"afrilearn marketing video"}
                                  src={`/assets/img/features/dashboard/student/Document.png`}
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
      <Accordion className={styles.accord}>
        <Accordion.Item eventKey={0} className={styles.accord_button}>
          <Accordion.Header className={styles.accordHead}>
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
              if (lesson.termId === terms[1]) {
                return (
                  <Accordion key={i} className={styles.accord}>
                    <Accordion.Item
                      eventKey={i}
                      className={styles.accord_button}
                    >
                      <Accordion.Header className={styles.accordHead}>
                        <span className={styles.accordance}></span>{" "}
                        {lesson.title}
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordLeft}>
                        {classData[0].map((data, i) => {
                          return (
                            <div key={i} className={styles.accordButtonLeft}>
                              <Link href="/dashboard/student/classnote/classnotePage">
                                <div className={styles.buttonStyle}>
                                  <div className={styles.buttonStyleImage}>
                                    <Image
                                      alt={"afrilearn marketing video"}
                                      src={`/assets/img/features/dashboard/student/${data.icon}.png`}
                                      width={13}
                                      height={13}
                                    />
                                  </div>
                                  {data.text}
                                </div>
                              </Link>
                            </div>
                          );
                        })}
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
      <Accordion className={styles.accord}>
        <Accordion.Item eventKey={0} className={styles.accord_button}>
          <Accordion.Header className={styles.accordHead}>
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
              if (lesson.termId === terms[2]) {
                return (
                  <Accordion key={i} className={styles.accord}>
                    <Accordion.Item
                      eventKey={i}
                      className={styles.accord_button}
                    >
                      <Accordion.Header className={styles.accordHead}>
                        <span className={styles.accordance}></span>{" "}
                        {lesson.title}
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordLeft}>
                        {classData[0].map((data, i) => {
                          return (
                            <div key={i} className={styles.accordButtonLeft}>
                              <Link href="/dashboard/student/classnote/classnotePage">
                                <div className={styles.buttonStyle}>
                                  <div className={styles.buttonStyleImage}>
                                    <Image
                                      alt={"afrilearn marketing video"}
                                      src={`/assets/img/features/dashboard/student/${data.icon}.png`}
                                      width={13}
                                      height={13}
                                    />
                                  </div>
                                  {data.text}
                                </div>
                              </Link>
                            </div>
                          );
                        })}
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

const ClassNoteVideoHeader = () => {
  return (
    <div className={styles.headerTop}>
      <div className={styles.headerTopLeft}>Class Notes</div>
      <div className="uhiuh"></div>
      <div className="uhiuh"></div>
      <div className="uhiuh"></div>
      <div className={styles.headerTopRight}></div>
    </div>
  );
};
>>>>>>> dev
