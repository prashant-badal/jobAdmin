import React from 'react'
import NavBar  from "../../component/navbar/NavBar"
import DynamicTitle from '../../component/dynamicTitle/DynamicTitle'
import { Box, Button, Card, Grid, Paper, Typography } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TopCompany from '../../component/tableData/TopCompany';
import TopCandidate from '../../component/tableData/TopCandiate';
import UpdateCandidate from '../updateCandidate/UpdateCandidiate';
import AddJob from '../addJob/AddJob';
const Dashboard = () => {
    DynamicTitle();
  return (
   <>
    <NavBar>
      {/* <Box sx={{ display:"flex"}}> */}
      <Grid container sx={{display:"flex",justifyContent:"center"}} >

      <Grid item xs={11}>
        <Paper elevation={3} style={{ padding: '20px' }}>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <Box sx={{display:"flex",}}> < FormatListBulletedIcon/>
            <Typography variant="h5" sx={{fontFamily:'Rubik',color:"black",marginLeft:"4px"}} >Candidates List</Typography></Box>
     
            <Button component={Link} to="/users/add"
             sx={{fontFamily:'Rubik',
             color:"black",fontSize:"small",
                border:"1px solid red",
                backgroundColor: "red",
                '&:hover': {
                    backgroundColor: "pink",
                  }}}
            ><AddCircleOutlineIcon/>Add Candidate</Button>
            </Box>
        
        </Paper>
      </Grid>
    
    </Grid>
<AddJob/>
        
      {/* <Card sx={{p:3,m:2}}>
    
    <Box sx={{display:"flex",}}> < FormatListBulletedIcon/>
          <Typography variant="h5" sx={{fontFamily:'Rubik',color:"black",marginLeft:"4px"}} >5 Top Candidates List</Typography></Box>
          <TopCandidate/>
         
      </Card>

    <Card sx={{p:3,m:2}}>
    
      <Box sx={{display:"flex",}}> < FormatListBulletedIcon/>
            <Typography variant="h5" sx={{fontFamily:'Rubik',color:"black",marginLeft:"4px"}} >5 Top Candidates List</Typography></Box>
            <TopCompany/>
           
        </Card> */}
      {/* </Box>
     */}
        </NavBar>
   </>
  )
}

export default Dashboard
