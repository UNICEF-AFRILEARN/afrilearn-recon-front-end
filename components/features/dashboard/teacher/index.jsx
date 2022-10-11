import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import PastQuestion from "../student/extra/pastQuestionaira";
import Subjects from "../student/extra/subjects";
import { AiOutlineSend } from "react-icons/ai";
import styles1 from "../student/student.module.css";
import styles from "../student/studentProfile/studentProfile.module.css";
import styles2 from "../../../../pages/dashboard/teacher/teacher.module.css";
import CommentBlock from "./commentblock";

import { fetchSubjectsInitiate } from "../../../../redux/actions/subjects";
import {
  makeAnnouncementInitiate,
  fetchAnnouncementInitiate,
  addCommentToTeacherAnnouncementInitiate,
} from "../../../../redux/actions/classes";

import {
  fetchGetWebInitiate,
  fetchTeaSubsStart,
} from "../../../../redux/actions/subject";
import { ProfilePicture } from "../student/studentProfile";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { registerUser, user } = useSelector((state) => state.auth);
  const { allSubjects } = useSelector((state) => state.mySubject);
  const { classMembers } = useSelector((state) => state.schoolClasses);
  const subject = useSelector((state) => state.mySubjectCourse);
  // console.log(classMembers);
  const teachSubject =
    subject?.dashboardWeb?.enrolledCourse?.courseId.relatedSubjects;

  const token = user?.token;
  const person_id = user.user?.enrolledCourses[0]
    ? user.user?.enrolledCourses[0].id
    : user.user?.enrolledCourses[1].id;
  const teacherSubjectId =
    user?.user?.classOwnership[0]?.subjectIds[0]?.subjectId;
  //set teacher's enrolled subjects
  let teacherEnrolledSubjectId = [];
  const teacherEnrolledSubjects = () => {
    teacherEnrolledSubjectId = user?.user?.classOwnership.filter(
      (enrolledSubjectId) => enrolledSubjectId.subjectIds,
    );
    return teacherEnrolledSubjectId;
  };
  teacherEnrolledSubjects();
  const subId = user?.user?.classOwnership[0];

  let filteredSubjects = [];
  const filterTeacherSubjects = () => {
    filteredSubjects = allSubjects.filter(
      (filterSubject) => filterSubject.id === teacherSubjectId,
    );
    return filteredSubjects;
  };

  filterTeacherSubjects();

  useEffect(() => {
    dispatch(fetchGetWebInitiate(person_id, token, subId));
    dispatch(fetchSubjectsInitiate());
  }, [token]);
  return (
    <div>
      <Heropage />
      <HeropageWelcome />
      <div className="mt-5 pt-4">
        <Col>
          <Row
            className="ms-5 p-5 "
            style={{
              fontWeight: "700",
              fontSize: "30px",
              textAlign: "center",
              color: "#29465B",
            }}
          >
            My Subject
          </Row>
          <Subjects subData={teachSubject} />
        </Col>
        <Col>
          <PastQuestion
            subData={
              subject?.dashboardWeb?.enrolledCourse?.courseId
                .relatedPastQuestions
            }
          />
        </Col>
        <Col>{/* <PastQuestion /> */}</Col>
      </div>
      <TeacherAnnouncement />
    </div>
  );
};

export default Dashboard;

export const HeropageWelcome = () => {
  const { registerUser, user } = useSelector((state) => state.auth);

  const [classId, setClassId] = useState("");
  const [copyMessage, setCopyMessage] = useState("Copy Class Link");
  const [referal, setReferal] = useState(
    `https://myafrilearn.com/register?referralCode=${user.user?.id}`,
  );

  const copyReferalCode = (link) => {
    navigator.clipboard.writeText(link);
    setCopyMessage("Class Link Copied");
  };

  // handleCopy = () => {
  //   const assignURL = invitationLink
  //   assignURL.select()
  //   document.execCommand('copy')

  //   // now it is in your clipboard

  // }
  useEffect(() => {
    setClassId(user.user.enrolledCourses[0]?.classId);
  }, [classId]);

  return (
    <>
      <Row
        className="middlebarforteacher"
        style={{
          position: "absolute",
          bottom: "35%",
          width: "100%",
          marginTop: "-8%",
          zIndex: "999",
        }}
      >
        <Col>
          <Row className={`${styles.studentProfileGrid1} mx-auto imager-row`}>
            {/* <Col className={`m-auto ${styles.studentProfileAvatar}`}>
              {/* <Col className="mt-4 ms-2 image-class-teacher-middle">
                {/* <Image
                  alt={"afrilearn marketing video"}
                  src={`/assets/img/features/dashboard/teacher/teacherPix.png`}
                  width={168}
                  height={168}
                /> 
              </Col>
            </Col> */}
            <Col>
              <ProfilePicture user={user} />
            </Col>
            <Col className={styles.studentProfileInfo}>
              <Row className="p-4">
                <Row>
                  <Col>
                    <Row>
                      <Col md={7}>
                        <div
                          className="text-dark"
                          style={{
                            fontWeight: "500",
                            fontSize: "10px",
                            textAlign: "center",
                            color: "#333333",
                          }}
                        >
                          <h1 className="name-tag-holder">
                            Welcome{" "}
                            {registerUser.user?.fullName || user.user?.fullName}
                          </h1>
                        </div>
                      </Col>
                      <Link href="/payment">
                        <Col
                          className={`${styles.studentProfileCrownTheme}`}
                        ></Col>
                      </Link>
                    </Row>
                  </Col>
                </Row>
                <Row className="">
                  <Col md={2}>
                    <p className="text-dark">
                      Class code:{" "}
                      {registerUser.user?.classOwnership[0].classCode ||
                        user.user?.classOwnership[0].classCode}
                    </p>
                  </Col>
                  <Col>
                    <Row>
                      <Col md={2} className={`${styles.stateComponent1}`}></Col>
                      <Col>
                        <p
                          className={`${styles.classlink} m-auto`}
                          style={{ color: "#00D9B6" }}
                        >
                          <u onClick={() => copyReferalCode(referal)}>
                            {copyMessage}
                          </u>
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={3} className="">
                    <Link passHref href="/dashboard/teacher/addnewstudent">
                      <a>
                        <Row className="px-auto">
                          <Col
                            md={2}
                            className={`${styles.studentProfilePenIcon1}`}
                          ></Col>
                          <Col
                            className={`p-0 ${styles.studentProfileColorText}`}
                            style={{ color: "#00D9B6" }}
                          >
                            <u>Add Students</u>
                          </Col>
                        </Row>
                      </a>
                    </Link>
                  </Col>
                  {/* <Col md={3} className=""> */}
                  {/* </Col> */}
                </Row>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export const Heropage = () => {
  return (
    <>
      <div
        className={`container-fluid relative ${styles1.dashboardFirstSection3}`}
        style={{ position: "relative", zIndex: "0" }}
      ></div>
    </>
  );
};

export const TeacherAnnouncement = () => {
  const { classAnnouncement, postAnnouncement, announcementComment } =
    useSelector((state) => state.schoolClasses);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [announcement, setAnnouncement] = useState("");
  // const [comment, setComment] = useState("");
  const [announcementCount, setAnnouncementCount] = useState(0);

  console.log(
    "announcementComment from Teacher announcement",
    announcementComment,
  );

  let token = user?.token;
  let classId = user?.user?.classOwnership[0]?.enrolledCourse?.classId;

  //Convert created at to dateTime:
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  // const handleChange = (e) => {
  //   setText( e.target.value);
  // };

  console.log("token, classId textEdit", user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(announcement);
    // console.log(text)
    dispatch(makeAnnouncementInitiate(classId, text, token));
    setText("");
  };

  const handleCommentSubmit = (announcementId) => {
    dispatch(
      addCommentToTeacherAnnouncementInitiate(announcementId, text, token),
    );
    // window.location.reload();
  };

  useEffect(() => {
    dispatch(fetchAnnouncementInitiate(classId));
  }, [postAnnouncement, announcementComment]);

  return (
    <Container>
      <Col
        className="mt-5 announcement"
        style={{
          background: "#FAFAFA",
          borderRadius: "10px",

          position: "relative",
        }}
      >
        <textarea
          id="w3review"
          name="assignContent"
          rows="3"
          cols="105"
          style={{
            background: "#FAFAFA",
            border: "none",
            padding: "20px 0",
            marginLeft: "100px",
            marginRight: "100px",
            outline: "none",
            height: "227px",
          }}
          placeholder="Announce something to your class"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div
          style={{
            position: "absolute",
            top: "0px",
            zIndex: "2",
            margin: "20px",
          }}
        >
          <Image
            alt={"assign content placeholder"}
            src={`/assets/img/features/dashboard/teacher/teacherPix.png`}
            width={54}
            height={54}
          />
        </div>
        <div
          style={{
            width: "173px",
            height: "46px",
            background: "#00D9B6",
            borderRadius: "100px",
            position: "absolute",
            right: "60px",
            bottom: "20px",
          }}
        >
          <p
            className="text-dark m-0"
            style={{ textAlign: "center", padding: "12px", cursor: "pointer" }}
            onClick={handleSubmit}
          >
            POST
          </p>
        </div>
      </Col>

      {classAnnouncement?.announcements &&
        classAnnouncement?.announcements.map((announceMessage) => (
          <Row
            className="mt-4 "
            style={{
              border: "1px solid #A6A6A6",
              borderRadius: "7px",
              padding: "20px",
            }}
          >
            <Row className="border-bottom mb-4 pb-4">
              <Col className="p-0 ps-5 ">
                <Image
                  alt={"assign content placeholder"}
                  src={`/assets/img/features/dashboard/teacher/teacherPix.png`}
                  width={45}
                  height={45}
                />
              </Col>
              <Col className="" md={10}>
                <Row>Mr {announceMessage.teacher.fullName} (You)</Row>
                <Row className="text-secondary">
                  {formatter.format(Date.parse(announceMessage.createdAt))}
                </Row>
              </Col>
              <Col md={1}>
                <div className={styles2.moreIcon}>
                  <div
                    style={{
                      width: "123px",
                      height: "91px",
                      background: "#FFFFFF",
                      boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.1)",
                      borderRadius: "10px",
                      position: "absolute",
                      right: "150px",
                    }}
                    className={styles2.displayNone}
                  >
                    <Col className={`p-3 ps-3 `}>
                      <Row className="ps-3 pb-2 border-bottom">
                        <Col
                          md={3}
                          className={`ps-2 ${styles2.styleEdit}`}
                        ></Col>
                        <Col className="m-auto">Edit</Col>
                      </Row>
                      <Row className="ps-3 pb-2">
                        <Col
                          md={3}
                          className={`ps-2 ${styles2.styleDelete}`}
                        ></Col>
                        <Col
                          className="m-auto"
                          // onClick={() => handleDelete(d)}
                        >
                          Delete
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </div>
              </Col>
              <Row className="mx-5 mt-4">{announceMessage.text}</Row>
            </Row>
            {/* The line blow is to create the announcement comment */}
            {announceMessage.comments &&
              announceMessage.comments.map((comment) => (
                <Row
                // className="mt-4 border-top pb-4"
                >
                  <Row className="">
                    <Col className="p-0 ps-5 mt-4">
                      <Image
                        alt={"assign content placeholder"}
                        src={`/assets/img/features/dashboard/teacher/teacherPix.png`}
                        width={46}
                        height={45}
                      />
                    </Col>
                    <Col className="mt-4" md={10}>
                      <Row>Mr {comment.student.fullName} (You)</Row>
                      <Row className="text-secondary">
                        {formatter.format(Date.parse(comment.createdAt))}
                      </Row>
                    </Col>
                    <Col md={1}></Col>
                  </Row>
                  <Row className="mx-5 m-4">{comment.text}</Row>
                </Row>
              ))}
            {/* The line blow is to create the announcement comment  end*/}
            {/* post comment block */}
            <Row className="border-top pb-6">
              <Row>
                <Col className="p-0 ps-5 mt-4">
                  <Image
                    alt={"assign content placeholder"}
                    src={`/assets/img/features/dashboard/teacher/teacherPix.png`}
                    width={46}
                    height={45}
                  />
                </Col>
                <Col className="mt-4" md={10}>
                  <div class="input-group mb-3 w-50">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Add class comment"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                    <button
                      onClick={() => handleCommentSubmit(announceMessage.id)}
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      <AiOutlineSend />
                    </button>
                  </div>
                </Col>
                <Col md={1}></Col>
              </Row>
            </Row>
            {/* <CommentBlock announceMessage={announceMessage}/> */}
            {/* end of post comment block */}
          </Row>
        ))}
    </Container>
  );
};
