import React from 'react'
import NavBar  from "../../component/navbar/NavBar"
import DynamicTitle from '../../component/dynamicTitle/DynamicTitle'
import { Box, Button, Card, Typography } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import TopCompany from '../../component/tableData/TopCompany';
import TopCandidate from '../../component/tableData/TopCandiate';
const Dashboard = () => {
    DynamicTitle();
  return (
   <>
    <NavBar>
      <Box sx={{ display:"flex"}}>
      <Card sx={{p:3,m:2}}>
    
    <Box sx={{display:"flex",}}> < FormatListBulletedIcon/>
          <Typography variant="h5" sx={{fontFamily:'Rubik',color:"black",marginLeft:"4px"}} >5 Top Candidates List</Typography></Box>
          <TopCandidate/>
         
      </Card>

    <Card sx={{p:3,m:2}}>
    
      <Box sx={{display:"flex",}}> < FormatListBulletedIcon/>
            <Typography variant="h5" sx={{fontFamily:'Rubik',color:"black",marginLeft:"4px"}} >5 Top Candidates List</Typography></Box>
            <TopCompany/>
           
        </Card>
      </Box>
    
        </NavBar>
   </>
  )
}

export default Dashboard
