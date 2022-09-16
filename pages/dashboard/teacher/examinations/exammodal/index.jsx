import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../teacher.module.css'

const Exammodal = ({handleShow, handleClose, show, navigateTodetails}) => {

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
       
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body
        className='text-center'
        >
         Exam has been added successfully
        </Modal.Body>
        <Modal.Footer
        className={styles.exammodalwrapper}
        >
          <Button 
           className={styles.buttonwrapper}
          variant="secondary" 
          onClick={() => {handleClose(); navigateTodetails()}}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Exammodal;