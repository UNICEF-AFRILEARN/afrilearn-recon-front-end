import { Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import React, { useState} from "react";
import { changepasswordInitiate } from "../../../../../redux/actions/auth";


const SecurityProfile = () => {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  const [password, setPassword] = useState(" ");
  const router = useRouter();
 
  const data={
    password: "bbbbbb"
  }
  
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJhMGJjOTg0YWYyZDkwMDE2YjcyMDk2Iiwicm9sZSI6IjVmZDA4ZmJhNTA5NjQ4MTEzMDk3MjJkNSIsImZ1bGxOYW1lIjoiTWljaGFlbCBPbGFkZWxlIn0sImlhdCI6MTY1OTYxNDI2NiwiZXhwIjoxNjYyMjA2MjY2fQ.x0H_plJQuRadJ1E_C4KNiM8JwK8Y-_CzWMWLa0HNdkA"
  const dispatch = useDispatch();
  const updatePassword = (e) => {
    e.preventDefault();
    console.log("Mike is a cool guy")
    dispatch(changepasswordInitiate(data,token));
  };

  return (
    <Container className="w-50 mx-auto">
      <Row className="mb-4">
        <Col className="pb-4">
          <Row className="d-flex justify-content-center pt-3">
            <Col md={2} className="ps-1">
              <p className="p-3">Password:</p>
            </Col>
            <form onSubmit={updatePassword}>
            <Col className="">
              <input
                btn-outline-light
                className="p-4"
                for="password"
                minLength={8}
                value={password}
                type="password"
                style={{
                  width: "100%",
                  height: "63px",
                  border: "1px solid #29465B",
                  borderRadius: "5px",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
            <Row className="d-flex justify-content-center pt-3 cursor-pointer">
        <button
          type = "submit"
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
              onClick={toggleModal}
            >
              CHANGE PASSWORD
            </button>
      </Row>
            </form>
          </Row>
        </Col>
      </Row>
     
      <Modal
    size="md"
    centered
    show={show}
    onHide={toggleModal}
    >
      <Modal.Body>
      <h6>Password changed</h6>
      </Modal.Body>
    </Modal>
    </Container>
  );
};


  

export default SecurityProfile;
