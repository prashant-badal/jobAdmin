import React from 'react'
import NavBar from '../../../component/navbar/NavBar';
import DynamicTitle from '../../../component/dynamicTitle/DynamicTitle';
import { Box, Button, Card, Typography } from '@mui/material';
import DataTable from '../../../component/tableData/DataTable';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';
import { ControlPointDuplicateOutlined } from '@mui/icons-material'
import EmployerTable from '../../../component/tableData/EmployerTable';
const Employers = () => {
    DynamicTitle();
  return (
   <>
   <NavBar>
   <Box sx={{p:"4rem"}}>
        <Card sx={{p:3,m:2}}>
    <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <Box sx={{display:"flex",}}> < FormatListBulletedIcon/>
            <Typography variant="h5" sx={{fontFamily:'Rubik',color:"black",marginLeft:"4px"}} >Employers/Company List</Typography></Box>
     
            <Button component={Link} to="/users/add"
             sx={{fontFamily:'Rubik',
             color:"black",fontSize:"medium",
                border:"1px solid red",
                backgroundColor: "red",
                '&:hover': {
                    backgroundColor: "pink",
                  }}}
            ><ControlPointDuplicateOutlined/>Add Candidate</Button>
            </Box>
            {/* <Typography variant="h4"  color="error">Cards for Alerts</Typography> */}
        </Card>
       <EmployerTable/>
        </Box>
    

   </NavBar>
   </>
  )
}

export default Employers
