import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden overflow-y-auto">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/movie/:id" element={<MovieDetails/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
