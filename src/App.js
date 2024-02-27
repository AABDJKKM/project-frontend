import {useState} from 'react';
import React from "react";
import "./index.css";
import About from "./routes/About";
import Community from "./routes/Community";
import Explore from "./routes/Explore";
import Home from "./routes/Home";
import Opportunities from "./routes/Opportunities";
import Quiz from "./routes/Quiz";
import LoginForm from "./routes/LoginForm";
import Register from "./routes/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (forName) => {
  //   setCurrentForm(forName);
  // }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/> }/>
        <Route path="/community" element={<Community/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/opportunities" element={<Opportunities/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/Login" element = {<LoginForm/>}  />
        <Route path="/Register" element = {<Register/>} />
      </Routes>

      {/* <div className='App'>
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
        }
      </div> */}

    </>
  );
}

export default App;
