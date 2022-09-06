import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsFillCheckCircleFill } from 'react-icons/bs'
import { Children } from 'react';

const ChildDetails = (props)  => {

  let filteredChild= props.myChildren.filter((singleChild) => singleChild.id === props.userId)
  console.log("myChildren from child details modal", filteredChild)
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='text-center'
    >
      {
      
      filteredChild && filteredChild.map((mappedChild) => 
      <>
         <div className='text-center d-flex mx-3'>          
        <p className='m-3'>
       Email:
      </p> 
        <p className='m-3 px-5'>
         {mappedChild.email} 
      </p> 
      
    </div>
    <div className='text-center d-flex mx-3'>          
        <p className='m-3'>
       Password:
      </p> 
        <p className='m-3 px-2'>
         {mappedChild.email} 
      </p> 
      
    </div>
    <div>
    <h5 className='text-start mx-4'>{mappedChild.enrolledCourses[0].courseId.name}</h5>     
    </div>
    <div className='text-center d-flex mx-3'>     
        <p className='m-3'>
       Password:
      </p> 
        <p className='m-3 px-2'>
         {mappedChild.email} 
      </p> 
      
    </div>
    <div>
    <h5 className='text-start mx-4'>{mappedChild.enrolledCourses[0].courseId.name}</h5>     
    </div>
    <div className='text-center d-flex'>     
        <p className='m-3'>
       Subscription:
      </p> 
        <p className='m-3 px-2'>
         {mappedChild.email} 
      </p> 
      
    </div>
    <div className='text-center d-flex'>     
        <p className='m-3'>
       Expiration Date:
      </p> 
        <p className='m-3'>
         {mappedChild.email} 
      </p> 
      
    </div>

    <Modal.Body className='d-flex justify-center p-3'>

      <div className="d-flex align-items-center justify-content-center w-100 mx-5">
        <Button 
       onClick={props.onHide}
       className='w-100 mx-5' 
      >Ok</Button>
      </div>
    </Modal.Body>
    </>
      )}
    </Modal>
  );
}

export default ChildDetails