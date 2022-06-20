import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import styles1 from "../student.module.css";

const PastQuestion = () => {
  const data = {
    text: "Junior WAEC",
  };
  const subjectData = [
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
    { subject: "Agricultural Science", thumbnail: "Plant Growing" },
  ];

  const button = [
    { year: 2000 },
    { year: 2001 },
    { year: 2002 },
    { year: 2003 },
    { year: 2004 },
    { year: 2005 },
    { year: 2006 },
    { year: 2007 },
    { year: 2008 },
    { year: 2009 },
    { year: 2010 },
    { year: 2011 },
    { year: 2012 },
    { year: 2013 },
    { year: 2014 },
    { year: 2015 },
    { year: 2016 },
    { year: 2017 },
    { year: 2018 },
    { year: 2019 },
    { year: 2020 },
    { year: 2021 },
    { year: 2022 },
  ];
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  return (
    <>
      <div
        //   id="dashboardFirstSection"
        className={`container-fluid relative ${styles1.dashboardFirstSection1}`}
      >
        <div className="row pt-5 mb-5">
          <Col>
            <h1 className={styles1.pastQuestionh1}>{data.text}</h1>
          </Col>
        </div>
        <Row className="p-2 mx-5">
          <h5>Past Question</h5>
        </Row>
        <Row className="mx-5 pl-2">
          <h2>Select Subject</h2>
        </Row>
      </div>
      <Row className="m-5 px-5">
        {subjectData.map((subjectData, i) => (
          <div key={i} className={`col-md-2 ${styles1.mySubjectt}`}>
            <button className="modalButton" onClick={toggleModal}>
              <Image
                alt={"design image"}
                src={`/assets/img/features/dashboard/student/${subjectData.thumbnail}.png`}
                width={70}
                height={70}
              />
              <p>{subjectData.subject}</p>
            </button>
          </div>
        ))}
      </Row>
      <Modal size="lg" className="pt-5 mt-5" show={show} onHide={toggleModal}>
        <Modal.Title
          className="text-center pt-5"
          style={{ fontSize: "30px", color: "#000000" }}
        >
          Select Year
        </Modal.Title>

        <Modal.Body className="mx-auto">
          <Link
            passHref
            href="/dashboard/student/pastQuestion/pastQuestionPage"
          >
            <a>
              {button.map((year, i) => (
                <Button
                  style={{
                    width: "90px",
                    background: "#FFFFFF",
                    boxShadow: "0px 0.648094px 4.53666px rgba(0, 0, 0, 0.15)",
                    borderRadius: "9.72141px",
                  }}
                  key={i}
                  className={`mx-4 mt-3 mb-3 ${styles1.modalBodyButton}`}
                  variant=""
                >
                  {year.year}
                </Button>
              ))}
            </a>
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PastQuestion;
