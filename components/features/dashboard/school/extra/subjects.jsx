import styles from "../../school/dashbord.module.css"
import Subjects from "../../student/extra/subjects";
import Image from "next/image";
import Link from "next/link";

const Schoolsubject = () => {
    return (
    <>
    <div>
        <div className={`row ${styles.subHero}`}>
            <div className={` col-md-2 ${styles.heading}`}> <h3>My Subjects</h3></div>
            <div className={` col-md-1 `} >< select className={styles.headingSelect}><option className={styles.headingOption}> JSS1</option></select></div>
            <div className={` col-md-3 ${styles.headingImage}`}></div>
        </div>
        <Subjects/>
    </div>
    </>
    )
};

export default Schoolsubject;