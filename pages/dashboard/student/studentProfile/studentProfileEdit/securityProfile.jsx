import { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

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
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        className="d-flex justify-content-center pt-3 cursor-pointer"
        onClick={() => setModalShow(true)}
      >
        <u className="text-end" style={{ color: "#00D9B6", cursor: "pointer" }}>
          Change Password
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
          />
        </Col>
      </Row>
    </Modal>
  );
}

export default SecurityProfile;
