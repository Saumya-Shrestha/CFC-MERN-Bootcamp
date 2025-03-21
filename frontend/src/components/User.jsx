import { useState } from "react";

const User = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Test Component</h1>
      <h1>{name ? "Given username: " + name : "...."}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default User;
