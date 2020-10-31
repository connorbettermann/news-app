import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://content.guardianapis.com/search?api-key=1608a221-3887-40b9-be08-b111fe2a92d7").then(
        response => response.json()
      )
      .then(response => console.log(response));
      setData(result);
    };
    fetchData();   
  }, []);
  return (
    <div className="App">
      <header>
        <h1>News</h1>
      </header>
    </div>
  );
}

export default App;