import React, { useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  console.log("APP RUNNING");
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !showParagraph);
  }, []);
  return (
    <div className="app">
      <h1>Hello,Upgrade Almost there</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
