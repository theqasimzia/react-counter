import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [negativeCount, setNegativeCount] = useState(0);

  return (
    <div className="App">
      <button
        className="counter-button"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
      <button
      className="counter-button negative"
      onClick={() => setNegativeCount(negativeCount - 1)}
      >
      {negativeCount}
      </button>
    </div>
  );
}

export default App;
