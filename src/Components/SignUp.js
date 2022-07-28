import '../App.css';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as Links} from 'react-router-dom';

function Brand() {
  return (
    <Typography variant="body2" align="center" >
      <Links color="#fde047" to="/">
        <p className=" text-yellow-300 m-5 text-2xl xl:text-3xl font-bold tracking-wider">KURD<small>ANIME</small></p> 
      </Links>
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://wallpaperaccess.com/full/1111994.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item sx={{ bgcolor: 'black' }}  xs={12} sm={8} md={5} component={Paper} elevation={6} square> 
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#fde047',':hover':{bgcolor: '#fbbf24'} }}>
             <Links to='/Login'> <div className=" cursor-pointer text-black"><ArrowBackIcon /></div></Links>
            </Avatar>
            <Typography component="h1" variant="h5">
              <p className="text-yellow-300">Sign Up</p>
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                variant="filled"
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="User Name"
                sx={{ bgcolor: '#fde047',border: '1px solid',borderRadius:'5px' }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                 variant="filled"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                 sx={{ bgcolor: '#fde047',border: '1px solid',borderRadius:'5px' }}
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                 variant="filled"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                 sx={{ bgcolor: '#fde047',border: '1px solid',borderRadius:'5px' }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#fde047',':hover': {bgcolor: '#fbbf24'} }}
              >
                <p className="text-black">Sign Up</p>
              </Button>
              <Brand sx={{ mt: 5 }} />  
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}