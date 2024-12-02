import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import "../Components/ResponsiveAppBar.css";
import applogo from '../assets/app-logo.svg';
import { Link } from 'react-router-dom';

function ResponsiveAppBar() {
  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="">
            <img src={applogo} alt="" className='logo'></img>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
