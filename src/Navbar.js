import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ExploreIcon from '@mui/icons-material/Explore';
import Typography from '@mui/material/Typography';

function Navbar() {
  const handleLogoClick = () => {
    // Handle logo click action here
    console.log('Logo clicked');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(146, 227, 169)' }}>
      <Toolbar disableGutters>
        <IconButton
          onClick={handleLogoClick}
          sx={{
            padding: 0,
            '&:hover': { bgcolor: 'transparent' },
            borderRadius: 0,
            transition: 'none',
            marginLeft: '8px', // Adjust margin as needed
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px', // Change the padding size as needed
              bgcolor: 'rgb(146, 227, 169)', // Green background color
              borderRadius: 0,
            }}
          >
            <ExploreIcon sx={{ fontSize: 32, color: 'white' }} /> {/* White icon */}
            <Typography variant="h6" component="div" sx={{ ml: 1, color: 'white' }}>
              Job Quest
            </Typography>
          </Box>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
