import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PropertyItem = ({ property, onAddToCart,onCheckout}) => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={property.image}
          alt={property.title}
        />
        <CardContent>
        <Typography variant="h6" component="div">
          {property.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bedrooms: {property.bedrooms}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Amenities: {property.amenities.join(', ')}
        </Typography>
        <Typography variant="h6" component="div" marginTop={2}>
          ${property.price}/night
        </Typography>
        <Link to={property.link}>Details</Link>
          <Grid item xs={12} sx={{display:'flex'}}>
            <Grid item xs={5}> <Button
              variant="contained"
              color="primary"
              onClick={onCheckout}
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Book Now
            </Button></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>

              <Button
                variant="contained"
                color="primary"
                onClick={() => onAddToCart(property)}
                fullWidth
                sx={{ marginTop: 2 }}
              >
                ADD TO Cart
              </Button>
            </Grid>


          </Grid>

        </CardContent>
      </Card>
    </Grid>
  );
};

export default PropertyItem;
