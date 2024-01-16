import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import "./App.css";
import Home from "./components/Containers/pages/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
