import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Video from "..";
import styles from "../../classnote/classnote.module.css";
import styles1 from "../../../../../../pages/dashboard/teacher/teacher.module.css";
import styles2 from "../../topInClass.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
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
import Speech from "react-speech";

// import {useSpeechSynthesis} from "react-speech-kit";

const VideoPage = () => {
  const dispatch = useDispatch();
  const ref = useRef("");
  const router = useRouter();
  let quary = router.query[0];
  let quary1 = router.query[1];
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
  const videoId = (id) => {
    let dat;
    for (let i = 0; i < lessons.length; i++) {
      if (lessons[i].id === id) {
        dat = lessons[i];
      }
    }
    return dat;
  };
  const term = () => {
    let dat;
    for (let i = 0; i < terms.length; i++) {
      if (videoId(quary).termId === terms[i].id) {
        dat = terms[i].term;
      }
    }
    return dat;
  };
  let lessonsNumber;
  const videoIds = (id) => {
    let dat;
    const lesson = videoId(quary).videoUrls;
    for (let i = 0; i < lesson.length; i++) {
      if (lesson[i]._id === id) {
        lessonsNumber = i;
        dat = lesson[i];
      }
    }
    return dat;
  };
  const data = {
    topic: videoId(quary).title,
    videoUrl: videoIds(quary1),
  };
  const [visibility, setVisibility] = useState("Show");

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const iconData = [
    {
      icon: "arrowhead",
      text: `Lesson ${+lessonsNumber + 1}`,
    },
  ];
  const d = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const subjected = subject.subjectDetails[0].subject;
  const secVidData = {
    class: subjected.courseId.alias,
    subject: subjected.mainSubjectId.name,
    term: term(),
    date: moment(videoId(quary) && videoId(quary).createdAt).format("LL"),
  };

  const target = useRef(null);

  const datas = {
    userId: user.user._id,
    courseId: videoId(quary).courseId,
    subjectId: videoId(quary).subjectId,
    lessonId: videoId(quary)._id,
    termId: videoId(quary).termId,
    videoId: videoIds(quary1)._id,
    videoPosition: lessonsNumber,
  };
  const [audioState, setAudioState] = useState(false);
  const handleClick = () => {
    setAudioState(!audioState);
  };
  const decodeEntities = (function () {
    // this prevents any overhead from creating the object each time
    var element = document.createElement("div");

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
  const alreadyAddedToFavourite = () => {
    let result = [];
    let result1 = [];
    //old records
    if (dashboardFavouriteVideos && dashboardFavouriteVideos.length) {
      result = dashboardFavouriteVideos.filter(
        (item) => item.lessonId.id === parsed.lessonId,
      );
    }
    //new records
    if (
      newlyAddedDashbaordFavouriteVideos &&
      newlyAddedDashbaordFavouriteVideos.length
    ) {
      result1 = newlyAddedDashbaordFavouriteVideos.filter(
        (item) => item.lessonId === parsed.lessonId,
      );
    }
    if (result.length || result1.length) {
      return true;
    } else {
      return false;
    }
  };

  let likey = () => {
    let likes = videoId(quary).likes.find((fruit) => {
      return fruit === datas.userId;
    });
    return likes;
  };
  const fave = subject.subject[4].favouriteVideos;
  let favoury = () => {
    let likes = fave.find((fruit) => {
      return fruit.lessonId.id === datas.lessonId;
    });
    return likes;
  };
  const [show, setShow] = useState(likey() ? true : false);
  const [faves, setfaves] = useState(favoury() ? true : false);
  console.log(faves);
  const [liskes, setLiskes] = useState(videoId(quary).likes.length);
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
  useEffect(() => {
    dispatch(
      fetchgetLessonComments(
        datas.lessonId,
        { commentSection: "video" },
        token,
      ),
    );
  }, [fetchgetLessonComments]);

  return (
    <Container fluid>
      <Row>
        <Col className="p-0" style={{ cursor: "pointer" }}>
          {/* <iframe
            width="100%"
            height="600px"
            src={data?.videoUrl.videoUrl}
          ></iframe> */}
          <ReactPlayer
            className="react-player"
            onStart={fetchstoreUnFinishedVideos(datas)}
            config={{ file: { attributes: { controlsList: "nodownload" } } }}
            onContextMenu={(e) => e.preventDefault()}
            onEnded={(e) => {
              fetchclearUnFinishedVideos(datas);
              toggleModal();
            }}
            url={data?.videoUrl.videoUrl}
            controls="true"
            width="100%"
            height="500px"
            muted={false}
            playing={true}
            ref={ref}
          />
        </Col>
      </Row>
      <Row className="p-5">
        <Col sm={7}>
          <Row>
            <Col>
              {" "}
              <div className={styles.accordButtonLeft}>
                <Link href="/dashboard/student/video/videoPage">
                  <div className={styles.buttonStyle}>
                    <div className={styles.buttonStyleImage}>
                      <Image
                        alt={"afrilearn marketing video"}
                        src={`/assets/img/features/dashboard/student/${iconData[0].icon}.png`}
                        width={13}
                        height={13}
                      />
                    </div>
                    {iconData[0].text}
                  </div>
                </Link>
              </div>
            </Col>
            <Col>
              <Link
                href={{
                  pathname: "/dashboard/student/classnote/classnotePage",
                  query: { quary },
                }}
              >
                <a>
                  <div className={styles.document}></div>
                  <div className={styles.documentBottom}>Class Note</div>
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
              <Speech
                text={decodeEntities(videoId(quary).content)}
                textAsButton={true}
                stop={audioState}
                displayText={
                  <div style={{ height: "54.5" }}>
                    <div className={styles.mic}></div>
                    <div className={styles.micBottom}>Audio Lesson</div>
                  </div>
                }
              />
            </Col>

            <Col onClick={() => showing()} style={{ cursor: "pointer" }}>
              <div
                className="mx-5 px-4"
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
                  className={styles1.displayNone}
                >
                  <Col className={`p-3 ps-3 `}>
                    <Link passHref href="/dashboard/teacher/assignContent">
                      <Row className="">
                        <Col className={`m-auto ${styles.highlightText}`}>
                          <p style={{ fontSize: "12px", margin: "2px" }}>
                            Share
                          </p>
                        </Col>
                      </Row>
                    </Link>
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
                    <Row className="">
                      <Col className={`m-auto ${styles.highlightText}`}>
                        <p style={{ fontSize: "12px", margin: "2px" }}>
                          Report Lesson
                        </p>
                      </Col>
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

              <div>{videoId(quary).views} Views</div>
            </Col>
            <Col className={styles.colSeen}>
              <div className={styles.loved}></div>
              <div>{liskes} Like</div>
            </Col>
          </Row>
          <Row>
            <Col className="pl-4">
              <div className={styles.vidText}>{data.topic}</div>
            </Col>
          </Row>
          {/* ----------------------------------------------- */}
          <Comment data={subject.comments} />

          <Row>
            <Col>
              <div
                className={` ${styles.accordButtonLeft} ${styles.accordButtonLeftExtra}`}
              >
                See More
              </div>
            </Col>
          </Row>
          <NextPrevPage data={iconData} />
        </Col>
        <Col className="mx-5">
          <Row>
            <Col sm={4} className="">
              <Row className="text-secondary  pb-1">Class:</Row>
              <Row className="text-secondary  pb-1">Subject:</Row>
              <Row className="text-secondary  pb-1">Term:</Row>
              <Row className="text-secondary  pb-1">Date Created:</Row>
            </Col>
            <Col>
              <Row className="pb-1">{secVidData.class}</Row>
              <Row className="pb-1">{secVidData.subject}</Row>
              <Row className="pb-1">{secVidData.term}</Row>
              <Row className="pb-1">{secVidData.date}</Row>
            </Col>
          </Row>
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
                    __html: data?.videoUrl.transcript,
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

          <Row className="bg-light" style={{ borderRadius: "0 0 20px 20px" }}>
            <Col className="bg-light rounded-bottom ">
              <Col>
                <Row>
                  <div className={`px-0 ${styles2.contList}`}>
                    <Image
                      alt={"afrilearn marketing video"}
                      src="https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/meaning-of-economics/thumbnail/economics.jpeg"
                      width={150}
                      height={120}
                      className={styles2.rectBox}
                    />
                    <div className={styles2.rect}>
                      <Image
                        alt={"afrilearn marketing video"}
                        src={`/assets/img/features/dashboard/student/Rectangle 7862.png`}
                        width={150}
                        height={120}
                      />
                    </div>

                    <div className={`mb-5 ${styles2.play_paus2}`}>
                      <Image
                        alt={"afrilearn marketing video"}
                        src={`/assets/img/features/dashboard/student/Play.png`}
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </Row>
              </Col>
            </Col>
            <Col>
              <Row className="bg-light">
                Geometrical Construction (2): Angles
              </Row>
              <Row>
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
                    lesson 1
                  </button>
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoPage;

export const Comment = ({ data }) => {
  const comments = [
    {
      name: "Ibrahim Muhammed",
      time: "30 minutes ago",
      comment: "Does it mean that tractor is a simple farm tool?",
      likes: "14",
      reply: [
        { name: "kolawole isaac", repcom: "that is a valid question" },
        { name: "semiu isaac", repcom: "i second isaac" },
      ],
      Avatar: "comment1",
    },
    {
      name: "Ibrahim Muhammed",
      time: "30 minutes ago",
      comment: "Does it mean that tractor is a simple farm tool?",
      likes: "14",
      reply: [
        { name: "kolawole isaac", repcom: "that is a valid question" },
        { name: "semiu isaac", repcom: "i second isaac" },
        { name: "semiu isaac", repcom: "i second isaac" },
      ],
      Avatar: "comment2",
    },
  ];

  const [comment, setComment] = useState("");

  const lenComment = data.length;

  return (
    <section>
      <Row>
        <Col className={styles.colSeendown}>
          <div className={styles.vidCommentLeft}>Comments</div>
          <div className={styles.vidCommentRight}>{lenComment}</div>
        </Col>
      </Row>
      <Row>
        <Col xs={3} md={2}>
          <div className={styles.commentAvatarLSide}>
            <Image
              alt={"afrilearn marketing video"}
              src={`/assets/img/profile.svg`}
              width={45}
              height={45}
            />
          </div>
        </Col>
        <Col xs={12} md={10} className={styles.commentAvatarRSide}>
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
            <div className={styles.commentAvatarMRSide}></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.line}></div>
        </Col>
      </Row>
      {comments.map((comments, i) => (
        <Row className="pt-5" key={i}>
          <Col>
            <div className={styles.vidAvatar}>
              <Image
                alt={"afrilearn marketing video"}
                src={`/assets/img/features/dashboard/student/${comments.Avatar}.png`}
                width={45}
                height={45}
              />
            </div>
          </Col>
          <Col xs={8}>
            <Row>
              <Col sm={5}>{comments.name}</Col>
              <Col sm={5}>{comments.time}</Col>
            </Row>
            <Row>
              <Col sm={12}>{comments.comment}</Col>
            </Row>
            <Row>
              <Col sm={2}>
                <Image
                  alt={"afrilearn marketing video"}
                  src={`/assets/img/features/dashboard/student/Heart.png`}
                  width={13}
                  height={13}
                />
                {comments.likes}
              </Col>
              <Col sm={2}>
                <Image
                  alt={"afrilearn marketing video"}
                  src={`/assets/img/features/dashboard/student/Chat.png`}
                  width={13}
                  height={13}
                />
                {comments.reply.length}
              </Col>
              <Col sm={2}>REPLY</Col>
            </Row>
          </Col>
          <Col>
            <div className={styles.threeIcons}>
              <Image
                alt={"afrilearn marketing video"}
                src={`/assets/img/features/dashboard/student/Group2121.png`}
                width={5}
                height={20}
              />
            </div>
          </Col>
        </Row>
      ))}
    </section>
  );
};

export const NextPrevPage = ({ data }) => {
  return (
    <>
      <Row className="pt-5">
        <Col md={4} className="">
          <Row className={` ${styles.accordButtonLeftExtr}`}>
            <Col md={2} className="mt-3">
              <Row className={`mx-4 ${styles.accordButtonLeft1}`}></Row>
            </Col>
            <Col md={1} className="mt-2">
              <div className={styles.accordButtonLeft2}></div>
            </Col>
            <Col md={8} className="">
              <div className={styles.accordButtonLeftSide1}>Go to</div>
              <div className={styles.accordButtonLeftSide2}>Prev Page</div>
            </Col>
          </Row>
        </Col>

        <Col md={4}>
          <div className={`${styles.accordButtonLeftExtr2}`}>
            {data[0].text} of {data.length}
          </div>
        </Col>
        <Col md={4}>
          <Row className={` ${styles.accordButtonLeftExtr}`}>
            <Col md={8} className="">
              <div className={styles.accordButtonLeftSide1}>Go to</div>
              <div className={styles.accordButtonLeftSide2}>Next Page</div>
            </Col>
            <Col md={1} className="mt-2">
              <div className={`mx-0 ${styles.accordButtonLeft2}`}></div>
            </Col>
            <Col md={2} className="" style={{ padding: "0", margin: "auto" }}>
              <div className={` ${styles.accordButtonLeft1}`}></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
