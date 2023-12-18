import React from 'react';
import { Container, Grid, TextField, Select, MenuItem, FormControl, InputLabel, TextareaAutosize, Button } from '@mui/material';

const AddJobForm = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {/* Company Information */}
          <FormControl fullWidth>
            <InputLabel>Select Company</InputLabel>
            <Select /* Add your company options and handlers */>
              {/* Company options */}
            </Select>
          </FormControl>
          <TextField label="Company Name" fullWidth />
          <TextField label="Company NOC" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* Job Details */}
          <TextField label="Job Title" fullWidth />
          <FormControl fullWidth>
            <InputLabel>Job Type</InputLabel>
            <Select /* Add job type options and handlers */>
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
              <MenuItem value="Freelance">Freelance</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </Select>
          </FormControl>
          {/* Add other job details fields */}
          <TextField label="Positions Available" type="number" fullWidth />
          <TextField label="Working Experience (Min)" type="number" fullWidth />
          <TextField label="Working Experience (Max)" type="number" fullWidth />
          <TextField label="Salary" type="number" fullWidth />
          <FormControl fullWidth>
            <InputLabel>Salary Period</InputLabel>
            <Select /* Add salary period options and handlers */>
              <MenuItem value="Hourly">Hourly</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Annually">Annually</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Job Description & Requirements */}
          <TextField label="Skills Required" fullWidth />
          <TextareaAutosize label="Job Description" rowsMin={4} placeholder="Enter job description" fullWidth />
          <FormControl fullWidth>
            <InputLabel>Employment Type</InputLabel>
            <Select /* Add employment type options and handlers */>
              {/* Employment type options */}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Education Required</InputLabel>
            <Select /* Add education options and handlers */>
              {/* Education options */}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* Location Details */}
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select /* Add country options and handlers */>
              {/* Country options */}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Province</InputLabel>
            <Select /* Add province options and handlers */>
              {/* Province options */}
            </Select>
          </FormControl>
          <TextField label="Location" fullWidth />
          <TextField label="City" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* Job Posting Details */}
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select /* Add status options and handlers */>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          {/* Add date pickers for Posted Date and Expiry Date */}
          {/* Submit Button */}
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddJobForm;
