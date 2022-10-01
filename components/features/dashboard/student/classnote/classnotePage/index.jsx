import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import styles from "../../../../../../pages/dashboard/teacher/teacher.module.css";

import styles1 from "../../../student/student.module.css";
import styles2 from "../../classnote/classnote.module.css";
import { Comment, NextPrevPage } from "../../video/videoPage";
// import Speech from "react-speech";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import {
  fetchClearLikeLesson,
  fetchgetLessonComments,
  fetchStoreLikeLesson,
} from "../../../../../../redux/actions/subject";

const ClassnotePage = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = user?.token;
  let quarie = router.query[0];
  const subject = useSelector((state) => state.mySubjectCourse);
  const lessons = subject.subjectDetails[1]?.relatedLessons;
  console.log(subject);

  const [quary, setQuary] = useState(quarie);
  const idSetter = (first) => {
    setQuary(lessons[first].id);
  };
  const videoId = (id) => {
    let dat;
    for (let i = 0; i < lessons?.length; i++) {
      if (lessons[i].id === id) {
        dat = lessons[i];
      }
    }
    return dat;
  };
  const datas = {
    userId: user?.user?._id,
    courseId: videoId(quary)?.courseId,
    subjectId: videoId(quary)?.subjectId,
    lessonId: videoId(quary)?._id,
    termId: videoId(quary)?.termId,
  };
  const decodeEntities = (function () {
    // this prevents any overhead from creating the object each time
    // var element = document.createElement("div");

    function decodeHTMLEntities(str) {
      if (str && typeof str === "string") {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = "";
      }

      return str;
    }
    return decodeHTMLEntities;
  })();
  // const videoIds = (id) => {
  //   let dat;
  //   const lesson = videoId(quary)?.videoUrls;
  //   for (let i = 0; i < lesson.length; i++) {
  //     if (lesson[i]._id === id) {
  //       lessonsNumber = i;
  //       dat = lesson[i];
  //     }
  //   }
  //   return dat;
  // };
  let likey = () => {
    let likes = videoId(quary)?.likes.find((fruit) => {
      return fruit === datas.userId;
    });
    return likes;
  };
  const [show, setShow] = useState(likey() ? true : false);

  const [liskes, setLiskes] = useState(videoId(quary)?.likes.length);
  const showing = () => {
    if (show) {
      setLiskes(+liskes - 1);
      setShow(!show);
      dispatch(fetchClearLikeLesson(datas, token));
    } else {
      setShow(!show);
      setLiskes(+liskes + 1);
      dispatch(fetchStoreLikeLesson(datas, token));
    }
  };
  const stuData = [{ subject: videoId(quary)?.title }];

  const iconData = [
    {
      icon: "arrowhead",
      text: "Lesson 1",
    },
  ];
  const [audioState, setAudioState] = useState(false);
  const handleClick = () => {
    setAudioState(!audioState);
  };
  const text = [
    {
      topic: videoId(quary)?.title,
      texts: videoId(quary)?.content,
    },
  ];

  const refref = () => {
    dispatch(
      fetchgetLessonComments(datas.lessonId, { commentSection: "note" }, token),
    );
  };

  useEffect(() => {
    dispatch(
      fetchgetLessonComments(datas.lessonId, { commentSection: "note" }, token),
    );
  }, []);

  return (
    <Container fluid className="p-0">
      <Row
        id="dashboardFirstSection"
        className={`relative ${styles1.dashboardFirstSection}`}
      >
        <div className="col-md-12">
          <h1 className={styles1.fontSize}>{stuData[0].subject}</h1>
        </div>
      </Row>
      <Row className="px-5">
        <Col lg={8}>
          <Row className="p-lg-5">
            <Col
              lg={6}
              className="d-sm-none d-md-block"
              onClick={() => router.back()}
              style={{ cursor: "pointer" }}
            >
              {" "}
              <div className={styles2.accordButtonLeft}>
                <div className={styles2.buttonStyle}>
                  <div className={`${styles2.buttonStyleImage}`}>
                    <Image
                      alt={"afrilearn marketing video"}
                      src={`/assets/img/features/dashboard/student/Vector.png`}
                      width={25}
                      height={10}
                    />
                  </div>
                  <p className="m-0 ">Go back to lesson</p>
                </div>
              </div>
            </Col>
            <Col
              className="w-100 classNote"
              onClick={handleClick}
              style={{
                position: "relative",
                margin: "auto",
                cursor: "pointer",
              }}
            >
              {/* <Speech
                text={decodeEntities(videoId(quary)?.content)}
                textAsButton={true}
                stop={audioState}
                displayText={
                  <div style={{ height: "54.5" }}>
                    <div className={styles2.mic}></div>
                    <div className={styles2.micBottom}>Audio</div>
                  </div>
                }
              /> */}
            </Col>
            <Col onClick={() => showing()} style={{ cursor: "pointer" }}>
              <div
                className="m-auto"
                style={{ cursor: "pointer", width: "32px", height: "32px" }}
              >
                {show ? <FcLike size={32} /> : <FcLikePlaceholder size={32} />}
              </div>
              <div className={styles2.loveBottom}>I Love This</div>
            </Col>
            <Col md={1} className="mt-2"></Col>
          </Row>
          <Row className="px-5 px-md-0">
            <Col className={styles2.colSeen}>
              <div className={`pl-5 pr-5 ${styles2.seen}`}></div>

              <div className="text-secondary">
                <div>{videoId(quary)?.views} Views</div>
              </div>
            </Col>
            <Col className={styles2.colSeen}>
              <div className={`pl-5 pr-5 text-danger ${styles2.loved}`}></div>
              <div className="text-secondary">{liskes} Like</div>
            </Col>
            <Col md={1}></Col>
            <Link href="#comment">
              <Col
                md={4}
                className={`text-right ${styles2.colSeentext}`}
                style={{ cursor: "pointer" }}
              >
                <div className={`${styles2.lovedtext}`}>
                  <u>Go to comments</u>
                </div>
              </Col>
            </Link>
          </Row>
          <Row>
            <div style={{ boxSizing: "border-box" }}>
              <h3 className="font-weight-bold">{text[0].topic}</h3>
            </div>
            <div
              className="innerHtml"
              md={8}
              dangerouslySetInnerHTML={{ __html: text[0].texts }}
            ></div>
          </Row>
          <Row>
            <NextPrevPage datay={idSetter} />
          </Row>
        </Col>
        <Col className="position-sticky">
          <Row className="mr-5 pt-5 mt-5  rounded position-sticky">
            <div>
              <Col className="ml-5 w-100 mx-auto">
                <h4>Subject Syllabus</h4>
                <div className="border-bottom"></div>
              </Col>
              <div className="acagon">
                {/* {text[1].map((title, i) => ( */}
                <Accordion key={1} className={styles.newton}>
                  <Accordion.Item eventKey={1}>
                    <Accordion.Header>First Term </Accordion.Header>
                    <Accordion.Body className="helo">
                      {lessons?.map((dats, i) => {
                        return (
                          dats.termId === "5fc8d1b20fae0a06bc22db5c" && (
                            <div
                              onClick={() => idSetter(i)}
                              key={i}
                              className={` pointer ${styles2.highlightText}`}
                            >
                              {dats.title}
                            </div>
                          )
                        );
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey={2}>
                    <Accordion.Header>Second Term </Accordion.Header>
                    <Accordion.Body className="helo">
                      {lessons?.map((dats, i) => {
                        return (
                          dats.termId === "600047f67cabf80f88f61735" && (
                            <div
                              onClick={() => idSetter(i)}
                              key={i}
                              className={` pointer ${styles2.highlightText}`}
                            >
                              {dats.title}
                            </div>
                          )
                        );
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey={3}>
                    <Accordion.Header>Third Term </Accordion.Header>
                    <Accordion.Body className="helo">
                      {lessons?.map((dats, i) => {
                        return (
                          dats.termId === "600048197cabf80f88f61736" && (
                            <div
                              onClick={() => idSetter(i)}
                              key={i}
                              className={` pointer ${styles2.highlightText}`}
                            >
                              {dats.title}
                            </div>
                          )
                        );
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
      <Row className="border-top mt-2">
        <Col lg={6} className="px-5 mt-3" id="comment">
          <Comment
            data={subject.comments}
            datas={datas}
            deta={refref}
            commentSection={"note"}
          />
        </Col>
        {/* <Col className="px-5 mt-3"></Col> */}
      </Row>
    </Container>
  );
};

export default ClassnotePage;
