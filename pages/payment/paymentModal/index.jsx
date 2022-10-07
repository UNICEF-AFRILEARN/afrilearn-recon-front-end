
import React, {useState, useEffect, useRef} from 'react';
import Box from '@mui/material/Box';
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import styles from '../../../styles/payment.module.css';


import Modal from '@mui/material/Modal';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Montserrat"
    },
    h2: {
      fontFamily: "Montserrat"
    },
    h3: {
      fontFamily: "Montserrat"
    },
    h4: {
      fontFamily: "Montserrat"
    },
    button: {
      fontFamily: "Montserrat"
    }
  }
});
const style_s = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  typography: {
    fontFamily: 'Raleway, Arial',
    bgcolor: '#000',
  },
  width: {
      xs: 350,
      sm: 400,
      md: 500,
      lg: 570,
      xl: 600,
  },
  height: {
    xs: 250,
    sm: 250,
    md: 300,
    lg: 250,
    xl: 400,
  },
  bgcolor: 'background.paper',
  borderRadius:5,
  boxShadow: 24,
  p: 4,
};

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
        {prevCount?
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
          <MuiThemeProvider theme={theme}>
            <Typography
            
            id="modal-modal-description" sx={{ mt: 3 }}>
            Bank Name: GTBank
            </Typography>
          </MuiThemeProvider>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
           Account Name: Afrilearn International
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
           Account Number: 0538617241
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
           Amount to be Paid: N{prevCount}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Send proof of payment to hello@myafrilearn.com or Whatsapp +234 805 154 4949
          </Typography>
          <Typography 
          id="modal-modal-description" 
          sx={{ mb: 2 }}>
           Your subscription will be automatically approved onces payment is confirmed
          </Typography>
        <Button
        variant="contained"
        onClose={handleClose}
        onClick={closeModal}
        style={{backgroundColor: '#00D9B6', color: '#FFFFFF'}}
        >Okay, Got it</Button>
        </Box>
          :<Box sx={style_s}
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
               
              </Typography>
            </Typography>
            {/* <MuiThemeProvider theme={theme}> */}
              <Typography
              
              id="modal-modal-description" sx={{ mt: 3 }}>
              
              </Typography>
            {/* </MuiThemeProvider> */}
            
            <Typography
             id="modal-modal-description" sx={{ mt: 2 }}>
             Please select a payment plan
            </Typography>
           
          <Button
          sx={{m: 5}}
          variant="contained"
          onClose={handleClose}
          onClick={closeModal}
          style={{backgroundColor: '#00D9B6', color: '#FFFFFF'}}
          >Okay, Got it</Button>
          </Box>
        }
      </Modal>
    </div>
  );
}

export default PaymentDetails;