import React from "react";
import { useState } from "react";

const User = () => {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Test Component</h1>
      <h1>{name ? "Given username: " + name : "...."}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <h1>Count: {counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        Increase Counter
      </button>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        Decrease Counter
      </button>
    </div>
  );
};

export default User;
