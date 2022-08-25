import Head from "next/head";
import { Button, Col, Modal, Row } from "react-bootstrap";
import styles1 from "../../../../../components/features/dashboard/student/student.module.css";
import styles from "./studentProfileEdit.module.css";
import ProfileEdit from "./profileEdit";
import Image from "next/image";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  );
}

const StudentProfileEdit = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Head>
        <title>ProfileEdit | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <div
        className={`container-fluid relative ${styles1.dashboardFirstSection2}`}
        style={{ position: "relative" }}
      ></div>
      <Row
        style={{
          position: "absolute",
          bottom: "33%",
          width: "100%",
          zIndex: "3",
        }}
      ></Row>
      <Row>
        <Col className={`m-auto`}>
          <div className={`m-auto ${styles.studentProfileAvatar}`}>
            <Image
              alt={"afrilearn user-avatar"}
              src={`/assets/img/features/dashboard/student/person_2 1.png`}
              width={174}
              height={174}
            />
            <div className={`m-auto ${styles.studentProfileAvatar3}`}>
              <div
                onClick={() => setModalShow(true)}
                className={`m-auto ${styles.studentProfileAvatar4}`}
              ></div>
            </div>
          </div>
        </Col>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
       
      </Row>
      <Row>
        <ProfileEdit />
      </Row>
    </div>
  );
};

export default StudentProfileEdit;
