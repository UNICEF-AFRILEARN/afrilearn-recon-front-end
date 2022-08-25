<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import styles1 from "../student.module.css";
import { useSelector } from "react-redux";

const PastQuestion = () => {
  const router = useRouter();
  let quary = router.query.Exam;
  const subject = useSelector((state) => state.MySubject);

  const subjectDat = subject.pastQuestion[0]?.subjects;

  const year = [
    { exam_year: 2000 },
    { exam_year: 2001 },
    { exam_year: 2002 },
    { exam_year: 2003 },
    { exam_year: 2004 },
    { exam_year: 2005 },
    { exam_year: 2006 },
    { exam_year: 2007 },
    { exam_year: 2008 },
    { exam_year: 2009 },
    { exam_year: 2010 },
    { exam_year: 2011 },
    { exam_year: 2012 },
    { exam_year: 2013 },
    { exam_year: 2014 },
    { exam_year: 2015 },
    { exam_year: 2016 },
    { exam_year: 2017 },
    { exam_year: 2018 },
    { exam_year: 2019 },
    { exam_year: 2020 },
    { exam_year: 2021 },
    { exam_year: 2022 },
  ];
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);
  const toggleModal = () => setShow(!show);
  return (
    <>
      <div
        //   id="dashboardFirstSection"
        className={`container-fluid relative ${styles1.dashboardFirstSection1}`}
      >
        <div className="row pt-5 mb-5">
          <Col>
            <h1 className={styles1.pastQuestionh1}>{quary}</h1>
          </Col>
        </div>
        <Row className="p-2 mx-5">
          <h5>Past Question</h5>
        </Row>
        <Row className="mx-5 pl-2">
          <h2>Select Subject</h2>
        </Row>
      </div>
      <Row className="m-5 px-5">
        {subjectDat?.map((subjectData, i) => (
          <div key={i} className={`col-md-2 ${styles1.mySubjectt}`}>
            <button
              className="modalButton"
              onClick={() => {
                toggleModal();
                setList(() => subjectData.years);
              }}
            >
              <picture>
                <source
                  srcSet={`https:${subjectData.subject_image}`}
                  type="image/webp"
                />
                <img
                  src={`https:${subjectData.subject_image}`}
                  alt="Landscape picture"
                  style={{ width: "100px", heigt: "100px" }}
                />
              </picture>
              <p>{subjectData.subject}</p>
            </button>
          </div>
        ))}
      </Row>
      <Modal size="lg" className="pt-5 mt-5" show={show} onHide={toggleModal}>
        <Modal.Title
          className="text-center pt-5"
          style={{ fontSize: "30px", color: "#000000" }}
        >
          Select Year
        </Modal.Title>

        <Modal.Body className="mx-auto">
          {list?.map((exam_year, i) => (
            <Link
              passHref
              href={{
                pathname: "/dashboard/student/pastQuestion/pastQuestionPage",
                query: { Exam: exam_year.subject_id },
              }}
            >
              <a>
                <Button
                  style={{
                    width: "90px",
                    background: "#FFFFFF",
                    boxShadow: "0px 0.648094px 4.53666px rgba(0, 0, 0, 0.15)",
                    borderRadius: "9.72141px",
                  }}
                  key={i}
                  className={`mx-4 mt-3 mb-3 ${styles1.modalBodyButton}`}
                  variant=""
                >
                  {exam_year.exam_year}
                </Button>
              </a>
            </Link>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PastQuestion;
=======
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import styles1 from "../student.module.css";
import { useSelector } from "react-redux";

const PastQuestion = () => {
  const router = useRouter();
  let quary = router.query.Exam;
  const subject = useSelector((state) => state.mySubjectCourse);

  const subjectDat = subject.pastQuestion[0]?.subjects;

  
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);
  const toggleModal = () => setShow(!show);
  return (
    <>
      <div
        //   id="dashboardFirstSection"
        className={`container-fluid relative ${styles1.dashboardFirstSection1}`}
      >
        <div className="row pt-5 mb-5">
          <Col>
            <h1 className={styles1.pastQuestionh1}>{quary}</h1>
          </Col>
        </div>
        <Row className="p-2 mx-5">
          <h5>Past Question</h5>
        </Row>
        <Row className="mx-5 pl-2">
          <h2>Select Subject</h2>
        </Row>
      </div>
      <Row className="m-5 px-5">
        {subjectDat?.map((subjectData, i) => (
          <div key={i} className={`col-md-2 ${styles1.MySubjectt}`}>
            <button
              className="modalButton"
              onClick={() => {
                toggleModal();
                setList(() => subjectData.years);
              }}
            >
              <picture>
                <source
                  srcSet={`https:${subjectData.subject_image}`}
                  type="image/webp"
                />
                <img
                  src={`https:${subjectData.subject_image}`}
                  alt="Landscape picture"
                  style={{ width: "100px", heigt: "100px" }}
                />
              </picture>
              <p>{subjectData.subject}</p>
            </button>
          </div>
        ))}
      </Row>
      <Modal size="lg" className="pt-5 mt-5" show={show} onHide={toggleModal}>
        <Modal.Title
          className="text-center pt-5"
          style={{ fontSize: "30px", color: "#000000" }}
        >
          Select Year
        </Modal.Title>

        <Modal.Body className="mx-auto">
          {list?.map((exam_year, i) => (
            <Link
              key={i}
              passHref
              href={{
                pathname: "/dashboard/student/pastQuestion/pastQuestionPage",
                query: { Exam: exam_year.subject_id },
              }}
            >
              <a>
                <Button
                  style={{
                    width: "90px",
                    background: "#FFFFFF",
                    boxShadow: "0px 0.648094px 4.53666px rgba(0, 0, 0, 0.15)",
                    borderRadius: "9.72141px",
                  }}
                  className={`mx-4 mt-3 mb-3 ${styles1.modalBodyButton}`}
                  variant=""
                >
                  {exam_year.exam_year}
                </Button>
              </a>
            </Link>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PastQuestion;
>>>>>>> dev
