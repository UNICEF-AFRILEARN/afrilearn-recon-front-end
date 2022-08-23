import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "../../school/dashbord.module.css";
import Image from "next/image";
import Link from "next/link";
import MiddleNavbar from "./middleNavbar";

const Schoolheropage = () => {
    return (
    <>
    <div className={styles.mainherowrapper}>
        <div className={styles.heroSchool}>
            <div className={styles.videoheropage}>  
                <Image src="/assets/img/school/person_2\ 1.svg" width={"174px"} height={"174px"}   className={styles.avatarCoin} />
            </div>
      </div>
        <MiddleNavbar />
        <div className={styles.middlelinks}>
            <Link passHref href="/school/addteacher">Add New Teacher</Link>
            <Link passHref href="/school/addnewstudent">Add New Student</Link>
            <Link passHref href="/school/addnewadmin">Add New Admin</Link>
        </div>
    </div>
    </>
    )
};

export default Schoolheropage;