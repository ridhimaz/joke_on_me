import React from 'react';
import { Grid, Box } from '@mui/material';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import crazyGuy from "../assets/crazy-man-with-mobile-phone-funny-expression_1194-3282.avif"
function HomePageGrid() {
  return (
    <Grid container spacing={2} className='HomePageGridContainer'>
      <Grid className="HomePageGrid" size={{ xs: 12, md: 5 }}>
        <Box>
          <p id="HomePageGridSwipeHeading">Click to laugh</p>
          <SwipeRightIcon></SwipeRightIcon>
          <p id="HomePageGridSwipePara">lorem-ipsum gfwdygkfncdnnvcjgefg jsfdcyewfgficehrcmbdhctfydchhbjd</p>
        </Box>
      </Grid>
      <Grid className="HomePageGrid" size={{ xs: 12, md: 7 }}>
        <Box className='HomePageGridBox odd1' size={12} >
          <p>Swipe for laugh</p>
        </Box>
        <Box  className='HomePageGridBox even' size={12}>
          <p>Swipe for laugh</p>
        
        </Box>
        <Box  className='HomePageGridBox odd2' size={12}>
          <p>Swipe for laugh</p>
        
        </Box>
   
      </Grid>
    </Grid>
  );
}

export default HomePageGrid;
