import { Greeting } from "./components/Greetings.jsx";
import MovieCard from "./components/MovieCard.jsx";
import TestClass from "./components/TestClass.jsx";
import User from "./components/User.jsx";
import Counter from "./components/Counter.jsx";
import "./App.css";

function TestComponent() {
  return (
    <div>
      <h1>Test Component</h1>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      {/* <h1>Hello everyone - code for change</h1>
      <h2>Hello everyone</h2>
      <TestComponent />
      <TestClass />
      <Greeting name="Saumya Man Shrestha" />
      <MovieCard name="Inception" description="A movie about dreams" />
      <MovieCard name="Interstellar" description="A movie about space" />
      <User /> */}
      <Counter />
    </div>
  );
}

export default App;
