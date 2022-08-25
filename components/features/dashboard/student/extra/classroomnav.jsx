import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../../../../styles/classroom.module.css";
import Announcesment from "./announcesment";
import Material from "./Material";
import Classwork from "./Classwork";
import People from "./People";
import ClassPerfomance from "./ClassPerfomance";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  fetchStudentDetailsInitiate,
  fetchStudentTeacherSubjInitiate,
} from "../../../../../redux/actions/subject";

const Classroomnav = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  let classId = Object.keys(router.query);
  const { user } = useSelector((state) => state.auth);

  const token = user.token;

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const changeToClassWork = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    dispatch(fetchStudentDetailsInitiate(classId[0]));
    dispatch(fetchStudentTeacherSubjInitiate(classId[0]));
  }, [fetchStudentDetailsInitiate, fetchStudentTeacherSubjInitiate]);

  return (
    <div className={styles.maincontainer}>
      <div className={styles.maincontainer2}>
        <div className={styles.subheadings}>
          <Image
            src="/assets/img/features/dashboard/student/person_2 1.png"
            alt="teacher"
            width={173.99}
            height={173.99}
          />
        </div>
        <div className={styles.navbar1}>
          <nav className={styles.navbar}>
            <ul>
              <li
                onClick={() => toggleTab(1)}
                className={toggleState === 1 ? styles.activetab : styles.tabs}
              >
                Announcements
              </li>
              <li
                onClick={() => toggleTab(2)}
                className={toggleState === 2 ? styles.activetab : styles.tabs}
              >
                Materials
              </li>
              <li
                onClick={() => toggleTab(3)}
                className={toggleState === 3 ? styles.activetab : styles.tabs}
              >
                Classwork
              </li>
              <li
                onClick={() => toggleTab(4)}
                className={toggleState === 4 ? styles.activetab : styles.tabs}
              >
                People
              </li>
              <li
                onClick={() => toggleTab(5)}
                className={toggleState === 5 ? styles.activetab : styles.tabs}
              >
                Class Performance
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={toggleState === 1 ? styles.activecontent : styles.content}
      >
        <Announcesment goto={(number) => changeToClassWork(number)} />
      </div>
      <div
        className={toggleState === 2 ? styles.activecontent : styles.content}
      >
        <Material />
      </div>
      <div
        className={toggleState === 3 ? styles.activecontent : styles.content}
      >
        <Classwork />
      </div>
      <div
        className={toggleState === 4 ? styles.activecontent : styles.content}
      >
        <People />
      </div>
      <div
        className={toggleState === 5 ? styles.activecontent : styles.content}
      >
        <ClassPerfomance />
      </div>
    </div>
  );
};

export default Classroomnav;
