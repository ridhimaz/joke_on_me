
import { useEffect, useState } from 'react';
import './App.css';
import { fetchJokes } from './services/api-service';
import { makepromt } from './services/utils';

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
      {data}
    </div>
  );
}

export default App;
