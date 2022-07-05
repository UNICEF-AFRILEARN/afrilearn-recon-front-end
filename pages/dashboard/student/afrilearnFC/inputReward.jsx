import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./afrilearn.module.css";
import Link from "next/link"

const InputReward = () => {
  return (
    <div>
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
            <Row className="mt-3 pt-5 pb-4 w-75 m-auto">
              <h2
                className="text-center p-4"
                style={{ fontWeight: "800", fontSize: "25px" }}
              >
                INPUT REWARD DETAILS
              </h2>
              <p
                className="p-4"
                style={{ fontWeight: "500", fontSize: "18px" }}
              >
                Provide your preferred Bank Account to be credited once you win
              </p>
              <label className="pt-4">Account Number</label>
              <input
                style={{
                  border: "1px solid #333333",
                  borderRadius: "5px",
                  height: "63px",
                }}
                placeholder="Input account number"
              />
              <label className="pt-4">Account Name</label>
              <input
                style={{
                  border: "1px solid #333333",
                  borderRadius: "5px",
                  height: "63px",
                }}
                placeholder="Input account name"
              />

              <label className="pt-4">Bank</label>
              <input
                style={{
                  border: "1px solid #333333",
                  borderRadius: "5px",
                  height: "63px",
                }}
                placeholder="Select bank"
              />
              <p
                className="pt-5"
                style={{ fontWeight: "500", fontSize: "18px" }}
              >
                Upload a preferred photo we can use to celebrate you when you
                win
              </p>
              <label className="pt-4">Upload photo</label>
              <div style={{ width: "1234px", position: "relative" }}>
                <input
                  // className={styles.labelInput}
                  style={{
                    border: "1px solid #333333",
                    borderRadius: "5px",
                    height: "63px",
                    width: "100%",
                    paddingLeft: "34px",
                  }}
                  placeholder="Upward"
                />
                <div className={styles.labelInput}></div>
              </div>
            </Row>
            <Link passHref href="loading">
              <Row
                className="mt-5  mx-auto "
                style={{ cursor: "pointer", width: "293px" }}
              >
                <Col
                  className=" text-center"
                  style={{
                    background: "#00D9B6",
                    borderRadius: "100px",
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
                    START COMBAT NOW
                  </p>
                </Col>
              </Row>
            </Link>
            <Row className="mt-5 w-25 mx-auto pb-5">
              <Col className=" text-center">
                <u style={{ color: "grey" }}>SKIP THIS</u>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InputReward;

