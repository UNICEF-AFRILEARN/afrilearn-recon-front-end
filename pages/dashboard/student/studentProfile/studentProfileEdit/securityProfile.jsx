import { Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import React, { useState} from "react";
import Modal from 'react-bootstrap/Modal';
import { resendpasswordEmail } from "../../../../redux/actions/auth";

  const dispatch = useDispatch();
  const  {formConfirmPassword}  = useSelector((state) => state.auth);
  console.log( "reset user", formConfirmPassword)
  const [password, setPassword] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [confirmemail, setComfirmemail] = useState("")
  const router = useRouter();
 
  const changePasword = (e) => {
    e.preventDefault();
     setShowresponse(formConfirmPassword)
    dispatch(resendpasswordEmail(email, password));
   
  };

const SecurityProfile = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container className="w-50 mx-auto">
      <Row className="mb-4">
        <Col className="pb-4">
          <Row className="d-flex justify-content-center pt-3">
            <Col md={2} className="ps-1">
              <p className="p-3">Password:</p>
            </Col>
            <Col className="">
              <input
                btn-outline-light
                className="p-4"
                for="password"
                minLength={8}
                value="hgcgcj"
                disabled
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
          </Row>
        </Col>
      </Row>
      <Row
        className="d-flex justify-content-center pt-3 cursor-pointer"
        onClick={() => setModalShow(true)}
      >
        <u className="text-end" style={{ color: "#00D9B6", cursor: "pointer" }}  onChange={(e) => setPassword(e.target.value)}>
          Change Passwordd
        </u>
      </Row>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <form onSubmit={changePasword}>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Reset Password
        </Modal.Title>
      </Modal.Header>
      <Row className="px-5 pt-4">
        <Col md={2} className="ps-1">
          <p className="p-3">Old Password:</p>
        </Col>
        <Col className="">
          <input
            btn-outline-light
            className="p-4"
            minLength={8}
            type="password"
            style={{
              width: "100%",
              height: "63px",
              border: "1px solid #29465B",
              borderRadius: "5px",
            }}
            onChange={(e) => setoldPassword(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="px-5 ">
        <Col md={2} className="ps-1">
          <p className="p-3">New Password:</p>
        </Col>
        <Col className="">
          <input
            btn-outline-light
            className="p-4"
            minLength={8}
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
      </Row>
      <Row className="px-5">
        <Col md={2} className="ps-1">
          <p className="p-3">Confirm Password:</p>
        </Col>
        <Col className="">
          <input
            btn-outline-light
            className="p-4"
            minLength={8}
            type="password"
            style={{
              width: "100%",
              height: "63px",
              border: "1px solid #29465B",
              borderRadius: "5px",
            }}
            onChange={(e) => setComfirmemail(e.target.value)}
            
          />
        </Col>
      </Row>
      <Row>
      <Col>
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
          </Col>
      </Row>
    </Modal>
    </form>
    
  );
}

export default SecurityProfile;
