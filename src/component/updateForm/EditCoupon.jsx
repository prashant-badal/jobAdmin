// UpdateCandidate.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, TextField, Button, Card, CardContent, MenuItem, FormControl, InputLabel, Select, Paper, Grid, Container } from '@mui/material';

const EditCoupon = () => {
//   const { id } = useParams();
//   const [candidate, setCandidate] = useState({ id: null, 
//     CouponCode: '',
//     CouponType: '',
//     value: '',
//     validUpto: '',
//   status: '', });
//   useEffect(() => {
//     // Fetch user data using the provided userId
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`https://your-api-endpoint.com/users/${userId}`);
//         const userData = response.data; // Assuming your API response contains user data

//         // Set the form data with the fetched user data
//         setFormData({
//           name: userData.name || '',
//           price: userData.price || '',
//           days: userData.days || '',
//           packageFor: userData.ppackageFor || '',
//           status: userData.status || '',
//         });
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [userId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send updated data to update the user
//       const response = await axios.put(`https://your-api-endpoint.com/users/${userId}`, formData);

//       if (response.status === 200) {
//         console.log('User updated successfully:', response.data);
//         // Handle successful update, e.g., show success message, redirect, etc.
//       } else {
//         // Handle unsuccessful update
//         console.error('User update failed.');
//       }
//     } catch (error) {
//       console.error('Error occurred during user update:', error);
//     }
//   };

 

  return (
    <div>
       
     <Container  >
     <Paper elevation={3} sx={{padding:{xs:2,md:6,borderTop:"6px solid red"}}}
      >
   
      <form 
    //   onSubmit={handleSubmit}
      >
       

       
        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="CouponCode"
              name="CouponCode"
            //   value={formData.CouponCode}
            //   onChange={handleChange}
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
             
            //   value={formData.CouponType}
            //   onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="value"
              name="value"
            //   value={formData.value}
            //   onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="validUpto"
              name="validUpto"
              type='date'
            //   value={formData.validUpto}
            
            //   onChange={handleChange}
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
                // value={formData.status}
                // onChange={handleChange}
                >
             
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
          Update Coupon
          </Button>
        </Grid>
        </Grid>
      </form>
      
      </Paper>
   </Container> 
    </div>
  );
};

export default EditCoupon;
