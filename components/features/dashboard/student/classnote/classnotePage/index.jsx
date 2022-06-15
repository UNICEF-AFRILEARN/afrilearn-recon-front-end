import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles1 from "../../../student/student.module.css";

const ClassnotePage = () => {
  const stuData = [{ subject: "Geometrical Construction: Angles" }];
  return (
    <Container fluid  className="p-0">
      <Col
        id="dashboardFirstSection"
        className={`relative ${styles1.dashboardFirstSection}`}
      >
        <Row >
          <div className="col-md-12">
            <h1 className={styles1.fontSize}>{stuData[0].subject}</h1>
          </div>
        </Row>
        <Row>
          
        </Row>
      </Col>
    </Container>
  );
};

export default ClassnotePage;
