import React, { useState, useEffect } from "react";
import Router, { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { HeroPageDetailed } from "../assignContent";
import styles from "../teacher.module.css";
import { fetchClassMembersInitiate } from '../../../../redux/actions/classes';
import Link from "next/link";

const MyStudent = () => {
  const [ classId, setClassId ] = useState("");
  const [ userId, setUserId ] = useState("");
  const [ studentCount, setStudentCount ] = useState("");
  const { classMembers } = useSelector((state) => state.schoolClasses);
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  console.log("userId",userId)
  //Navigate to performance:
  const goToPerformance = (id) => {
    setUserId(id)
      Router.push({
        pathname: `/dashboard/performance/[_id]`,
        query: { _id: id, classId: classId}
    })
  }
//studentName?.userId?.id

  useEffect(() => {
    setClassId(user?.user?.enrolledCourses[0]?.classId)
  }, [classId]);
  useEffect(() => {
    setStudentCount(classMembers?.classMembers?.length)
  }, [classMembers]);


  useEffect(() => {
    dispatch(fetchClassMembersInitiate(classId))
  },[classId]);

  return (
    <>
      <div>
        <HeroPageDetailed
          datas={{
            textH3: "My Students",
            textP: "Junior Secondary School One",
          }}
        />
      </div>
      <Container>
        <Row className="mt-5 mx-5">
          <Col>
            <h3
              style={{
                fontWeight: "500",
                fontSize: " 30px",
                color: " #29465B",
              }}
            >
              Students
            </h3>
          </Col>
          <Col md={2}>
            <h3
              style={{
                fontWeight: "500",
                fontSize: " 25px",
                color: "black",
              }}
            >
              <span>0 {studentCount}</span> <span>Student</span>
            </h3>
          </Col>
        </Row>
        {classMembers?.classMembers?.map((studentName) => (
          <Row
            // key={i}
            className="mx-5 mt-3"
            style={{ height: "35px", display: "flex", alignItems: "center" }}
          >
            <Col md={1} style={{ padding: "0", width: "35px" }}>
              <div className={styles.vidAvatar}>
                <Image
                  alt={"afrilearn marketing video"}
                  src={`/assets/img/features/dashboard/student/comment1.png`}
                  width={35}
                  height={35}
                />
              </div>
            </Col>
            <Col md={5} >{studentName?.userId?.fullName}</Col>
            <Col md={5} style={{ color: "#AAA6A6" }}>
             <p onClick={() => goToPerformance(studentName?.userId?.id)}>
                <u>View Performance</u>
             </p>
            </Col>
            <Col className="" style={{ color: "#FF5B5B" }}>
              Remove
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default MyStudent;
