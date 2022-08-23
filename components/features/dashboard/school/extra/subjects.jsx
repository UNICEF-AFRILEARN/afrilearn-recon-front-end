import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "../../school/dashbord.module.css"
import Subjects from "../../student/extra/subjects";
import Image from "next/image";
import Link from "next/link";

const Schoolsubject = () => {
    const { schoolProfile } = useSelector((state) => state.school);
    

    const schoolClasses = schoolProfile?.data?.schoolClassesData
    return (
    <>
        
    <div>
        <div className={`row ${styles.subHero}`}>
            <div className={` col-md-2 ${styles.heading}`}> <h3>My Subjects</h3></div>
            <div className={` col-md-1 `} >
                < select className={styles.headingSelect}>
                <option value={"default"}>
                         Select a Class
                      </option>
                {
                        schoolClasses && schoolClasses.map((schoolClass) => 
                        <option value={schoolClass.className}> {schoolClass.className}</option>
                        )
                    }
                </select>
            </div>
            <div className={` col-md-3 ${styles.headingImage}`}></div>
        </div>
        <Subjects/>
    </div>
    </>
    )
};

export default Schoolsubject;