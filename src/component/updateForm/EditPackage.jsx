import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button, Card, CardContent, MenuItem, FormControl, InputLabel, Select, Paper, Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';


const EditPackage = ({ userId }) => {
    const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
      price: '',
      days: '',
      packageFor: '',
      status: '',
  });

  useEffect(() => {
    // Fetch user data using the provided userId
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://your-api-endpoint.com/users/${userId}`);
        const userData = response.data; // Assuming your API response contains user data

        // Set the form data with the fetched user data
        setFormData({
          name: userData.name || '',
          price: userData.price || '',
          days: userData.days || '',
          packageFor: userData.ppackageFor || '',
          status: userData.status || '',
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send updated data to update the user
      const response = await axios.put(`https://your-api-endpoint.com/users/${userId}`, formData);

      if (response.status === 200) {
        console.log('User updated successfully:', response.data);
        // Handle successful update, e.g., show success message, redirect, etc.
      } else {
        // Handle unsuccessful update
        console.error('User update failed.');
      }
    } catch (error) {
      console.error('Error occurred during user update:', error);
    }
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

export default EditPackage;
