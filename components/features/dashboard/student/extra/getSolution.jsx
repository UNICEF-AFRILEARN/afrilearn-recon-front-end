import Image from "next/image";
import styles from "./../../student/student.module.css";
import Link from "next/link";

const GetSolution = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={`col-md-6 ${styles.mySolutionBox}`}>
            <div className="row">
              <div className={`col-md-7 ${styles.LinkBox}`}>
                <h5>Submit your Assignment for Instant Solutions 24/7</h5>
                <div className={`${styles.LinkBoxxs}`}>
                  <Link passHref href="/">
                    GET SOLUTION NOW
                  </Link>
                </div>
              </div>
              <div className={`col-md-5 ${styles.LinkBox2}`}></div>
            </div>
          </div>

          <Link passHref href={"/dashboard/student/afrilearnFC"}>
            <div className={`col-md-5 ${styles.mySolutionBox2}`}>
              <div className={`row ${styles.mySolutionBox22}`}>
                <div className={` ${styles.mySolutionBoxCoin}`}>
                  <Image
                    alt={"design image"}
                    src={"/assets/img/features/dashboard/student/Group.png"}
                    width={"20.36 px"}
                    height={"20.36 px"}
                  />{" "}
                  100
                </div>
                <div className={` ${styles.mySolutionBoxSword}`}>
                  <p>Battle with others to win</p>
                </div>
                <div className={` ${styles.mySolutionBoxWord}`}>
                  <p>J1 Combat</p>{" "}
                  <Image
                    alt={"design image"}
                    src={"/assets/img/features/dashboard/student/sword.png"}
                    width={"31.13px"}
                    height={"31.13px px"}
                  />
                </div>
                <div className={` ${styles.mySolutionBoxMin}`}>
                  <p>08 Days 01:58:27 minutes</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GetSolution;
