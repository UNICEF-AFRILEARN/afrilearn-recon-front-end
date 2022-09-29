import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Router, { useRouter } from 'next/router'

const Registeralert = ({handleClose, handleShow, show, error}) => {
    const [registerError, setRegisterError] = useState("");


useEffect(() => {
if(error) {
    setRegisterError(error.error)
}
},[error])

// console.log("Error alert register ====> ", error.error)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {!registerError && 
            <>
            <Modal.Header closeButton>
          <Modal.Title> Registration was Successfull</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your registration into Afrilearn account was successfully!</Modal.Body>
        <Modal.Footer>
   
          <Button 
          className="w-25"
          variant="primary" 
          onClick={() => {handleClose(); Router.push('/login')}}>
           Ok
          </Button>
        </Modal.Footer>
            </>
        }
        {registerError && 
        <>
        <Modal.Header closeButton>
          <Modal.Title> Registration not Successfull</Modal.Title>
        </Modal.Header>
        <Modal.Body>{registerError}</Modal.Body>
        <Modal.Footer>
   
          <Button 
          className="w-25"
          variant="primary" 
          onClick={() => {handleClose();  setLoginError("")}}
         
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

export default Registeralert