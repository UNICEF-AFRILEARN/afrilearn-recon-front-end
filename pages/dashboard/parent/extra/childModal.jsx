import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

const ChildModal = ({show, showChildDetails, data}) => {
  return (
    <Modal show aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Other Details <h1 onClick={() => showChildDetails()}>X</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
              { data && data.map((student) => {
          <Row>
                 <>
                     <Col xs={12} md={8}>
                  {console.log(EventTarget)}
                </Col>
                <Col xs={6} md={4}>
                  .col-xs-6 .col-md-4
                </Col>
                 </>
          </Row>
              })
                 
              }
           

          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default ChildModal