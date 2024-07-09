import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} /> 
        <Route path="/details" element={<MovieDetails />} /> 
      </Routes>
    </>
  );
}

export default App;
