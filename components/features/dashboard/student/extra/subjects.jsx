import Image from "next/image";
import SubHeading from "./subHeading";
import styles from "./../../student/student.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  CloseButton,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { StudentPage } from "./../studentHeropage";

let subj;
const Subjects = ({ subData }) => {
  const [show, setShow] = useState(false);
  const toggleModal = (data) => {
    setShow(!show);
    subj = data;
  };
  useEffect(() => {}, [subj]);

  const SubDataJsx = () => {
    return subData ? (
      subData.map((dta, i) => {
        return (
          <div key={i} className={`col-md-6 ${styles.mySubjectt}`}>
            <button
              className="modalButton"
              onClick={() => toggleModal(dta.mainSubjectId.name)}
            >
              <Image
                alt={"design image"}
                src={dta.mainSubjectId.imageUrl}
                width={70}
                height={70}
              />
              <p>{dta.mainSubjectId.name}</p>
            </button>
          </div>
        );
      })
    ) : (
      <div>Loading...</div>
    );
  };

  return (
    <>
      <div className="container">
        <div className={`row ${styles.mySubjecttt}`}>
          <SubDataJsx />
        </div>
      </div>

      <Modal size="xl" centered show={show} onHide={() => setShow(!show)}>
        <Modal.Body className={`p-0 ${styles.modalSecon}`}>
          <SubjectModal className="p-0" />
        </Modal.Body>
      </Modal>
    </>
  );
};
const SubjectModal = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-0">
            <StudentPage stuData={[{ classData: "personClass", subject: subj }]} />
          </Col>
          <div className="p-5">
            <StudentHeropageBase />
          </div>
          <div className="p-5 pt-0 pb-1">
            <div className={`row ${styles.modalThird}`}>
              <div className="col-md-2">
                <Image
                  alt={"design image"}
                  src={"/assets/img/features/dashboard/student/user 3.png"}
                  width={"72.4px"}
                  height={"72.4px"}
                />
              </div>
              <div className="col-md-7">
                <h4>Class Notes</h4>
                <p>
                  Learn with curriculum specific class notes and practice
                  quizess
                </p>
              </div>
              <div className="col-md-3">
                {" "}
                <Link passHref href="/dashboard/student/classnote">
                  <h6>FREE</h6>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-5 pt-0" style={{ cursor: "pointer" }}>
            <Link passHref href="/dashboard/student/video">
              <div className={`row ${styles.modalThird}`}>
                <div className="col-md-2">
                  <Image
                    alt={"design image"}
                    src={
                      "/assets/img/features/dashboard/student/GroupVideo.png"
                    }
                    width={"72.4px"}
                    height={"72.4px"}
                  />
                </div>
                <div className="col-md-7">
                  <h4>Video Lessons</h4>
                  <p>Learn with animated video lessons and practice quizes</p>
                </div>
              </div>
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Subjects;

export const StudentHeropageBase = () => {
  const data = {
    subject: "SSS-ONE",
    title: subj,
    description:
      "Basic Technology is a very important subject in todays curriculum for students especially at the junior secondary  level as knowledge impacted prepares them for the various experiences at the senior level not withstanding their carrier paths.",
    class: "Senior Sceondary School One",
    lessons: "116 Video Lessons",
    students: "13,000 Registered Students",
  };

  return (
    <>
      <div className={`row ${styles.modalSecond}`}>
        <div className={`col-md-8 ${styles.modalSecondFirst}`}>
          <h6 className="">{data?.title}</h6>
          <p>{data?.description}</p>
        </div>
        <div className="col-md-4">
          <p>
            Class : <span>{data?.class}</span>
          </p>
          <p>
            Lessons : <span>{data?.lessons}</span>
          </p>
          <p>
            Students : <span>{data?.students}</span>
          </p>
        </div>
      </div>
    </>
  );
};
