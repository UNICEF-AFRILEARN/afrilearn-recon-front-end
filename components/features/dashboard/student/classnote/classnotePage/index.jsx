import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import styles from "../../../../../../pages/dashboard/teacher/teacher.module.css";

import styles1 from "../../../student/student.module.css";
import styles2 from "../../classnote/classnote.module.css";
import { Comment, NextPrevPage } from "../../video/videoPage";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ClassnotePage = () => {
  const router = useRouter();
  let quary = router.query.Exam;
  console.log(quary);
  const subject = useSelector((state) => state.MySubject);
  const lessons = subject.subjectDetails[1]?.relatedLessons;
  console.log(subject);

  let clickLikes = 124;

  const [like, setlike] = useState({
    likes: clickLikes,
    updated: false,
  });
  const updateLikes = () => {
    if (!like.updated) {
      setlike((prevState) => {
        return {
          likes: prevState.likes + 1,
          updated: true,
        };
      });
    } else {
      setlike((prevState) => {
        return {
          likes: prevState.likes - 1,
          updated: false,
        };
      });
    }
  };
  const stuData = [{ subject: lessons[quary].title }];

  const iconData = [
    {
      icon: "arrowhead",
      text: "Lesson 1",
    },
  ];

  const text = [
    {
      topic: lessons[quary].title,
      texts: lessons[quary].content,
    },
    [
      {
        term: "First Term",
        topics: [
          "Geometrical Construction (1):  Lines",
          "Geometrical Construction (2):  Angles",
          "Properties of Materials (1): Wood and Metals",
          "Properties of Materials (2): Ceramics, Plastics, and Rubber",
        ],
      },
      {
        term: "Second Term",
        topics: [
          "Geometrical Construction (1):  Lines",
          "Geometrical Construction (2):  Angles",
          "Properties of Materials (1): Wood and Metals",
          "Properties of Materials (2): Ceramics, Plastics, and Rubber",
        ],
      },
      {
        term: "Third Term",
        topics: [
          "Geometrical Construction (1):  Lines",
          "Geometrical Construction (2):  Angles",
          "Properties of Materials (1): Wood and Metals",
          "Properties of Materials (2): Ceramics, Plastics, and Rubber",
        ],
      },
    ],
  ];
  return (
    <Container fluid className="p-0">
      <Row>
        <Col
          id="dashboardFirstSection"
          className={`relative ${styles1.dashboardFirstSection}`}
        >
          <Row>
            <div className="col-md-12">
              <h1 className={styles1.fontSize}>{stuData[0].subject}</h1>
            </div>
          </Row>
        </Col>
      </Row>
      <Row className="px-5">
        <Col md={6}>
          <Row className="p-5">
            <Col
              sm={5}
              onClick={() => router.back()}
              style={{ cursor: "pointer" }}
            >
              {" "}
              <div className={styles2.accordButtonLeft}>
                <div className={styles2.buttonStyle}>
                  <div className={`${styles2.buttonStyleImage}`}>
                    <Image
                      alt={"afrilearn marketing video"}
                      src={`/assets/img/features/dashboard/student/Vector.png`}
                      width={25}
                      height={10}
                    />
                  </div>
                  <p className="m-0">Go back to lesson</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className={styles2.mic}></div>
              <div className={`text-secondary ${styles2.micBottom}`}>
                Text to Speech
              </div>
            </Col>
            <Col style={{ cursor: "pointer" }} onClick={updateLikes}>
              <div className={styles2.love}></div>
              <div className={`text-secondary ${styles2.loveBottom}`}>
                I Love This
              </div>
            </Col>
            <Col md={1} className="mt-2">
              <div className={`m-auto ${styles.moreIcon}`}>
                <div
                  style={{
                    width: "200px",
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    position: "absolute",
                  }}
                  className={styles.displayNone}
                >
                  <Col className={`p-3 ps-3 `}>
                    <Link passHref href="/dashboard/teacher/assignContent">
                      <Row className="ps-3 pb-2">
                        <Col className={`m-auto ${styles2.highlightText}`}>
                          Assign Content
                        </Col>
                      </Row>
                    </Link>
                    <Row className="ps-3 pb-2">
                      <Col className={`m-auto ${styles2.highlightText}`}>
                        Community
                      </Col>
                    </Row>
                    <Row className="ps-3 pb-2">
                      <Col className={`m-auto ${styles2.highlightText}`}>
                        Bookmark
                      </Col>
                    </Row>
                    <Row className="ps-3 pb-2">
                      <Col className={`m-auto ${styles2.highlightText}`}>
                        Share
                      </Col>
                    </Row>
                  </Col>
                </div>
              </div>
              <div className={styles2.moreIconBottom} style={{ color: "gray" }}>
                More
              </div>
            </Col>
          </Row>
          <Row className="px-5">
            <Col className={styles2.colSeen}>
              <div className={`pl-5 pr-5 ${styles2.seen}`}></div>

              <div className="text-secondary">{1240} Views</div>
            </Col>
            <Col className={styles2.colSeen}>
              <div className={`pl-5 pr-5 text-danger ${styles2.loved}`}></div>
              <div className="text-secondary">{like.likes}k Love</div>
            </Col>
            <Col></Col>
            <Link href="#comment">
              <Col
                md={4}
                className={`text-right ${styles2.colSeentext}`}
                style={{ cursor: "pointer" }}
              >
                <div className={`${styles2.lovedtext}`}>
                  <u>Go to comments</u>
                </div>
              </Col>
            </Link>
          </Row>
          <Row>
            {/* {text[0].map((text, i) => ( */}

            <div
              className=" mt-5  mb-3
            px-5"
            >
              <h3 className="font-weight-bold">{text[0].topic}</h3>
              <p
                className="text-justify"
                dangerouslySetInnerHTML={{ __html: text[0].texts }}
              ></p>
            </div>

            {/* ))} */}
          </Row>
          <Row>
            <NextPrevPage data={iconData} />
          </Row>
        </Col>
        <Col>
          <Row className="pt-5 ml-5 mt-5"></Row>
          <Row className="pt-4 ml-5 mt-4"></Row>

          {/* <Row className="mr-5 pt-5 mt-5 bg-light rounded">
            <div>
              <Col className="ml-5 w-100 mx-auto">
                <h4>Subject Syllabus</h4>
                <div className="border-bottom p-3  ml-5"></div>
              </Col>
              {text[1].map((title, i) => (
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
              ))}
            </div>
          </Row> */}
        </Col>
      </Row>
      <Row className="border-top mt-2">
        <Col className="px-5 mt-3" id="comment">
          <Comment />
        </Col>
        <Col className="px-5 mt-3"></Col>
      </Row>
    </Container>
  );
};

export default ClassnotePage;
