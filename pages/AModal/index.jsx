import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function Amodal() {
  const classnote = true;
  const subjectDetails = "";
  const lesson = "";
  const [modal, setModal] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setModal(!modal);
  };
  const [valued, setValued] = useState("");
  const [messages, setMessages] = useState([]);
  const handleReport = () => {
    let message = `SSS-three Agriculture - ${
      classnote ? "class note" : "video lesson"
    } with title Agriculture-Extension has the following complaints:`;

    const data = `${message} ${
      messages > 1
        ? messages?.map((dat) => {
            return dat;
          }) +
          "," +
          valued
        : messages + "," + valued
    }`;
    console.log(data);
    setValued("");
    setModal(false);
    setMessages("");
  };

  const changeHandle = (e) => {
    const reportId = e.target.id;

    // let message = `${subjectData.courseId.name}-${
    //   subjectData.mainSubjectId.name
    // } ${classnote ? "class note" : "video lesson"} with title '${
    //   props.lesson.title
    // }' has the following complaints:`;

    if (reportId === "report1") {
      setMessages((mes) => [
        ...mes,
        `${classnote ? "Typographic error " : "Video not clear "}`,
      ]);
    }
    if (reportId === "report2") {
      setMessages((mes) => [
        ...mes,
        `${classnote ? "Incomplete text " : "Grammatical error "}`,
      ]);
    }
    if (reportId === "report3") {
      setMessages((mes) => [
        ...mes,
        `${
          classnote
            ? "Images does not look quite right "
            : "Wrong title or transcript "
        }`,
      ]);
    }
    if (reportId === "report4") {
      setMessages((mes) => [
        ...mes,
        `${classnote ? "An image is missing " : "Video not loading "}`,
      ]);
    }
    if (reportId === "report5") {
      setMessages("Spam, repulsive or abusive content");
    }
    if (reportId === "report7") {
      setValued(e.target.value);
    }
  };

  return (
    <>
      <span className="">
        <Button className="mt-5 " onClick={toggle}>
          Report Lesson
        </Button>
      </span>
      <Modal
        show={modal}
        onHide={() => setModal(false)}
        className="reportModalClass"
      >
        <Modal.Header>Report An Issue</Modal.Header>
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
                            classnote ? "Typographic error" : "Video not clear"
                          }
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id="report2"
                          label={
                            classnote ? "Incomplete text" : "Grammatical error"
                          }
                          onChange={(e) => changeHandle(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id="report3"
                          label={
                            classnote
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
                            classnote
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
                    <Button onClick={handleReport}>Submit</Button>
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

export default Amodal;
