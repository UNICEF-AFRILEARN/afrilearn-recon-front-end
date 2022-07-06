import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Video from "..";
import styles from "../../classnote/classnote.module.css";
import styles2 from "../../topInClass.module.css";

const VideoPage = () => {
  const data = {
    topic: "Geometrical Construction (2):  Angles",
    videoUrl:
      "https://afrilearn-media.s3.eu-west-3.amazonaws.com/jss-one/civic-education/third-term/national-unity/video-lessons/1619685168578CE_National+unity%2B%2B.mp4",
  };
  const iconData = [
    {
      icon: "arrowhead",
      text: "Lesson 1",
    },
  ];

  const secVidData = {
    class: "Senoir Secondary School One",
    subject: "Basic Technology",
    term: "First Term",
    date: "14th September 2020",
  };

  const [visibility, setVisibility] = useState("Show");

  // const lenReply = comments.reply.length;
  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <video
            src={data?.videoUrl}
            width={"100%"}
            height={"600px"}
            controls
            // autoPlay
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
              <div className={styles.document}></div>
              <div className={styles.documentBottom}>Class Note</div>
            </Col>
            <Col>
              <div className={styles.mic}></div>
              <div className={styles.micBottom}>Audio Lesson</div>
            </Col>
            <Col>
              <div className={styles.love}></div>
              <div className={styles.loveBottom}>I Love This</div>
            </Col>
            <Col>
              <div className={styles.moreIcon}></div>
              <div className={styles.moreIconBottom}>More</div>
            </Col>
          </Row>
          <Row className="p-4" xs={4} md={8} lg={12}>
            <Col className={styles.colSeen}>
              <div className={styles.seen}></div>

              <div>1240 Views</div>
            </Col>
            <Col className={styles.colSeen}>
              <div className={styles.loved}></div>
              <div>1.5k Love</div>
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
                <p>
                  "Construction" in Geometry means to draw shapes, angles or
                  lines accurately.These constructions use only compass,
                  straightedge (i.e. ruler) and a pencil.straightedge.This is
                  the "pure" form of geometric construction: no numbers
                  involved! Angles And it is useful to know how to do 30°, 45°
                  and 60° angles. We can use the angle bisector method (above)
                  to create other angles such as 15°, etc. And it is useful to
                  know how to do 30°, 45° and 60° angles. We can use the
                  "Construction" in Geometry means to draw shapes, angles or
                  lines accurately. These constructions use only compass,
                  straightedge (i.e. ruler) and a pencil straightedge. This is
                  the "pure" form of geometric construction: no numbers
                  involved! "Construction" in Geometry means to draw shapes,
                  angles or lines accurately.These constructions use only
                  compass, straightedge (i.e. ruler) and a pencil.straightedge.
                </p>
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
          {/* <div className={styles.commentAvatarRight}> */}
          <div className={styles.commentAvatarLSide}>
            <Image
              alt={"afrilearn marketing video"}
              src={`/assets/img/features/dashboard/student/${userAvatar.avatar}.png`}
              width={45}
              height={45}
            />
          </div>
          {/* </div> */}
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
        <Col sm={5} className="">
          <Row className={` ${styles.accordButtonLeftExtr}`}>
            <Col sm={2} className="mt-3">
              <Row className={`mx-4 ${styles.accordButtonLeft1}`}></Row>
            </Col>
            <Col sm={1} className="mt-2">
              <div className={styles.accordButtonLeft2}></div>
            </Col>
            <Col sm={9} className="">
              <div className={styles.accordButtonLeftSide1}>Back to</div>
              <div className={styles.accordButtonLeftSide2}>Subject Page</div>
            </Col>
          </Row>
        </Col>

        <Col sm={2}>
          <div className={`${styles.accordButtonLeftExtr2}`}>
            {data[0].text} of {data.length}
          </div>
        </Col>
        <Col sm={5}>
          <Row className={` ${styles.accordButtonLeftExtr}`}>
            <Col sm={9} className="">
              {/* <p className={`pl-5 ${styles.accordButtonLeftSide1}`}>Back to</p>
                  <p className={styles.accordButtonLeftSide2}>
                    Subject Page
                  </p> */}
            </Col>
            <Col sm={1} className="mt-2">
              <div className={styles.accordButtonLeft2}></div>
            </Col>
            <Col sm={2} className="mt-3">
              <Row className={`mx-1 ${styles.accordButtonLeft1}`}></Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
