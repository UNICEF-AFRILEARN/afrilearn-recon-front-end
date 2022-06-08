
import React , { useState } from "react" ;
import  styles from './Popup.module.css';
import { FC } from "react";
import {Form} from 'react-bootstrap';
import Image from 'next/image';
import {Modal} from 'react-bootstrap';
import { Button } from "react-bootstrap";
import Note from "./NotePopup";
import Video from "./VideoPoupup";
import P from "./pragraph"


 export default function Model()  {


const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

 
   return (
     <>
     
       <button onClick={handleShow} className={styles.btnModal} > 
         Open </button>
        
  <Modal show={show} onHide={handleClose}  size="xl"  >
   <div  id="dashboardFirstSection" className={`container-fluid relative ${styles.dashboardFirstSection}`}>
        <div className="row">
        <div className="col-md-12">
            <h1>SSS-ONE</h1>
          </div>
          </div>
        <div className={`row ${styles.push2}`}>
        <div className="col-md-12">
            <h2>Basic Technology</h2>
            <p>Explore the fun in learning</p>
          </div>
        </div>
        <div className={`row ${styles.push2}`}></div>
    </div>
        <div className="container">
         
      
             {/* <P className={"Senior Sceondary School One"} numperOfVideo={"116 Video Lessons"} numberofstudent={"13,000 Registered Students"}>
             </P> */}
             <Note></Note>
             <Video></Video>
             
        
        {/* <Button variant="link" > Video Lessons </Button> */}
       
        </div>
        
      </Modal>
       
        </>

















 
     

       
   );
 }





 


 

