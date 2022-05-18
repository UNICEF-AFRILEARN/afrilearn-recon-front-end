import  styles from './Popup.module.css';
import { FC } from "react"; 
import { deflate } from 'zlib';
import { Button } from 'react-bootstrap';
import Image from 'next/image';

const Note: FC = () => {

    return (
 <div className={styles.infoContainer} > 
      <Image src={'/assets/img/common/popup/User 3.png'} width={72.4} height={72.4} className={styles.icon1} /> 
      <div className='float-right m-5 d-flex flex-column' >
       <span > Class Notes </span>
       <span className={`me-3 ${styles.fontgraycolor} `}>Learn with curriculum specific class notes and practice quizess</span> 
       {/* <span>free</span> */}
       </div>
</div>

    )

}

export default Note ; 