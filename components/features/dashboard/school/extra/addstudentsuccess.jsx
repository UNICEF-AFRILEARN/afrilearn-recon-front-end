import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsFillCheckCircleFill } from 'react-icons/bs'

const AddStudentsuccess = (props) => {
    console.log("newStudent from modal", props.newStudent)
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='text-center'
    >
      <Modal.Body className='text-center'>          
            <BsFillCheckCircleFill 
                size={100}
                color='#00D9B6'
            />
       { props.deletedChild? 
        <p className='m-3'>
          You have successfully unlinked/deleted the student.
        </p> :
        <p className='m-3'>
        You have successfully sent the link request to the student.
      </p>
        }
      </Modal.Body>

      <Modal.Body className='d-flex justify-center p-3'>

        <div className="d-flex align-items-center justify-content-center w-100 mx-5">
          <Button 
         onClick={() => {props.onHide(); Router.push('/school')}}
         className='w-100 mx-5' 
        >Ok</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddStudentsuccess