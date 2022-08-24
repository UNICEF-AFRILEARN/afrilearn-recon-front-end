
import React, {useState, useEffect, useRef} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 480,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PaymentDetails = ({handleOpen, handleClose, open, closeModal, priceSelected}) => {


  const usePreviousValue = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevCount = usePreviousValue(priceSelected);
    // console.log("sorted_term_videos from paymentdetails ++++", sorted_term_videos)
    let price = priceSelected
    useEffect(() => {
      console.log("prevCount from modal=====", prevCount)
    }, [handleOpen])
    
  return (
    <div>
      <Button onClick={handleOpen}>BANK TRANSFER</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography 
          id="modal-modal-title" 
          variant="h6" 
          component="h2"
          onClick={closeModal}
          >
            Bank Deposit
            <Typography sx={{ mt: 2 }}>
              Make deposit using the bank details below
            </Typography>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
           Bank Name: GTBank
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
           Account Name: Afrilearn International
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
           Account Number: 0538617241
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
           Amount to be Paid: {prevCount}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Send proof of payment to hello@myafrilearn.com or Whatsapp +234 805 154 4949
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Your subscription will be automatically approved onces payment is confirmed
          </Typography>
        <Button 
        variant="contained"
        onClose={handleClose}
        onClick={closeModal}
        >Okay, Got it</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default PaymentDetails;