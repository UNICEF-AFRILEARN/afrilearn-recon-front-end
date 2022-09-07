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
  const lessons = subject?.subjectDetails[1]?.relatedLessons;
  console.log(lessons);
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
            <Row>
              <h5 style={{ colour: "#00d9b6 !important" }}>First Term</h5>
              <h6 style={{ colour: "#00d9b6 !important" }}>
                {termsNumber(0)} lessons available
              </h6>
            </Row>
          </Accordion.Header>
          <Accordion.Body className={styles.accordLeft}>
            {lessons?.map((lesson, i) => {
              if (lesson.termId === terms[0]) {
                return (
                  <Accordion key={i} className={styles.accord}>
                    <Accordion.Item
                      eventKey={i}
                      className={styles.accord_button}
                    >
                      <Accordion.Header className={styles.accordHead2}>
                        <span className={styles.accordance}></span>{" "}
                        {lesson.title}
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordLeft2}>
                        {classData[0].map((data, i) => {
                          return (
                            <div
                              key={i}
                              className={`pointer ${styles.accordButtonLeft}`}
                            >
                              <Link
                                href={{
                                  pathname:
                                    "/dashboard/student/classnote/classnotePage",
                                  query: [lesson.id],
                                }}
                              >
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
            <Row>
              <h5 style={{ colour: "#00d9b6 !important" }}>Second Term</h5>
              <h6 style={{ colour: "#00d9b6 !important" }}>
                {termsNumber(1)} lessons available
              </h6>
            </Row>
          </Accordion.Header>
          <Accordion.Body className={styles.accordLeft}>
            {lessons?.map((lesson, i) => {
              if (lesson.termId === terms[1]) {
                return (
                  <Accordion key={i} className={styles.accord}>
                    <Accordion.Item
                      eventKey={i}
                      className={styles.accord_button}
                    >
                      <Accordion.Header className={styles.accordHead2}>
                        <span className={styles.accordance}></span>{" "}
                        {lesson.title}
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordLeft2}>
                        {classData[0].map((data, i) => {
                          return (
                            <div key={i} className={styles.accordButtonLeft}>
                              <Link
                                href={{
                                  pathname:
                                    "/dashboard/student/classnote/classnotePage",
                                  query: [lesson.id],
                                }}
                              >
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
            <Row>
              <h5 style={{ colour: "#00d9b6 !important" }}>Third Term</h5>
              <h6 style={{ colour: "#00d9b6 !important" }}>
                {termsNumber(2)} lessons available
              </h6>
            </Row>
          </Accordion.Header>
          <Accordion.Body className={styles.accordLeft}>
            {lessons?.map((lesson, i) => {
              if (lesson.termId === terms[2]) {
                return (
                  <Accordion key={i} className={styles.accord}>
                    <Accordion.Item
                      eventKey={i}
                      className={styles.accord_button}
                    >
                      <Accordion.Header className={styles.accordHead2}>
                        <span className={styles.accordance}></span>{" "}
                        {lesson.title}
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordLeft2}>
                        {classData[0].map((data, i) => {
                          return (
                            <div key={i} className={styles.accordButtonLeft}>
                              <Link
                                href={{
                                  pathname:
                                    "/dashboard/student/classnote/classnotePage",
                                  query: [lesson.id],
                                }}
                              >
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
    <Row className={styles.headerTop}>
      <Col md={10} xs={8} className={styles.headerTopLeft}>
        Class Notes
      </Col>
      <Col md={1} xs={1} className={styles.headerTopRight}></Col>
    </Row>
  );
};
