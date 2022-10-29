import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbars } from "./components";
import CardItemDetail from "./components/cardItems/CardItemDetail";
import { Episodes, Home, Location } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbars />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/episodes" element={<Episodes />} />

        <Route path="/location" element={<Location />} />
        <Route path="/:id" element={<CardItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
