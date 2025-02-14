import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import projectData from './ProjectData.js';

function Projects({track}) {


  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="horizontal">
        <div className="solo">
          <h2>Solo Projects</h2>
          {projectData.map((project, i) => {
            if (project.type === "solo") {
              return (<ProjectCard project={project} key={i} track={track} />)
            }

          })}
          {/* Map to Project cards for:
      job site
      virtual relay
      modals and accordians educational? */}
        </div>

        <div className="team">

          <h2>Team Projects</h2>
          {/* ecommerce site
      birder App */}
          {projectData.map((project, i) => {
            if (project.type === "team") {
              return (<ProjectCard project={project} key={i} track={track} />)
            }

          })}
        </div>

      </div>
      <div className="horizontal">
        <div className="solo">
          <h2>Educational Projects</h2>
          {/* ecommerce site
      birder App */}
          {projectData.map((project, i) => {
            if (project.type === "edu") {
              return (<ProjectCard project={project} key={i} track={track} />)
            }

          })}
        </div>
        <div className="team">

          <h2>One Week/In Progress</h2>
          {/* ecommerce site
      birder App */}
          {projectData.map((project, i) => {
            if (project.type === "mvp") {
              return (<ProjectCard project={project} key={i} track={track} />)
            }

          })}
        </div>
      </div>

    </div>
  )
}

export default Projects;