import React from "react";
import ReactDOM from "react-dom";
import TestDialog from "./TestDialog";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TestDialog />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
