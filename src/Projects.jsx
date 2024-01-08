import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import projectData from './ProjectData.js';

function Projects() {


  return (
    <div>
      <h1>My Projects</h1>
      <h2>Solo Projects</h2>
      {projectData.map((project, i) => {
        if(project.type === "solo"){
          return(<ProjectCard project={project} key={i}/>)
        }

      })}
      {/* Map to Project cards for:
      job site
      virtual relay
      modals and accordians educational? */}

      <h2>Team Projects</h2>
      {/* ecommerce site
      birder App */}
      {projectData.map((project, i) => {
        if(project.type === "team"){
          return(<ProjectCard project={project} key={i}/>)
        }

      })}

      <h2>Educational Projects</h2>
      {/* ecommerce site
      birder App */}
      {projectData.map((project, i) => {
        if (project.type === "edu") {
          return (<ProjectCard project={project} key={i} />)
        }

      })}

    </div>
  )
}

export default Projects;