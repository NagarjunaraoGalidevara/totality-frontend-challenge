import React from 'react';
import Checkout from '../components/Checkout';
import { Box, Grid, Typography } from '@mui/material';
const CheckoutPage = () => {
  const handleConfirm = (bookingDetails) => {
    console.log('Booking Details:', bookingDetails);
  };
  return (
    <Box padding={3} margin={5} sx={{margin:10,padding:15}}>
      <Grid margin={5}> <Typography>Checkout</Typography>
      <Checkout  onConfirm={handleConfirm} /></Grid>      
  </Box>
  );
};

export default CheckoutPage;
