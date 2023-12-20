import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Card, Box, Paper, MenuItem, FormControl, InputLabel, Select } from '@mui/material';



const AddPackageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
      price: '',
      days: '',
      packageFor: '',
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
      name: '',
      price: '',
      days: '',
      packageFor: '',
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
              label="Name"
              name="name"
              value={formData.name}
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
              label="Price"
              name="price"
              type="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="No. of Days"
              name="days"
              value={formData.days}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Package For"
              name="packageFor"
              value={formData.packageFor}
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
            Add Package
          </Button>
        </Grid>
        </Grid>
      </form>
      
      </Paper>
   </Container> 
    </>
  );
};

export default AddPackageForm;
