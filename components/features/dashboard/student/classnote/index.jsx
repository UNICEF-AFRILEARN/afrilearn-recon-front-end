import Image from "next/image";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { StudentHeropageBase } from "../extra/subjects";
import StudentPageTwo from "./../studentHeroPageTwo";
import styles from "./classnote.module.css";

const Classnote = () => {
  const classnoteData = [
    [
      {
        icon: "Document",
        text: "Classnote",
      },
      {
        icon: "Activity",
        text: "Practice quiz",
      },
    ],
  ];

  return (
    <>
      <StudentPageTwo />

      <div className={styles.classs}>
        <StudentHeropageBase className="p-0" />
        <ClassNoteVideoHeader />
        <ClassNoteVideo classData={classnoteData} style={{ margin: "25px" }} />
      </div>
    </>
  );
};

export default Classnote;

const ClassNoteVideo = ({ classData }) => {
  // console.log(classData);
  return (
    // {faqQuestions.map((faq, i) => {
    <section>
      <Accordion className={styles.accord}>
        <Accordion.Item eventKey={0}>
          <Accordion.Header className={styles.accordHead} >
            <span className={styles.accordance}></span> Geometrical Construction
            (1): Lines
          </Accordion.Header>

          <Accordion.Body className={styles.accordLeft}>
            {classData[0].map((data, i) => (
              <div key={i} className={styles.accordButtonLeft}>
                <Link href="/dashboard/student/classnote/classnotePage">
                  <div className={styles.buttonStyle}>
                    <div className={styles.buttonStyleImage}>
                      <Image
                        alt={"afrilearn marketing video"}
                        src={`/assets/img/features/dashboard/student/${data.icon}.png`}
                        width={13}
                        height={13}
                      />
                    </div>
                    {data.text}
                  </div>
                </Link>
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
    // );
    // })}
  );
};

const ClassNoteVideoHeader = () => {
  return (
    <div className={styles.headerTop}>
      <div className={styles.headerTopLeft}>Class Notes</div>
      <div className="uhiuh"></div>
      <div className="uhiuh"></div>
      <div className="uhiuh"></div>
      <div className={styles.headerTopRight}></div>
    </div>
  );
};
