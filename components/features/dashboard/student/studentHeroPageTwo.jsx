import React from "react";
import { useSelector } from "react-redux";
import { StudentPage } from "./studentHeropage";

const studentHeroPageTwo = ({subj}) => {
  const user = useSelector((state) => state.auth);
  const personClass = user.user.user?.enrolledCourses[0].courseId.name;
  console.log(personClass);
  const studentdata = [
    { classData: personClass, subject: subj },
    // [
    //   {
    //     subject: "SSS-ONE",
    //     title: "Basic Technology",
    //     description:
    //       "Basic Technology is a very important subject in todays curriculum for students especially at the junior secondary  level as knowledge impacted prepares them for the various experiences at the senior level not withstanding their carrier paths.",
    //     class: "Senior Sceondary School One",
    //     lessons: "116 Video Lessons",
    //     students: "13,000 Registered Students",
    //   },
    // ],
  ];

  return (
    <>
      <StudentPage stuData={studentdata} />
    </>
  );
};

export default studentHeroPageTwo;
