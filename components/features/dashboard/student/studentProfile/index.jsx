<<<<<<< HEAD
import { Col, Row } from "react-bootstrap";
import styles1 from "../student.module.css";
import styles from "./studentProfile.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUserProfileInitiate } from "../../../../../redux/actions/dashboard";

const StudentProfile = () => {
  const {user} = useSelector(state => state.auth);
  const { userProfile } = useSelector(state => state.dashboard)
  const dispatch = useDispatch();

  const token = user.token;
  const userId = user.user?.id;

  console.log("logged-in ==> profile", userProfile)
  console.log("logged-in ==> user profile", user)
  const coin = { amount: 345 };
  const number = "";

  useEffect(() => {
    dispatch(fetchUserProfileInitiate(userId, token))
  }, [])
  
  return (
    <>
      <div
        className={`container-fluid relative ${styles1.dashboardFirstSection2}`}
        style={{ position: "relative" }}
      ></div>
      <Row
        style={{
          position: "absolute",
          bottom: "33%",
          width: "100%",
          zIndex: "3",
        }}
      >
        <Col>
          <Row className={`mx-auto ${styles.studentProfileGrid}`}>
            <Col className={`m-auto ${styles.studentProfileAvatar}`}>
              <Col className={`m-auto ${styles.studentProfileAvatar2}`}></Col>
            </Col>
            <Col className={styles.studentProfileInfo}>
              <Row className="p-4">
                <Row>
                  <Col md={7}>
                    <Row>
                      <Col md={5}>
                        <h4 className="text-dark">{user.user?.fullName}</h4>
                      </Col>
                      <Col
                        className={`${styles.studentProfileCrownTheme}`}
                      ></Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="p-4">
                  <Col>
                    <Row>
                      <Col>
                        <p className="text-dark">{user.user?.email}</p>
                      </Col>
                      <Col>
                        <Row>
                          <Col
                            md={2}
                            className={`${styles.stateComponent}`}
                          ></Col>
                          <Col>
                            <p className="m-auto">Lagos State, Nigeria</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={2} className="">
                        <Link
                          passHref
                          href="/dashboard/student/studentProfile/studentProfileEdit"
                        >
                          <a>
                            <Row className="px-auto">
                              <Col
                                md={2}
                                className={`${styles.studentProfilePenIcon}`}
                              ></Col>
                              <Col
                                className={`p-0 ${styles.studentProfileColorText}`}
                                style={{ color: "#00D9B6" }}
                              >
                                <u>Edit Profile</u>
                              </Col>
                            </Row>
                          </a>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="m-3 p-3"></Row>
      <Row className="m-5"></Row>
      <Row className="m-5 p-5">
        <Col md={3}>
          <Row
            style={{
              fontWeight: "500",
              fontSize: "25px",
              lineHeight: "33px",
              color: "#333333",
            }}
          >
            Wallet Balance:
          </Row>
          <Row
            style={{
              backgroundColor: "#f1f2f4",
              width: "214px",
              height: "58px",
              borderRadius: "9px",
              marginTop: "20px",
              //   marginLeft:"10px"
            }}
          >
            <Col
              xs={3}
              className={`ms-3 ${styles.studentProfileCoinIcon}`}
            ></Col>
            <Col
              className="pt-3"
              style={{ fontWeight: "700", fontSize: "15px", color: "#333333" }}
            >
              <p>Coin: {user.user?.afriCoins}</p>
            </Col>
          </Row>
          <Row
            className="mt-4"
            style={{
              width: "223px",
              height: "53px",
              background: "#00D9B6",
              borderRadius: "100px",
            }}
          >
            <p
              style={{
                fontWeight: "500",
                margin: "auto",
                fontSize: "18px",
                lineHeight: "24px",
                color: "#FFFFFF",
                width: "fit-content",
              }}
            >
              BUY MORE COINS
            </p>
          </Row>
        </Col>
        <Col className="px-4">
          <Row>
            <p
              style={{
                fontWeight: "500",
                fontSize: "25px",
                lineHeight: "33px",
                color: "#333333",
              }}
            >
              Personal Details
            </p>
          </Row>
          <Row
            style={{
              border: "1px solid rgba(51, 51, 51, 0.35)",
              boxShadow: "0px 1px 7px rgba(255, 255, 255, 0.25)",
            }}
          ></Row>
          <Row>
            <Col className="p-2">
              <Row className="pt-2">
                <p
                  style={{
                    fontWeight: "300",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  Phone Number:{" "}
                  <span
                    className="p-2 text-bold text-dark"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      textDecoration: "",
                    }}
                  >
                    {user.user?.phoneNumber}
                  </span>
                </p>
              </Row>
              <Row className="pt-2">
                <p
                  style={{
                    fontWeight: "300",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  State:{" "}
                  <span
                    className="p-2 text-bold text-dark"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    {user?.user?.state !== "" ? user?.user?.state : "--"}
                  </span>
                </p>
              </Row>
              <Row className="pt-2">
                <p
                  style={{
                    fontWeight: "300",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  Gender:{" "}
                  <span
                    className="p-2 text-bold text-dark"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    {user?.user?.gender !== "" ? user?.user?.gender : "--"}
                  </span>
                </p>
              </Row>
            </Col>
            <Col>
              <Row className="pt-2">
                <p
                  style={{
                    fontWeight: "300",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  Age:{" "}
                  <span
                    className="p-2 text-bold text-dark"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    {number !== "" ? { number } : "--"}
                  </span>
                </p>
              </Row>
              <Row className="pt-2">
                <p
                  style={{
                    fontWeight: "300",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  City:{" "}
                  <span
                    className="p-2 text-bold text-dark"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    {number !== "" ? { number } : "--"}
                  </span>
                </p>
              </Row>
              <Row className="pt-2">
                <p
                  style={{
                    fontWeight: "300",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  Role:{" "}
                  <span
                    className="p-2 text-bold text-dark"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    {number !== "" ? { number } : "--"}
                  </span>
                </p>
              </Row>
            </Col>
            <Row className="pt-4">
              <Col>
                <Row>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "25px",
                      lineHeight: "33px",
                      color: "#333333",
                    }}
                  >
                    Class(es)
                  </p>
                </Row>
              </Col>
              <Col>
                <Row>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "25px",
                      lineHeight: "33px",
                      color: "#333333",
                    }}
                  >
                    Status
                  </p>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                border: "1px solid rgba(51, 51, 51, 0.35)",
                boxShadow: "0px 1px 7px rgba(255, 255, 255, 0.25)",
              }}
            ></Row>
            {number !== "" ? (
              <Row className="p-5">
                <p style={{ color: "#A6A6A6" }}>
                  You have not added a class:{" "}
                  <Link
                    passHref
                    href="/dashboard/student/studentProfile"
                    style={{ color: "#333333", cursor: "pointer" }}
                  >
                    <u style={{ color: "#333333", cursor: "pointer" }}>
                      Add A New Class
                    </u>
                  </Link>{" "}
                  here
                </p>
              </Row>
            ) : (
              <Row className="pt-2">
                <Col>
                  <Row className="pt-2">
                    <p
                      style={{
                        fontWeight: "300",
                        fontSize: "20px",
                        color: "#333333",
                      }}
                    >
                      {user.user?.enrolledCourses[0]?.courseId?.name}
                    </p>
                  </Row>
                </Col>
                <Col>
                  {number === "" ? (
                    <Row
                      className="pt-2"
                      style={{
                        width: "189px",
                        height: "40px",
                        background: "#00D9B6",
                        borderRadius: "20px",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "300",
                          fontSize: "15px",
                          color: "white",
                          padding: "auto",
                          textAlign: "center",
                        }}
                      >
                        Subscribed
                      </p>
                    </Row>
                  ) : (
                    <Row
                      className="pt-2"
                      style={{
                        width: "189px",
                        height: "40px",
                        background: "white",
                        borderRadius: "20px",
                        border: "1px solid #333333",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "300",
                          fontSize: "15px",
                          color: "#333333",
                          padding: "auto",
                          textAlign: "center",
                        }}
                      >
                        Not Subscribed
                      </p>
                    </Row>
                  )}
                </Col>
              </Row>
            )}
          </Row>
          <Row className="pt-4">
            <p
              style={{
                fontWeight: "500",
                fontSize: "25px",
                lineHeight: "33px",
                color: "#333333",
              }}
            >
              Referral
            </p>
          </Row>
          <Row
            style={{
              border: "1px solid rgba(51, 51, 51, 0.35)",
              boxShadow: "0px 1px 7px rgba(255, 255, 255, 0.25)",
            }}
          ></Row>
          <Row className="p-5">
            <p
              style={{ fontWeight: "400", fontSize: "18px", color: "#A6A6A6" }}
            >
              Copy and share your referral code with friends and stand a chance
              to have access to free study materials
            </p>
          </Row>
          <Row className="mx-auto mb-5">
            <input
              placeholder="blzdblugzblujhbluybgfdliu"
              style={{
                width: "751px",
                height: "71px",
                border: "1px solid #00D9B6",
                borderRadius: "100px",
                fontWeight: "400",
                fontSize: "20px",
                color: "#333333",
                marginLeft: "15px",
                position: "relative",
              }}
            />
            <button
              style={{
                width: "193px",
                height: "71px",
                color: "white",
                background: "#00D9B6",
                borderRadius: "0px 100px 100px 0px",
                position: "absolute",
                left: "1015px",
                border: "0",
                marginLeft:"15px"
              }}
            >
              COPY LINK
            </button>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default StudentProfile;
=======
import { Col, Row } from "react-bootstrap";
import styles1 from "../student.module.css";
import styles from "./studentProfile.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUserProfileInitiate } from "../../../../../redux/actions/dashboard";

const StudentProfile = () => {
  const {user} = useSelector(state => state.auth);
  const { userProfile } = useSelector(state => state.dashboard)
  const dispatch = useDispatch();

  const token = user.token;
  const userId = user.user?.id;

  console.log("logged-in ==> profile", userProfile)
  console.log("logged-in ==> user profile", user)

  const number = "";

  useEffect(() => {
    dispatch(fetchUserProfileInitiate(userId, token))
  }, [])
  
  return (
    <>
      <div
        className={`container-fluid relative ${styles1.dashboardFirstSection2}`}
        style={{ position: "relative" }}
      ></div>
      <Row
        style={{
          position: "absolute",
          bottom: "33%",
          width: "100%",
          zIndex: "3",
        }}
      >
        <Col>
          <Row className={`mx-auto ${styles.studentProfileGrid}`}>
            <Col className={`m-auto ${styles.studentProfileAvatar}`}>
              <Col className={`m-auto ${styles.studentProfileAvatar2}`}></Col>
            </Col>
            <Col className={styles.studentProfileInfo}>
              <Row className="p-4">
                <Row>
                  <Col md={7}>
                    <Row>
                      <Col md={5}>
                        <h4 className="text-dark">{user.user?.fullName}</h4>
                      </Col>
                      <Col
                        className={`${styles.studentProfileCrownTheme}`}
                      ></Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="p-4">
                  <Col>
                    <Row>
                      <Col>
                        <p className="text-dark">{user.user?.email}</p>
                      </Col>
                      <Col>
                        <Row>
                          <Col
                            md={2}
                            className={`${styles.stateComponent}`}
                          ></Col>
                          <Col>
                            <p className="m-auto">Lagos State, Nigeria</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={2} className="">
                        <Link
                          passHref
                          href="/dashboard/student/studentProfile/studentProfileEdit"
                        >
                          <a>
                            <Row className="px-auto">
                              <Col
                                md={2}
                                className={`${styles.studentProfilePenIcon}`}
                              ></Col>
                              <Col
                                className={`p-0 ${styles.studentProfileColorText}`}
                                style={{ color: "#00D9B6" }}
                              >
                                <u>Edit Profile</u>
                              </Col>
                            </Row>
                          </a>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="m-3 p-3"></Row>
      <Row className="m-5"></Row>
      <Row className="m-5 p-5">
        <Col md={3}>
          <Row
            style={{
              fontWeight: "500",
              fontSize: "25px",
              lineHeight: "33px",
              color: "#333333",
            }}
          >
            Wallet Balance:
          </Row>
          <Row
            style={{
              backgroundColor: "#f1f2f4",
              width: "214px",
              height: "58px",
              borderRadius: "9px",
              marginTop: "20px",
              //   marginLeft:"10px"
            }}
          >
            <Col
              xs={3}
              className={`ms-3 ${styles.studentProfileCoinIcon}`}
            ></Col>
            <Col
              className="pt-3"
              style={{ fontWeight: "700", fontSize: "15px", color: "#333333" }}
            >
              <p>Coin: {user.user?.afriCoins}</p>
            </Col>
          </Row>
          <Link passHref href="/africoin">
            <Row
              className="mt-4"
              style={{
                width: "223px",
                height: "53px",
                background: "#00D9B6",
                borderRadius: "100px",
              }}
            >
              <p
                style={{
                  fontWeight: "500",
                  margin: "auto",
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "#FFFFFF",
                  width: "fit-content",
                }}
              >
                BUY MORE COINS
              </p>
            </Row>
          </Link>
        </Col>
        <Col className="px-4">
          <Row>
            <p
              style={{
                fontWeight: "500",
                fontSize: "25px",
                lineHeight: "33px",
                color: "#333333",
              }}
            >
              Personal Details
            </p>
          </Row>
          <Row
            style={{
              border: "1px solid rgba(51, 51, 51, 0.35)",
              boxShadow: "0px 1px 7px rgba(255, 255, 255, 0.25)",
            }}
          ></Row>
          <Row>
            <Col className="p-2">
              <Row className="pt-2">
                <p
                  style={{
                    fontWeight: "300",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  Phone Number:{" "}
                  <span
                    className="p-2 text-bold text-dark"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      textDecoration: "",
                    }}
                  >
                    {user.user?.phoneNumber}
                  </span>
                </p>
              </Row>
              <Row className="pt-2">
                <p
                  style={{
                    fontWeight: "300",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  State:{" "}
                  <span
                    className="p-2 text-bold text-dark"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    {number !== "" ? { number } : "--"}
                  </span>
                </p>
              </Row>
              <Row className="pt-2">
                <p
                  style={{
                    fontWeight: "300",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  Gender:{" "}
                  <span
                    className="p-2 text-bold text-dark"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    {number !== "" ? { number } : "--"}
                  </span>
                </p>
              </Row>
            </Col>
            <Col>
              <Row className="pt-2">
                <p
                  style={{
                    fontWeight: "300",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  Age:{" "}
                  <span
                    className="p-2 text-bold text-dark"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    {number !== "" ? { number } : "--"}
                  </span>
                </p>
              </Row>
              <Row className="pt-2">
                <p
                  style={{
                    fontWeight: "300",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  City:{" "}
                  <span
                    className="p-2 text-bold text-dark"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    {number !== "" ? { number } : "--"}
                  </span>
                </p>
              </Row>
              <Row className="pt-2">
                <p
                  style={{
                    fontWeight: "300",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  Role:{" "}
                  <span
                    className="p-2 text-bold text-dark"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    {number !== "" ? { number } : "--"}
                  </span>
                </p>
              </Row>
            </Col>
            <Row className="pt-4">
              <Col>
                <Row>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "25px",
                      lineHeight: "33px",
                      color: "#333333",
                    }}
                  >
                    Class(es)
                  </p>
                </Row>
              </Col>
              <Col>
                <Row>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "25px",
                      lineHeight: "33px",
                      color: "#333333",
                    }}
                  >
                    Status
                  </p>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                border: "1px solid rgba(51, 51, 51, 0.35)",
                boxShadow: "0px 1px 7px rgba(255, 255, 255, 0.25)",
              }}
            ></Row>
            {number !== "" ? (
              <Row className="p-5">
                <p style={{ color: "#A6A6A6" }}>
                  You have not added a class:{" "}
                  <Link
                    passHref
                    href="/dashboard/student/studentProfile"
                    style={{ color: "#333333", cursor: "pointer" }}
                  >
                    <u style={{ color: "#333333", cursor: "pointer" }}>
                      Add A New Class
                    </u>
                  </Link>{" "}
                  here
                </p>
              </Row>
            ) : (
              <Row className="pt-2">
                <Col>
                  <Row className="pt-2">
                    <p
                      style={{
                        fontWeight: "300",
                        fontSize: "20px",
                        color: "#333333",
                      }}
                    >
                      {user.user?.enrolledCourses[0]?.courseId?.name}
                    </p>
                  </Row>
                </Col>
                <Col>
                  {number === "" ? (
                    <Row
                      className="pt-2"
                      style={{
                        width: "189px",
                        height: "40px",
                        background: "#00D9B6",
                        borderRadius: "20px",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "300",
                          fontSize: "15px",
                          color: "white",
                          padding: "auto",
                          textAlign: "center",
                        }}
                      >
                        Subscribed
                      </p>
                    </Row>
                  ) : (
                    <Row
                      className="pt-2"
                      style={{
                        width: "189px",
                        height: "40px",
                        background: "white",
                        borderRadius: "20px",
                        border: "1px solid #333333",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "300",
                          fontSize: "15px",
                          color: "#333333",
                          padding: "auto",
                          textAlign: "center",
                        }}
                      >
                        Not Subscribed
                      </p>
                    </Row>
                  )}
                </Col>
              </Row>
            )}
          </Row>
          <Row className="pt-4">
            <p
              style={{
                fontWeight: "500",
                fontSize: "25px",
                lineHeight: "33px",
                color: "#333333",
              }}
            >
              Referral
            </p>
          </Row>
          <Row
            style={{
              border: "1px solid rgba(51, 51, 51, 0.35)",
              boxShadow: "0px 1px 7px rgba(255, 255, 255, 0.25)",
            }}
          ></Row>
          <Row className="p-5">
            <p
              style={{ fontWeight: "400", fontSize: "18px", color: "#A6A6A6" }}
            >
              Copy and share your referral code with friends and stand a chance
              to have access to free study materials
            </p>
          </Row>
          <Row className="mx-auto mb-5">
            <input
              placeholder="blzdblugzblujhbluybgfdliu"
              style={{
                width: "751px",
                height: "71px",
                border: "1px solid #00D9B6",
                borderRadius: "100px",
                fontWeight: "400",
                fontSize: "20px",
                color: "#333333",
                marginLeft: "15px",
                position: "relative",
              }}
            />
            <button
              style={{
                width: "193px",
                height: "71px",
                color: "white",
                background: "#00D9B6",
                borderRadius: "0px 100px 100px 0px",
                position: "absolute",
                left: "1015px",
                border: "0",
                marginLeft: "15px",
              }}
            >
              COPY LINK
            </button>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default StudentProfile;
>>>>>>> dev
