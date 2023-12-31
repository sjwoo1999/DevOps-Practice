import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState({'counter': 0});

  const fetchCounterData = () => {
    fetch(`http://223.130.162.209/myweb/api/v1/counter`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCounter(data);
      })
  };

  useEffect(() => {
    fetchCounterData();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Text
        </a>
        <p>
            Visitors : {counter.counter}
        </p>
      </header>
    </div>
  );
}

export default App;
