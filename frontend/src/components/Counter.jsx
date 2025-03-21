import { useState } from "react";
import "../App.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-container">
      <h1>Count: {counter}</h1>
      <button
        className="btn increase"
        onClick={() => setCounter((prevCount) => prevCount + 1)}
      >
        Increase
      </button>
      <button
        className="btn decrease"
        onClick={() => setCounter((prevCount) => prevCount - 1)}
      >
        Decrease
      </button>
      <button className="btn reset" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
