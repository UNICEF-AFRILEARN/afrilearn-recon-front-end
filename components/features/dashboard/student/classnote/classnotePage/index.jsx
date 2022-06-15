import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import styles1 from "../../../student/student.module.css";
import styles2 from "../../classnote/classnote.module.css";

const ClassnotePage = () => {
  const stuData = [{ subject: "Geometrical Construction: Angles" }];

  const text = [
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
      <Row>
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
            {text.map((text, i) => (
              <>
                <div
                  key={i}
                  className=" mt-5  mb-3
            px-5"
                >
                  <h3 className="font-weight-bold">{text.topic}</h3>
                </div>
                <div className="mx-5">{text.texts}</div>
              </>
            ))}
          </Row>
        </Col>
        <Col>
          <Row className="pt-5 ml-5 mt-5">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ClassnotePage;
