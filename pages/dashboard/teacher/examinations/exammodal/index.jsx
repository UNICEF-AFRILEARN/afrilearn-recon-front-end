import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../teacher.module.css'

const Exammodal = ({
  handleShow, 
  handleClose, 
  show, 
  navigateTodetails, 
  newExams, 
  newExamQuestion, 
  deletedExam, 
  updatedQuestion
}) => {

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

        {newExams && 
          <>
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
          onClick={() => {handleClose(); navigateTodetails()}}
          >
            Ok
          </Button>
        </Modal.Footer>
          </>
        }
        {deletedExam && 
          <>
          <Modal.Body
        className='text-center'
        >
         Exam has been deleted successfully
        </Modal.Body>
        <Modal.Footer
        className={styles.exammodalwrapper}
        >
          <Button 
           className={styles.buttonwrapper}
          variant="secondary" 
          onClick={handleClose}
          >
            Ok
          </Button>
        </Modal.Footer>
          </>
        }
        {newExamQuestion && 
          <>
          <Modal.Body
        className='text-center'
        >
         Exam question has been added successfully
        </Modal.Body>
        <Modal.Footer
        className={styles.exammodalwrapper}
        >
          <Button 
           className={styles.buttonwrapper}
          variant="secondary" 
          onClick={handleClose}
          >
            Ok
          </Button>
        </Modal.Footer>
          </>
        }
      </Modal>
    </>
  );
}

export default Exammodal;