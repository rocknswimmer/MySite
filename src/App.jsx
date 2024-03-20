import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Experience from "./Experience.js";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="binder">
      <div className="paper">
        <div className="buttons">
          <button onClick={() => { navigate("/about") }} className="abutton">About</button>
          <button onClick={() => { navigate("/projects") }} className="pbutton">Projects</button>
          {/* <button onClick={() => { navigate("/experience") }} className="ebutton">Experience</button> */}
          <button onClick={() => { navigate("/contact") }} className="cbutton">Contact</button>
        </div>
        <div className="pages">
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
