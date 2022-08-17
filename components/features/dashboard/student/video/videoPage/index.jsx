import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Video from "..";
import styles from "../../classnote/classnote.module.css";
import styles1 from "../../../../../../pages/dashboard/teacher/teacher.module.css";
import styles2 from "../../topInClass.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {useSpeechSynthesis} from "react-speech-kit";

const VideoPage = () => {
  const router = useRouter();
  let quary = router.query.Exam;
  let quary1 = router.query.Lesson;
  let quary2 = router.query.term;
  console.log(quary);
  const subject = useSelector((state) => state.MySubject);
  const lessons = subject.subjectDetails[1]?.relatedLessons;
  console.log(lessons);
  const data = {
    topic: lessons[quary1].title,
    videoUrl: lessons[quary1].videoUrls[quary].videoUrl,
  };
  console.log(data?.videoUrl);
  const [visibility, setVisibility] = useState("Show");
  // src/App.js
const onEnd = () => {
  setHighlightedText('')
}

const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({onEnd})
  const iconData = [
    {
      icon: "arrowhead",
      text: `Lesson ${+quary + 1}`,
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
  const secVidData = {
    class: subject.subjectDetails[0].subject.courseId.alias,
    subject: subject.subjectDetails[0].subject.mainSubjectId.name,
    term: quary2,
    date: `${d.getDate()} - ${months[d.getMonth()]} - ${d.getFullYear()}`,
  };

  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <iframe width="100%" height="600px" src={data?.videoUrl}></iframe>
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
                  query: { Exam: quary },
                }}
              >
                <a>
                  <div className={styles.document}></div>
                  <div className={styles.documentBottom}>Class Note</div>
                </a>
              </Link>
            </Col>
            {<Col onClick={()=> speak({text:lessons[quary1].content})} style={{cursor:"pointer"}}>
              <div className={styles.mic}></div>
              <div className={styles.micBottom}>Audio Lesson</div>
            </Col>}
            <Col>
              <div className={styles.love}></div>
              <div className={styles.loveBottom}>I Love This</div>
            </Col>
            <Col md={1}>
              <div className={`m-auto ${styles1.moreIcon}`}>
                <div
                  style={{
                    width: "200px",
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    position: "absolute",
                  }}
                  className={styles1.displayNone}
                >
                  <Col className={`p-3 ps-3 `}>
                    <Link passHref href="/dashboard/teacher/assignContent">
                      <Row className="ps-3 pb-2">
                        <Col className={`m-auto ${styles.highlightText}`}>
                          Assign Content
                        </Col>
                      </Row>
                    </Link>
                    <Row className="ps-3 pb-2">
                      <Col className={`m-auto ${styles.highlightText}`}>
                        Community
                      </Col>
                    </Row>
                    <Row className="ps-3 pb-2">
                      <Col className={`m-auto ${styles.highlightText}`}>
                        Bookmark
                      </Col>
                    </Row>
                    <Row className="ps-3 pb-2">
                      <Col className={`m-auto ${styles.highlightText}`}>
                        Share
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

              <div>{lessons[quary1].views} Views</div>
            </Col>
            <Col className={styles.colSeen}>
              <div className={styles.loved}></div>
              <div>{lessons[quary1].likes.length} Love</div>
            </Col>
          </Row>
          <Row>
            <Col className="pl-4">
              <div className={styles.vidText}>{data.topic}</div>
            </Col>
          </Row>
          {/* ----------------------------------------------- */}
          <Comment />

          <Row>
            <Col>
              {/* <Link href="/dashboard/student/video/videoPage"> */}

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
                    __html: lessons[quary1].videoUrls[quary].transcript,
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

export const Comment = () => {
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

  const userAvatar = { avatar: "userIcon" };
  const lenComment = comments.length;

  return (
    <>
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
              src={`/assets/img/features/dashboard/student/${userAvatar.avatar}.png`}
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
    </>
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
