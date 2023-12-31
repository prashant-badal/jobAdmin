import React from 'react'
import NavBar from '../../../component/navbar/NavBar';
import DynamicTitle from '../../../component/dynamicTitle/DynamicTitle';
import { Box, Button, Card, Grid, Paper, Typography } from '@mui/material';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const Employers = () => {
    DynamicTitle();
  return (
   <>
   <NavBar>
    <Box sx={{marginTop:"2rem"}}>
    <Grid container sx={{display:"flex",justifyContent:"center"}} >

<Grid item xs={11}>
  <Paper elevation={3} style={{ padding: '20px' }}>
  <Box sx={{display:"flex",justifyContent:"space-between"}}>
<Box sx={{display:"flex",}}> < FormatListBulletedIcon/>
      <Typography variant="h5" sx={{fontFamily:'Rubik',color:"black",marginLeft:"4px"}} >Employers List</Typography></Box>

      <Button component={Link} to="/employer/add"
       sx={{fontFamily:'Rubik',
       color:"black",fontSize:"small",
          border:"1px solid red",
          backgroundColor: "red",
          '&:hover': {
              backgroundColor: "pink",
            }}}
      ><AddCircleOutlineIcon/>Add Employer</Button>
      </Box>
  
  </Paper>
</Grid>
</Grid>




    </Box>
    

   </NavBar>
   </>
  )
}

export default Employers
