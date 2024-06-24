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

  const handleDeckChange = (event) => {
    const newDecks = parseInt(event.target.value, 10);
    if (newDecks >= 1) {
      setDecks(newDecks);
    }
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
          <div>
            <label>
              Number of Decks:
              <input
                  type="number"
                  value={decks}
                  onChange={handleDeckChange}
                  min="1"
                  style={{ marginLeft: '10px', width: '50px' }}
              />
            </label>
          </div>
          <button onClick={resetCount}>Reset</button>
        </header>
      </div>
  );
}

export default App;
