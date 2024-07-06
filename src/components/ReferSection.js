import React from 'react';
import { Button, Typography, Box } from '@mui/material';

const ReferSection = ({ onOpenModal }) => {
  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Our Refer & Earn Program
      </Typography>
      <Typography variant="body1" gutterBottom>
        Refer a friend and earn rewards!
      </Typography>
      <Button variant="contained" color="primary" onClick={onOpenModal}>
        Refer Now
      </Button>
    </Box>
  );
};

export default ReferSection;
