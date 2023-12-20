import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import AddCandidateForm from '../../component/addform/AddCanndiateForm'
import { Box, Button, Card, Grid, Paper, Typography } from '@mui/material';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddPackageForm from '../../component/addform/AddPackageForm';
const AddPackage = () => {
  return (
    <>
        <NavBar>
        <Box sx={{marginTop:"2rem",}}>
    <Grid container sx={{display:"flex",justifyContent:"center"}} >

<Grid item xs={11} sx={{marginBottom:"2rem"}}>
  <Paper elevation={3} style={{ padding: '20px' }}>
  <Box sx={{display:"flex",justifyContent:"space-between"}}>
<Box sx={{display:"flex",}}> <AddCircleOutlineIcon/>
      <Typography variant="h5" sx={{fontFamily:'Rubik',color:"black",marginLeft:"4px"}} >Add Package </Typography></Box>

      <Button component={Link} to="/package-list"
       sx={{fontFamily:'Rubik',
       color:"black",fontSize:"small",
          border:"1px solid red",
          backgroundColor: "red",
          '&:hover': {
              backgroundColor: "pink",
            }}}
      >< FormatListBulletedIcon/> Package List</Button>
      </Box>
  
  </Paper>
</Grid>
</Grid>
</Box>
            <AddPackageForm/>
        </NavBar>
    </>
  )
}

export default AddPackage
