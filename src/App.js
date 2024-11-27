
import './App.css';

import Divider from '@mui/material/Divider';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import HomePageGrid from './Components/HomePageGrid';
function App() {



  return (
    <div className="App">
      <ResponsiveAppBar />
      <Divider style={{marginBottom:"3rem"}}></Divider>
    <HomePageGrid></HomePageGrid>


    </div>
  );
}

export default App;
