import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TopCandidate = () => {
    const jobsData = [
        {
          company: 'ABC Inc.',
          title: 'Software Engineer',
          status: 'Full-Time',
          isActive: true,
        },
        {
          company: 'XYZ Corp.',
          title: 'Data Analyst',
          status: 'Part-Time',
          isActive: false,
        },
        {
            company: 'ABC Inc.',
            title: 'Software Engineer',
            status: 'Full-Time',
            isActive: true,
          },
          {
            company: 'XYZ Corp.',
            title: 'Data Analyst',
            status: 'Part-Time',
            isActive: false,
          },]

  const getStatusColor = (isActive) => {
    return isActive ? 'green' : 'red';
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Active Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobsData.slice(0, 5).map((job, index) => (
            <TableRow key={index}>
              <TableCell>{job.company}</TableCell>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.status}</TableCell>
              <TableCell>
                <span
                  style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    backgroundColor: getStatusColor(job.isActive),
                    borderRadius: '50%',
                  }}
                ></span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopCandidate;
