import React , { useState } from "react" ;
import  styles from './QuizInstructions.module.css';
import { FC } from 'react';
import Image from "next/image";
import P from "./text"
import { Button } from "react-bootstrap";


const Quiz: FC = () => {
    return (
         <div className={styles.box} >
          {/* <p className={styles.text}>Quiz:  
          Geometrical Construction (2):  Angles</p> */}

      
        <div className={` m-5 d-flex flex-column  ${styles.text} `} >
         <h3> Quiz: </h3>  
       <span >Geometrical Construction (2): Angles</span> 
       </div>
       <div  className={styles.pic} >
     <Image src={'/assets/img/common/Quiz/animation_500_kvum0mlt 1.png'} width={400} height={400} />  
     </div>
     
     {/* <P SubjectName={"Basic Technology"} name={"Rawan"} > </P> */}
        <Button  className={styles.button} > GET STARTED </Button>
      </div>
        
      //  {`class=" rounded mx-auto d-block"  ${styles.pic}`

    )}

    export default Quiz;