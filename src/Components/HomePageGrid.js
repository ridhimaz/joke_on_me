import React from 'react';
import { Grid2, Box, Button } from '@mui/material';
import men_laugh from "../assets/men_laugh.jpg";
import woman_laugh from '../assets/woman_laugh.avif';
import men_laugh_2 from "../assets/men_laugh_2.jpg";
import "./HomePageGridCss.css";
import fire from "../assets/local_fire_department.svg";

import { Link } from 'react-router-dom';
function HomePageGrid() {
  return (
    <Grid2 container spacing={10} className='homePageGridContainer'>
      <Grid2 className="homePageGrid" size={{ xs: 12, md: 6, lg: 6 }}>
        <Box>
          <p id="homePageGridSwipeHeading">Click to laugh</p>
          <div className='homePageGridFire'>
            <img alt="" src={fire} id="homePageFire"></img>
            <p className="HomePageGridSwipePara">Error 404: Ego Not Found, </p>
          </div>
          <div className='homePageGridBtnDiv'>
            <p className="">To get ROFL - Rolling On Floor Laughing, </p>
            <Link to="/jokes">
              <Button
                sx={{
                  color: 'white',
                  width: '100%',
                  border: '1px solid white',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
                variant="outlined"
              >
                Click me!
              </Button>
            </Link>
          </div>
        </Box>
      </Grid2>
      <Grid2 className="homePageGrid" size={{ xs: 12, md: 6, lg: 6 }}>
        <div className='homePageGridBox odd1' size={12} >
          <img alt="" className="homePageGridBoxImg" src={men_laugh}></img>
          <p className='homePageGridBoxPara'>Software Engineer</p>
          <p className='homePageGridBoxPara'>"Why did the software engineer take a break?
            Because they couldn't "function" without coffee!" </p>
        </div>
        <div className='homePageGridBox even' size={12} >
          <img alt="" className="homePageGridBoxImg" src={woman_laugh}></img>
          <p className='homePageGridBoxPara'>Project Manager</p>
          <p className='homePageGridBoxPara'>"He’s so punctual, even his tea knows the schedule—2:01 PM sharp, or it's 'project delay' drama."</p>
        </div>
        <div className='homePageGridBox odd2' size={12} >
          <img alt="" className="homePageGridBoxImg" src={men_laugh_2}></img>
          <p className='homePageGridBoxPara'>HR</p>
          <p className='homePageGridBoxPara'>"She types birthday emails with more passion than she’s ever approved a raise—each one a Shakespearean masterpiece."</p>
        </div>
      </Grid2>
    </Grid2>
  );
}

export default HomePageGrid;
