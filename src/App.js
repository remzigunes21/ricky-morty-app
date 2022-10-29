import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbars } from "./components";
import CardItemDetail from "./components/cardItems/CardItemDetail";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbars />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
