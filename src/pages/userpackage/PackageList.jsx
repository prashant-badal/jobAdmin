import React from 'react'




import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';
import { ControlPointDuplicateOutlined, } from '@mui/icons-material';

import NavBar from '../../component/navbar/NavBar';

import { Box, Button, Card, Typography } from '@mui/material';
import PackageTable from '../../component/tableData/PackageTable';

const PackageList = () => {
  return (
   <>
     <NavBar>
        <Box sx={{p:"4rem"}}>
        <Card sx={{p:3,m:2}}>
    <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <Box sx={{display:"flex",}}> < FormatListBulletedIcon/>
            <Typography variant="h5" sx={{fontFamily:'Rubik',color:"black",marginLeft:"4px"}} >Package List</Typography></Box>
     
            <Button component={Link} to="/coupon/add"
             sx={{fontFamily:'Rubik',
             color:"black",fontSize:"medium",
                border:"1px solid red",
                backgroundColor: "red",
                '&:hover': {
                    backgroundColor: "pink",
                  }}}
            ><ControlPointDuplicateOutlined/>Add Package</Button>
            </Box>
          
        </Card>
        <PackageTable/>
        </Box>
        </NavBar>
   
   </>
  )
}

export default PackageList
