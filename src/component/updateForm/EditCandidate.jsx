// UpdateCandidate.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, TextField, MenuItem, Box, Paper, Container } from '@mui/material';

const EditCandidate = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState({ id: null, firstName: '', lastName: '', email: '', phone: '', status: '' });
  const [previousData, setPreviousData] = useState({});

  useEffect(() => {
    // Fetch candidate data based on the ID from an API or any other data source
    // Here, for demonstration purposes, setting dummy data for the candidate
    const dummyCandidate = {
      id: parseInt(id),
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      status: 'active',
    };
    setCandidate(dummyCandidate);
    setPreviousData(dummyCandidate);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCandidate((prevCandidate) => ({
      ...prevCandidate,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Logic to save the updated candidate data (e.g., make API call)
    console.log('Updated candidate:', candidate);
  };

  return (
    <div>
         <Container  >
     <Paper elevation={3} sx={{padding:{xs:2,md:6,borderTop:"6px solid red"}}}
      >
      <h2> Update Candidate</h2>
      <TextField
        label="First Name"
        name="firstName"
        value={candidate.firstName}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={candidate.lastName}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={candidate.email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone Number"
        name="phone"
        value={candidate.phone}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        select
        label="Status"
        name="status"
        value={candidate.status}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="inactive">Inactive</MenuItem>
      </TextField>
      <Button variant="contained" onClick={handleSave} color="primary">
        Update Candidate
      </Button>
    
      </Paper>
      </Container>
    </div>
  );
};

export default EditCandidate;
