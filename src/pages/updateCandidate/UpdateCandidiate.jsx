import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import EditCandidate from '../../component/updateForm/EditCandidate'
import { Box, Button, Card, Typography } from '@mui/material'
import { ControlPointDuplicateOutlined } from '@mui/icons-material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';


const UpdateCandidiate = () => {
  return (
   <>
    <NavBar>

    <Box sx={{p:{xs:.5,lg:3}}}>
        <Card sx={{p:3,m:2}}>
    <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <Box sx={{display:"flex",}}> < FormatListBulletedIcon/>
            <Typography variant="h5" sx={{fontFamily:'Rubik',color:"black",marginLeft:"4px"}} >Update Candidates </Typography></Box>
            <Box sx={{margin:"1rem"}}>
            <Button component={Link} to="/users/add"
             sx={{fontFamily:'Rubik',
             color:"black",fontSize:"medium",
                border:"1px solid red",
                backgroundColor: "red",
                margin:"1rem",
                '&:hover': {
                    backgroundColor: "pink",
                  }}}
            ><ControlPointDuplicateOutlined/>Add Candidate</Button>
             <Button component={Link} to="/users"
             sx={{fontFamily:'Rubik',
             color:"black",fontSize:"medium",
                border:"1px solid red",
                backgroundColor: "red",
                '&:hover': {
                    backgroundColor: "pink",
                  }}}
            >< FormatListBulletedIcon/> Candidates List</Button>
            </Box>
           
            </Box>
          
        </Card>
        <EditCandidate/>
        </Box>
    </NavBar>
   
   </>
  )
}

export default UpdateCandidiate
