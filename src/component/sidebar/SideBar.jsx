import {  Box, Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import React, { useState } from 'react'

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';





import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';



import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ListIcon from '@mui/icons-material/List';

import { Link } from 'react-router-dom';
import logo from '../../asset/images/logo/logo.png'
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const SideBar = () => {
    const [openProduct, setOpenProduct] = useState(true);
    

   const handleToggle1=()=>
   {
    
    setOpenProduct(!openProduct);
   };

 
  return (
   <>
    <List
      sx={{ width: '100%', maxWidth: 300,     color: "white"}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader"
        sx={{
         
      
        display: "flex",
        alignItems: "center",
        
      }}>
             <Typography component={Link} to="/" sx={{padding:".8rem",paddingLeft:"2.2rem"}}>

            <img src={logo} alt="logo" width="100%"  height="32px"/>
</Typography> 
          
        
         
        </ListSubheader>
      }
    >
        
        

      <Divider/>
        
      
       {/* dashboard */}
       <ListItemButton 
      component={Link} to="/"
      sx={{border:"2px solid transparent",
      '&:hover': {
        borderLeft:"2px solid red"
      },
      }} 
      >
          <Box sx={{color:"#C0C0C0",display:"flex"
        , '&:hover': {
       color:"white"
        },}}>
          <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
           <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}>  Dashboard</Typography>
          </Box>
        </ListItemButton>
     

          {/* jobBoard */}
          <ListItem sx={{color:"grey",bgcolor:"#36454F",paddingLeft:"1.7rem"}} >
          <Typography sx={{fontFamily: 'Rubik'}}>Job Board</Typography>
            
          </ListItem>

          {/* candidiate */}
          <ListItemButton 
            component={Link} to="/users"
            sx={{border:"2px solid transparent",
            '&:hover': {
              borderLeft:"2px solid red"
            },
            }} 
            >
              <Box sx={{color:"#C0C0C0",display:"flex"
            , '&:hover': {
          color:"white"
            },}}>
              <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
              <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}>  candidiates</Typography>
              </Box>
           </ListItemButton>

          {/* Employers */}
          <ListItemButton 
      component={Link} to="/employers"
      sx={{border:"2px solid transparent",
      '&:hover': {
        borderLeft:"2px solid red"
      },
      }} 
      >
          <Box sx={{color:"#C0C0C0",display:"flex"
        , '&:hover': {
       color:"white"
        },}}>
          <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
           <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}>  Employers</Typography>
          </Box>
        </ListItemButton>

        {/* Channel Partner  */}
      <ListItem sx={{color:"grey",bgcolor:"#36454F",paddingLeft:"1.7rem"}} >
          <Typography sx={{fontFamily: 'Rubik'}}>Channel Partner </Typography>
            
          </ListItem>

        
      
          


{/* Channel Partner List */}
<ListItemButton onClick={handleToggle1} >
       
<Box sx={{color:"#C0C0C0",display:"flex"
        , '&:hover': {
       color:"white"
        },}}>
          <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
           <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}>   Channel  List</Typography>
          </Box>
        {openProduct ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider />
      <Collapse in={openProduct} timeout="auto" unmountOnExit>
        <List component="div" disablePadding  sx={{color:"grey",bgcolor:"#36454F"}}>
        
          {/* Channel Partner */}
          <ListItemButton 
            component={Link} to="/users"
            sx={{border:"2px solid transparent",
            '&:hover': {
              borderLeft:"2px solid red"
            },
            }} 
            >
              <Box sx={{color:"#C0C0C0",display:"flex"
            , '&:hover': {
          color:"white"
            },}}>
              <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
              <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}>  Channel Partner</Typography>
              </Box>
           </ListItemButton>
      <Divider />

       {/* Assign Employer */}
       <ListItemButton 
            component={Link} to="/employers"
            sx={{border:"2px solid transparent",
            '&:hover': {
              borderLeft:"2px solid red"
            },
            }} 
            >
              <Box sx={{color:"#C0C0C0",display:"flex"
            , '&:hover': {
          color:"white"
            },}}>
              <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
              <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}>  Assign Employer</Typography>
              </Box>
           </ListItemButton>
      

      
        </List>
      </Collapse>
      

       {/*Job Posting */}
       <ListItemButton 
            component={Link} to="/job-posting"
            sx={{border:"2px solid transparent",
            '&:hover': {
              borderLeft:"2px solid red"
            },
            }} 
            >
              <Box sx={{color:"#C0C0C0",display:"flex"
            , '&:hover': {
          color:"white"
            },}}>
              <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
              <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}>  Job Posting</Typography>
              </Box>
           </ListItemButton>


      {/*  Payments */}
      <ListItemButton 
            component={Link} to="/payments"
            sx={{border:"2px solid transparent",
            '&:hover': {
              borderLeft:"2px solid red"
            },
            }} 
            >
              <Box sx={{color:"#C0C0C0",display:"flex"
            , '&:hover': {
          color:"white"
            },}}>
              <CreditScoreIcon sx={{fontSize:'1.3rem'}} />
              <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}>   Payments</Typography>
              </Box>
           </ListItemButton>

        {/*  Contact Queries */}
        <ListItemButton 
            component={Link} to="/contact-queries"
            sx={{border:"2px solid transparent",
            '&:hover': {
              borderLeft:"2px solid red"
            },
            }} 
            >
              <Box sx={{color:"#C0C0C0",display:"flex"
            , '&:hover': {
          color:"white"
            },}}>
              <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
              <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}> Contact Queries</Typography>
              </Box>
           </ListItemButton>

      {/*job Attributes */}
      <ListItem sx={{color:"grey",bgcolor:"#36454F",paddingLeft:"1.7rem"}} >
          <Typography sx={{fontFamily: 'Rubik'}}>Job Attributes </Typography>
          </ListItem> 
            

              {/* Job Type */}
         
        <ListItemButton 
            component={Link} to="/job-type"
            sx={{border:"2px solid transparent",
            '&:hover': {
              borderLeft:"2px solid red"
            },
            }} 
            >
              <Box sx={{color:"#C0C0C0",display:"flex"
            , '&:hover': {
          color:"white"
            },}}>
              <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
              <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}>  Job Type</Typography>
              </Box>
           </ListItemButton>

          {/* education */}
         
        <ListItemButton 
            component={Link} to="/education"
            sx={{border:"2px solid transparent",
            '&:hover': {
              borderLeft:"2px solid red"
            },
            }} 
            >
              <Box sx={{color:"#C0C0C0",display:"flex"
            , '&:hover': {
          color:"white"
            },}}>
              <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
              <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}> Education</Typography>
              </Box>
           </ListItemButton>

           
              {/* EmployementType */}
         
        <ListItemButton 
            component={Link} to="/employement-type"
            sx={{border:"2px solid transparent",
            '&:hover': {
              borderLeft:"2px solid red"
            },
            }} 
            >
              <Box sx={{color:"#C0C0C0",display:"flex"
            , '&:hover': {
          color:"white"
            },}}>
              <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
              <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}> EmployementType</Typography>
              </Box>
           </ListItemButton>
        

       {/*User Package */}
       <ListItem sx={{color:"grey",bgcolor:"#36454F",paddingLeft:"1.7rem"}} >
          <Typography sx={{fontFamily: 'Rubik'}}>User Package </Typography>
          </ListItem> 

          {/* PackageList */}
         
        <ListItemButton 
            component={Link} to="/package-list"
            sx={{border:"2px solid transparent",
            '&:hover': {
              borderLeft:"2px solid red"
            },
            }} 
            >
              <Box sx={{color:"#C0C0C0",display:"flex"
            , '&:hover': {
          color:"white"
            },}}>
              <CardGiftcardIcon sx={{fontSize:'1.3rem'}} />
              <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}> PackageList</Typography>
              </Box>
           </ListItemButton>
        

      
       {/*Setting */}
       <ListItem sx={{color:"grey",bgcolor:"#36454F",paddingLeft:"1.7rem"}} >
          <Typography sx={{fontFamily: 'Rubik'}}>Job Attributes </Typography>
          </ListItem>

            {/* Category */}
         
          <ListItemButton 
              component={Link} to="/category"
              sx={{border:"2px solid transparent",
              '&:hover': {
                borderLeft:"2px solid red"
              },
              }} 
              >
                <Box sx={{color:"#C0C0C0",display:"flex"
              , '&:hover': {
            color:"white"
              },}}>
                <ListIcon sx={{fontSize:'1.3rem'}} />
                <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}> Category</Typography>
                </Box>
            </ListItemButton>

               {/* Industry */}
         
          <ListItemButton 
              component={Link} to="/industry"
              sx={{border:"2px solid transparent",
              '&:hover': {
                borderLeft:"2px solid red"
              },
              }} 
              >
                <Box sx={{color:"#C0C0C0",display:"flex"
              , '&:hover': {
            color:"white"
              },}}>
                <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
                <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}> Industry</Typography>
                </Box>
            </ListItemButton>

             {/* Coupons */}
          <ListItemButton 
              component={Link} to="/coupons"
              sx={{border:"2px solid transparent",
              '&:hover': {
                borderLeft:"2px solid red"
              },
              }} 
              >
                <Box sx={{color:"#C0C0C0",display:"flex"
              , '&:hover': {
            color:"white"
              },}}>
                <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
                <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}> Coupons</Typography>
                </Box>
            </ListItemButton>

              {/*location */}
          {/* <ListItemButton 
              component={Link} to="/location"
              sx={{border:"2px solid transparent",
              '&:hover': {
                borderLeft:"2px solid red"
              },
              }} 
              >
                <Box sx={{color:"#C0C0C0",display:"flex"
              , '&:hover': {
            color:"white"
              },}}>
                <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
                <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}> Location</Typography>
                </Box>
            </ListItemButton> */}


            {/* generalSetting */}
            <ListItemButton 
              component={Link} to="/general-setting"
              sx={{border:"2px solid transparent",
              '&:hover': {
                borderLeft:"2px solid red"
              },
              }} 
              >
                <Box sx={{color:"#C0C0C0",display:"flex"
              , '&:hover': {
            color:"white"
              },}}>
                <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
                <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}> General Setting</Typography>
                </Box>
            </ListItemButton>

             {/* email templates */}
             <ListItemButton 
              component={Link} to="/email-templates"
              sx={{border:"2px solid transparent",
              '&:hover': {
                borderLeft:"2px solid red"
              },
              }} 
              >
                <Box sx={{color:"#C0C0C0",display:"flex"
              , '&:hover': {
            color:"white"
              },}}>
                <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
                <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}> Email Templates </Typography>
                </Box>
            </ListItemButton>

                {/* Languages */}
                <ListItemButton 
              component={Link} to="/languages"
              sx={{border:"2px solid transparent",
              '&:hover': {
                borderLeft:"2px solid red"
              },
              }} 
              >
                <Box sx={{color:"#C0C0C0",display:"flex"
              , '&:hover': {
            color:"white"
              },}}>
                <PeopleAltIcon sx={{fontSize:'1.3rem'}} />
                <Typography sx={{fontFamily:'Rubik',marginLeft:"10px"}}> Languages </Typography>
                </Box>
            </ListItemButton>


{/* Log Out */}
<ListItemButton 
component={Link} to="/login"
>
     <ListItemIcon>
     <LogoutTwoToneIcon fontSize="large" sx={{color: "white"}}/>
     </ListItemIcon>
     <ListItemText primary=" Log Out" />
 </ListItemButton>


</List>
   </>
  )
}

export default SideBar
