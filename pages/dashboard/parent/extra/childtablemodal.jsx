import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsFillCheckCircleFill } from 'react-icons/bs'
import { Children } from 'react';

const ChildDetails = (props)  => {

  let filteredChild = props.myChildren?.filter((singleChild) => singleChild.id === props.userId)
  
    //Format date to string:
    const formatDate = (string) => {
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(string).toLocaleDateString([],options);
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="dialogy-style"
      className='text-center'
    >
      {
      
      filteredChild && filteredChild.map((mappedChild) => 
      <>
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h5 className='text-start m-4'>Other Details</h5>
        </Modal.Title>
      </Modal.Header>
    <div className='d-flex justify-content-between mx-5'>     
        <p className='m-3'>
       Email:
      </p>
        <p className='m-3 px-2'>
         {mappedChild.email} 
      </p> 
      
    </div>
    <div className='text-center d-flex mx-3'>
    <h5 className='text-start mx-5'>{mappedChild.enrolledCourses[0].courseId.name}</h5>     
    </div>
    <div className=' d-flex justify-content-between mx-5'>     
        <p className='m-3'>
       Subscription:
      </p> 
       { mappedChild?.enrolledCourses[0]?.status === "trial"?
       <p className='m-3'>
         No Payment plan
      </p>:

      <p className='m-3 px-2 align-self-center'>
        {mappedChild?.enrolledCourses[0]?.status}
      </p>
      
    }
      
    </div>
    <div className='d-flex justify-content-between mx-5'>     
        <p className='m-3'>
       Expiration Date:
      </p> 
        <p className='m-3'>
         {formatDate(mappedChild?.enrolledCourses[0]?.endDate)} 
      </p> 
      
    </div>

    <Modal.Body className='d-flex justify-center p-3'>

      {/* <div className="d-flex align-items-center justify-content-center w-100 mx-5">
        <Button 
       onClick={props.onHide}
       className='w-100 mx-5' 
      >Ok</Button>
      </div> */}
    </Modal.Body>
    </>
      )}
    </Modal>
  );
}

export default ChildDetails