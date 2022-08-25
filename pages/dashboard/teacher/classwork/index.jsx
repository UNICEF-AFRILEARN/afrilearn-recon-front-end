import Image from "next/image";
import React, { useState, useEffect } from "react";
import Router, { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { Heropage } from "../../../../components/features/dashboard/teacher";
import styles from "../teacher.module.css";
import { fetchClassAssignedContentInitiate } from "../../../../redux/actions/classes";

const ClassWork = () => {
  const [swap, setSwap] = useState(0);
  const dispatch = useDispatch();
  const [classId, setClassId] = useState('')
  const { classContents } = useSelector((state) => state.schoolClasses);
  const { user } = useSelector((state) => state.auth);

  console.log("classContents from classwork", classContents)
  console.log("classContents.subjectId from classwork", classContents.assignedContents)

  useEffect(() => {
    setClassId(user?.user?.classOwnership[0]?.enrolledCourse.classId)
  }, []);

  useEffect(() => {
    dispatch(fetchClassAssignedContentInitiate(classId))
  }, [classId])
  return (
    <>
      <div style={{ marginTop: "-40px", }}>
        <Heropage />
      </div>
      <Container className="pt-3 pb-3">
        <Row className="p-4 ">
          <Col md={2} >
            <div>
              <Row
                onClick={() => {
                  setSwap(0);
                }}
                className={`text-secondary ${styles.scoreeffect1}`}
              >
                <p style={swap === 0 ? { color: "#00d9b6" } : {}}>
                  All Subject 
                </p>
              </Row>
              <Row
                onClick={() => {
                  setSwap(1);
                }}
                className={`text-secondary ${styles.scoreeffect1}`}
              >
                <p style={swap === 1 ? { color: "#00d9b6" } : {}}>
                  Mathematics
                </p>
              </Row>
            </div>
          </Col>
          <Col
            style={{
              overflow: "visible",
              height: "50vh",
            }}
          >
            {swap === 0 ? (
              <GeneralSubject />
            ) : swap === 1 ? (
              <Mathematics />
            ) : swap === 2 ? (
              <EnglishLanguage />
            ) : swap === 3 ? (
              <BusinessStudies />
            ) : swap === 4 ? (
              <ComputerScience />
            ) : swap === 5 ? (
              <CRK />
            ) : swap === 6 ? (
              <BasicTechnology />
            ) : swap === 7 ? (
              <French />
            ) : swap === 8 ? (
              <BasicScience />
            ) : swap === 9 ? (
              <Yoruba />
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ClassWork;

const AllSubject = ({ data }) => {
  const { classContents } = useSelector((state) => state.schoolClasses);
  const { user } = useSelector((state) => state.auth);

  return (
    <Col
      style={{
        paddingBottom: "50px",
      }}
    >
      <Row>
        <Col md={11}>
          {/* <h4>{data.subject}</h4> */}
        </Col>
        <Col style={{ cursor: "pointer" }}>
          <h4>+</h4>
        </Col>
      </Row>
      <Row style={{ border: "1px solid rgba(229, 229, 229, 0.63)" }}></Row>

      {classContents?.assignedContents?.map((content) => (
        <Row className="mt-3">
          <Col md={1}>
            <Image
              alt={"assign content placeholder"}
              src={`/assets/img/features/dashboard/teacher/Group 2168.png`}
              width={54}
              height={54}
            />
          </Col>
          <Col>
            <Row>
              <p>{content.description}</p>
            </Row>
            <Row>
              <p className="text-secondary">{content.createdAt}</p>
            </Row>
          </Col>
          <Col md={2}>
            {/* <p className="text-secondary">{datas[0].dueDate}</p> */}
          </Col>
          <Col md={1}>
            <div className={styles.moreIcon}>
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
                className={styles.displayNone}
              >
                <Col className={`p-3 ps-3 `}>
                  <Row className="ps-3 pb-2">
                    <Col md={3} className={`ps-2 ${styles.styleEdit}`}></Col>
                    <Col className="m-auto">Edit</Col>
                  </Row>
                  <Row className="ps-3 pb-2">
                    <Col md={3} className={`ps-2 ${styles.styleDelete}`}></Col>
                    <Col className="m-auto">Delete</Col>
                  </Row>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </Col>
  );
};

const GeneralSubject = ({ data }) => {
  return (
    <>
      <Mathematics />
      <EnglishLanguage />
      <BusinessStudies />
      <ComputerScience />
      <CRK />
      <BasicTechnology />
      <French />
      <BasicScience />
      <Yoruba />
    </>
  );
};

const Mathematics = () => {
  const subjectData = {
    subject: "Mathematics",
    subdata: [
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
    ],
  };

  return <AllSubject data={subjectData} style={{ overflow: "visible" }} />;
};

const EnglishLanguage = () => {
  const subjectData = {
    subject: "English Language",
    subdata: [
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
    ],
  };

  return <AllSubject data={subjectData} />;
};

const BusinessStudies = () => {
  const subjectData = {
    subject: "Business Studies",
    subdata: [
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
    ],
  };

  return <AllSubject data={subjectData} />;
};

const ComputerScience = () => {
  const subjectData = {
    subject: "Computer Science",
    subdata: [
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
    ],
  };

  return <AllSubject data={subjectData} />;
};

const CRK = () => {
  const subjectData = {
    subject: "CRK",
    subdata: [
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
    ],
  };

  return <AllSubject data={subjectData} />;
};

const BasicTechnology = () => {
  const subjectData = {
    subject: "Basic Technology",
    subdata: [
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
    ],
  };

  return <AllSubject data={subjectData} />;
};

const French = () => {
  const subjectData = {
    subject: "French",
    subdata: [
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
    ],
  };

  return <AllSubject data={subjectData} />;
};

const BasicScience = () => {
  const subjectData = {
    subject: "Basic Science",
    subdata: [
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
    ],
  };

  return <AllSubject data={subjectData} />;
};

const Yoruba = () => {
  const subjectData = {
    subject: "Yoruba",
    subdata: [
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
      [
        {
          message: "Attached is the link,complete the video lesson for ...",
          postedDate: "02-02-2022",
          dueDate: "07-02-2022",
        },
      ],
    ],
  };

  return <AllSubject data={subjectData} />;
};
