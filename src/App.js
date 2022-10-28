import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbars } from "./components";
import { Episodes, Home, Location } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbars />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:id" element={<CardDetails />} /> */}

        <Route path="/episodes" element={<Episodes />} />
        {/* <Route path="/episodes/:id" element={<CardDetails />} /> */}

        <Route path="/location" element={<Location />} />
        {/* <Route path="/location/:id" element={<CardDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
