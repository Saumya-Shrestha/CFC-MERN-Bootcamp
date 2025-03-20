import { Greeting } from "./components/Greetings.jsx";
import TestClass from "./components/TestClass.jsx";

function TestComponent() {
  return (
    <div>
      <h1>Test Component</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello everyone - code for change</h1>
      <h2>Hello everyone</h2>
      <TestComponent />
      <TestClass />
      <Greeting name="Saumya Man Shrestha" />
    </div>
  );
}

export default App;
