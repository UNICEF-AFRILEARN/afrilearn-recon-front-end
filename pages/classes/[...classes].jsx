import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseInitiate } from '../../redux/actions/course';
import { useRouter } from "next/router";
import styles from "../../components/features/dashboard/student/student.module.css";
import { Container } from "react-bootstrap";
import { HeaderHeropage } from "../../components/features/dashboard/student/extra/subjects";


const Schoolclasses = () => {
    const { course } = useSelector((state) => state.singleCourse)
    const router = useRouter();
    const dispatch = useDispatch();


    const { classId } = router.query
    console.log("course ====>", course)


  useEffect(() => {
    dispatch(getCourseInitiate(classId))
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
              {/* {stuData[0].classData} */}
            </h1>
          </div>
        </div>
        <div className={`row ps-3 ${styles.pus}`}>
          <div className="col-md-12">
            {/* {stuData[0].firstName && ( */}
              {/* <h2>{greetings(stuData[0].firstName.split(" ")[0])}</h2> */}
            {/* )} */}
            {/* {stuData[0].subject && <h2>{stuData[0].subject}</h2>} */}
            {/* <p>Explore the fun in learning💃</p> */}
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
       <div>

       </div>
    </div>
  )
}

export default Schoolclasses