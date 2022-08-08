import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from 'react-redux';
import { sendeditedprofileInitiate } from "../../../../../redux/actions/auth";

const PersonalProfile = () => {
  const [title, setTitle] = useState("+234");
  const [age, setAge] = useState("");
  const [stateCon, setStateCon] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState(" ");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState(" ");
  const myCountryCodesObject = countryCodes.customList(
    "countryCode",
    "+{countryCallingCode}",
  );
  const { user } = useSelector(state => state.auth)
  console.log(user)
  const dispatch = useDispatch();
  const codes = Object.values(myCountryCodesObject);
  const coded = [...new Set(codes.sort((a, b) => a - b))];
  const data={
    name:"Mike",
    email:"micheaol80@gmail.com"
  }
  const editProfile = (e) => {
    e.preventDefault();
    console.log("Mike is a cool guy")
    dispatch(sendeditedprofileInitiate(data,token));
  };
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJhMGJjOTg0YWYyZDkwMDE2YjcyMDk2Iiwicm9sZSI6IjVmZDA4ZmJhNTA5NjQ4MTEzMDk3MjJkNSIsImZ1bGxOYW1lIjoiTWljaGFlbCBPbGFkZWxlIn0sImlhdCI6MTY1OTYxNDI2NiwiZXhwIjoxNjYyMjA2MjY2fQ.x0H_plJQuRadJ1E_C4KNiM8JwK8Y-_CzWMWLa0HNdkA"
  
useEffect(() => {
  if(user.user?.token === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJhMGJjOTg0YWYyZDkwMDE2YjcyMDk2Iiwicm9sZSI6IjVmZDA4ZmJhNTA5NjQ4MTEzMDk3MjJkNSIsImZ1bGxOYW1lIjoiTWljaGFlbCBPbGFkZWxlIn0sImlhdCI6MTY1OTYxNDI2NiwiZXhwIjoxNjYyMjA2MjY2fQ.x0H_plJQuRadJ1E_C4KNiM8JwK8Y-_CzWMWLa0HNdkA'){
  
  }
}, [user])

 
  return (
    <>
    <form onSubmit={editProfile}>
    <Container className="w-75 mx-auto" > 
        <Row className="">
          <Col>
            <Row className="d-flex justify-content-center pt-3">
              <Col md={3} className="ps-1">
                <p className="p-3" type="text">Full Name:</p>
              </Col>
              <Col md={7} className="">
                <input
                  btn-outline-light
                  className="p-4"
                  disabled
                  type="text"
                  placeholder={`fullname`}
                  style={{
                    width: "670px",
                    height: "63px",
                    border: "1px solid #29465B",
                    borderRadius: "5px",
                    color: "#828282",
                  }}
                  onChange={(e) => setName(e.target.value)}
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
                  placeholder="email"
                  style={{
                    width: "670px",
                    height: "63px",
                    border: "1px solid #29465B",
                    borderRadius: "5px",
                    color: "#828282",
                  }}
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setphoneNumber(e.target.value)}
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
                  onChange={(e) => setAge(e.target.value)}
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
                  onChange={(e) => setStateCon(e.target.value)}
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
                  onChange={(e) => setGender(e.target.value)}
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
                  // onChange={(e) => set(e.target.value)}
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
              <Col className="">
          <Row  className="mx-auto mt-4">
            <button
            className="mx-auto mt-4"
              style={{
                marginLeft: "auto",
                textAlign: "center",
                color: "white",
                background: "#00D9B6",
                border:"1px solid white",
                borderRadius: "100px",
                width: "223px",
                height: "53px",
              }}
              type="submit"
            >
              SAVE CHANGES
            </button>
          </Row>
        </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </form>
    
    </>
  );
};

export default PersonalProfile;
