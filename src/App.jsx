import React, {useState, useEffect} from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Experience from "./Experience.js";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function App() {
  const navigate = useNavigate();
  const [views, setViews] = useState("None")

  const getViews = () => {
    axios.get('/views')
    .then((res) => {
      // console.log(res.data)
      setViews(res.data.rows[0].views)
    })
    .catch((err) => {
      console.log("error getting view count")
    })
  }

  const putViews = () => {
    axios.put('/addview')
    .then((res) => {
      console.log(res)
      getViews()
    })
    .catch((err) => {
      console.log("error adding view")
    })
  }

  useEffect(() => {
    if(localStorage.lastChecked !== undefined){
      console.log("should not print yet")
    } else {
      console.log("useEffect looking for lastChecked in local storage, but its undefined")
    }
    putViews()
    //console.log("times useeffect runs")
  }, [])



  return (
    <div className="binder">
      <span className="views">{`views (${views})`}</span>
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
