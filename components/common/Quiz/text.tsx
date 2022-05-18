import  styles from './QuizInstructions.module.css';
import { FC } from "react"; 
import { deflate } from 'zlib';
import { Button } from 'react-bootstrap';
import Image from 'next/image';

type props = {SubjectName:string,name:string}
const P: FC <props> = ({SubjectName,name}) => {

    return (

        <div className= ' d-flex container flex-column ms-5 '> 
         <div className=' m-5 d-flex  flex-wrap w-20  '>
             <h3>Hello <span>{name}</span> You have taken the right step</h3> </div>

        <div className=' d-flex  flex-wrap  m-5'>
        <span className='d-flex '>
           <span className={`me-5  ${styles.fontgraycolor}  `}>Subject:</span> <span>{SubjectName}</span> </span>
           <span className= {` d-flex  justify-content-around ${styles.co} `}>
           <p className=' m-4 '> Instruction:</p>
          <p  className='d-flex  m-4 flex-wrap  ' > You are about to that a 10 question quiz to test how much you understand Geametrical Construction(2): Angles.

             No pressure! Take your time to answer the questions.
            Goodluck 👍 </p>
            </span>
    </div>
    </div>

    )

}

export default P ; 