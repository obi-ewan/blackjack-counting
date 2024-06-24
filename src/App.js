import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [decks, setDecks] = useState(1);

  const addCount = (value) => {
    setCount(prevCount => prevCount + value);
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

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      addCount(1); // +1 (2-6)
    } else if (event.key === 'ArrowRight') {
      addCount(-1); // -1 (10-Ace)
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <div className="decks-input">
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
          <div className="content">
            <div className="image-container">
              <img src={`${process.env.PUBLIC_URL}/strategy.png`} alt="Basic Strategy Chart" />
            </div>
            <div className="card-counting">
              <div>
                <button onClick={() => addCount(1)}>2-6 (+1)</button>
                <button disabled>7-9 (0)</button>
                <button onClick={() => addCount(-1)}>10-Ace (-1)</button>
              </div>
              <h2>True Count: <span>{(count / decks).toFixed(2)}</span></h2>
              <h5>Running Count: <span>{count}</span></h5>
              <button onClick={resetCount}>Reset</button>
            </div>
          </div>
        </header>
      </div>
  );
}

export default App;
