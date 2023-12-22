import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Card, Box, Paper, MenuItem, FormControl, InputLabel, Select } from '@mui/material';



const AddCouponForm = () => {
  const [formData, setFormData] = useState({
    CouponCode: '',
    CouponType: '',
    value: '',
    validUpto: '',
  status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend or perform other actions)
    console.log(formData);
    // Reset form fields after submission
    setFormData({
        CouponCode: '',
        CouponType: '',
        value: '',
        validUpto: '',
      status: '',
    });
  };

  return (
    <>
 
     <Container  >
     <Paper elevation={3} sx={{padding:{xs:2,md:6,borderTop:"6px solid red"}}}
      >
   
      <form onSubmit={handleSubmit}>
       

       
        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="CouponCode"
              name="CouponCode"
              value={formData.CouponCode}
              onChange={handleChange}
              required
              InputProps={{
                placeholder: 'Type here...',
                style: {
                  borderRadius: "10px",
                  
                  backgroundColor:"white"
                  
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="CouponType"
              name="CouponType"
             
              value={formData.CouponType}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="value"
              name="value"
              value={formData.value}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="validUpto"
              name="validUpto"
              value={formData.validUpto}
              type='date'
              onChange={handleChange}
              required
            />
          </Grid>
       
       
          <Grid item xs={12} >
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel
             id="status">Status</InputLabel>
            <Select labelId="gender-label"
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}>
             
                <MenuItem  value="">Select</MenuItem>
                <MenuItem  value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" 
          fullWidth
          type="submit"
          color="primary">
            Add Coupon
          </Button>
        </Grid>
        </Grid>
      </form>
      
      </Paper>
   </Container> 
    </>
  );
};

export default AddCouponForm;
