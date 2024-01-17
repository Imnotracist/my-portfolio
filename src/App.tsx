import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import "./App.css";
import Home from "./components/Containers/pages/Home";
import About from "./components/Containers/pages/About";
import Projects from "./components/Containers/pages/Projects";
import Contact from "./components/Containers/pages/Contact";
import AppLayout from "./components/Containers/templates/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
