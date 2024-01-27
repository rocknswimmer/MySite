// import React, {lazy} from 'react';
// import { createRoot } from 'react-dom/client';
// const App = lazy(() => import('./App.jsx'));
// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>

      <Routes>
      <Route path='/*' element={<App />}/>
      {/* <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/contact' element={<Contact />}/> */}
    </Routes>

    </Router>
  </React.StrictMode>
);