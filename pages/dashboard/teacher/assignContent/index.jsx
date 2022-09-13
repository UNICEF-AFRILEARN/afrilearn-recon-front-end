import Image from "next/image";
import {
  Accordion,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Heropage } from "../../../../components/features/dashboard/teacher";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import styles from "../../../../components/features/dashboard/student/classnote/classnote.module.css";
import styles2 from "../../../../components/features/dashboard/student/topInClass.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  assignContent,
  fetchCourseDetailsInitiate,
} from "../../../../redux/actions/subject";
import { fetchClassMembersInitiate } from "../../../../redux/actions/classes";
import Swal from "sweetalert2";

const AssignContent = () => {
  const { user } = useSelector((state) => state.auth);
  const subject = useSelector((state) => state.mySubjectCourse);
  const subjects =
    subject?.dashboardWeb?.enrolledCourse?.courseId.relatedSubjects;
  const lessons = subject.subjectDetails[1]?.relatedLessons;

  const { classMembers } = useSelector((state) => state.schoolClasses);

  const dispatch = useDispatch();
  const terms = [
    { id: "5fc8d1b20fae0a06bc22db5c", term: "First Term" },
    { id: "600047f67cabf80f88f61735", term: "Second Term" },
    { id: "600048197cabf80f88f61736", term: "Third Term" },
  ];

  const [subj, setSubj] = useState("");
  const [termss, setTermss] = useState("");
  const person_id = user.user?.enrolledCourses[0]
    ? user.user?.enrolledCourses[0].classId
    : user.user?.enrolledCourses[1].classId;

  const token = user?.token;
  useEffect(() => {
    subj !== "" &&
      dispatch(
        fetchCourseDetailsInitiate(subjects[subj].courseId, subjects[subj].id),
      );
    dispatch(fetchClassMembersInitiate(person_id));
  }, [subj]);
  useEffect(() => {
    dispatch(fetchClassMembersInitiate(person_id));
  }, [person_id]);

  const [addLes, setAddLes] = useState([]);
  const [addStu, setAddStu] = useState([]);
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const handleAssign = (e) => {
    e.preventDefault();

    let message;
    if (addLes === "") {
      message = "Please select lessons";
    } else if (!desc) {
      message = "Please enter assignment description";
    } else if (!date) {
      message = "Please select date";
    }

    if (!desc || !addLes || !date) {
      Swal.fire({
        title: message,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        timer: 1500,
        // position: "top-end",
      });
    } else {
      const data = {};
      data.description = desc;
      data.lessonIds = addLes.map((item) => lessons[item].id);
      data.dueDate = date;
      if ([...new Set(addStu)].length === 0) {
        data.audience = "all";
      } else {
        data.userIds = [...new Set(addStu)].map(
          (item) => classMembers.classMembers[item].id,
        );
      }
      // console.log(data);
      const classId = person_id;
      dispatch(assignContent(data, classId, token));
    }
  };
  if (subject?.teachSub) {
    Swal.fire({
      title: subject?.teachSub,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      timer: 1500,
      // position: "top-end",
    });
  }

  return (
    <div>
      <HeroPageDetailed
        datas={{ textH3: "Assign Study Content", textP: "Basic Technology" }}
      />

      <Container>
        <Row className="mt-5">
          <Col
            className="mt-5 m-4"
            style={{
              background: "#FAFAFA",

              position: "relative",
            }}
          >
            <textarea
              id="w3review"
              name="assignContent"
              rows="8"
              className="testArea"
              style={{
                // background: "#FAFAFA",
                borderRadius: "10px",
                border: "1px solid #00d9b6",
                padding: "20px",
                marginLeft: "100px",
                outline: "none",
                width: "80%",
              }}
              onChange={(e) => {
                e.preventDefault();
                setDesc(e.target.value);
              }}
              placeholder="Input study description"
            ></textarea>
            <div
              style={{
                position: "absolute",
                top: "0px",
                zIndex: "2",
              }}
            >
              <Image
                alt={"assign content placeholder"}
                src={`/assets/img/features/dashboard/teacher/Group 2168.png`}
                width={84}
                height={84}
              />
            </div>
            <Row className="m-5">
              <div
                style={{
                  width: "272px",
                  height: "50px",
                  left: "79px",
                  background: "#00D9B6",
                  borderRadius: "100px",
                  cursor: "pointer",
                }}
              >
                <h5
                  className="text-light p-auto text-center pt-3"
                  onClick={(e) => handleAssign(e)}
                >
                  ASSIGN
                </h5>
              </div>
            </Row>
          </Col>
          <Col lg={4} md={10} className="mt-5 m-4 p-0">
            <Row>
              <Form.Select
                aria-label="Default select example"
                style={{ outline: "none", border: "none" }}
                onChange={(e) => {
                  e.preventDefault();
                  e.target.value === "" ? setSubj("") : setSubj(e.target.value);
                }}
                className="m-3"
              >
                <option value="">Select Subject</option>
                {subjects?.map((data, i) => (
                  <option key={i} value={i}>
                    {data.mainSubjectId.name}
                  </option>
                ))}
              </Form.Select>
              <Row
                className="mx-3"
                style={{ border: "1px solid rgba(229, 229, 229, 0.63)" }}
              ></Row>
              <Form.Select
                aria-label="Default select example"
                style={{ outline: "none !important", border: "none" }}
                onChange={(e) => {
                  e.preventDefault();
                  e.target.value === ""
                    ? setTermss("")
                    : setTermss(e.target.value);
                }}
                className="m-3"
              >
                <option value="">Select Term</option>
                {terms.map((data, i) => (
                  <option value={i}>{data.term}</option>
                ))}
              </Form.Select>
              <Row
                className="mx-3"
                style={{ border: "1px solid rgba(229, 229, 229, 0.63)" }}
              ></Row>
              <Form.Select
                aria-label="Default select example"
                style={{ outline: "none", border: "none" }}
                onChange={(e) => {
                  e.preventDefault();
                  e.target.value === ""
                    ? setAddLes("")
                    : setAddLes((prevState) => [e.target.value, ...prevState]);
                }}
                className="m-3"
              >
                <option value="" className="text-danger">
                  (Ensure subject and terms are selected)
                </option>
                {termss !== "" &&
                  subj !== "" &&
                  lessons.map((les, i) => {
                    return (
                      les.termId === terms[termss].id && (
                        <option value={i}>{les.title}</option>
                      )
                    );
                  })}
              </Form.Select>
              <Row
                className="mx-3"
                style={{ border: "1px solid rgba(229, 229, 229, 0.63)" }}
              ></Row>
              <div
                className="m-3"
                style={{
                  border: "1px solid #00d9b6",
                  borderRadius: "20px",
                  width: "85%",
                }}
              >
                <p className="text-center">Selected Lesson</p>
                {addLes.length === 0 ? (
                  <p className="text-center">Nothing here</p>
                ) : (
                  addLes.map((add, i) => (
                    <p
                      key={i}
                      onClick={() =>
                        setAddLes(addLes.filter((item) => item !== add))
                      }
                      className="text-center"
                    >
                      {lessons[add].title}
                    </p>
                  ))
                )}
              </div>
              <Form.Select
                className="m-3"
                aria-label="Default select example"
                style={{ outline: "none", border: "none" }}
                onChange={(e) => {
                  e.preventDefault();
                  e.target.value === "all"
                    ? setAddStu("")
                    : setAddStu((prevState) => [e.target.value, ...prevState]);
                }}
              >
                <option value="all">All Students</option>
                {classMembers?.classMembers?.length > 0 &&
                  classMembers.classMembers.map((les, i) => {
                    return (
                      les.status === "approved" && (
                        <option value={i}>{les.userId.fullName}</option>
                      )
                    );
                  })}
              </Form.Select>
              <Row
                className="mx-3"
                style={{ border: "1px solid rgba(229, 229, 229, 0.63)" }}
              ></Row>
              <div
                className="m-3"
                style={{
                  border: "1px solid #00d9b6",
                  borderRadius: "20px",
                  width: "85%",
                }}
              >
                <p className="text-center">Selected Student</p>
                {addStu?.length === 0 ? (
                  <p className="text-center">All Students</p>
                ) : (
                  [...new Set(addStu)]?.map((add, i) => (
                    <p
                      key={i}
                      onClick={() =>
                        setAddStu(addStu.filter((item) => item !== add))
                      }
                      className="text-center"
                    >
                      {classMembers.classMembers[add].userId.fullName}
                    </p>
                  ))
                )}
              </div>
            </Row>
            <Row className="mx-3 mt-5">
              <Col>
                <h5>Due Date</h5>
              </Col>
            </Row>
            <Row
              className="mx-3"
              style={{ border: "1px solid rgba(229, 229, 229, 0.63)" }}
            ></Row>
            <Row className="mx-3">
              <Col>
                <input
                  type="date"
                  name="dueDate"
                  style={{ outline: "none", border: "0" }}
                  onChange={(e) => {
                    e.preventDefault();
                    setDate(e.target.value);
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AssignContent;

export function HeroPageDetailed({ datas }) {
  return (
    <>
      <Heropage />
      <Row className="ms-5 ps-5">
        <Col style={{ marginTop: "-160px", zIndex: "2" }}>
          <Row>
            <h1 className="text-light text-center">{datas.textH3}</h1>
          </Row>
        </Col>
      </Row>
    </>
  );
}
