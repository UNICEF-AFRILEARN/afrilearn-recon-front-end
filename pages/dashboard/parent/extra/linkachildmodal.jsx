import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {AiOutlineExclamationCircle } from 'react-icons/ai'

import {linkChildInitiate } from '../../../../redux/actions/parent'

const Linkachildmodal = (props) => {
    const { linkedChild } = useSelector((state) => state.parentR);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const { user } = useSelector((state) => state.auth)


    let parentId = user?.user?.id

    const handleSendLink = () => {
        dispatch(linkChildInitiate(email, parentId))
        console.log("Email from link sender => ", linkedChild)
    }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='text-center'
    >
      <Modal.Body className='text-center'>          

          <h4>Linking Existing Account</h4>
        <p>
          Enter email of an existing student to send link request
        </p>
      </Modal.Body>
      <Modal.Body>
      <Form.Group className="px-3 text-start" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        defaultValue={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email" 
        placeholder="name@example.com" 
        />
      </Form.Group>
      </Modal.Body>
      <Modal.Body className='d-flex justify-center p-5'>

        <div className="d-flex align-items-center justify-content-center w-100 ">
          <Button 
         onClick={props.onHide}
         className='w-30 mx-3' 
        >Cancel</Button>
        <Button className='w-30 mx-3' 
        onClick={() => {props.onHide(), handleSendLink()}}>Send Request</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Linkachildmodal