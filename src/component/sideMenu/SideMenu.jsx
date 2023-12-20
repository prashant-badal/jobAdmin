import React from 'react'
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone'
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

import { useAuth } from '../../contextApi/AuthProvider';

const SideMenu = () => {
    const {logout}=useAuth()

    const handleLogout=()=>{
        logout();
    }
  return (
 <>
 <List>
 <ListItem component={Link} to="/">
        <ListItemIcon>
        <DashboardTwoToneIcon/>
        </ListItemIcon>
        <ListItemText primary=" Dashboard" />
    </ListItem>
    <Divider/>
    <ListItem component={Link} to="/profile">
        <ListItemIcon>
        <AccountBoxTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary=" Profile" />
    </ListItem>
    <Divider/>
    <ListItem onClick={handleLogout}>
        <ListItemIcon>
        <LogoutTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary=" Log Out" />
    </ListItem >
    <Divider/>

 </List>
 
 </>
  )
}

export default SideMenu
