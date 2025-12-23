import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetail from "./pages/movieDetail/MovieDetail";
import MovieWatch from "./pages/movieWatch/MovieWatch";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/watch/:id" element={<MovieWatch />} />
      </Routes>
    </Router>
  );
};

export default App;
