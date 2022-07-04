import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Col,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import styles from "../studentProfileEdit.module.css";
import SelectionSection from "../selectionSection";
import PersonalClassSubmit from "../personalClassSubmit";

const PersonalSelectionClass = () => {
  const [placehold, setPlacehold] = useState("");
  const [buttonPush, setButtonPush] = useState("on");
  const [valued, setValued] = useState("");

  // {
  //   <PersonalClassSubmit data={placehold} />;
  // }

  const classes = [
    "PRIMARY ONE",
    "PRIMARY TWO",
    "PRIMARY THREE",
    "PRIMARY FOUR",
    "PRIMARY FIVE",
    "PRIMARY SIX",
    "JSS ONE",
    "JSS TWO",
    "JSS THREE",
    "SSS ONE",
    "SSS TW0",
    "SSS THREE",
  ];
  console.log(buttonPush);

  const PersonalSelectClass = () => {
    return (
      <div className="mt-3">
        <Row className="px-5 mx-auto w-50">
          <h4>Step 1: Select Class</h4>
        </Row>
        <Row className="pt-5 mx-auto w-50">
          <InputGroup
            className="mb-3 "
            style={{
              height: "63px",
              borderRadius: "7px",
              paddingLeft: "20px",
            }}
          >
            <Form.Control
              aria-label="Text input with dropdown button"
              placeholder={placehold}
              className="shadow-none"
            />

            <DropdownButton
              variant="outline-secondary"
              id="input-group-dropdown-2"
              align="end"
            >
              {classes.map((code, i) => (
                <Dropdown.Item key={i} onClick={() => setPlacehold(code)}>
                  {code}{" "}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </InputGroup>

          <Row
            style={{
              width: "177px",
              height: "53px",
              BackgroundColor: "white",
              border: "3px solid #00D9B6",
              borderRadius: "100px",
              margin: "60px auto",
            }}
          >
            <p
              onClick={() => {
                setValued(placehold);
              }}
              style={{
                color: "#00D9B6",
                margin: "auto",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              ADD
            </p>
          </Row>
        </Row>
        {buttonPush === "on" ? (
          <Row></Row>
        ) : buttonPush === "" ? (
          <Row
            className="w-25 mx-auto"
            style={{
              height: "30px",
              paddingLeft: "20px",
              border: "3px solid red",
              borderRadius: "30px",
              marginTop: "-60px",
              backgroundColor: "rgba(0,0,0,0.1)",
            }}
          >
            {" "}
            <p className="mx-auto text-center">Please do fill in a class</p>
          </Row>
        ) : (
          <Row></Row>
        )}
        <Row className="mx-auto pt-5">
          <div
            style={{
              width: "1066px",
              height: "0px",
              border: "1px solid #E2E3E7",
              margin: "auto",
            }}
          ></div>
        </Row>
        <Row className="mx-auto px-auto w-75 mt-5">
          <Col md={6} className="ps-5">
            <Row>
              <Col>
                <Row>
                  <Col md={2}>
                    <Image
                      alt={"design image"}
                      src={"/assets/img/features/dashboard/student/Crown2.png"}
                      width={36}
                      height={27}
                    />
                  </Col>
                  <Col>
                    <h3>Afrilearn Pro</h3>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Image
                    alt={"design image"}
                    src={
                      "/assets/img/features/dashboard/student/crownTheme.png"
                    }
                    width={277}
                    height={50}
                  />
                </Row>
              </Col>
            </Row>
          </Col>
          <Row className="mt-4 ps-5">
            <p>
              Get{" "}
              <Link passHref href="#">
                <u className="text-bold">15-day Afrilearn Pro free trial.</u>
              </Link>{" "}
              Cancel any time. We'll remind you 3 days before your trial ends.
            </p>
          </Row>
          <Row className="ms-5">
            <Col>
              <Row>
                <Col>
                  <Row>
                    <Col md={2} className={styles.selectClassMark}></Col>
                    <Col>
                      <p>Online Homework Help</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} className={styles.selectClassMark}></Col>
                    <Col>
                      <p>
                        Solutions Review with personalized lesson to practice
                        your mistakes.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} className={styles.selectClassMark}></Col>
                    <Col>
                      <p>Unlimited Video Lessons</p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col md={2} className={styles.selectClassMark}></Col>
                    <Col>
                      <p>Access to live tutors</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} className={styles.selectClassMark}></Col>
                    <Col>
                      <p>Students & teachers chat room</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} className={styles.selectClassMark}></Col>
                    <Col>
                      <p>And lot more</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </div>
    );
  };

  return (
    <div>
      {valued === "undefined" || valued === "" ? <PersonalSelectClass />:<PersonalClassSubmit data={valued} />}
    </div>
    // <div>
    //   
    // </div>
  );
};
export default PersonalSelectionClass;
