import { Box, TextField,CardContent, Typography, Button, Card, FormControl, OutlinedInput,  InputAdornment, IconButton, } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React  from 'react'
import backgroundImage from '../../asset/images/logo/2.avif';

const LoginSec = () => {
  const [showPassword, setShowPassword] = React.useState(false);


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
        
        backgroundImage:`url(${ backgroundImage})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover',
        backgroundPosition:"center",
        padding:"2rem",
     
    }}>
    <Card 
    sx={{maxWidth:500,padding:"2rem",backgroundColor:"transparent",   boxShadow:"5px 5px 5px 5px black"}}
    >
      <CardContent>
        <Typography variant="h5" 
        sx={{ fontFamily: 'Rubik',textAlign:"center"}}
        >
          Login to 
        </Typography>
        <Typography variant="h5" align="center" gutterBottom
        sx={{ fontFamily: 'Rubik'}}
        >
           ADMIN PORTAL
        </Typography>

        <form onSubmit={handleSubmit}>

         <label htmlFor="username" style={{fontFamily: 'Rubik'}} >User Name</label>
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


          
          <label htmlFor="Password" style={{fontFamily: 'Rubik'}}>Password</label>
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
            sx={{ border:"2px solid red", borderRadius:"20%",
            color:"#36454F",
            backgroundColor:"transparent"}}
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
