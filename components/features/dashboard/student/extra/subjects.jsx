import Image from "next/image";
import styles from "./../../student/student.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Modal, Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { StudentPage } from "./../studentHeropage";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseDetailsInitiate } from "../../../../../redux/actions/subject";

let subj;
const Subjects = ({ subData, filteredSubjects }) => {
  const [subjCourId, setsubjCourId] = useState({});

  const [show, setShow] = useState(false);
  const toggleModal = async (data) => {
    setShow(!show);
    subj = data;
  };

  // console.log();

  const dispatch = useDispatch();

  const dataIntro = async () => {
    if (Object.keys(subjCourId).length !== 0) {
      dispatch(
        fetchCourseDetailsInitiate(subjCourId.courseId, subjCourId.id),
      );
    }
  };

  useEffect(() => {
    dataIntro();
  }, [subjCourId]);

  const SubDataJsx = () => {
    return subData ? (
      filteredSubjects?.map((dta) => {
        return (
          <div key={dta.id} className={`col-md-6 ${styles.mySubjectt}`}>
            <button
              className="modalButton"
              onClick={() => {
                setsubjCourId(() => ({ id: dta.id, courseId: dta.courseId }));
                toggleModal(dta.mainSubjectId.name);
              }}
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

  const SubjectModal = () => {
    return (
      <>
        <Container fluid id="subject">
          <Row>
            <div>
              <HeaderHeropage />
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

export default Subjects;

export const HeaderHeropage = () => {
  const user = useSelector((state) => state.auth);
  const personClass = user.user.user?.enrolledCourses[0].courseId
    ? user.user.user?.enrolledCourses[0].courseId.name
    : user.user.user?.enrolledCourses[1].courseId.name;
  return (
    <>
      <Col className="p-0">
        <StudentPage
          stuData={[{ classData: personClass, subject: subj }]}
          className="p-0"
        />
      </Col>
      <div className="p-5">{<StudentHeropageBase />}</div>
    </>
  );
};
const StudentHeropageBase = () => {
  const subject = useSelector((state) => state.mySubjectCourse);
  const subjectDetails = subject.subjectDetails[0]?.subject;
  const data = {
    subject: subjectDetails?.courseId.name,
    title: subj,
    description: subjectDetails?.mainSubjectId.introText,
    class: subjectDetails?.courseId.alias,
    lessons: `${subject.subjectDetails[1]?.relatedLessons.length} Lessons`,
    students: `${subject.subjectDetails[2]?.numOfUsers} Registered Students`,
  };

  return (
    <>
      <div className={`row ${styles.modalSecond}`}>
        <div className={`col-md-8 ${styles.modalSecondFirst}`}>
          <h6 className="">{data?.title}</h6>
          <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
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
