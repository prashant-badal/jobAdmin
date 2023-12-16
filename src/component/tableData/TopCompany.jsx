import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const TopCompany = ({  }) => {
  const userData = [
    {
      username: 'JohnDoe',
      email: 'john@example.com',
      number: '1234567890',
      jobTitle: 'Software Engineer',
    },
    {
      username: 'JaneSmith',
      email: 'jane@example.com',
      number: '9876543210',
      jobTitle: 'Data Analyst',
    },
    {
      username: 'JohnDoe',
      email: 'john@example.com',
      number: '1234567890',
      jobTitle: 'Software Engineer',
    },
    {
      username: 'JaneSmith',
      email: 'jane@example.com',
      number: '9876543210',
      jobTitle: 'Data Analyst',
    },
    // Add more user data objects as needed
  ];
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Number</TableCell>
          <TableCell>Job Title</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {userData.map((user, index) => (
          <TableRow key={index}>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.number}</TableCell>
            <TableCell>{user.jobTitle}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TopCompany;
