import { Box, TextField,CardContent, Typography, Button, Card, FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton, } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React , { useState, useEffect } from 'react'

const LoginSec = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [bgColor, setBgColor] = useState
  ("grey");
 
  const colors = ['#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#e74c3c'];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    }, 3000); // Change color every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval);
  }, [colors]);
  const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
      };
  return (
   <>

    <Box sx={{
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bgcolor:bgColor,
        transition: 'background-color 1s ease',
        padding:"2rem",
     
    }}>
    <Card 
    // className={classes.transparentCard}
    sx={{maxWidth:500,padding:"2rem",backgroundColor:"transparent",   boxShadow:"5px 5px 5px 5px black"}}
    >
      <CardContent>
        <Typography variant="h5" align="left" 
        sx={{ fontFamily: 'Rubik',color:"white"}}
        >
          Login to 
        </Typography>
        <Typography variant="h5" align="left" gutterBottom
        sx={{ fontFamily: 'Rubik',color:"white"}}
        >
           ADMIN PORTAL
        </Typography>

        <form onSubmit={handleSubmit}>

         <label htmlFor="username" >User Name</label>
          <TextField
          sx={{marginBottom:"1rem",marginTop:".5rem"}}
          required
           color='secondary'
           size='small'
           id="username" name="username"
        InputProps={{
          placeholder: 'Type here...',
          style: {
            borderRadius: "20px",
            
            backgroundColor:"white"
            
          }
        }}
           
            variant="outlined"
            fullWidth
          />


          
          <label htmlFor="Password" >Password</label>
              <FormControl 
               variant="outlined"
                fullWidth
                color='secondary'
                size='small'
           
                sx={{marginBottom:"1rem",marginTop:".5rem"}}
                required
                
                >
        
          <OutlinedInput
               placeholder= 'Type here...'
          sx={{ borderRadius: "20px",backgroundColor:"white"}}
            id="password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                 
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
           
          />
        </FormControl>
         
          <Button
            type="submit"
            variant="contained"
            sx={{ border:"1px solid white", borderRadius:"20%",backgroundColor:"transparent"}}
          >
            Log in
          </Button>
        </form>
      </CardContent>
    </Card>
    </Box>
   </>
  )
}

export default LoginSec
