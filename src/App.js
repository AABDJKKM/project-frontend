import React from "react";
import "./index.css";
import About from "./routes/About";
import Community from "./routes/Community";
import Explore from "./routes/Explore";
import Home from "./routes/Home";
import Opportunities from "./routes/Opportunities";
import Quiz from "./routes/Quiz";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/> }/>
        <Route path="/community" element={<Community/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/opportunities" element={<Opportunities/>} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>

    </>
  );
}

export default App;
