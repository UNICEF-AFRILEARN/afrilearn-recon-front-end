
import { FC } from "react"; 
import { deflate } from 'zlib';
import { Button } from 'react-bootstrap';
import Image from 'next/image'; 


type props = {score:any,Percentage:any,Remark:string}
const Grade: FC <props> = ({score,Percentage,Remark}) => {

    return(
         <div className=' d-flex container flex-column ' > 
         <b>Grade</b>


        <div className='float-right m-4 flex-column' >
        <Image src={'/assets/img/common/QuizResult/Tick Square.png'} width={27} height={27}  /> 
    
         <span className={`me-5 flex-column m-5 `}> Score </span>   <span className={`me-5 flex-column m-5 `}>{score}</span> 
       
         </div>


         <div className='float-right m-4 flex-column' >
         <Image src={'/assets/img/common/QuizResult/percent 2.png'} width={27} height={27}  /> 
         <span className={`me-5 flex-column m-5 `} > Percentage </span> <span className={`me-5 flex-column m-5 `}>{Percentage}</span> 
         
         </div>

         <div className='float-right m-4 me-5 flex-column' >
         <Image src={'/assets/img/common/QuizResult/Chat.png'} width={27} height={27}  /> 
       
         <span className={`me-5 m-5 flex-column `} > Remark </span>  <span className={`me-5 m-5 flex-column `}>{Remark}</span> 
        
         </div>

         </div>
        )}

    export default Grade; 