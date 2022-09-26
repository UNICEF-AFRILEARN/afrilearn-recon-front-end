import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Loginalert = ({handleClose, handleShow, show, error}) => {
    const [loginError, setLoginError] = useState("");


useEffect(() => {
if(error) {
    setLoginError(error.error)
}
},[error])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {!loginError && 
            <>
            <Modal.Header closeButton>
          <Modal.Title> Login In Successfull</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your log in into Afrilearn account was successfully!</Modal.Body>
        <Modal.Footer>
   
          <Button 
          className="w-25"
          variant="primary" 
          onClick={handleClose}>
           Ok
          </Button>
        </Modal.Footer>
            </>
        }
        {loginError && 
        <>
        <Modal.Header closeButton>
          <Modal.Title> Login not Successfull</Modal.Title>
        </Modal.Header>
        <Modal.Body>{loginError}</Modal.Body>
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

export default Loginalert