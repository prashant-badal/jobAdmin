import { Box, TextField,CardContent, Typography, Button, Card, FormControl, OutlinedInput,  InputAdornment, IconButton, } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React ,{useState} from 'react'
import backgroundImage from '../../asset/images/logo/neww.avif'
import { useAuth } from '../../contextApi/AuthProvider';
import axios from 'axios';


const LoginSec = () => {
  const { login ,authenthenicated} = useAuth();
  
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = useState({
   userName:'',
    password:''})

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("working")
  
    try {
      const response = await axios.post('https://job-portal-website-by5i.onrender.com/Job-Portal/Admin/signIn', formData);

      console.log("server response",response)
     
      
      if (response.status === 200) {
        const token = response.data.accessToken;
        localStorage.setItem('token',token);
        login()
        console.log('Login successful. Token:', token);
        console.log("auth :", authenthenicated)
       
      } 
      else {
        setError('Login failed.');
      }
     
      
    } catch (error) {
      console.error(error);
      setError(error.message); // Display error message to user
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent default form submission behavior
   
  //   try {
  //     console.log("working")
  //     const response = await axios.post('https://job-portal-website-by5i.onrender.com/Job-Portal/Admin/signIn', formData);
    
  //     if (response.status === 200) {
  //       console.log(response.data)
  //       const token = response.data.token;
  //       console.log("successful")
  //       localStorage.setItem("token",token)
  //       // login();
        
  //       console.log(response.data.token)
  //       navigate('/');
  //       alert("Login successful")
       
  //       console.log('Login successful. Token:', token);
  //     } else {
  //       setError('Login failed.');
  //     }
  //   } catch (error) {
  //     setError('Error occurred during login.');
  //   }
        
  //   }
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
        sx={{ fontFamily: 'Rubik',textAlign:"center",color:"white"}}
        >
          Login to 
        </Typography>
        <Typography variant="h5" align="center" gutterBottom
        sx={{ fontFamily: 'Rubik',color:"white"}}
        >
           ADMIN PORTAL
        </Typography>

        <form onSubmit={handleSubmit}>

         <label htmlFor="userName" style={{fontFamily: 'Rubik',color:"white"}} >User Name</label>
          <TextField
          sx={{marginBottom:"1rem",marginTop:".5rem"}}
          required
           color='secondary'
           size='small'
           id="userName" name="userName"
        InputProps={{
          placeholder: 'Type here...',
          style: {
            borderRadius: "20px",
            
            backgroundColor:"white"
            
          }
        }}
           
            variant="outlined"
            fullWidth
            value={formData.userName}
            onChange={handleChange}
          />


          
          <label htmlFor="password" style={{fontFamily: 'Rubik',color:"white"}}>Password</label>
              <FormControl
               value={formData.password}
               onChange={handleChange}
          
               variant="outlined"
                fullWidth
                // color="white"
                size='small'
           
                sx={{marginBottom:"1rem",marginTop:".5rem"}}
                required
                
                >
        
          <OutlinedInput
               placeholder= 'Type here...'
          sx={{ borderRadius: "20px",backgroundColor:"white"}}
            id="password"
            name='password'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password"
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
            color:"white",
            backgroundColor:"transparent"}}
          >
            Log in
          </Button>
          {error && <div style={{color:"red"}}>{error}</div>}
        </form>
      </CardContent>
    </Card>
    </Box>
   </>
  )
}

export default LoginSec
