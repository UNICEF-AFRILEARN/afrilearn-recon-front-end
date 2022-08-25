import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import styles from "./afrilearn.module.css";
// import InputReward from "./inputReward";

const Student = () => {
  return (
    <>
      <Head>
        <title>Sprint Chanlenge | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <ChanlengeDashboardComponent />
    </>
  );
};

export default Student;

const ChanlengeDashboardComponent = () => {
  const [modalShow, setModalShow] = useState(false);

  const coins = 10;

  return (
    <>
      <Container>
        <Row
          style={{
            width: "875px",
            background: "#FFFFFF",
            boxShadow: "-1px 2px 50px rgba(228, 228, 228, 0.61)",
            borderRadius: "20px",
            margin: "120px auto 60px",
          }}
        >
          <Col>
            <Row className="p-5">
              <h2 className="text-center">S1 Sprint</h2>
            </Row>
            <Row className="pb-4 w-50 m-auto">
              <h2
                className="text-center"
                style={{ fontWeight: "700", fontSize: "20px" }}
              >
                Are You Ready?!
              </h2>
              <p className="text-center p-2">
                This Combat will test your resolve, speed, and accuracy but the
                reward is Bounty!
              </p>
              <p className="text-center">
                Answer as many questions as you can across English, Mathematics,
                and Biology in
              </p>
              <p
                className="text-center"
                style={{ fontWeight: "700", fontSize: "15px" }}
              >
                5 minutes
              </p>
            </Row>
            <Row className={`mx-auto ${styles.swordForFC}`}></Row>
            <Row className="w-50 m-auto mt-3">
              <p className="mt-3 text-center">TICKET: 100 Africoins </p>
              <p className="mt-3 text-center">DEADLINE: 17th August, 2021</p>
            </Row>
            <Row className="w-50 mx-auto mt-5 ps-4">
              <Col xs={4} className="p-0">
                <Row style={{ width: "160px", position: "relative" }}>
                  <Col
                    style={{
                      width: "66px",
                      height: "66px",
                    }}
                  >
                    <div className={styles.afrilearnFCAvatar1}></div>
                  </Col>
                  <Col
                    style={{
                      width: "66px",
                      height: "66px",
                      position: "absolute",
                      left: "38px",
                    }}
                  >
                    <div className={styles.afrilearnFCAvatar2}></div>
                  </Col>
                  <Col className={styles.afrilearnFCAvatar3}>
                    <div className={`text-light ${styles.afrilearnFCAvatar4}`}>
                      200+
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col
                style={{
                  width: "200px !important",
                  padding: "0",
                  paddingLeft: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Combat with 200+ users
              </Col>
            </Row>
            <Row className="mt-5 w-25 mx-auto">
              <Col className=" text-center">
                <p ClassName="text-dark">PLAY TO WIN</p>
              </Col>
            </Row>
            <Row className="w-25 mx-auto">
              <Col className=" text-center">
                <h4
                  ClassName="text-dark"
                  style={{
                    color: "#00D9B6",
                    fontWeight: 500,
                    fontSize: "35px",
                  }}
                >
                  ₦5000
                </h4>
              </Col>
            </Row>
            <Row
              className="mt-5 w-25 mx-auto "
              onClick={() => setModalShow(true)}
              style={{ cursor: "pointer" }}
            >
              <Col
                className=" text-center"
                style={{
                  background: "#00D9B6",
                  borderRadius: "100px",
                  width: "423px",
                  height: "48px",
                }}
              >
                <p
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                    height: "48px",
                  }}
                >
                  PLAY NOW
                </p>
              </Col>
            </Row>
            {modalShow === true && coins > 99 ? (
              <PlayNow show={modalShow} onHide={() => setModalShow(false)} />
            ) : (
              ""
            )}
            {modalShow === true && coins < 99 ? (
              <PlayNow1 show={modalShow} onHide={() => setModalShow(false)} />
            ) : (
              ""
            )}
            <Row className="mt-5 w-25 mx-auto pb-5">
              <Col className=" text-center">
                <u style={{ color: "grey" }}>View LeaderBoard</u>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="ms-auto w-50" closeButton>
        <Image
          alt={"afrilearn marketing video"}
          src={`/assets/img/features/dashboard/student/${props.headerIcon}.png`}
          width={45}
          height={35}
        />
      </Modal.Header>
      <Modal.Body>
        <h5 className="text-center">{props.hFive}</h5>
        <p className="text-center text-secondary" style={{ height: "36px" }}>
          {props.pFive}
        </p>
        <Link passHref href={props.buttonHref}>
          <button
            onClick={props.buttons}
            className="w-100"
            style={{
              background: "#00D9B6",
              borderRadius: "8px",
              flex: "none",
              order: "0",
              alignSelf: "stretch",
              flexGrow: "0",
              border: "0",
              height: "48px",
            }}
          >
            <p className="m-0 text-light">{props.coloredButton}</p>
          </button>
        </Link>
        {/* <InviteFriends show={modal1Show} onHide={() => setModal1Show(false)} /> */}
        <button
          className="w-100 mt-3"
          onClick={props.onHide}
          style={{
            borderRadius: "8px",
            flex: "none",
            order: "0",
            alignSelf: "stretch",
            flexGrow: "0",
            border: "1px solid #00d9b6",
            height: "48px",
          }}
        >
          <p className="m-0">{props.whiteButton}</p>
        </button>
      </Modal.Body>
    </Modal>
  );
};

const PlayNow = (props) => {
  const [modalShow, setModalShow] = useState(true);
  const [modal1Show, setModal1Show] = useState(false);

  setModalShow = props.onHide;
  return (
    <div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        hFive={"To play now, 100 Africoins will be deducted from your wallet"}
        pFive={"Sorry you do not have sufficient coin to complete this process"}
        coloredButton={"RECHARGE WALLET TO PAY"}
        whiteButton={"CANCEL"}
        headerIcon={"GroupBottle"}
        buttons={() => setModal1Show(true)}
      />
      {modal1Show === true ? (
        <InviteFriends show={modal1Show} onHide={() => setModal1Show(false)} />
      ) : (
        ""
      )}
    </div>
  );
};

const PlayNow1 = (props) => {
  const [modalShow, setModalShow] = useState(true);
  const [modal1Show, setModal1Show] = useState(false);

  setModalShow = props.onHide;
  return (
    <div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        hFive={"To play now, 100 Africoins will be deducted from your wallet"}
        pFive={""}
        coloredButton={"YES! PROCEED"}
        whiteButton={"CANCEL"}
        headerIcon={"GroupBottle"}
        buttonHref={`afrilearnFC/inputReward`}
      />
      {modal1Show === true ? (
        <InviteFriends show={modal1Show} onHide={() => setModal1Show(false)} />
      ) : (
        ""
      )}
    </div>
  );
};

const InviteFriends = (props) => {
  const [modalShow, setModalShow] = useState(true);

  setModalShow = props.onHide;

  return (
    <div>
      <MyVerticallyCenteredModal
        show={props.show}
        onHide={props.onHide}
        hFive={"To play now, 100 Africoins will be deducted from your wallet"}
        pFive={""}
        coloredButton={"RECHARGE WALLET TO PAY"}
        whiteButton={"CANCEL"}
        headerIcon={"share"}
      />
    </div>
  );
};
