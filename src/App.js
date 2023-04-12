import { useState } from "react";
import "./App.css";
import Yeamin from "./Yeamin";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <Yeamin
        text="yeamin"
        name="habib"
        {...{ handleIncrease, handleDecrease, count }}
      />
    </div>
  );
}

export default App;
