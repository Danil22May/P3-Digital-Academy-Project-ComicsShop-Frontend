import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("Hello");

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
