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
import Spinner from './../../../../components/widgets/spinner/index';
import FUllpageLoader from "../../../../components/widgets/fullpageLoader";

const MyStudent = () => {
  const statusElement = useRef();
  const [ classId, setClassId ] = useState("");
  const [ userId, setUserId ] = useState("");
  // const [ status, setStatus ] = useState("");
  const [ status, setStatus ] = useState("");
  const [ studentCount, setStudentCount ] = useState("");
  const { classMembers, classMemberStatusChange } = useSelector((state) => state.schoolClasses);
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

const handleStatusUpdate = async (id, status) => {
  setUserId(id)
}
// // console.log("selectedStatus ===>", selectedStatus)

useEffect(() => {
 
    dispatch(acceptRejectClassMemberInitiate(userId, classId, status, token))
}, [status])


  useEffect(() => {
    setClassId(user?.user?.enrolledCourses[0]?.classId)
  }, [classId]);


  useEffect(() => {
    setStudentCount(classMembers?.classMembers?.length)
  }, [classMembers]);


  useEffect(() => {
    dispatch(fetchClassMembersInitiate(classId))
  },[classId, status, classMemberStatusChange]);

  return (
    <>
      <div>
        <HeroPageDetailed
        />
      </div>
      <Container >
        <Row className="mt-5">
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
          <Col className={`${styles.studentnumber}`}>
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
        {!classMembers? 
         <Row className={styles.loaderwrapper}>
             <Spinner />
             {/* <FUllpageLoader /> */}
          </Row> :
        
        classMembers?.classMembers?.map((studentName) => (
          <Row
            // key={i}
            className={`${styles.peoplelists} mt-3 d-flex w-60`}
          >
            <Col>
              <div className={styles.vidAvatar}>
                <Image
                  alt={"afrilearn marketing video"}
                  src={`/assets/img/features/dashboard/student/comment1.png`}
                  width={30}
                  height={30}
                />
              </div>
            </Col>
            <Col >{studentName?.userId?.fullName}</Col>
            <Col md={5} style={{ color: "#AAA6A6" }}>
             <p className={styles.classperfomancewrapper}
             onClick={() => goToPerformance(studentName?.userId?.id)}>
                <u>View Performance</u>
             </p>
            </Col>
            <Col
                value={studentName.status}
                className="" style={{ color: "#FF5B5B" }}>
              <select
              ref={statusElement}
              onChange={(e) => { setStatus(e.target.value), handleStatusUpdate(studentName?.userId?.id, studentName.status)}}
              default={studentName.status}>
                <option
                >{studentName.status}</option>
                <option
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
