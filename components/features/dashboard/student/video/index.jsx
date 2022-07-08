import { StudentHeropageBase } from "../extra/subjects";
// import styles from "./video.module.css";

import StudentPageTwo from "./../studentHeroPageTwo";
import { Accordion } from "react-bootstrap";
import Link from "next/link";
import styles from "../classnote/classnote.module.css";
import Image from "next/image";
import styles2 from "../topInClass.module.css";

const Video = () => {
  return (
    <>
      <StudentPageTwo />

      <div className={styles.classs}>
        <StudentHeropageBase className="p-0" />
        <ClassNoteVideoHeader />
        <ClassNoteVideo style={{ margin: "25px" }} />
      </div>
    </>
  );
};

export default Video;

const ClassNoteVideo = () => {
  const classData = [
    [
      [
        {
          thumbnailUrl:
            "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/literature-in-english/third-term/thumbnail/figures-of-speech.jpeg",
        },
      ],
      [
        {
          icon: "arrowhead",
          text: "lesson 1",
        },
        {
          icon: "arrowhead",
          text: "lesson 2",
        },
        {
          icon: "arrowhead",
          text: "lesson 3",
        },
        {
          icon: "arrowhead",
          text: "lesson 4",
        },
        {
          icon: "arrowhead",
          text: "lesson 5",
        },

        {
          icon: "Activity",
          text: "Practice quiz",
        },
      ],
    ],
  ];
  console.log(classData[0][1]);
  return (
    // {faqQuestions.map((faq, i) => {
    <section>
      <Accordion className={styles.accord}>
        <Accordion.Item eventKey={0}>
          <Accordion.Header className={styles.accordHead}>
            <span className={styles.accordance}></span> Geometrical Construction
            (1): Lines
          </Accordion.Header>

          <Accordion.Body className={styles.accordLeft}>
            <Link href="/dashboard/student/video/videoPage/">
              <div className={`${styles2.contList}`}>
                <Image
                  alt={"afrilearn marketing video"}
                  src={classData[0][0][0].thumbnailUrl}
                  width={240}
                  height={160}
                  className={styles2.rectBox}
                />
                <div className={styles2.rect}>
                  <Image
                    alt={"afrilearn marketing video"}
                    src={`/assets/img/features/dashboard/student/Rectangle 7862.png`}
                    width={240}
                    height={160}
                  />
                </div>

                <div className={styles2.play_pause}>
                  <Image
                    alt={"afrilearn marketing video"}
                    src={`/assets/img/features/dashboard/student/Play.png`}
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </Link>
            <div className={styles.accordRightDiv}>
              {classData[0][1].map((data, i) => (
                <div key={i} className={styles.accordButtonLeft}>
                  <Link href="/dashboard/student/video/videoPage">
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
            </div>
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
      <div className={styles.headerTopLeft}>Video Lesson</div>
      <div className={styles.headerTopLeftMid}>15 Topics</div>
      <div className={styles.headerTopRightMid}></div>
      <div className={styles.headerTopRightExtMid}>160 Video Lessons</div>
      <div className={styles.headerTopRight}></div>
    </div>
  );
};
