import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Card, Box, Paper } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const AddCandidateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
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
      email: '',
      phone: '',
      address: '',
      password: '',
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
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Add Candidate
            </Button>
          </Grid>
        </Grid>
        
      </form>
      </Paper>
   </Container> 
    </>
  );
};

export default AddCandidateForm;
