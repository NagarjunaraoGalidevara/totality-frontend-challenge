import React from 'react';
import { TextField, Checkbox, FormControlLabel, FormGroup, Slider, Box, Typography } from '@mui/material';

const Filter = ({ filters, setFilters }) => {
  const handleLocationChange = (event) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      location: event.target.value
    }));
  };

  const handlePriceChange = (event, newValue) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      priceRange: newValue
    }));
  };

  const handleBedroomsChange = (event) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      bedrooms: event.target.value
    }));
  };

  const handleAmenitiesChange = (event) => {
    const value = event.target.name;
    setFilters(prevFilters => ({
      ...prevFilters,
      amenities: event.target.checked
        ? [...prevFilters.amenities, value]
        : prevFilters.amenities.filter(amenity => amenity !== value)
    }));
  };
  console.log("SFFF>>", filters)
  return (
    <Box padding={2} display="flex" flexDirection="column" width={"50%"}>
      <Typography gutterBottom>Location Name:</Typography>
      <TextField
        label="Location"
        value={filters.location}
        onChange={handleLocationChange}
      />
      <Box margin="normal">
        <Typography gutterBottom>Price Range:</Typography>
        <Slider
          value={filters.priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={1000}
        />
      </Box>
      <Typography gutterBottom>Bedrooms:</Typography>
      <TextField
        label="Bedrooms"
        type="number"
        value={filters.bedrooms}
        onChange={handleBedroomsChange}
      />
      <FormGroup>
      <Typography gutterBottom>Amenities:</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.amenities.includes('pool')}
              onChange={handleAmenitiesChange}
              name="pool"
              size="small"
            />
          }
          label="Pool"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.amenities.includes('wifi')}
              onChange={handleAmenitiesChange}
              name="wifi"
              size="small"
            />
          }
          label="WiFi"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.amenities.includes('parking')}
              onChange={handleAmenitiesChange}
              name="parking"
              size="small"
            />
          }
          label="Parking"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.amenities.includes('airConditioning')}
              onChange={handleAmenitiesChange}
              name="airConditioning"
              size="small"
            />
          }
          label="Air Conditioning"
        />
      </FormGroup>
    </Box>
  );
};

export default Filter;
