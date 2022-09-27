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

  const subjectDat = subject.pastQuestionSub.subjects;
  console.log(subject);
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
      <Row className="m-5" style={{}}>
        {subjectDat?.map((subjectData, i) => (
          <div key={i} className={`col-md-2 ${styles1.MySubjectt}`}>
            <div
              className=""
              onClick={() => {
                toggleModal();
                setList(() => subjectData.years);
              }}
              style={{ width: "100%", textAlign: "center" }}
            >
              <picture style={{ width: "100%" }}>
                <source
                  srcSet={`https:${subjectData.subject_image}`}
                  type="image/webp"
                />
                <img
                  src={`https:${subjectData.subject_image}`}
                  alt="Landscape picture"
                  style={{
                    width: "100px",
                    heigt: "100px",
                    // margin: "auto",
                    // padding: "auto",
                    textAlign: "center",
                  }}
                />
              </picture>
              <p>{subjectData.subject}</p>
            </div>
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
                query: { Exam: exam_year.subject_id, type: quary },
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
