import styles from "../tutor/tutorhelp.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Studenthelp = () => {
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState(null);
  const [classSelect, setClassSelect] = useState(null);
  const [question, setQuestion] = useState(null);
  const [selectSubject, setSelectSubject] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [newFormData, setNewFormData] = useState({});

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  const { user } = useSelector((state) => state.auth);
  const subject = useSelector((state) => state.mySubjectCourse);
  console.log(subject);
  const subjectDetails =
    subject?.dashboardWeb?.enrolledCourse?.courseId?.relatedSubjects;

  console.log(image);
  console.log(createObjectURL);
  const router = useRouter();
  const signIn = (e) => {
    e.preventDefault();
    router.push("/dashboard/student");
  };

  const submitUserDetails = () => {
    // setEmailError("");
    // setPhoneError("");
    // setclassError("");
    // setsubjectError("");
    // setquestionError("");

    if (question === null || question === "") {
      setCreateObjectURL(false);
      return Swal.fire(`<h3 style="color:red">Please Input Question</h3>`);
    }
    if (phone === null || phone === "") {
      setCreateObjectURL(false);
      return Swal.fire(`<h3 style="color:red">Please Input Phone</h3>`);
    }
    if (classSelect === null || classSelect === "") {
      setCreateObjectURL(false);
      return Swal.fire(`<h3 style="color:red">Please Input Class</h3>`);
    }
    if (selectSubject === null || selectSubject === "") {
      setCreateObjectURL(false);
      return Swal.fire(`<h3 style="color:red">Please Input Subject"</h3>`);
    }
    const data = {
      email: user?.user.email,
      phone,
      courseId: classSelect,
      subjectId: selectSubject,
      question,
      image: { uri: "base64", type: image.type, name: image.name },
    };
    console.log("data", data);
    // const newFormData = {};
    if (createObjectURL !== "false") {
      data = {
        file: JSON.stringify(data.image),
        email: data.email,
        phone: data.phone,
        courseId: data.courseId,
        subjectId: data.subjectId,
        question: data.question,
      };
      setNewFormData(data);
    }

    //     const newFormData = new FormData();
    //     if (image) {
    //       newFormData.append("file", JSON.stringify(image));
    //     }
    //     newFormData.append("email", email);
    //     newFormData.append("phone", phone);
    //     newFormData.append("courseId", courseId);
    //     newFormData.append("subjectId", subjectId);
    //     newFormData.append("question", question);
    //     dispatch(addAssignmentRequest(newFormData));
    //   };
  };
  useEffect(() => {
    console.log(newFormData);
  }, [newFormData]);

  return (
    <>
      <div className={`row ${styles.tutorhelpContainer}`}>
        <div className={`col-md-5 ${styles.helpIntro}`}>
          <h4>How it works</h4>
          <div className="row">
            <div className={`col-md-2 ${styles.questionIntro}`}></div>
            <div className="col-md-10">
              <div>
                <h5>Ask your doubt</h5>
              </div>
              <div>
                <p>
                  Need any clarifications or answers to a question? Simply type
                  your questions on the form
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={`col-md-2 ${styles.questionIntro1}`}></div>
            <div className="col-md-10">
              <div>
                <h5>Question review</h5>
              </div>
              <div>
                <p>
                  Our expert tutors will review your questions and provide
                  solutions to them instantly
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={`col-md-2 ${styles.questionIntro2}`}></div>
            <div className="col-md-10">
              <div>
                <h5>Prompt response</h5>
              </div>
              <div>
                <p>
                  Response to your questions would be sent to your mail ASAP
                </p>
              </div>
            </div>
          </div>
          <div className={styles.linkTutor}>
            <Link passHref href="">
              View Response Inbox
            </Link>
          </div>
        </div>
        <div className={`col-md-7 ${styles.helpForm}`}>
          <h5>Submit your Homework for Instant Solution 24/7</h5>
          <form>
            <div className="row">
              <label className="col-md-3">
                <strong>Email</strong>
                <input
                  className={`col-md-6 ${styles.input1}`}
                  type="text"
                  name="email"
                  value={user?.user?.email}
                />
              </label>
            </div>
            <div className="row">
              <label className="col-md-3">
                <strong>Phone Number *</strong>
                <input
                  className={`col-md-6 ${styles.input1}`}
                  type="text"
                  name="email"
                  placeholder="input phone number"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
            </div>
            <div className="row">
              <label className="col-md-3">
                <strong>Question*</strong>
                <textarea
                  className={`col-md-6 ${styles.input1}`}
                  type="text"
                  name="email"
                  placeholder="I need help"
                  required
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </label>
            </div>
            <div className="row">
              <label className="col-md-5">
                <strong>Upload document (optional)</strong>
                <input
                  className={`col-md-7 ${styles.input1upload}`}
                  onChange={uploadToClient}
                  type="file"
                />
                <span placeholder=""></span>
              </label>
            </div>
            <div className="row">
              <label className="col-md-3">
                <strong>Select Class*</strong>
                <input
                  className={`col-md-6 ${styles.input1}`}
                  type="text"
                  name="class"
                  placeholder="Input Class/Level"
                  required
                  onChange={(e) => {
                    setClassSelect(e.target.value);
                  }}
                />
              </label>
            </div>
            <div>
              <label className="col-md-3">
                <strong>Select Subject*</strong>
                <select
                  className={`col-md-6 ${styles.inputsubjectSelect}`}
                  required
                  onChange={(e) => setSelectSubject(e.target.value)}
                >
                  <option>Select subject</option>
                  {subjectDetails?.map((det, i) => (
                    <option key={i} value={det.mainSubjectId.name}>
                      {det.mainSubjectId.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </form>
          <div className={styles.buttonTutor}>
            <button onClick={() => submitUserDetails()}>
              {/* <button onClick={() => router.push("tutorhelp/response")}> */}
              SUBMIT QUESTION
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Studenthelp;
