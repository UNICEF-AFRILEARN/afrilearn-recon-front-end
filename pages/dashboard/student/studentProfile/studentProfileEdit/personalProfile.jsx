import React, { useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import countryCodes from "country-codes-list";

const PersonalProfile = () => {
  const [title, setTitle] = useState("+234");
  const [age, setAge] = useState("");
  const [stateCon, setStateCon] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const myCountryCodesObject = countryCodes.customList(
    "countryCode",
    "+{countryCallingCode}",
  );

  const codes = Object.values(myCountryCodesObject);
  const coded = [...new Set(codes.sort((a, b) => a - b))];
  return (
    <>
      <Container className="w-75 mx-auto">
        <Row className="">
          <Col>
            <Row className="d-flex justify-content-center pt-3">
              <Col md={3} className="ps-1">
                <p className="p-3">Full Name:</p>
              </Col>
              <Col md={7} className="">
                <input
                  btn-outline-light
                  className="p-4"
                  disabled
                  placeholder={`Kolawole Isaac`}
                  style={{
                    width: "670px",
                    height: "63px",
                    border: "1px solid #29465B",
                    borderRadius: "5px",
                    color: "#828282",
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="d-flex justify-content-center pt-3">
              <Col md={3} className="ps-1">
                <p className="p-3">Email:</p>
              </Col>
              <Col md={7}>
                <input
                  className="p-4"
                  disabled
                  placeholder="feyikemi199@gmail.com"
                  style={{
                    width: "670px",
                    height: "63px",
                    border: "1px solid #29465B",
                    borderRadius: "5px",
                    color: "#828282",
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="d-flex justify-content-center pt-3">
              <Col md={3} className="ps-1">
                <p className="p-3">Phone Number:</p>
              </Col>
              <Col md={7} calassName="mx-auto">
                <InputGroup
                  outline="none"
                  style={{
                    width: "670px",
                    height: "63px",
                    border: "1px solid #29465B",
                    borderRadius: "5px",
                  }}
                >
                  <DropdownButton
                    variant="outline-secondary"
                    title={title}
                    id="input-group-dropdown-1"
                  >
                    {coded.map((code, i) => (
                      <Dropdown.Item key={i} onClick={() => setTitle(code)}>
                        {code}{" "}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                  <Form.Control
                    aria-label="Text input with dropdown button"
                    className="shadow-none"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="d-flex justify-content-center pt-3">
              <Col md={3} className="ps-1">
                <p className="p-3">Age:</p>
              </Col>
              <Col md={7}>
                <input
                  className="p-4"
                  style={{
                    width: "670px",
                    height: "63px",
                    border: "1px solid #29465B",
                    borderRadius: "5px",
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="d-flex justify-content-center">
              <Col md={3} className="ps-1">
                <p className="p-3">State:</p>
              </Col>
              <Col md={7}>
                <input
                  className="p-4 shadow-none"
                  style={{
                    width: "670px",
                    height: "63px",
                    border: "1px solid #29465B",
                    borderRadius: "5px",
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="d-flex justify-content-center pt-3">
              <Col md={3} className="ps-1">
                <p className="p-3">Gender:</p>
              </Col>
              <Col md={7}>
                <input
                  className="p-4"
                  style={{
                    width: "670px",
                    height: "63px",
                    border: "1px solid #29465B",
                    borderRadius: "5px",
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="d-flex justify-content-center pt-3">
              <Col md={3} className="ps-1">
                <p className="p-3">City:</p>
              </Col>
              <Col md={7}>
                <input
                  className="p-4"
                  style={{
                    width: "670px",
                    height: "63px",
                    border: "1px solid #29465B",
                    borderRadius: "5px",
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="d-flex justify-content-center pt-3">
              <Col md={3} className="ps-1">
                <p className="p-3">Country:</p>
              </Col>
              <Col md={7}>
                <input
                  className="p-4"
                  style={{
                    width: "670px",
                    height: "63px",
                    border: "1px solid #29465B",
                    borderRadius: "5px",
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PersonalProfile;
