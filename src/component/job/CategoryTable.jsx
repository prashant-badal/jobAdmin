import React, { useState } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  IconButton,
  Paper,
  TableSortLabel,
  TextField,
  Box,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const CategoryTable = () => {
  // Sample data for demonstration
  const [rows, setRows] = useState([
    { id: 1, category: 'Category 1', status: 'Active' },
    { id: 2, category: 'Category 2', status: 'Inactive' },
    // Add more categories as needed
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);

    const sortedRows = [...rows].sort((a, b) => {
      if (isAsc) {
        return a[property] > b[property] ? 1 : -1;
      } else {
        return b[property] > a[property] ? 1 : -1;
      }
    });

    setRows(sortedRows);
  };

  const isEven = (num) => num % 2 === 0;

  const createSortHandler = (property) => () => {
    handleSort(property);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    // Filter rows based on search query
    const filteredRows = value
      ? rows.filter(
          (row) =>
            row.category.toLowerCase().includes(value.toLowerCase()) ||
            row.status.toLowerCase().includes(value.toLowerCase())
        )
      : rows;

    setRows(filteredRows);
    setPage(0);
  };

  return (
    <Paper>
      <TextField
        label="Search"
        value={searchQuery}
        onChange={handleSearch}
        variant="outlined"
        margin="normal"
      />
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'id'}
                  direction={orderBy === 'id' ? order : 'asc'}
                  onClick={createSortHandler('id')}
                  IconComponent={order === 'desc' ? ArrowDownwardIcon : ArrowUpwardIcon}
                >
                  S.No
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'category'}
                  direction={orderBy === 'category' ? order : 'asc'}
                  onClick={createSortHandler('category')}
                  IconComponent={order === 'desc' ? ArrowDownwardIcon : ArrowUpwardIcon}
                >
                  Category Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'status'}
                  direction={orderBy === 'status' ? order : 'asc'}
                  onClick={createSortHandler('status')}
                  IconComponent={order === 'desc' ? ArrowDownwardIcon : ArrowUpwardIcon}
                >
                  Status
                </TableSortLabel>
              </TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    backgroundColor: isEven(index) ? '#f5f5f5' : 'inherit',
                  }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CategoryTable;
