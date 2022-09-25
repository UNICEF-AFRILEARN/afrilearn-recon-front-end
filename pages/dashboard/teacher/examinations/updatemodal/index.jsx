import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../teacher.module.css'

const Updatemodal = ({
  handleUpdateShow, 
  handleUpdateClose, 
  showUpdate, 
  updatedQuestion
}) => {

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={showUpdate}
        onHide={handleUpdateClose}
        backdrop="static"
        keyboard={false}
       
      >  
       

          <>
          <Modal.Body
        className='text-center'
        >
         Exam question has been updated successfully
        </Modal.Body>
        <Modal.Footer
        className={styles.exammodalwrapper}
        >
          <Button 
           className={styles.buttonwrapper}
          variant="secondary" 
          onClick={handleUpdateClose}
          >
            Ok
          </Button>
        </Modal.Footer>
          </>
      </Modal>
    </>
  );
}

export default Updatemodal;