import Image from "next/image";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HeroPageDetailed } from "../assignContent";
import styles from "../teacher.module.css";

const InfoTeacher = () => {
  const [response, setResponse] = useState("");
  const [show, setShow] = useState(false);

  const comments = [
    {
      name: "Ibrahim Muhammed",
      time: "30 minutes ago",
      comment: "How do I simplify the equation 2x-3xyz = 46. Find x",
      Avatar: "comment1",
    },
  ];

  const userAvatar = { avatar: "userIcon" };

  return (
    <>
      <div>
        <HeroPageDetailed
          datas={{ textH3: "Classwork", textP: "Basic Technology" }}
        />
      </div>
      <Container>
        <Row className="mt-5">
          <Col style={{ background: "#FAFAFA" }} className="pt-3">
            <Row>
              <Col md={1} className="p-0">
                <Image
                  alt={"assign content placeholder"}
                  src={`/assets/img/features/dashboard/teacher/Group 2168.png`}
                  width={84}
                  height={84}
                />
              </Col>
              <Col>
                <Row>
                  <p>Hello Everyone!</p>
                </Row>
                <Row>
                  <p>
                    Here is the link to Simplified Algebraic Expression
                    https://facebook.com Watch video lessons and read class note
                    on this topic Discussion on this topic will be on 07
                    Sept,2020 Cheers!
                  </p>
                </Row>
                <Row>
                  <Col>
                    <p className="text-secondary">Mr Abraham O.(Teacher)</p>
                  </Col>
                  <Col>
                    <p className="text-secondary">04 Sept 2020</p>
                  </Col>
                </Row>
                <Row>
                  <p className="">Due 06 Sept 2020</p>
                </Row>
              </Col>
              <Col md={1}>
                <div className={styles.moreIcon}>
                  <div
                    style={{
                      width: "123px",
                      height: "91px",
                      background: "#FFFFFF",
                      boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.1)",
                      borderRadius: "10px",
                      position: "absolute",
                    }}
                    className={styles.displayNone}
                  >
                    <Col className={`p-3 ps-3 `}>
                      <Row className="ps-3 pb-2">
                        <Col
                          md={3}
                          className={`ps-2 ${styles.styleEdit}`}
                        ></Col>
                        <Col className="m-auto">Edit</Col>
                      </Row>
                      <Row className="ps-3 pb-2">
                        <Col
                          md={3}
                          className={`ps-2 ${styles.styleDelete}`}
                        ></Col>
                        <Col className="m-auto">Delete</Col>
                      </Row>
                    </Col>
                  </div>
                </div>
              </Col>
            </Row>
            <Row
              style={{
                border: "1px solid gray",
                width: "100%",
                margin: " 20px auto",
              }}
            ></Row>
            <Row className="mx-2">
              <Col>
                <Row>Class comments</Row>
                <Row>
                  <Comments />
                </Row>
              </Col>
            </Row>
          </Col>
          <Col style={{ background: "#FAFAFA" }} className="mx-3 p-3">
            <Row className="m-2">1 Private Comment</Row>
            <Row className="m-2">
              {comments.map((comments, i) => (
                <Row className="pt-3" key={i}>
                  <Col style={{ padding: "0" }}>
                    <div className={styles.vidAvatar}>
                      <Image
                        alt={"afrilearn marketing video"}
                        src={`/assets/img/features/dashboard/student/${comments.Avatar}.png`}
                        width={45}
                        height={45}
                      />
                    </div>
                  </Col>
                  <Col xs={11}>
                    <Row className="text-secondary">
                      <Col sm={5}>{comments.name}</Col>
                      <Col sm={5}>{comments.time}</Col>
                    </Row>
                    <Row>
                      <Col sm={12}>{comments.comment}</Col>
                    </Row>
                    <Row className="pt-3" onClick={() => setShow(true)}>
                      <Col
                        sm={2}
                        style={{ color: "#00D9B6", cursor: "pointer" }}
                      >
                        <u>REPLY</u>
                      </Col>
                    </Row>
                    {show && (
                      <Row className="mt-5">
                        <Col className="p-0">
                          <div className={styles.commentAvatarLSide}>
                            <Image
                              alt={"afrilearn marketing video"}
                              src={`/assets/img/features/dashboard/student/${userAvatar.avatar}.png`}
                              width={45}
                              height={45}
                            />
                          </div>
                        </Col>
                        <Col md={11} className={styles.commentAvatarRSide}>
                          <div className={styles.commentAvatartop}>
                            <div className={styles.commentAvatarMSide}>
                              <input
                                placeholder="Add a public comment..."
                                type="text"
                                value={response}
                                onChange={(e) => setResponse(e.target.value)}
                                title="Comment"
                                style={{
                                  border: "1px solid #A6A6A6",
                                  borderRadius: "100px",
                                  padding: "10px 20px",
                                  width: "100%",
                                  outline: "none",
                                }}
                              />
                            </div>
                            <div className={styles.commentAvatarMRSide}></div>
                          </div>
                          <div className={styles.commentAvatarMRSides}>
                            <p
                              className="text-danger m-3"
                              onClick={() => setShow(false)}
                              style={{cursor:"pointer",}}
                            >
                              <u>Close</u>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    )}
                  </Col>
                </Row>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InfoTeacher;

const Comments = () => {
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
        <Col className={styles.colSeendown}></Col>
      </Row>

      <Row>
        <Col>
          <div className={styles.line}></div>
        </Col>
      </Row>
      {comments.map((comments, i) => (
        <Row className="pt-3" key={i}>
          <Col style={{ padding: "0" }}>
            <div className={styles.vidAvatar}>
              <Image
                alt={"afrilearn marketing video"}
                src={`/assets/img/features/dashboard/student/${comments.Avatar}.png`}
                width={45}
                height={45}
              />
            </div>
          </Col>
          <Col xs={11}>
            <Row className="text-secondary">
              <Col sm={5}>{comments.name}</Col>
              <Col sm={5}>{comments.time}</Col>
            </Row>
            <Row>
              <Col sm={12}>{comments.comment}</Col>
            </Row>
          </Col>
        </Row>
      ))}
      <Row className="mt-5">
        <Col className="p-0">
          <div className={styles.commentAvatarLSide}>
            <Image
              alt={"afrilearn marketing video"}
              src={`/assets/img/features/dashboard/student/${userAvatar.avatar}.png`}
              width={45}
              height={45}
            />
          </div>
        </Col>
        <Col md={11} className={styles.commentAvatarRSide}>
          <div className={styles.commentAvatartop}>
            <div className={styles.commentAvatarMSide}>
              <input
                placeholder="Add a public comment..."
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                title="Comment"
                style={{
                  border: "1px solid #A6A6A6",
                  borderRadius: "100px",
                  padding: "10px 20px",
                  width: "100%",
                  outline: "none",
                }}
              />
            </div>
            <div className={styles.commentAvatarMRSide}></div>
          </div>
        </Col>
      </Row>
    </>
  );
};
