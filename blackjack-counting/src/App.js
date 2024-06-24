import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [decks, setDecks] = useState(1);

  const addCount = (value) => {
    setCount(count + value);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Card Counting App</h1>
          <div>
            <button onClick={() => addCount(1)}>+1 (2-6)</button>
            <button onClick={() => addCount(0)}>0 (7-9)</button>
            <button onClick={() => addCount(-1)}>-1 (10-Ace)</button>
          </div>
          <h2>Running Count: <span>{count}</span></h2>
          <h2>True Count: <span>{(count / decks).toFixed(2)}</span></h2>
          <button onClick={resetCount}>Reset</button>
        </header>
      </div>
  );
}

export default App;
