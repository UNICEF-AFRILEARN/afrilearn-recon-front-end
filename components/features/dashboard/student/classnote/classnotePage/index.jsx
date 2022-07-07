import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import styles1 from "../../../student/student.module.css";
import styles2 from "../../classnote/classnote.module.css";
import { Comment, NextPrevPage } from "../../video/videoPage";

const ClassnotePage = () => {
  const stuData = [{ subject: "Geometrical Construction: Angles" }];

  const iconData = [
    {
      icon: "arrowhead",
      text: "Lesson 1",
    },
  ];

  const text = [
    [
      {
        topic: "Geometrical Construction:  Angles",
        texts: `"Construction" in Geometry means to draw shapes, angles or lines accurately. These constructions use only compass,straightedge (i.e. ruler) and a pencil.straightedge. This is the "pure" form of geometric construction: no numbers involved! 
    
    "Construction" in Geometry means to draw shapes, angles or lines accurately. These constructions use only compass,straightedge (i.e. ruler) and a pencil.straightedge. This is the "pure" form of geometric construction: no numbers involved!
    
    "Construction" in Geometry means to draw shapes, angles or lines accurately. These constructions use only compass,straightedge (i.e. ruler) and a pencil.straightedge. This is the "pure" form of geometric construction: no numbers involved!
    
    "Construction" in Geometry means to draw shapes, angles or lines accurately. These constructions use only compass,straightedge (i.e. ruler) and a pencil.straightedge. This is the "pure" form of geometric construction: no numbers involved!
    
    "Construction" in Geometry means to draw shapes, angles or lines accurately. These constructions use only compass,straightedge (i.e. ruler) and a pencil.straightedge. This is the "pure" form of geometric construction: no numbers involved!
    
    "Construction" in Geometry means to draw shapes, angles or lines accurately. These constructions use only compass,straightedge (i.e. ruler) and a pencil.straightedge. This is the "pure" form of geometric construction: no numbers involved!`,
      },
      {
        topic: "Degrees",
        texts: `And it is useful to know how to do 30°, 45° and 60° angles. We can use the angle bisector method (above) to create other angles such as 15°, etc.
    
    And it is useful to know how to do 30°, 45° and 60° angles. We can use the angle bisector method (above) to create other angles such as 15°, etc.
    
    And it is useful to know how to do 30°, 45° and 60° angles. We can use the angle bisector method (above) to create other angles such as 15°, etc.
    
    And it is useful to know how to do 30°, 45° and 60° angles. We can use the angle bisector method (above) to create other angles such as 15°, etc.
    
    And it is useful to know how to do 30°, 45° and 60° angles. We can use the angle bisector method (above) to create other angles such as 15°, etc.
    
    And it is useful to know how to do 30°, 45° and 60° angles. We can use the angle bisector method (above) to create other angles such as 15°, etc.`,
      },
    ],
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
        <Col sm={7}>
          <Row className="p-5">
            <Col sm={5}>
              {" "}
              <div className={styles2.accordButtonLeft}>
                <Link href="/dashboard/student/video/videoPage">
                  <div className={styles2.buttonStyle}>
                    <div className={`p-1 ${styles2.buttonStyleImage}`}>
                      <Image
                        alt={"afrilearn marketing video"}
                        src={`/assets/img/features/dashboard/student/Vector.png`}
                        width={25}
                        height={10}
                      />
                    </div>
                    {"   "}Go back to lesson
                  </div>
                </Link>
              </div>
            </Col>
            <Col>
              <div className={styles2.mic}></div>
              <div className={`text-secondary ${styles2.micBottom}`}>
                Text to Speech
              </div>
            </Col>
            <Col>
              <div className={styles2.love}></div>
              <div className={`text-secondary ${styles2.loveBottom}`}>
                I Love This
              </div>
            </Col>
          </Row>
          <Row className="px-5" xs={4} md={8} lg={12}>
            <Col className={styles2.colSeen}>
              <div className={`pl-5 pr-5 ${styles2.seen}`}></div>

              <div className="text-secondary">1240 Views</div>
            </Col>
            <Col className={styles2.colSeen}>
              <div className={`pl-5 pr-5 ${styles2.loved}`}></div>
              <div className="text-secondary">1.5k Love</div>
            </Col>
            <Col></Col>
            <Col sm={4} className={`text-right ${styles2.colSeentext}`}>
              <div className={` ${styles2.lovedtext}`}>
                <u>Go to comments</u>
              </div>
            </Col>
          </Row>
          <Row>
            {text[0].map((text, i) => (
              <>
                <div
                  key={i}
                  className=" mt-5  mb-3
            px-5"
                >
                  <h3 className="font-weight-bold">{text.topic}</h3>
                  <p className="text-justify">{text.texts}</p>
                </div>
              </>
            ))}
          </Row>
          <Row>
            <NextPrevPage data={iconData}/>
          </Row>
        </Col>
        <Col>
          <Row className="pt-5 ml-5 mt-5"></Row>
          <Row className="pt-4 ml-5 mt-4"></Row>

          <Row className="mr-5 pt-5 mt-5 bg-light rounded">
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
          </Row>
        </Col>

      </Row>
      <Row className="border-top mt-2">
        <Col className="px-5 mt-3">
          <Comment />
        </Col>
        <Col className="px-5 mt-3"></Col>
      </Row>
    </Container>
  );
};

export default ClassnotePage;
