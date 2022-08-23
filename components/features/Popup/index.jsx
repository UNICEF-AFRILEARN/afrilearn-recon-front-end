/* import React , { Children, useEffect, useState } from "react" ;
import './Popup.module.css';
import styles from './register.module.css';
//import { FC } from "react";
import {Form} from 'react-bootstrap';
import Image from 'next/image';

export default function modal({ show, onClose, children})
   const [isBrowser, setIsBrowser] = useState(false)



      useEffect (() => {
         setIsBrowser(true)
    }, []);

      const modalContent = show ? (

         <div className={styles.box}> 
         <div className={styles.modal}>
         <div className={styles.header}> 
         < a href="#" onClick={handleClose}>
             <button className="btn">Close</button>
             </a>
             </div>
             <div className={styles.body}>{Children}</div>
             </div>
             </div> 
             
         ) : null;
         
         if(isBrowser){
             return ReactDOM.createPortal(
                 modalContent,
                 document.getElementById()
             )
         }
        }; */


















   /*const Login: FC = () => {
    return (
      <>
     








      </> */