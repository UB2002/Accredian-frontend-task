import { Typography, Box } from '@mui/material';

function Hello() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500, margin: '0 auto' }}>
      <Typography variant="h4" component="h1">
        Hello World
      </Typography>
    </Box>
  );
}

export default Hello;
