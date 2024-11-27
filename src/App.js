
import { useEffect, useState } from 'react';
import './App.css';
import { fetchJokes } from './services/api-service';
import { makepromt } from './services/utils';
import Divider from '@mui/material/Divider';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import HomePageGrid from './Components/HomePageGrid';
function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prompt = makepromt("Robin", "Software Developer", "extrovert", "12A.M");
        const result = await fetchJokes(prompt);
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <ResponsiveAppBar />
      <Divider style={{ marginBottom: "3rem" }}></Divider>
      <HomePageGrid></HomePageGrid>
    </div>
  );
}

export default App;
