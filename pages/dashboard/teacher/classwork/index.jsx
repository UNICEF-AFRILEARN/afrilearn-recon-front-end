import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Heropage } from "../../../../components/features/dashboard/teacher";
import styles from "../teacher.module.css";

const ClassWork = () => {
  return (
    <div>
      <Heropage />
      <AllSubject />
    </div>
  );
};

export default ClassWork;

const AllSubject = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={11}>
          <h4>Attachment</h4>
        </Col>
        <Col onClick={() => setModalShow(true)} style={{ cursor: "pointer" }}>
          <h4>+</h4>
        </Col>
      </Row>
      <Row style={{ border: "1px solid rgba(229, 229, 229, 0.63)" }}></Row>
      <Row className="mt-3">
        <Col md={1}>
          <Image
            alt={"assign content placeholder"}
            src={`/assets/img/features/dashboard/teacher/Group 2168.png`}
            width={54}
            height={54}
          />
        </Col>
        <Col>
          <Row>
            <p>Attached is the link,complete the video lesson for ...</p>
          </Row>
          <Row>
            <p className="text-secondary">Posted: 02 Sept 2020</p>
          </Row>
        </Col>
        <Col md={2}>
          <p className="text-secondary">Due 06 Sept 2020</p>
        </Col>

        <Col md={1}>
          <div
            className={styles.moreIcon}
            style={{ position: "relative" }}
          ></div>
          {/* <div className={styles.displayMore}> */}
            <div
              style={{
                width: "123px",
                height: "91px",
                background: "#FFFFFF",
                boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                position: "absolute",
                right: "150px",
              }}
              className={styles.displayNone}
            >
              <Col className={`p-3 ps-3 `}>
                <Row className="ps-3 pb-2">
                  <Col md={3} className={`ps-2 ${styles.styleEdit}`}></Col>
                  <Col className="m-auto">Edit</Col>
                </Row>
                <Row className="ps-3 pb-2">
                  <Col md={3} className={`ps-2 ${styles.styleDelete}`}></Col>
                  <Col className="m-auto">Delete</Col>
                </Row>
              </Col>
            </div>
          {/* </div> */}
        </Col>
      </Row>
    </Container>
  );
};
