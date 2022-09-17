import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../../teacher/teacher.module.css'

const Addchildmodal = ({ handleShow, handleClose, show, newChildData, clientError, setClientError, showMyError, setAddedChildData, addedChildData, error}) => {

    // setClientError(error)
    // setAddedChildData(childData)
    console.log("clientError from modal", clientError)

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

    
       { clientError && 
       <>
        <Modal.Body
        className='text-center'
        >
       {showMyError}
        </Modal.Body>
        <Modal.Footer
        className={styles.exammodalwrapper}
        >
          <Button 
           className={styles.buttonwrapper}
          variant="secondary" 
          onClick={() => {handleClose(); setClientError("")}}
          >
            Ok
          </Button>
        </Modal.Footer>
        </>}
      </Modal>
    </>
  );
}

export default Addchildmodal;