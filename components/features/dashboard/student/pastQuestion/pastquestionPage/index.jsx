<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPastQuestionQueInitiate } from "../../../../../../redux/actions/subject";
import pastQuestion from "../../extra/pastQuestion";
import styles from "./pastQuestion.module.css";

const PastQuestion = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  let quary = router.query.Exam;
  useEffect(() => {
    console.log(quary);
    if (quary !== "") {
      dispatch(fetchPastQuestionQueInitiate(quary));
    }
  }, [quary]);

  const subject = useSelector((state) => state.MySubject);
  console.log(subject);
  const subjectDat = subject.pastQuestionQue[0];
  const quizData = {
    heading: `${subjectDat.subject_details.exam_name}:`,
    topic: `${subjectDat.subject_details.subject} ${subjectDat.subject_details.exam_year}`,
    subject: subjectDat.subject_details.subject,
    questionNo: subjectDat.subject_details.no_of_questions,
  };

  return (
    <>
      <div className="quizContainer">
        <div className="Image1" id="">
          <Image
            alt={"design image"}
            src={"/assets/img/common/login/HalfCircleBlackk.png"}
            width={86}
            height={100}
          />
        </div>
        <div className="image2" id="">
          <Image
            alt={"design image"}
            src={"/assets/img/common/login/HalfCircleWhite.png"}
            width={150}
            height={90}
          />
        </div>
        <div id="quizSection">
          <div className="quizz">
            <h6
              style={{
                textAlign: "center",
                color: "#29465b",
              }}
            >
              {quizData?.heading}
            </h6>
          </div>
          <div className="quizzTopic">
            <p
              style={{
                fontWeight: "400",
                fontSize: "30px",
                textAlign: "center",
                color: "#29465b",
              }}
            >
              {quizData?.topic}
            </p>
          </div>
          <div className="quizImage"> </div>
          <Row className=" pb-5">
            <Col>
              <Row className="mx-5 px-5">
                <Col sm={6} className="d-flex justify-content-start p-0">
                  <Row>
                    <Col sm={1} className={styles.pastqueIcon}></Col>
                    <Col className="p-0">QUESTIONS: {quizData?.questionNo}</Col>
                  </Row>
                </Col>
                <Col sm={6} className="d-flex justify-content-end p-0">
                  <Row className="">
                    <Col sm={1} className={styles.pastqueIcon1}></Col>
                    <Col className="">
                      TIME: {subjectDat.subject_details.duration}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="ps-5 fw-bolder">Before You Start</Col>
          </Row>
          <Row className="mt-5 p-1">
            <Row className="px-5">
              <Col sm={1} className={` ${styles.circleIcon}`}></Col>
              <Col className="px-2">
                You are about to practice official questions set for
                {subjectDat.subject_details.exam_name}.
              </Col>
            </Row>
          </Row>
          <Row className="mt-1 p-1">
            <Row className="px-5">
              <Col sm={1} className={` ${styles.circleIcon}`}></Col>
              <Col className="px-2">
                At the end of your exam practice, you can tap on review to view
                correct answers and solutions.
              </Col>
            </Row>
          </Row>
          <Row className="mt-1 p-1">
            <Row className="px-5">
              <Col sm={1} className={` ${styles.circleIcon}`}></Col>
              <Col className="px-2">
                Your results won’t be displayed without your permission.
              </Col>
            </Row>
          </Row>
          <Row className="mt-1 p-1">
            <Row className="px-5">
              <Col sm={1} className={` ${styles.circleIcon}`}></Col>
              <Col className="px-2">
                To begin your exam practice, simply tap the START button.
              </Col>
            </Row>
          </Row>
          <Row className="mt-3 ps-5">
            <Col className="" style={{ color: "#00D9B6" }}>
              You’ve got this, and we wish you the very best!
            </Col>
          </Row>
          <div className="buttonSection pt-4">
            <Link
              passHref
              href="/dashboard/student/pastQuestion/pastQuestionPage/pastExamQue"
            >
              <button>GET STARTED</button>
            </Link>
          </div>
        </div>
        <div className="image3">
          <Image
            alt={"design image"}
            src={"/assets/img/common/login/HalfCircleWhite.png"}
            width={150}
            height={90}
          />
        </div>
      </div>
    </>
  );
};
export default PastQuestion;
=======
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPastQuestionQueInitiate } from "../../../../../../redux/actions/subject";
import pastQuestion from "../../extra/pastQuestion";
import styles from "./pastQuestion.module.css";

const PastQuestion = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  let quary = router.query.Exam;
  useEffect(() => {
    console.log(quary);
    if (quary !== "") {
      dispatch(fetchPastQuestionQueInitiate(quary));
    }
  }, [quary]);

  const subject = useSelector((state) => state.mySubjectCourse);
  console.log(subject);
  const subjectDat = subject.pastQuestionQue[0];
  const quizData = {
    heading: `${subjectDat?.subject_details.exam_name}:`,
    topic: `${subjectDat?.subject_details.subject} ${subjectDat?.subject_details.exam_year}`,
    subject: subjectDat?.subject_details.subject,
    questionNo: subjectDat?.subject_details.no_of_questions,
  };

  return (
    <>
      <div className="quizContainer">
        <div className="Image1" id="">
          <Image
            alt={"design image"}
            src={"/assets/img/common/login/HalfCircleBlackk.png"}
            width={86}
            height={100}
          />
        </div>
        <div className="image2" id="">
          <Image
            alt={"design image"}
            src={"/assets/img/common/login/HalfCircleWhite.png"}
            width={150}
            height={90}
          />
        </div>
        <div id="quizSection">
          <div className="quizz">
            <h6
              style={{
                textAlign: "center",
                color: "#29465b",
              }}
            >
              {quizData?.heading}
            </h6>
          </div>
          <div className="quizzTopic">
            <p
              style={{
                fontWeight: "400",
                fontSize: "30px",
                textAlign: "center",
                color: "#29465b",
              }}
            >
              {quizData?.topic}
            </p>
          </div>
          <div className="quizImage"> </div>
          <Row className=" pb-5">
            <Col>
              <Row className="mx-5 px-5">
                <Col sm={6} className="d-flex justify-content-start p-0">
                  <Row>
                    <Col sm={1} className={styles.pastqueIcon}></Col>
                    <Col className="p-0">QUESTIONS: {quizData?.questionNo}</Col>
                  </Row>
                </Col>
                <Col sm={6} className="d-flex justify-content-end p-0">
                  <Row className="">
                    <Col sm={1} className={styles.pastqueIcon1}></Col>
                    <Col className="">
                      TIME: {subjectDat?.subject_details.duration}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="ps-5 fw-bolder">Before You Start</Col>
          </Row>
          <Row className="mt-5 p-1">
            <Row className="px-5">
              <Col sm={1} className={` ${styles.circleIcon}`}></Col>
              <Col className="px-2">
                You are about to practice official questions set for
                {subjectDat?.subject_details.exam_name}.
              </Col>
            </Row>
          </Row>
          <Row className="mt-1 p-1">
            <Row className="px-5">
              <Col sm={1} className={` ${styles.circleIcon}`}></Col>
              <Col className="px-2">
                At the end of your exam practice, you can tap on review to view
                correct answers and solutions.
              </Col>
            </Row>
          </Row>
          <Row className="mt-1 p-1">
            <Row className="px-5">
              <Col sm={1} className={` ${styles.circleIcon}`}></Col>
              <Col className="px-2">
                Your results won’t be displayed without your permission.
              </Col>
            </Row>
          </Row>
          <Row className="mt-1 p-1">
            <Row className="px-5">
              <Col sm={1} className={` ${styles.circleIcon}`}></Col>
              <Col className="px-2">
                To begin your exam practice, simply tap the START button.
              </Col>
            </Row>
          </Row>
          <Row className="mt-3 ps-5">
            <Col className="" style={{ color: "#00D9B6" }}>
              You’ve got this, and we wish you the very best!
            </Col>
          </Row>
          <div className="buttonSection pt-4">
            <Link
              passHref
              href="/dashboard/student/pastQuestion/pastQuestionPage/pastExamQue"
            >
              <button>GET STARTED</button>
            </Link>
          </div>
        </div>
        <div className="image3">
          <Image
            alt={"design image"}
            src={"/assets/img/common/login/HalfCircleWhite.png"}
            width={150}
            height={90}
          />
        </div>
      </div>
    </>
  );
};
export default PastQuestion;
>>>>>>> dev
