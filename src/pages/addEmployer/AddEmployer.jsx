import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import { Box, Button, Card, Grid, Paper, Typography } from '@mui/material';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AddEmployer = () => {
  return (
    <>
<NavBar>
    <Box sx={{marginTop:"2rem"}}>

        
    <Grid container sx={{display:"flex",justifyContent:"center"}} >

<Grid item xs={11}>
  <Paper elevation={3} style={{ padding: '20px' }}>
  <Box sx={{display:"flex",justifyContent:"space-between"}}>
<Box sx={{display:"flex",}}> <AddCircleOutlineIcon/>
      <Typography variant="h5" sx={{fontFamily:'Rubik',color:"black",marginLeft:"4px"}} >Add Employer</Typography></Box>

      <Button component={Link} to="/employers"
       sx={{fontFamily:'Rubik',
       color:"black",fontSize:"small",
          border:"1px solid red",
          backgroundColor: "red",
          '&:hover': {
              backgroundColor: "pink",
            }}}
      >< FormatListBulletedIcon/> Employers List</Button>
      </Box>
  
  </Paper>
</Grid>
</Grid>




    </Box>
    </NavBar>

    </>
  )
}

export default AddEmployer
