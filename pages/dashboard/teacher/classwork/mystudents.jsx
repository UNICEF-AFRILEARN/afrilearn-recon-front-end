import React, { useState, useEffect, useRef } from "react";
import Router, { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { HeroPageDetailed } from "../assignContent";
import styles from "../teacher.module.css";
import { 
  fetchClassMembersInitiate,
  acceptRejectClassMemberInitiate
} from '../../../../redux/actions/classes';
import Link from "next/link";

const MyStudent = () => {
  const statusElement = useRef();
  const [ classId, setClassId ] = useState("");
  const [ userId, setUserId ] = useState("");
  const [ status, setStatus ] = useState("");
  const [ selectedStatus, setSelectedStatus ] = useState("");
  const [ studentCount, setStudentCount ] = useState("");
  const { classMembers } = useSelector((state) => state.schoolClasses);
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  console.log("user",user.token)
  let token = user.token
  //Navigate to performance:
  const goToPerformance = (id) => {
    setUserId(id)
      Router.push({
        pathname: `/dashboard/performance/[_id]`,
        query: { _id: id, classId: classId}
    })
  }
//studentName?.userId?.id

//Check student status on page-load
// const checkUpdateStudentStatus = () => {
//   classMembers?.classMembers.filter((studentStatus) => {
//     if (studentStatus.status === 'rejected'){
//       setStatus('approved')
//     }else{
//       setStatus('rejected')
//     }
//   })
//   return status
// }

const handleStatusUpdate = async (userId, selectStatus) => {
  let status = selectedStatus
  console.log("selectedStatus ===>", selectedStatus)
  // dispatch(acceptRejectClassMemberInitiate(userId, classId, status, token))
}


const usePreviousValue = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const prevCount = usePreviousValue(selectedStatus);
console.log("State userId, classId, status", prevCount)

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
            <Col
                value={studentName.status}
                // onChange={(e) => }
                className="" style={{ color: "#FF5B5B" }}>
              {/* {studentName.status} */}
              <select
              ref={statusElement}
              onChange={(e) => {setSelectedStatus(e.target.value), handleStatusUpdate(studentName?.userId?.id, studentName.status)}}
              default={studentName.status}>
                <option
                 ref={statusElement}
                  value={studentName.status}
                >{studentName.status}</option>
                <option
                 ref={statusElement}
                  value={studentName.status === 'approved'? 'rejected' : 'approved'}
                >{studentName.status === 'approved'? 'rejected' : 'approved'}</option>
              </select>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default MyStudent;
