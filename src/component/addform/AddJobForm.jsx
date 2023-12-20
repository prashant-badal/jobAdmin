import React from 'react';
import { Container, Grid, TextField, Select, MenuItem, FormControl, InputLabel, TextareaAutosize, Button } from '@mui/material';

const AddJobForm = () => {
  const companies = ['Company A', 'Company B', 'Company C']; // Replace with actual company options
  const jobCategories = ['Category 1', 'Category 2', 'Category 3']; // Replace with actual job categories
  const jobIndustries = ['Industry 1', 'Industry 2', 'Industry 3']; // Replace with actual job industries
  const countries = ['Country 1', 'Country 2', 'Country 3']; // Replace with actual countries
  const provinces = ['Province 1', 'Province 2', 'Province 3']; // Replace with actual provinces
  const employmentTypes = ['Permanent', 'Temporary', 'Remote', 'On-site']; // Replace with actual employment types
  const educationOptions = ['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD']; // Replace with actual education options
  const statusOptions = ['Active', 'Inactive']; // Replace with actual status options

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Select Company</InputLabel>
            <Select>
              {companies.map((company, index) => (
                <MenuItem key={index} value={company}>{company}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField label="Company Name" fullWidth />
          <TextField label="Company NOC" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Job Title" fullWidth />
          <FormControl fullWidth>
            <InputLabel>Job Type</InputLabel>
            <Select>
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
              <MenuItem value="Freelance">Freelance</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Positions Available" type="number" fullWidth />
          <TextField label="Working Experience (Min)" type="number" fullWidth />
          <TextField label="Working Experience (Max)" type="number" fullWidth />
          <TextField label="Salary" type="number" fullWidth />
          <FormControl fullWidth>
            <InputLabel>Salary Period</InputLabel>
            <Select>
              <MenuItem value="Hourly">Hourly</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Annually">Annually</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Skills Required" fullWidth />
          <TextareaAutosize label="Job Description" rowsMin={4} placeholder="Enter job description" fullWidth />
          <FormControl fullWidth>
            <InputLabel>Employment Type</InputLabel>
            <Select>
              {employmentTypes.map((type, index) => (
                <MenuItem key={index} value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Education Required</InputLabel>
            <Select>
              {educationOptions.map((education, index) => (
                <MenuItem key={index} value={education}>{education}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select>
              {countries.map((country, index) => (
                <MenuItem key={index} value={country}>{country}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Province</InputLabel>
            <Select>
              {provinces.map((province, index) => (
                <MenuItem key={index} value={province}>{province}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField label="Location" fullWidth />
          <TextField label="City" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select>
              {statusOptions.map((status, index) => (
                <MenuItem key={index} value={status}>{status}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* Add date pickers for Posted Date and Expiry Date */}
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddJobForm;
