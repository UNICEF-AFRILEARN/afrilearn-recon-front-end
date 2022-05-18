import  styles from './Popup.module.css';
import { FC } from "react"; 
import { deflate } from 'zlib';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import { type } from 'os';


type props = {className:string,numperOfVideo:any,numberofstudent:any}
const P: FC<props> = ({className,numperOfVideo,numberofstudent}) => {

    
    return (
 <div className='d-flex container'> 
     <div className='d-flex flex-wrap w-50 m-5'>
     <h3>Basic Technology</h3>
     <p  className={styles.P} > Basic Technology is a very important subject in todays 
             curriculum for students especially at the junior secondary 
             level as knowledge impacted prepares them for the various 
             experiences at the senior level not withstanding their carrier paths.</p>
    </div>

    <div className='float-right m-5 d-flex flex-column'>
        <span className='d-flex m-2'>
           <span className={`me-3 ${styles.fontgraycolor} `}>Class:</span> <span>{className}</span> </span>
           <span className='d-flex m-2'>
           <span className={`me-3 ${styles.fontgraycolor} `}>lessons:</span> <span>{numperOfVideo}</span> </span>
           <span className='d-flex m-2'>
           <span className={`me-3 ${styles.fontgraycolor} `} >Students:</span> <span>{numberofstudent}</span> </span>
    </div>
       

</div>

    )

}
export default P;