import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import "../Components/ResponsiveAppBar.css";
import applogo from '../assets/app-logo.svg';

const pages = [];

function ResponsiveAppBar() {
  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={applogo} alt="" className='logo'></img>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
