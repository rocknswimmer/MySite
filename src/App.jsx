import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="binder">
      <div className="buttons">
        <button onClick={() => {navigate("/about")}}>about</button>
        <button onClick={() => {navigate("/projects")}}>projects</button>
        <button onClick={() => {navigate("/contact")}}>contact</button>
      </div>
      <div className="pages">
      <Routes>
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
      </div>
    </div>
  )
}

export default App;
