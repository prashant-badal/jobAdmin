import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  InputAdornment,
  TablePagination,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Typography,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';

const DataTable = () => {
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const data = [
    { id: 1, name: 'John Doe', mobile: '123-456-7890', email: 'john@example.com', jobTitle: 'Software Engineer', status: 'Active' },
    { id: 2, name: 'Jane Smith', mobile: '987-654-3210', email: 'jane@example.com', jobTitle: 'Data Analyst', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', mobile: '555-555-5555', email: 'bob@example.com', jobTitle: 'UX Designer', status: 'Active' },
    { id: 4, name: 'Alice Williams', mobile: '111-222-3333', email: 'alice@example.com', jobTitle: 'Product Manager', status: 'Inactive' },
    { id: 5, name: 'Charlie Brown', mobile: '999-888-7777', email: 'charlie@example.com', jobTitle: 'QA Engineer', status: 'Active' },
    // Add more data as needed
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (column) => {
    if (sortColumn === column) {
      return sortDirection === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;
    } else {
      return <SortIcon />;
    }
  };

  const filteredData = data.filter((row) => {
    const values = Object.values(row).join(' ').toLowerCase();
    return values.includes(searchTerm.toLowerCase());
  });

  const sortedData = filteredData.sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } else {
      return b[sortColumn] > a[sortColumn] ? 1 : -1;
    }
  });

  const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleView = (id) => {
    // Logic for viewing the row with the given ID
    console.log(`View item with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Logic for deleting the row with the given ID
    console.log(`Delete item with ID: ${id}`);
  };

  const handleUpdate = (id) => {
    // Logic for updating the row with the given ID
    console.log(`Update item with ID: ${id}`);
  };

  return (
    <Box sx={{borderTop:"5px solid red"}}>



      <TableContainer component={Paper} sx={{p:"2rem"}}>
      <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"2rem",paddingLeft:"3rem"}}>
     <FormControl 
       variant="outlined"
      
       color='secondary'
       size='small'
        sx={{margin:".9rem"}}
      >
    
        <Typography  gutterBottom>Rows per page</Typography>
        <Select sx={{width:"7rem"}}
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
        </Select>
      </FormControl>


      <TextField
        sx={{margin:".9rem"}}
      
        variant="outlined"
        color='secondary'
           size='small'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          placeholder: 'Search here...',
          style: {
            borderRadius: "20px",
            
            backgroundColor:"white"
            
          }
        }}
      
      />
     </Box>
        <Table size="small">
          <TableHead>
            <TableRow  size="small">
              <TableCell>
                <IconButton onClick={() => handleSort('id')}>
                  #Id {getSortIcon('id')}
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleSort('name')}>
                  Name {getSortIcon('name')}
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleSort('mobile')}>
                  Mobile {getSortIcon('mobile')}
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleSort('email')}>
                  Email {getSortIcon('email')}
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleSort('jobTitle')}>
                  Job Title {getSortIcon('jobTitle')}
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleSort('status')}>
                  Status {getSortIcon('status')}
                </IconButton>
              </TableCell>
              <TableCell>Action</TableCell>
            </TableRow >
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={index}  sx={{'&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.mobile}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.jobTitle}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleView(row.id)} color="primary"  sx={{fontFamily:'Rubik',
                border:"1px solid red",
                backgroundColor: "#DAF7A6",
                '&:hover': {
                    backgroundColor: "pink",
                  }}}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(row.id)} color="error"  sx={{fontFamily:'Rubik',
                border:"1px solid red",
                backgroundColor: "#DAF7A6",
                '&:hover': {
                    backgroundColor: "pink",
                  }}}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => handleUpdate(row.id)} color="warning"  sx={{fontFamily:'Rubik',
                border:"1px solid red",
                backgroundColor: "#DAF7A6",
                '&:hover': {
                    backgroundColor: "pink",
                  }}}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30, 40]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      </Box>
  );
};

export default DataTable;
