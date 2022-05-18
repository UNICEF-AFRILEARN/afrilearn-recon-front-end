import React , { useState } from "react" ;
import { FC } from 'react';
import Image from "next/image";
import { Button } from "react-bootstrap";
import Grade from "./Grade";
import  styles from './QuizResult.module.css';



const Result: FC = () => {
    return (
       <div>
      <div className={`container-fluid relative ${styles.box}`} >
        <Grade score={"45 out of 60"} Percentage={"56%"} Remark={"Good"} ></Grade>
        <Button className={styles.button}  >RETAKE QUIZ</Button>


        </div>
       </div>
   
      )  }

        export default Result;