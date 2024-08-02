import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';

const Checkout = ({ onConfirm }) => {
  const [contactInfo, setContactInfo] = useState({ name: '', email: '' });
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const [errors, setErrors] = useState({});
  console.log("errors", errors)
  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if (!contactInfo?.name) errors.name = 'Name is required';
    if (!contactInfo?.email) errors.email = 'Email is required';
    if (!paymentInfo.cardNumber) {
      errors.cardNumber = 'Card number is required';
    } else if (paymentInfo.cardNumber.length !== 16) {
      errors.cardNumber = 'Card number must be 16 digits';
    }
    if (!paymentInfo.expiryDate) errors.expiryDate = 'Expiry date is required';
    if (!paymentInfo.cvv) errors.cvv = 'CVV is required';

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    onConfirm({ contactInfo, paymentInfo });
    setErrors({});
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  return (
    <Box padding={3}>
      <Paper
        elevation={3}
        sx={{
          mr: 1,
          borderRadius: '11px',
          height: '100%',
          m: 10,
          p: 5,
          my: 2,
        }}
      >
        <Typography variant="h5" component="h2" marginBottom={2}>
          Checkout
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" component="div" marginBottom={1}>
                Contact Information
              </Typography>
              <TextField
                label="Name"
                name="name"
                type='text'
                value={contactInfo.name}
                onChange={handleContactChange}
                fullWidth
                error={!!errors.name}
                helperText={errors.name}
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={contactInfo.email}
                onChange={handleContactChange}
                fullWidth
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" component="div" marginBottom={1}>
                Payment Information
              </Typography>
              <TextField
                label="Card Number"
                name="cardNumber"
                type='number'
                value={paymentInfo.cardNumber}
                onChange={handlePaymentChange}
                fullWidth
                error={!!errors.cardNumber}
                helperText={errors.cardNumber}
                margin="normal"
              />
              <TextField
                label="Expiry Date (MM/YY)"
                name="expiryDate"
                value={paymentInfo.expiryDate}
                onChange={handlePaymentChange}
                fullWidth
                error={!!errors.expiryDate}
                helperText={errors.expiryDate}
                margin="normal"
              />
              <TextField
                label="CVV"
                name="cvv"
                type="password"
                value={paymentInfo.cvv}
                onChange={handlePaymentChange}
                fullWidth
                error={!!errors.cvv}
                helperText={errors.cvv}
                margin="normal"
              />
            </Grid>
          </Grid>
          <Box marginTop={3}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Confirm Booking
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Checkout;
