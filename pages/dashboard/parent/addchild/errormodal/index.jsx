import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../../teacher/teacher.module.css'

const Errormodal = ({ handleShowError, handleCloseError, showError, error}) => {

    // console.log("clientError from modal", clientError)

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={showError}
        onHide={handleCloseError}
        backdrop="static"
        keyboard={false}
       
      >
        <Modal.Body
        className='text-center'
        >
        {error}
        </Modal.Body>
        <Modal.Footer
        className={styles.exammodalwrapper}
        >
          <Button 
           className={styles.buttonwrapper}
          variant="secondary" 
          onClick={handleCloseError}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Errormodal;