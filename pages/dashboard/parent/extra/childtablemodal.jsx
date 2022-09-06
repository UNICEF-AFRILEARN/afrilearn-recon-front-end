import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsFillCheckCircleFill } from 'react-icons/bs'
import { Children } from 'react';

const ChildDetails = (props)  => {

  let allChildren = props.myChildren.filter((singleChild) => singleChild.id === props.userId)
  console.log("myChildren from child details modal", allChildren)
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='text-center'
    >
      <Modal.Body className='text-center'>          

        {props.userId? 
          <p className='m-3'>
         Student id: {props.userId}
        </p> :  <p className='m-3'>
           No Child is selected
        </p>
        }
      </Modal.Body>

      <Modal.Body className='d-flex justify-center p-3'>

        <div className="d-flex align-items-center justify-content-center w-100 mx-5">
          <Button 
         onClick={props.onHide}
         className='w-100 mx-5' 
        >Ok</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ChildDetails