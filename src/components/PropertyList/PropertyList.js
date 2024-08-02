import React from 'react';
import { Grid, Box } from '@mui/material';
import PropertyItem from '../PropertyItem/PropertyItem';

const PropertyList = ({ properties, onAddToCart ,onCheckout}) => {
  return (
    <Box padding={2}>
      <Grid container spacing={3}>
        {properties.map((property) => (           
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <PropertyItem property={property} onAddToCart={onAddToCart} onCheckout={onCheckout} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PropertyList;

