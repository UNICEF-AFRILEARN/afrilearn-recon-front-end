import React from "react";
import { StudentPage } from "./studentHeropage";

const studentHeroPageTwo = () => {
  const studentdata = [
    [
      {
        class: "SSS-One",
        subject: "Basic Technology",
      },
    ],
    [
      {
        subject: "SSS-ONE",
        title: "Basic Technology",
        description:
          "Basic Technology is a very important subject in todays curriculum for students especially at the junior secondary  level as knowledge impacted prepares them for the various experiences at the senior level not withstanding their carrier paths.",
        class: "Senior Sceondary School One",
        lessons: "116 Video Lessons",
        students: "13,000 Registered Students",
      },
    ],
  ];
  return (
    <>
      <StudentPage stuData={studentdata[0]} />
    </>
  );
};

export default studentHeroPageTwo;
