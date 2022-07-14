import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HeroPageDetailed } from "../assignContent";
import styles from "../teacher.module.css";

const MyStudent = () => {
  const studentName = [
    "Alaka Feyikemi",
    "Alli Olatunbosun",
    "John Muhammed",
    "Alaka Feyikemi",
    "Alli Olatunbosun",
    "John Muhammed",
    "Alaka Feyikemi",
    "Alli Olatunbosun",
    "John Muhammed",
    "Alaka Feyikemi",
    "Alli Olatunbosun",
    "John Muhammed",
    "Alaka Feyikemi",
    "Alli Olatunbosun",
    "John Muhammed",
    "Alaka Feyikemi",
    "Alli Olatunbosun",
    "John Muhammed",
  ];

  const studentNum = studentName.length;
  return (
    <>
      <div>
        <HeroPageDetailed
          datas={{
            textH3: "My Students",
            textP: "Junior Secondary School One",
          }}
        />
      </div>
      <Container>
        <Row className="mt-5 mx-5">
          <Col>
            <h3
              style={{
                fontWeight: "500",
                fontSize: " 30px",
                color: " #29465B",
              }}
            >
              Students
            </h3>
          </Col>
          <Col md={2}>
            <h3
              style={{
                fontWeight: "500",
                fontSize: " 25px",
                color: "black",
              }}
            >
              <span>{studentNum}</span> <span>Student</span>
            </h3>
          </Col>
        </Row>
        {studentName.map((name, i) => (
          <Row
            key={i}
            className="mx-5 mt-3"
            style={{ height: "35px", display: "flex", alignItems: "center" }}
          >
            <Col md={1} style={{ padding: "0", width: "35px" }}>
              <div className={styles.vidAvatar}>
                <Image
                  alt={"afrilearn marketing video"}
                  src={`/assets/img/features/dashboard/student/comment1.png`}
                  width={35}
                  height={35}
                />
              </div>
            </Col>
            <Col md={5}>{name}</Col>
            <Col md={5} style={{ color: "#AAA6A6" }}>
              <u>View Performance</u>
            </Col>
            <Col className="" style={{ color: "#FF5B5B" }}>
              Remove
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default MyStudent;
