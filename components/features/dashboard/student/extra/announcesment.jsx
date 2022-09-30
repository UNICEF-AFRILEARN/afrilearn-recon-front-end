import React from "react";
import Image from "next/image";
import styles from "../../../../../styles/announcement.module.css";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const Announcesment = ({ goto }) => {
  const { user } = useSelector((state) => state.auth);
  const subject = useSelector((state) => state.mySubjectCourse);
  console.log(subject);
  const clazz = "";
  return (
    <div className={styles.mainwrapper}>
      <div className={styles.announcementcontainer}>
        <div className="mx-5">
          <Image
            src="/assets/img/crown.svg"
            alt="teacher"
            width={200}
            height={50}
          />
        </div>
        <div className={styles.detailscard}>
          <h2>{user.user?.fullName}</h2>
          <p>{user.user?.email}</p>
          <h3>{subject?.dashboardWeb?.enrolledCourse.courseId.name}</h3>
        </div>
        <div className={styles.upcomingcard}>
          {clazz.teacherAssignedContents &&
          clazz.teacherAssignedContents.length === 0 &&
          clazz.teacherAssignedContents[0].dueDate ? (
            <>
              <div className="item">
                {/* <img src={event} alt="event"></img> */}
                <div>
                  <p>
                    Posted:&nbsp;
                    {clazz.teacherAssignedContents[0].createdAt}
                  </p>
                  <p>
                    Due Date:&nbsp;
                    {clazz.teacherAssignedContents[0].dueDate}
                  </p>
                </div>
              </div>
              <a onClick={() => goto(3)}>View All</a>
            </>
          ) : (
            "Oh oh! No work due soon!"
          )}
        </div>
      </div>
      <div className={styles.messagescontainer}>
        <div className={styles.firstmessage}>
          <Image
            src="/assets/img/messageavatar.svg"
            alt="teacher"
            width={50}
            height={50}
          />
          <p>Announcements from teacher</p>
        </div>

        {subject?.announcement[0]?.announcements.map((data, i) => {
          return (
            <div key={i} className={styles.seconmessage}>
              <div className={styles.innermessage}>
                <Image
                  src="/assets/img/messageavatar.svg"
                  alt="teacher"
                  width={50}
                  height={50}
                />
                <div className={styles.teachertitle}>
                  <p>{data.teacher.fullName}</p>
                  <span>{moment(data.createdAt).format("LL")}</span>
                </div>
              </div>
              <div className={styles.teacherarticle}>
                <p>{data.text}</p>
              </div>
              <div className={styles.commentmessage}>
                {/* <p>1 class comment</p> */}
                <div className={styles.commentimagecont}>
                  <Image
                    src="/assets/img/messageavatar.svg"
                    alt="teacher"
                    width={50}
                    height={50}
                  />

                  {data?.comments.map((dts, i) =>
                    dts ? (
                      <div key={i} className={styles.teachertitle}>
                        <p>{dts.student.fullName}</p>
                        <span>{dts.text}</span>
                      </div>
                    ) : (
                      <div key={i} className={styles.teachertitle}>
                        <p>No Comment</p>
                      </div>
                    ),
                  )}
                </div>
                <div className={styles.dividerclass}>
                  <div className={styles.addclasscomment}>
                    <span>Add class comment</span>
                    <Image
                      src="/assets/img/arrow.svg"
                      alt="teacher"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className={styles.posttage} onClick={() => goto(3)}>
          <Image
            src="/assets/img/annouceimg.svg"
            alt="teacher"
            width={50}
            height={50}
          />
          <div className={styles.teachertitle}>
            <p>
              Mr Abraham O.(Teacher) posted a new study link: Hello everyone,
              here is the ...
            </p>
            <span>06 Sept 2020</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcesment;
