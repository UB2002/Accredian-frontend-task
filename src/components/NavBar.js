import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import { useTheme } from '@mui/material/styles';
import logo from '../assests/logo.png';  // Adjust the path to your logo image

export default function NavBar() {
  //const theme = useTheme();  // To access theme properties

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ height: 40, mr: 2 }}  // Adjust height as needed
          />
           
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button variant="contained" color="primary" type="courses">
            Courses
          </Button>
          </Typography>
          <Button color="inherit"> Refer & Earn</Button>
          <Button color="inherit"> Resources</Button>
          <Button color="inherit"> About Us</Button>
          <Button variant="contained" color="primary">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
