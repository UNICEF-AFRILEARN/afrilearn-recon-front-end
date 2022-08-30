
import React, {useState, useEffect, useRef} from 'react';
import Box from '@mui/material/Box';
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../../../styles/payment.module.css';


import Modal from '@mui/material/Modal';

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       "Nunito",
//       "Roboto",
//       "Helvetica Neue",
//       "Arial",
//       "sans-serif"
//     ].join(",")
//   }
// });


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  typography: {
    fontFamily: 'Raleway, Arial',
    bgcolor: '#f44336',
  },
  width: {
      xs: 350,
      sm: 400,
      md: 500,
      lg: 670,
      xl: 700,
  },
  height: {
    xs: 600,
    sm: 600,
    md: 600,
    lg: 500,
    xl: 500,
  },
  bgcolor: 'background.paper',
  borderRadius:5,
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
    <div >
      <Button onClick={handleOpen}>BANK TRANSFER</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}
        >

          <Typography
          id="modal-modal-title" 
          variant="h3" 
          component="h2"
          onClick={closeModal}
          align='center'
          >
            Bank Deposit
            <Typography sx={{ mt: 2 }}>
              Make deposit using the bank details below
            </Typography>
          </Typography>
          <Typography
           
          id="modal-modal-description" sx={{ mt: 3 }}>
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
        sx={{ mt:3 }}
        variant="contained"
        onClose={handleClose}
        onClick={closeModal}
        // color="#00D9B6"
        >Okay, Got it</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default PaymentDetails;