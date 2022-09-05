import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {AiOutlineExclamationCircle } from 'react-icons/ai'

const Linkachildmodal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='text-center p-5'
    >
      <Modal.Body className='text-center'>          

          <h4>Are you sure you want to link?</h4>
        <p>
          Do you want to unlink this child account?
        </p>
      </Modal.Body>
      <Modal.Body className='d-flex justify-center'>

        <div className="d-flex align-items-center justify-content-center w-100 ">
          <Button 
        //  onClick={() => {props.clickUnlinkChild(), props.onHide()}}
         className='w-25 mx-5' 
        >Yes</Button>
        <Button className='w-25 mx-5' onClick={props.onHide}>No</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Linkachildmodal