import React from 'react'
import DynamicTitle from '../../component/dynamicTitle/DynamicTitle'
import { Box } from '@mui/material';
import LoginSec from '../../component/loginSec/LoginSec';


const Login = () => {
    DynamicTitle();
  return (
   <>
    <Box>
      <LoginSec/>
    </Box>
   </>
  )
}

export default Login
