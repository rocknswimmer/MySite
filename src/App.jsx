import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

function App() {

  return (
    <div className="binder">
      <div className="buttons">
        <button>about</button>
        <button>projects</button>
        <button>contact</button>
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
