import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Col, Container, Modal, Row, Button, Form } from "react-bootstrap";
// import Video from "..";
import styles from "../../classnote/classnote.module.css";
import styles1 from "../../../../../../pages/dashboard/teacher/teacher.module.css";
import styles2 from "../../topInClass.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ReactTimeAgo from "react-time-ago";
import {
  fetchClearLikeLesson,
  fetchclearUnFinishedVideos,
  fetchgetLessonComments,
  fetchremoveFavouriteVideo,
  fetchsaveFavouriteVideo,
  fetchStoreLikeLesson,
  fetchstoreUnFinishedVideos,
} from "../../../../../../redux/actions/subject";
import ReactPlayer from "react-player/lazy";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import moment from "moment";
// import Speech from "react-speech";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import {
  addLessonComment,
  addLessonCommentReply,
  addResponse,
  deleteLessonComment,
  likeLessonComment,
  reportLesson,
  unlikeLessonComment,
  updateLessonComment,
} from "../../../../../../redux/actions/comment";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

// import { Modal, ModalHeader, ModalBody } from "reactstrap";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const VideoPage = () => {
  let shareLink = `Transform your life through world-class education. Download the Afrilearn App for free now at https://play.google.com/store/apps/details?id=com.afrilearn or visit https://myafrilearn.com/`;
  const dispatch = useDispatch();
  const ref = useRef("");
  const router = useRouter();
  let quarie = router.query[0];
  let quarie1 = router.query[1];
  const { user } = useSelector((state) => state.auth);
  const subject = useSelector((state) => state.mySubjectCourse);
  const lessons = subject.subjectDetails[1]?.relatedLessons;
  console.log(lessons);
  console.log(subject);
  const token = user?.token;
  const terms = [
    { id: "5fc8d1b20fae0a06bc22db5c", term: "First Term" },
    { id: "600047f67cabf80f88f61735", term: "Second Term" },
    { id: "600048197cabf80f88f61736", term: "Third Term" },
  ];

  const [quary, setQuary] = useState(quarie);
  const [quary1, setQuary1] = useState(quarie1);

  const idSetter = (first) => {
    setQuary(lessons[first].id);
    setQuary1(lessons[first].videoUrls[0]._id);
  };

  const videoId = (id) => {
    let dat;
    console.log(lessons);
    for (let i = 0; i < lessons?.length; i++) {
      if (lessons[i].id === id) {
        dat = lessons[i];
      }
    }
    return dat;
  };
  const term = () => {
    let dat;
    for (let i = 0; i < terms.length; i++) {
      if (videoId(quary)?.termId === terms[i].id) {
        dat = terms[i].term;
      }
    }
    return dat;
  };
  let lessonsNumber;
  const videoIds = (id) => {
    let dat;
    const lesson = videoId(quary)?.videoUrls;

    for (let i = 0; i < lesson?.length; i++) {
      if (lesson[i]._id === id) {
        lessonsNumber = i;
        dat = lesson[i];
      }
    }
    return dat;
  };
  console.log(quary1);
  const data = {
    topic: videoId(quary)?.title,
    videoUrl: videoIds(quary1),
  };
  const [visibility, setVisibility] = useState("Show");

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const iconData = {
    icon: "arrowhead",
    text: `Lesson ${+lessonsNumber + 1}`,
    leng: videoId(quary)?.videoUrls.length,
  };
  const subjected = subject.subjectDetails[0]?.subject;
  const secVidData = {
    class: subjected?.courseId.alias,
    subject: subjected?.mainSubjectId.name,
    term: term(),
    date: moment(videoId(quary) && videoId(quary)?.createdAt).format("LL"),
  };

  const target = useRef(null);

  const datas = {
    userId: user?.user?._id,
    courseId: videoId(quary)?.courseId,
    subjectId: videoId(quary)?.subjectId,
    lessonId: videoId(quary)?._id,
    termId: videoId(quary)?.termId,
    videoId: videoIds(quary1)?._id,
    videoPosition: lessonsNumber,
  };
  const [audioState, setAudioState] = useState(false);
  const handleClick = () => {
    setAudioState(!audioState);
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

  const fave = subject.favourite?.favouriteVideos;
  let favoury = () => {
    let likes = fave?.find((fruit) => {
      return fruit.lessonId.id === datas.lessonId;
    });
    return likes;
  };
  const [faves, setfaves] = useState(favoury() ? true : false);
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
  const favouring = () => {
    if (faves) {
      setfaves(!faves);
      dispatch(fetchremoveFavouriteVideo(datas, token));
    } else {
      setfaves(!faves);
      dispatch(fetchsaveFavouriteVideo(datas, token));
    }
  };
  // const [refresh, setRefresh] = useState();
  const refref = () => {
    dispatch(
      fetchgetLessonComments(
        datas.lessonId,
        { commentSection: "video" },
        token,
      ),
    );
  };
  // console.log(refresh);

  useEffect(() => {
    dispatch(
      fetchgetLessonComments(
        datas.lessonId,
        { commentSection: "video" },
        token,
      ),
    );
  }, []);

  const img = ["Group 2323", "Group 2324", "Group 2327", "Group 2328"];
  const randomise = () => {
    const num = Math.floor(Math.random() * 4);
    return img[num];
  };
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => {
    setModal1(!modal1);
    console.log(modal1);
  };

  const [Amodals, setAModal] = useState(false);

  const [classnote, setClassnote] = useState(1);

  return (
    <Container fluid id="videoPlay">
      <Row>
        <Col className="p-0" style={{ cursor: "pointer" }}>
          <ReactPlayer
            className="react-player"
            onStart={fetchstoreUnFinishedVideos(datas)}
            config={{ file: { attributes: { controlsList: "nodownload" } } }}
            onContextMenu={(e) => e.preventDefault()}
            onEnded={(e) => {
              fetchclearUnFinishedVideos(datas);
              toggleModal();
            }}
            url={data?.videoUrl?.videoUrl}
            controls="true"
            width="100%"
            height="500px"
            muted={false}
            playing={true}
            ref={ref}
          />
        </Col>
      </Row>
      <Row className="mt-5 mx-lg-5">
        <Col lg={6} md={7} sm={4} className="">
          <Row>
            <Col>
              {" "}
              <div className={styles.accordButtonLeft}>
                <Link href="/dashboard/student/video/videoPage">
                  <div className={styles.buttonStyle}>
                    <div className={styles.buttonStyleImage}>
                      <Image
                        alt={"afrilearn marketing video"}
                        src={`/assets/img/features/dashboard/student/${iconData.icon}.png`}
                        width={13}
                        height={13}
                      />
                    </div>
                    {iconData.text}
                  </div>
                </Link>
              </div>
            </Col>
            <Col>
              <Link
                href={{
                  pathname: "/dashboard/student/classnote/classnotePage",
                  query: [quary],
                }}
              >
                <a>
                  <div className={styles.document}></div>
                  <div className={styles.documentBottom}>Note</div>
                </a>
              </Link>
            </Col>

            <Col
              className="w-100"
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
                    <div className={styles.mic}></div>
                    <div className={styles.micBottom}>Audio</div>
                  </div>
                }
              /> */}
            </Col>

            <Col onClick={() => showing()} style={{ cursor: "pointer" }}>
              <div
                className="m-auto p-auto"
                style={{ cursor: "pointer", width: "32px", height: "32px" }}
              >
                {show ? <FcLike size={32} /> : <FcLikePlaceholder size={32} />}
              </div>
              <div className={styles.loveBottom}>I Love This</div>
            </Col>

            <Col md={1} className="p-2" style={{ position: "relative" }}>
              <div className={`m-auto ${styles1.moreIcon}`}>
                <div
                  style={{
                    width: "150px",
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    position: "absolute",
                    top: "-84px",
                    left: "-45px",
                  }}
                  className={`moreIcon ${styles1.displayNone}`}
                >
                  <Col className={`p-3 ps-3`}>
                    {user.user?.role === "602f3ce39b146b3201c2dc1d" && (
                      <Link passHref href="/dashboard/teacher/assignContent">
                        <Row className="">
                          <Col className={`m-auto ${styles.highlightText}`}>
                            <p style={{ fontSize: "12px", margin: "2px" }}>
                              Assign Content
                            </p>
                          </Col>
                        </Row>
                      </Link>
                    )}
                    <Row className="" onClick={() => toggle1()}>
                      <Col className={`m-auto ${styles.highlightText}`}>
                        <p style={{ fontSize: "12px", margin: "2px" }}>Share</p>
                      </Col>
                    </Row>
                    <Modal
                      show={modal1}
                      onHide={() => toggle1()}
                      animation={false}
                      className="shareModal"
                    >
                      <Modal.Header closeButton>&nbsp;</Modal.Header>
                      <Modal.Body>
                        <ul style={{ listStyleType: "none", padding: "0" }}>
                          <li className={`m-3 ${styles.highlightText}`}>
                            <WhatsappShareButton url={shareLink}>
                              <WhatsappIcon size={30} round={true} />
                              &nbsp;&nbsp;&nbsp;Share via Whatsapp
                            </WhatsappShareButton>
                          </li>
                          <li className={`m-3 ${styles.highlightText}`}>
                            <FacebookShareButton url={shareLink}>
                              <FacebookIcon size={30} round={true} />
                              &nbsp;&nbsp;&nbsp;Share via Facebook
                            </FacebookShareButton>
                          </li>
                          <li className={`m-3 ${styles.highlightText}`}>
                            <TelegramShareButton url={shareLink}>
                              <TelegramIcon size={30} round={true} />
                              &nbsp;&nbsp;&nbsp;Share via Telegram
                            </TelegramShareButton>
                          </li>
                          <li className={`m-3 ${styles.highlightText}`}>
                            <TwitterShareButton url={shareLink}>
                              <TwitterIcon size={30} round={true} />
                              &nbsp;&nbsp;&nbsp;Share via Twitter
                            </TwitterShareButton>
                          </li>
                          <li className={`m-3 ${styles.highlightText}`}>
                            <EmailShareButton url={shareLink}>
                              <EmailIcon size={30} round={true} />
                              &nbsp;&nbsp;&nbsp;Share via Email
                            </EmailShareButton>
                          </li>
                          <li className={`m-3 ${styles.highlightText}`}>
                            <LinkedinShareButton url={shareLink}>
                              <LinkedinIcon size={30} round={true} />
                              &nbsp;&nbsp;&nbsp;Share via Linkedin
                            </LinkedinShareButton>
                          </li>
                        </ul>
                      </Modal.Body>
                    </Modal>
                    {user.user?.role === "5fd08fba50964811309722d5" && (
                      <Row className="">
                        <Col
                          onClick={() => favouring()}
                          className={`m-auto ${styles.highlightText}`}
                        >
                          {faves ? (
                            <p style={{ fontSize: "12px", margin: "2px" }}>
                              Remove from Favourites
                            </p>
                          ) : (
                            <p style={{ fontSize: "12px", margin: "2px" }}>
                              Add to Favourites
                            </p>
                          )}
                        </Col>
                      </Row>
                    )}
                    <Row className="">
                      <Col
                        className={`m-auto ${styles.highlightText}`}
                        onClick={() => setAModal(true)}
                      >
                        <p style={{ fontSize: "12px", margin: "2px" }}>
                          Report Lesson
                        </p>
                      </Col>
                      <Amodal
                        show={Amodals}
                        onHide={() => setAModal(false)}
                        classnote={classnote}
                        subjectDetails={subjected}
                        lesson={() => videoId(quary)}
                      />
                    </Row>
                  </Col>
                </div>
              </div>
              <div className={styles.moreIconBottom}>More</div>
            </Col>
          </Row>
          <Row className="p-4" xs={4} md={8} lg={12}>
            <Col className={styles.colSeen}>
              <div className={styles.seen}></div>

              <div>{videoId(quary)?.views} Views</div>
            </Col>
            <Col className={styles.colSeen}>
              <div className={styles.loved}></div>
              <div>{liskes} Like</div>
            </Col>
          </Row>
        </Col>
        <Col className="testText ms-5">
          <Row className="text-secondary  pb-1">Class: {secVidData.class} </Row>
          <Row className="text-secondary  pb-1">
            Subject: {secVidData.subject}
          </Row>
          <Row className="text-secondary  pb-1">Term: {secVidData.term}</Row>
          <Row className="text-secondary  pb-1">
            Date Created: {secVidData.date}
          </Row>
        </Col>
      </Row>
      <Row className="mx-lg-5 mx-md-3">
        <Col className="me-lg-5 me-md-3 mx-sm-3" lg={6} sm={12}>
          <Row>
            <Col className="pl-4">
              <div className={styles.vidText}>{data.topic}</div>
            </Col>
          </Row>
          {/* ----------------------------------------------- */}
          <Comment
            data={subject.comments}
            datas={datas}
            deta={refref}
            commentSection={"video"}
          />

          <NextPrevPage datay={idSetter} className="mx-sm-5" />
        </Col>
        <Col className="ms-lg-5 ms-md-2 mx-sm-3">
          <Row></Row>
          <Row className="ml-5">
            <Col className="bg-light rounded-top mt-5 ml-5 border-bottom">
              <Row>
                <Col>
                  <p style={{ fontSize: "20px" }} className="font-weight-bold">
                    Transcript
                  </p>
                </Col>
                <Col></Col>
                <Col
                  sm={5}
                  style={{ cursor: "pointer" }}
                  onClick={
                    visibility === "Show"
                      ? () => setVisibility("Hide")
                      : () => setVisibility("Show")
                  }
                >
                  <u>{visibility} Transcript</u>
                </Col>
              </Row>
            </Col>
          </Row>
          {visibility === "Show" && (
            <Row style={{ borderRadius: "20px" }}>
              <Col className="bg-light rounded-bottom ">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.videoUrl?.transcript,
                  }}
                ></div>
              </Col>
            </Row>
          )}

          <Row className="ml-5">
            <Col className="bg-light rounded-top mt-5 ml-5 border-bottom">
              <Row className="">
                <Col style={{ fontSize: "20px" }}>Recommended for you</Col>
              </Row>
            </Col>
          </Row>

          {videoId(quary)?.videoUrls.map((dater, i) => (
            <Row className="bg-light pt-0 pb-0" style={{ borderRadius: "0 0" }}>
              <Col className="bg-light rounded-bottom m-auto" md={4}>
                <Row>
                  {dater?.thumbnailUrl ? (
                    <Image
                      alt={"afrilearn marketing video"}
                      src={dater.thumbnailUrl}
                      width={200}
                      height={110}
                    />
                  ) : (
                    <Image
                      alt={"afrilearn marketing video"}
                      src={`/assets/img/features/dashboard/student/random/${randomise()}.png`}
                      width={200}
                      height={110}
                    />
                  )}
                </Row>
              </Col>
              <Col>
                <Row className="bg-light">{videoId(quary)?.title}</Row>
                <Row
                  onClick={() => {
                    setQuary1(dater._id);
                  }}
                >
                  <a href="#videoPlay">
                    {" "}
                    <div className={styles2.buttonPlay}>
                      <button className={styles2.buttonStyle}>
                        <div className={styles2.buttonStyleImage}>
                          <Image
                            alt={"afrilearn marketing video"}
                            src={`/assets/img/features/dashboard/student/arrowhead.png`}
                            width={13}
                            height={13}
                          />
                        </div>
                        lesson {i + 1}
                      </button>
                    </div>
                  </a>
                </Row>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default VideoPage;

export const Comment = ({ data, datas, deta, commentSection }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = user?.token;

  const [comment, setComment] = useState("");

  const lenComment = data?.length;
  const pix =
    data?.comments?.userId?.profilePhotoUrl !== undefined
      ? data?.comment.userId.profilePhotoUrl
      : `/assets/img/profile.svg`;

  const commentData = {
    userId: datas.userId,
    lessonId: datas?.lessonId,
    text: comment,
    commentSection: commentSection,
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    if (comment !== "") {
      dispatch(addLessonComment(commentData, token));
      comment !== "" && console.log(comment);
      setComment("");
      deta();
    }
  };
  const comLik = true;
  const [inite, setInite] = useState("");
  const [commentEdit, setCommentEdit] = useState("");
  const handleEdit = (rey, ray) => {
    // console.log(commentEdit);
    rey === inite ? setInite("") : setInite(rey);
    setCommentEdit(ray);
  };
  const [comRep, setComRep] = useState("");
  const handleReply = (rey) => {
    // console.log(rey);
    rey === comRep ? setComRep("") : setComRep(rey);
  };
  console.log(comRep);
  let likery = (e) => {
    let likes = data?.comments[e]?.likes?.find((fruit) => {
      return fruit === datas.userId;
    });
    return likes;
  };
  const [commentReply, setCommentReply] = useState("");
  console.log(commentReply);

  const handleReplySubmit = (e, i) => {
    const commentReplyData = {
      userId: datas.userId,
      text: commentReply,
      lessonCommentId: data?.comments[i]?.id,
    };
    e.preventDefault;
    if (commentReply !== "") {
      dispatch(addResponse(commentReplyData, token));
      commentReply !== "" && console.log(commentReply);
      setCommentReply("");
      deta();
    }
  };
  // const [commentEdit, setCommentEdit] = useState("");
  // console.log(commentEdit);

  const handleSubmitEdit = (e, commentId) => {
    const commentEditData = {
      text: commentEdit,
    };
    e.preventDefault;
    console.log(commentEdit);
    if (commentEdit !== "") {
      dispatch(updateLessonComment(commentEditData, commentId, token));
      commentEdit !== "" && console.log(commentEdit);
      setCommentEdit("");
      setInite("");
      deta();
    }
  };
  const handleDelete = (e, commentId) => {
    e.preventDefault;
    console.log(commentId);
    dispatch(deleteLessonComment(commentId, token));
    deta();
  };

  const CommentFunc = ({ num, comment, main, rep }) => {
    const [show, setShow] = useState(likery(num) ? true : false);
    const dtas = {
      userId: datas.userId,
      lessonCommentId: data?.comments[num]?.id,
    };
    const [liskes, setLiskes] = useState(data?.comments[num]?.likes?.length);
    const showing = () => {
      if (show) {
        setLiskes(+liskes - 1);
        setShow(!show);
        dispatch(likeLessonComment(dtas, token));
      } else {
        setShow(!show);
        setLiskes(+liskes + 1);
        dispatch(unlikeLessonComment(dtas, token));
      }
    };

    return (
      <>
        {rep ? (
          comment?.text ? (
            // data?.comments.map((comment, i) => (
            <Row className="pt-4 px-3 ms-5 ps-5" key={comment.id}>
              <Col className="" md={2}>
                <Image
                  alt={"afrilearn marketing video"}
                  src={
                    comment?.userId?.profilePhotoUrl !== undefined
                      ? comment?.userId.profilePhotoUrl
                      : `/assets/img/profile.svg`
                  }
                  width={45}
                  height={45}
                />
              </Col>
              <Col>
                <Row>
                  <p style={{ fontSize: "16px", color: "#CBCBCB" }}>
                    {comment.userId.fullName}
                    {" . "}{" "}
                    {comment.createdAt ? (
                      <ReactTimeAgo
                        date={comment.createdAt}
                        locale="en-US"
                        timeStyle="twitter"
                      />
                    ) : (
                      "Not Known"
                    )}
                  </p>
                </Row>
                <Row>
                  <Col sm={12}>{comment.text}</Col>
                </Row>
              </Col>
            </Row>
          ) : (
            // ))
            <h6 className="text-center mt-4"> Be the first to respond🥳 </h6>
          )
        ) : (
          <Row className="pt-4 px-3" key={comment.id}>
            <Col className="" md={2}>
              <Image
                alt={"afrilearn marketing video"}
                src={
                  comment?.userId?.profilePhotoUrl !== undefined
                    ? comment?.userId.profilePhotoUrl
                    : `/assets/img/profile.svg`
                }
                width={45}
                height={45}
              />
            </Col>
            <Col>
              <Row>
                <p style={{ fontSize: "16px", color: "#CBCBCB" }}>
                  {comment.userId.fullName}
                  {" . "}{" "}
                  {comment.createdAt ? (
                    <ReactTimeAgo
                      date={comment.createdAt}
                      locale="en-US"
                      timeStyle="twitter"
                    />
                  ) : (
                    "Not Known"
                  )}
                </p>
              </Row>
              <Row>
                <Col sm={12}>{comment.text}</Col>
              </Row>
            </Col>
          </Row>
        )}
        {main && (
          <Row className={`ms-5 ms-xs-0 ps-xs-0 ps-5 ${styles.commentRows}`}>
            <Col onClick={() => showing()}>
              <Image
                alt={"afrilearn marketing video"}
                src={`/assets/img/features/dashboard/student/${
                  liskes ? "Dark Heart" : "Heart"
                }.png`}
                width={13}
                height={13}
              />{" "}
              {liskes}
            </Col>
            <Col onClick={() => handleReply(num)} style={{ cursor: "pointer" }}>
              <Image
                alt={"afrilearn marketing video"}
                src={`/assets/img/features/dashboard/student/Chat.png`}
                width={13}
                height={13}
              />{" "}
              {data?.comments[num]?.commentReplies?.length}
            </Col>
            <Col onClick={() => handleReply(num)} style={{ cursor: "pointer" }}>
              REPLY
            </Col>
            <Col md={1} xs={1} className="p-2" style={{ position: "relative" }}>
              <div className={`m-auto ${styles1.moreIcon}`}>
                <div
                  style={{
                    width: "150px",
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    position: "absolute",
                    top: "-65px",
                    left: "-45px",
                  }}
                  className={styles1.displayNone}
                >
                  <Col className={`p-3 ps-3 `}>
                    <Row
                      className=""
                      onClick={() => handleEdit(num, comment.text)}
                    >
                      <Col className={`m-auto ${styles.highlightText}`}>
                        <p style={{ fontSize: "13px", margin: "2px" }}>
                          Edit Comment
                        </p>
                      </Col>
                    </Row>

                    <Row className="">
                      <Col
                        className={`m-auto ${styles.highlightText}`}
                        onClick={(e) => {
                          handleDelete(e, comment.id);
                        }}
                      >
                        <p style={{ fontSize: "13px", margin: "2px" }}>
                          Delete Comment
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </>
    );
  };
  const [seeMore, setSeeMore] = useState(false);
  const spliced = data?.comments?.slice(0, 3);

  console.log(seeMore);
  console.log(spliced);
  return (
    <section>
      <Row>
        <Col className={styles.colSeendown}>
          <div className={styles.vidCommentLeft}>Comments</div>
          <div className={styles.vidCommentRight}>{lenComment}</div>
        </Col>
      </Row>
      <Row className="px-3">
        <Col md={2}>
          <div className={styles.commentAvatarLSide}>
            <Image
              alt={"afrilearn marketing video"}
              src={
                data?.comments?.userId?.profilePhotoUrl !== undefined
                  ? data?.comments.userId.profilePhotoUrl
                  : `/assets/img/profile.svg`
              }
              width={45}
              height={45}
            />
          </div>
        </Col>
        <Col className={styles.commentAvatarRSide}>
          <div className={styles.commentAvatartop}>
            <div className={styles.commentAvatarMSide}>
              <input
                placeholder="Add a public comment..."
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                title="Comment"
              />
            </div>
            <div
              style={{ cursor: "pointer" }}
              className={`${styles.commentAvatarMRSide}`}
              onClick={(e) => handleSubmit(e)}
            ></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.line}></div>
        </Col>
      </Row>

      {seeMore
        ? data?.comments?.map((data, i) => (
            <>
              <Row key={i}>
                <CommentFunc num={i} comment={data} main={true} />
                {comRep === i && (
                  <>
                    <Row className="w-75 ms-5 ps-5">
                      <Row className="px-3 pt-4">
                        <Col md={2}>
                          <div className={styles.commentAvatarLSide}>
                            <Image
                              alt={"afrilearn marketing video"}
                              src={
                                comment?.userId?.profilePhotoUrl !== undefined
                                  ? comment?.userId.profilePhotoUrl
                                  : `/assets/img/profile.svg`
                              }
                              width={45}
                              height={45}
                            />
                          </div>
                        </Col>

                        <Col className={styles.commentAvatarRSide}>
                          <div className={styles.commentAvatartop}>
                            <div className={styles.commentAvatarMSide}>
                              <input
                                placeholder="Add a public comment..."
                                type="text"
                                value={commentReply}
                                onChange={(e) =>
                                  setCommentReply(e.target.value)
                                }
                                title="Comment"
                              />
                            </div>
                            <div
                              style={{ cursor: "pointer" }}
                              className={`${styles.commentAvatarMRSide}`}
                              onClick={(e) => handleReplySubmit(e, i)}
                            ></div>
                          </div>
                        </Col>
                      </Row>
                    </Row>
                    {data?.commentReplies.length > 0 ? (
                      data.commentReplies.map((data, i) => (
                        <Row key={i}>
                          <CommentFunc comment={data} rep={true} />
                        </Row>
                      ))
                    ) : (
                      <h6 className="text-center mt-4">
                        {" "}
                        Be the first to respond🥳{" "}
                      </h6>
                    )}
                  </>
                )}
              </Row>
              {inite === i && (
                <Row className="ps-5 ms-5">
                  <Col md={2}>
                    <div className={styles.commentAvatarLSide}>
                      <Image
                        alt={"afrilearn marketing video"}
                        src={
                          data?.comments?.userId?.profilePhotoUrl !== undefined
                            ? data?.comments.userId.profilePhotoUrl
                            : `/assets/img/profile.svg`
                        }
                        width={45}
                        height={45}
                      />
                    </div>
                  </Col>
                  <Col className={styles.commentAvatarRSide}>
                    <div className={styles.commentAvatartop}>
                      <div className={styles.commentAvatarMSide}>
                        <input
                          placeholder="Add a public comment..."
                          type="text"
                          value={commentEdit}
                          onChange={(e) => setCommentEdit(e.target.value)}
                          title="Comment"
                        />
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className={`${styles.commentAvatarMRSide}`}
                        onClick={(e) => handleSubmitEdit(e, data.id)}
                      ></div>
                    </div>
                  </Col>
                </Row>
              )}
            </>
          ))
        : spliced?.map((data, i) => (
            <>
              <Row key={i}>
                <CommentFunc num={i} comment={data} main={true} />
                {comRep === i && (
                  <>
                    <Row className="w-75 ms-5 ps-5">
                      <Row className="px-3 pt-4">
                        <Col md={2}>
                          <div className={styles.commentAvatarLSide}>
                            <Image
                              alt={"afrilearn marketing video"}
                              src={
                                comment?.userId?.profilePhotoUrl !== undefined
                                  ? comment?.userId.profilePhotoUrl
                                  : `/assets/img/profile.svg`
                              }
                              width={45}
                              height={45}
                            />
                          </div>
                        </Col>
                        <Col className={styles.commentAvatarRSide}>
                          <div className={styles.commentAvatartop}>
                            <div className={styles.commentAvatarMSide}>
                              <input
                                placeholder="Add a public comment..."
                                type="text"
                                value={commentReply}
                                onChange={(e) =>
                                  setCommentReply(e.target.value)
                                }
                                title="Comment"
                              />
                            </div>
                            <div
                              style={{ cursor: "pointer" }}
                              className={`${styles.commentAvatarMRSide}`}
                              onClick={(e) => handleReplySubmit(e, i)}
                            ></div>
                          </div>
                        </Col>
                      </Row>
                    </Row>
                    {data?.commentReplies.length > 0 ? (
                      data.commentReplies.map((data, i) => (
                        <Row key={i}>
                          <CommentFunc comment={data} rep={true} />
                        </Row>
                      ))
                    ) : (
                      <h6 className="text-center mt-4">
                        {" "}
                        Be the first to respond🥳{" "}
                      </h6>
                    )}
                  </>
                )}
              </Row>
              {inite === i && (
                <Row className="ps-5 ms-5">
                  <Col md={2}>
                    <div className={styles.commentAvatarLSide}>
                      <Image
                        alt={"afrilearn marketing video"}
                        src={
                          data?.comments?.userId?.profilePhotoUrl !== undefined
                            ? data?.comments.userId.profilePhotoUrl
                            : `/assets/img/profile.svg`
                        }
                        width={45}
                        height={45}
                      />
                    </div>
                  </Col>
                  <Col className={styles.commentAvatarRSide}>
                    <div className={styles.commentAvatartop}>
                      <div className={styles.commentAvatarMSide}>
                        <input
                          placeholder="Add a public comment..."
                          type="text"
                          value={commentEdit}
                          onChange={(e) => setCommentEdit(e.target.value)}
                          title="Comment"
                        />
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className={`${styles.commentAvatarMRSide}`}
                        onClick={(e) => handleSubmitEdit(e, data.id)}
                      ></div>
                    </div>
                  </Col>
                </Row>
              )}
            </>
          ))}

      {data?.comments?.length > 3 && (
        <Row>
          <Col>
            <div
              onClick={() => setSeeMore(!seeMore)}
              className={` ${styles.accordButtonLeft} ${styles.accordButtonLeftExtra}`}
              style={{ cursor: "pointer" }}
            >
              {!seeMore ? "See More" : "See Less"}
            </div>
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <div className={styles.line}></div>
        </Col>
      </Row>
    </section>
  );
};

export const NextPrevPage = ({ datay }) => {
  const subject = useSelector((state) => state.mySubjectCourse);
  const lesson = subject.subjectDetails[1]?.relatedLessons;

  const truncate = (str, max) => {
    if (str.length > max) {
      return str.slice(0, max) + "...";
    } else {
      return str;
    }
  };

  const [page, setPage] = useState(0);
  // console.log(page);
  const handlePrevPage = () => {
    datay(page - 1);
    page > 0 && setPage(+page - 1);
  };
  const handleNextPage = () => {
    datay(page + 1);
    page + 1 < lesson?.length && setPage(+page + 1);
  };
  return (
    <>
      {/* {lesson?.map((les, i) => ( */}
      <Row className="pt-5">
        {page !== 0 ? (
          <Col
            lg={4}
            md={4}
            xs={10}
            sm={10}
            className="pointer m-auto"
            onClick={() => handlePrevPage()}
          >
            <Row className={` ${styles.accordButtonLeftExtr}`}>
              <Col className="" style={{ padding: "0", margin: "auto 0" }}>
                <Row className={`${styles.accordButtonLeft1}`}></Row>
              </Col>
              <Col md={1} xs={1} className="mt-2">
                <div className={`mx-0 ${styles.accordButtonLeft2}`}></div>
              </Col>
              <Col md={9} xs={9} className="p-0" style={{ textAlign: "left" }}>
                <div className={styles.accordButtonLeftSide1}>Go to</div>
                <div className={styles.accordButtonLeftSide2}>
                  {truncate(lesson[page - 1].title, 15)}
                </div>
              </Col>
            </Row>
          </Col>
        ) : (
          <Col lg={4} md={4} xs={10} sm={10}></Col>
        )}

        <Col lg={4} md={4} xs={10} sm={10} className="m-auto text-center">
          <div className={`${styles.accordButtonLeftExtr2}`}>
            {+page + 1} of {lesson?.length}
          </div>
        </Col>

        {page + 1 !== lesson?.length ? (
          <Col
            lg={4}
            md={4}
            sm={10}
            xs={10}
            className="pointer m-auto"
            onClick={() => handleNextPage()}
          >
            <Row className={` ${styles.accordButtonLeftExtr}`}>
              <Col md={9} xs={9} className="p-0" style={{ textAlign: "right" }}>
                <div className={styles.accordButtonLeftSide1}>Go to</div>
                <div className={styles.accordButtonLeftSide2}>
                  {lesson && truncate(lesson[page + 1].title, 15)}
                </div>
              </Col>
              <Col md={1} xs={1} className="mt-2">
                <div className={`mx-0 ${styles.accordButtonLeft2}`}></div>
              </Col>
              <Col className="" style={{ padding: "0", margin: "auto 0" }}>
                <div className={` ${styles.accordButtonLeft22}`}></div>
              </Col>
            </Row>
          </Col>
        ) : (
          <Col md={4} xs={5}></Col>
        )}
      </Row>
      {/* ))} */}
    </>
  );
};

export function Amodal(props) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const classnote = props.classnote;
  const subjectData = props.subjectDetails;
  const lesson = props.lesson;
  const token = user?.token;
  // const [modal, setModal] = useState(false);

  // const toggle = (e) => {
  //   e.preventDefault();
  //   setModal(!modal);
  // };
  const [valued, setValued] = useState("");
  const [messages, setMessages] = useState([]);
  const handleReport = () => {
    let message = `${subjectData.courseId.name}-${
      subjectData.mainSubjectId.name
    } ${classnote === 1 ? "class note" : "video lesson"} with title '${
      lesson?.title
    }' has the following complaints:`;

    const data = {
      message: `${message} ${
        messages > 1
          ? messages?.map((dat) => {
              return dat;
            }) +
            "," +
            valued
          : messages + "," + valued
      }`,
    };
    dispatch(reportLesson(data, token));
    setValued("");
    props.onHide();
    setMessages("");
  };

  const changeHandle = (e) => {
    const reportId = e.target.id;

    // let message = `${subjectData.courseId.name}-${
    //   subjectData.mainSubjectId.name
    // } ${classnote === 1 ? "class note" : "video lesson"} with title '${
    //   props.lesson?.title
    // }' has the following complaints:`;

    if (reportId === "report1") {
      setMessages((mes) => [
        ...mes,
        `${classnote === 1 ? "Typographic error " : "Video not clear "}`,
      ]);
    }
    if (reportId === "report2") {
      setMessages((mes) => [
        ...mes,
        `${classnote === 1 ? "Incomplete text " : "Grammatical error "}`,
      ]);
    }
    if (reportId === "report3") {
      setMessages((mes) => [
        ...mes,
        `${
          classnote === 1
            ? "Images does not look quite right "
            : "Wrong title or transcript "
        }`,
      ]);
    }
    if (reportId === "report4") {
      setMessages((mes) => [
        ...mes,
        `${classnote === 1 ? "An image is missing " : "Video not loading "}`,
      ]);
    }
    if (reportId === "report5") {
      setMessages((mes) => [...mes, "Spam, repulsive or abusive content"]);
    }
    if (reportId === "report7") {
      setValued(e.target.value);
    }
  };

  return (
    <>
      <Modal {...props} className="reportModalClass">
        <Modal.Header closeButton>Report An Issue</Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 push333">
                    <Form>
                      <div className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id="report1"
                          label={
                            classnote === 1
                              ? "Typographic error"
                              : "Video not clear"
                          }
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id="report2"
                          label={
                            classnote === 1
                              ? "Incomplete text"
                              : "Grammatical error"
                          }
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id="report3"
                          label={
                            classnote === 1
                              ? "Images does not look quite right"
                              : "Wrong title or transcript"
                          }
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id="report4"
                          label={
                            classnote === 1
                              ? "An image is missing "
                              : "Video not loading"
                          }
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id="report5"
                          label={"Spam, repulsive or abusive content"}
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="eg. Something else..."
                          id="report7"
                          value={valued}
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="row relative">
                  <div className="col-12">
                    <Button onClick={() => handleReport()}>Submit</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
