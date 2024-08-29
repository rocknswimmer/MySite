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
      console.log(res)//comment out////////////////////////////////////////////////////////////////////////////////////////
      getViews()
      localStorage.viewer=res.data.rows[0].view_count
    })
    .catch((err) => {
      console.log("error adding view")
    })
  }

  useEffect(() => {
    if(localStorage.lastChecked !== undefined){
      //console.log(localStorage.lastChecked, Date.now() - 6000, Number(localStorage.lastChecked))
      if(Number(localStorage.lastChecked) > Date.now() - 600000) {

        getViews()
        //localStorage.lastChecked = "time eventually"
        //console.log("in if")

      } else {
        //console.log("in else")
        localStorage.lastChecked = Date.now()
        putViews()
      }
    } else {
      //console.log("useEffect looking for lastChecked in local storage, but its undefined")
      localStorage.lastChecked = Date.now()
      putViews()
    }

    //console.log("times useeffect runs")
  }, [])

  const trackClick = (type,location) => {
    axios.post('/clicked',{
      type:type,
      location,location
    })
  }



  return (
    <div className="binder">
      {/* <span className="views">{`views (${views})`}</span> */}
      <div className="paper">
        <div className="buttons">
          <button onClick={() => { navigate("/about") }} className="abutton">About</button>
          <button onClick={() => { navigate("/projects") }} className="pbutton">Projects</button>
          {/* <button onClick={() => { navigate("/experience") }} className="ebutton">Experience</button> */}
          <button onClick={() => { navigate("/contact") }} className="cbutton">Contact</button>
        </div>
        <div className="pages">
          <Routes>
            <Route path='/about' element={<About test={"props pass through routes"}/>} />
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
