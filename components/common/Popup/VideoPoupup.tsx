import  styles from './Popup.module.css';
import { FC } from "react"; 
import { deflate } from 'zlib';
import { Button } from 'react-bootstrap';
import Image from 'next/image';

const Video: FC = () => {

    return (
 <div className={styles.infoContainer}> 
      <Image src={'/assets/img/common/popup/Group (1).png'} width={65.4} height={65.4} className={styles.icon1} /> 
      <div className='float-right m-5 d-flex flex-column' >
       <span > Video Lessons</span>
       <span className={`me-3 ${styles.fontgraycolor} `}>Learn with animated video lessons and practice quizes</span> 
       
       </div>

</div>

    )

}

export default Video; 