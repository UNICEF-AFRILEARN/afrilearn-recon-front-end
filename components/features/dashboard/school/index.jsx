import styles from "../school/dashbord.module.css";
import Schoolheropage from "./extra/heropage";
import Schoolsubject from "./extra/subjects";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Schooldasboard = () => {
  const subject = useSelector((state) => state.mySubjectCourse);
  return (
    <>
      <div>
        <Schoolheropage />
        <Schoolsubject />
      </div>
    </>
  );
};

export default Schooldasboard;
