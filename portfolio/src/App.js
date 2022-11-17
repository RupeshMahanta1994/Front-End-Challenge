import React from "react";
import Navbar from "./components/Navbar";
import MyIntro from "./components/MyIntro";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MyIntro />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
