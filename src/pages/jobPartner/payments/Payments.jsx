import React from 'react'
import NavBar from '../../../component/navbar/NavBar'
import PaymentTable from '../../../component/tableData/PaymentTable'
import { Box, Card, Typography } from '@mui/material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const Payments = () => {
  return (
   <>
   <NavBar>
   <Box sx={{p:"4rem"}}>
        <Card sx={{p:3,m:2}}>
    <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <Box sx={{display:"flex",}}> < FormatListBulletedIcon/>
            <Typography variant="h5" sx={{fontFamily:'Rubik',color:"black",marginLeft:"4px"}} >Payment List</Typography></Box>
     
          
            </Box>
          
        </Card>
        <PaymentTable/>
        </Box>

   </NavBar>
   </>
  )
}

export default Payments
