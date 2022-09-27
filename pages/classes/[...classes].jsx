import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseInitiate, fetchSingleCourseInitiate } from '../../redux/actions/course';
import { useRouter } from "next/router";
import styles from "../../components/features/dashboard/student/student.module.css";
import { MdStickyNote2, MdPlayArrow, MdOutlineMic} from 'react-icons/md'
import {FaBookReader, FaQuestion} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import { Container } from "react-bootstrap";
import Subjects, { HeaderHeropage } from "../../components/features/dashboard/student/extra/subjects";


const Schoolclasses = () => {
    const { course, singleCourse } = useSelector((state) => state.singleCourse)
    const router = useRouter();
    const dispatch = useDispatch();
    let subjectCount  = singleCourse?.course?.relatedSubjects?.length


    const { classId } = router.query
    console.log("course ====>", singleCourse)


  // useEffect(() => {
  //   dispatch(getCourseInitiate(classId))
  // }, [classId])
  useEffect(() => {
    dispatch(fetchSingleCourseInitiate(classId))
  }, [classId])

  return (
    <div> 
        <Container fluid id="subjects" className="p-0">
      <div
        id="subjects"
        className={`container-fluid relative ${styles.dashboardFirstSection}`}
      >
        <div className="row">
          <div className="col-md-12">
            <h1 className={`text-capitalize ${styles.capH1}`}>
              {singleCourse?.course?.name}
            </h1>

          </div>
        </div>
        <div className={`row ps-3 ${styles.pus}`}>
          <div className={`${styles.corsedetailswrapper} col-md-12`}>
            <p>
              <MdStickyNote2 
                size={50}
                className={styles.iconswrapper}
              />
              <span> 450 Class Notes</span>
              </p>
              <p>
              <MdPlayArrow 
                size={50}
                className={styles.iconswrapper}
              />
              <span> 56 Videos</span>
              </p>
              <p>
              <MdOutlineMic 
                size={50}
                className={styles.iconswrapper}
              />
              <span> 35 Audios</span>
              </p>
          </div>
          <div className={`${styles.corsedetailswrappertwo} col-md-12`}>
          <p>
              <FaBookReader 
                size={50}
                className={styles.iconswrapper}
              />
              <span> {subjectCount } Subjects</span>
              </p>
              <p>
              <FaQuestion 
                size={50}
                className={styles.iconswrapper}
              />
              <span> Exam Practice Questions</span>
              </p>
              <p>
              <BsFillPersonFill 
                size={50}
                className={styles.iconswrapper}
              />
              <span> {singleCourse?.numOfUsers } Registered students</span>
              </p>
          </div>
        </div>
        {/* <Link passHref href="/trial">
          <div
            className={`row ms-3 ${styles.push2e}`}
            style={{ cursor: "pointer" }}
          ></div>
        </Link> */}
        <div className={`row pt-5 ${styles.pointers}`}>
          <div className="col-md-12">
            {/* {stuData[0].firstName && */}
              {/* stuData[1].map((data, i) => ( */}
                {/* <Link key={i} href={data.linkdata}> */}
                  {/* <a>{data.title}| </a> */}
                {/* </Link> */}
              {/* ))} */}
          </div>
        </div>
      </div>
    </Container>
       <Subjects 
       />
    </div>
  )
}

export default Schoolclasses