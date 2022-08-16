import Image from "next/image";
import {
  Accordion,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Heropage } from "../../../../components/features/dashboard/teacher";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import styles from "../../../../components/features/dashboard/student/classnote/classnote.module.css";
import styles2 from "../../../../components/features/dashboard/student/topInClass.module.css";

const AssignContent = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <HeroPageDetailed
        datas={{ textH3: "Assign Study Content", textP: "Basic Technology" }}
      />

      <Container>
        <Row className="mt-5">
          <Col
            className="mt-5 m-4"
            style={{
              background: "#FAFAFA",

              position: "relative",
            }}
          >
            <textarea
              id="w3review"
              name="assignContent"
              rows="8"
              cols="65"
              style={{
                background: "#FAFAFA",
                borderRadius: "10px",
                border: "none",
                padding: "20px",
                marginLeft: "100px",
                outline: "none",
                // width: "%",
              }}
              placeholder="Input study description"
            ></textarea>
            <div
              style={{
                position: "absolute",
                top: "0px",
                zIndex: "2",
              }}
            >
              <Image
                alt={"assign content placeholder"}
                src={`/assets/img/features/dashboard/teacher/Group 2168.png`}
                width={84}
                height={84}
              />
            </div>
          </Col>
          <Col md={4} className="mt-5 m-4 p-0">
            <Row >
              <Col md={11}>
                <h4>Attachment</h4>
              </Col>
              <Col
                onClick={() => setModalShow(true)}
                style={{ cursor: "pointer" }}
                className="p-0"
              >
                <h4>+</h4>
              </Col>
            </Row>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <Row
              style={{ border: "1px solid rgba(229, 229, 229, 0.63)" }}
            ></Row>
            <Row className="mt-3">
              <Col md={11}>
                <Row>
                  <h6>Geometrical Construction (2): Angles</h6>
                </Row>
                <Row>
                  <p className="text-secondary">Lesson 1</p>
                </Row>
              </Col>
              <Col className="text-secondary p-0">x</Col>
            </Row>
            <Row className="mt-5">
              <Col md={11}>
                <h4>Due Date</h4>
              </Col>
            </Row>
            <Row
              style={{ border: "1px solid rgba(229, 229, 229, 0.63)" }}
            ></Row>
            <Row className="mt-3">
              <Col>
                <input
                  type="date"
                  name="dueDate"
                  style={{ outline: "none", border: "0" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="m-5">
          <div
            style={{
              width: "272px",
              height: "50px",
              left: "79px",
              background: "#00D9B6",
              borderRadius: "100px",
            }}
          >
            <h5 className="text-light p-auto text-center pt-3">ASSIGN</h5>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default AssignContent;

export function HeroPageDetailed({ datas }) {
  return (
    <>
      <Heropage />
      <Row className="ms-5 ps-5">
        <Col style={{ marginTop: "-90px", zIndex: "2" }}>
          <Row>
            <h3 className="text-light">{datas.textH3}</h3>
          </Row>
          <Row>
            <p className="text-light">{datas.textP}</p>
          </Row>
        </Col>
      </Row>
    </>
  );
}
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h3
          className="text-center"
          style={{ color: "#29465B", fontWeight: "700", fontSize: "30px" }}
        >
          Assign Content
        </h3>
        <InputGroup
          className="mb-4 mt-4 m-auto"
          style={{
            width: "659px",
            height: "67px",
            borderRadius: "100px",
          }}
        >
          <InputGroup.Text id="basic-addon3" style={{ background: "white" }}>
            Search
          </InputGroup.Text>
          <Form.Control
            id="basic-url"
            aria-describedby="basic-addon3"
            className="shadow-none"
            style={{
              outline: "none !important",
            }}
          />
        </InputGroup>
        <ClassNoteVideo style={{ margin: "25px" }} />
      </Modal.Body>
    </Modal>
  );
}

const ClassNoteVideo = () => {
  const classData = [
    [
      [
        {
          thumbnailUrl:
            "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/literature-in-english/third-term/thumbnail/figures-of-speech.jpeg",
        },
      ],
      [
        {
          icon: "arrowhead",
          text: "lesson 1",
        },
        {
          icon: "arrowhead",
          text: "lesson 2",
        },
        {
          icon: "arrowhead",
          text: "lesson 3",
        },
        {
          icon: "arrowhead",
          text: "lesson 4",
        },
        {
          icon: "arrowhead",
          text: "lesson 5",
        },
        {
          icon: "Document",
          text: "Class Note",
        },

        {
          icon: "Activity",
          text: "Practice quiz",
        },
      ],
    ],
  ];
  console.log(classData[0][1]);
  return (
    <section>
      <Accordion className={styles.accord}>
        <Accordion.Item eventKey={0}>
          <Accordion.Header className={styles.accordHead}>
            <span className={styles.accordance}></span> Geometrical Construction
            (1): Lines
          </Accordion.Header>

          <Accordion.Body className={styles.accordLeft}>
            <div className={styles.accordRightDiv}>
              {classData[0][1].map((data, i) => (
                <div key={i} className={styles.accordButtonLeft}>
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
                </div>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};
