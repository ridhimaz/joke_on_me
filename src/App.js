
import { useEffect, useState } from 'react';
import './App.css';
import { fetchJokes } from './services/api-service';
import { makepromt } from './services/utils';
import Divider from '@mui/material/Divider';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import HomePageGrid from './Components/HomePageGrid';
import { Route, Routes } from 'react-router-dom';
import Jokes from './pages/Jokes';
function App() {
  return (
      <div className="App">
        <ResponsiveAppBar />
        <Divider style={{ marginBottom: "3rem" }}></Divider>
        <Routes>
          <Route path="/" element={<HomePageGrid />} />
          <Route path="/jokes" element={<Jokes />} />
        </Routes>
      </div>
  );
}

export default App;
