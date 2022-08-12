import styles from "../school/dashbord.module.css"
import Schoolheropage from "./extra/heropage";
import Schoolsubject from "./extra/subjects";
import PastQuestion from "../student/extra/pastQuestion";
import Image from "next/image";
import Link from "next/link";


const Schooldasboard = () => {
    return (
    <>
    <div>
        <Schoolheropage/>
        <Schoolsubject/>
        <div>
            <h3 className={styles.heading2}>Past  Questions</h3> 
        <PastQuestion/> 
        </div> 
       
    </div>
    </>
    )
};

export default Schooldasboard;