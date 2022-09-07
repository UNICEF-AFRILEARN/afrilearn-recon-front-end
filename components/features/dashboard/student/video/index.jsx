import { StudentHeropageBase } from "../extra/subjects";
import { HeaderHeropage } from "../extra/subjects";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "../classnote/classnote.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
const Video = () => {
  const classnoteData = [
    [
      {
        icon: "arrowhead",
        text: "lesson",
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
        <ClassNoteVideo style={{ margin: "25px" }} />
      </div>
    </>
  );
};

export default Video;

const ClassNoteVideo = () => {
  const subject = useSelector((state) => state.mySubjectCourse);
  const lessons = subject.subjectDetails[1]?.relatedLessons;

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
      <Accordion className={styles.accord}>
        <Accordion.Item eventKey={0} className={styles.accord_button}>
          <Accordion.Header className={styles.accordHead}>
            <Row md={8}>
              <h5 style={{ colour: "#00d9b6 !important" }}>First Term</h5>

              <h6 style={{ colour: "#00d9b6 !important" }}>
                {termsNumber(0)} lessons available
              </h6>
            </Row>
          </Accordion.Header>
          <Accordion.Body>
            {lessons?.map((lesson, i) => {
              if (lesson.termId === terms[0] && lesson.videoUrls[0]) {
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
                        {lesson.videoUrls.map((data, j) => {
                          return (
                            <div
                              key={data._id}
                              className={styles.accordButtonLeft}
                            >
                              <Link
                                href={{
                                  pathname:
                                    "/dashboard/student/video/videoPage/",
                                  query: [lesson.id, data._id],
                                }}
                              >
                                <div
                                  className={styles.buttonStyle}
                                  style={{ cursor: "pointer" }}
                                >
                                  <div className={styles.buttonStyleImage}>
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
                        <div className={styles.accordButtonLeft}>
                          <Link href="/quiz">
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
              <h5 style={{ colour: "#00d9b6 !important" }}>Second Term</h5>

              <h6 style={{ colour: "#00d9b6 !important" }}>
                {termsNumber(1)} lessons available
              </h6>
            </Row>
          </Accordion.Header>
          <Accordion.Body>
            {lessons?.map((lesson, i) => {
              if (lesson.termId === terms[1] && lesson.videoUrls[0]) {
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
                        {lesson.videoUrls.map((data, j) => {
                          return (
                            <div
                              key={data._id}
                              className={styles.accordButtonLeft}
                            >
                              <Link
                                href={{
                                  pathname:
                                    "/dashboard/student/video/videoPage/",
                                  query: [lesson.id, data._id],
                                }}
                              >
                                <div
                                  className={styles.buttonStyle}
                                  style={{ cursor: "pointer" }}
                                >
                                  <div className={styles.buttonStyleImage}>
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
                        <div className={styles.accordButtonLeft}>
                          <Link href="/dashboard/student/classnote/classnotePage">
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
      <Accordion className={styles.accord}>
        <Accordion.Item eventKey={0} className={styles.accord_button}>
          <Accordion.Header className={styles.accordHead}>
            <Row md={8}>
              <h5 style={{ colour: "#00d9b6 !important" }}>Third Term</h5>

              <h6 style={{ colour: "#00d9b6 !important" }}>
                {termsNumber(2)} lessons available
              </h6>
            </Row>
          </Accordion.Header>
          <Accordion.Body>
            {lessons?.map((lesson, i) => {
              if (lesson.termId === terms[2] && lesson.videoUrls[0]) {
                console.log(lesson);
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
                        <div
                          style={{
                            width: "800px",
                            height: "50px",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          {lesson.videoUrls.map((data, j) => {
                            return (
                              <div
                                key={data._id}
                                className={styles.accordButtonLeft}
                              >
                                <Link
                                  href={{
                                    pathname:
                                      "/dashboard/student/video/videoPage/",
                                    query: [lesson.id, data._id],
                                  }}
                                >
                                  <div
                                    className={styles.buttonStyle}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <div className={styles.buttonStyleImage}>
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
                          <div className={styles.accordButtonLeft}>
                            <Link href="/dashboard/student/classnote/classnotePage">
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

const ClassNoteVideoHeader = () => {
  return (
    <div className={styles.headerTop}>
      <div className={styles.headerTopLeft}>Video Lesson</div>
    </div>
  );
};
