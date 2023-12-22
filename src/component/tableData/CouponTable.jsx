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
  MenuItem,
  Select,
  Box,
  Typography,
  Pagination,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const CouponTable = () => {
  const navigate =useNavigate();
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const data = [
    { id: 1,CouponCode:2345, CouponType: 'John Doe',value: 123, validUpto:2, status: 'Active' },
    
    { id: 1,CouponCode:2345, CouponType: 'John Doe',value: 123, validUpto:2, status: 'Active' },
    { id: 1,CouponCode:2345, CouponType: 'John Doe',value: 123, validUpto:2, status: 'Active' },  { id: 1,CouponCode:2345, CouponType: 'John Doe',value: 123, validUpto:2, status: 'Active' },  { id: 1,CouponCode:2345, CouponType: 'John Doe',value: 123, validUpto:2, status: 'Active' },  { id: 1,CouponCode:2345, CouponType: 'John Doe',value: 123, validUpto:2, status: 'Active' },  { id: 1,CouponCode:2345, CouponType: 'John Doe',value: 123, validUpto:2, status: 'Active' },  { id: 1,CouponCode:2345, CouponType: 'John Doe',value: 123, validUpto:2, status: 'Active' },
    
    
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


  const handleDelete = (id) => {
    // Logic for deleting the row with the given ID
    console.log(`Delete item with ID: ${id}`);
  };

  const handleUpdate = (id) => {
    // Logic for updating the row with the given ID
    console.log(`Update item with ID: ${id}`);
    navigate(`/coupon/edit/${id}`)
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
                <Box sx={{display:"flex"}}>
              <Typography variant='h6'sx={{fontFamily:"Rubik",p:.8}}>Id</Typography>
              <IconButton onClick={() => handleSort('id')}>
                  {getSortIcon('id')}
                </IconButton>
                </Box>
                
              </TableCell>
              <TableCell>
              <Box sx={{display:"flex"}}>
              <Typography variant='h6'sx={{fontFamily:"Rubik",p:.8}}> Coupon Code</Typography>
              <IconButton onClick={() => handleSort('CouponCode')}>
                  {getSortIcon('CouponCode')}
                </IconButton>
                </Box>
                
              </TableCell>
              <TableCell>
              <Box sx={{display:"flex"}}>
              <Typography variant='h6'sx={{fontFamily:"Rubik",p:.8}}>  CouponType</Typography>
                <IconButton onClick={() => handleSort('CouponType')}>
                  {getSortIcon('CouponType')}
                </IconButton>
                </Box>
              </TableCell>
              <TableCell>
              <Box sx={{display:"flex"}}>
              <Typography variant='h6'sx={{fontFamily:"Rubik",p:.8}}>  value </Typography>
                <IconButton onClick={() => handleSort('value')}>
                 {getSortIcon('value')}
                </IconButton>
                </Box>
              </TableCell>
              <TableCell>
              <Box sx={{display:"flex"}}>
              <Typography variant='h6'sx={{fontFamily:"Rubik",p:.8}}>   validUpto </Typography>
                <IconButton onClick={() => handleSort('validUpto')}>
                  {getSortIcon('validUpto')}
                </IconButton>
                </Box>
              </TableCell>
              <TableCell>
              <Box sx={{display:"flex"}}>
              <Typography variant='h6'sx={{fontFamily:"Rubik",p:.8}}>    Status </Typography>
                <IconButton onClick={() => handleSort('status')}>
                   {getSortIcon('status')}
                </IconButton>
                </Box>
              </TableCell>
              <TableCell>
              <Typography variant='h6'sx={{fontFamily:"Rubik",p:.8}}> Action </Typography>
                </TableCell>
            </TableRow >
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={index}  sx={{'&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.CouponCode}</TableCell>
                <TableCell>{row.CouponType}</TableCell>
                <TableCell>{row.value}</TableCell>
                <TableCell>{row.validUpto}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
             
                  <IconButton onClick={() => handleDelete(row.id)} color="error"  sx={{fontFamily:'Rubik',marginRight:".7rem",
                border:"1px solid red",
                backgroundColor: "#DAF7A6", padding:"0.005rem",
                '&:hover': {
                    backgroundColor: "pink",
                  }}}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => handleUpdate(row.id)} color="black"  sx={{fontFamily:'Rubik',
                border:"1px solid red",
                backgroundColor: "#DAF7A6",
                padding:"0.002rem",
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

export default CouponTable;
