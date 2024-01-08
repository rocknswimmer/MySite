import React from 'react';
import Accordion from "./accordian.js"

function ProjectCard({project}) {


  return (
    <div>
      <h3>{project.title}</h3>
      <div>Photo here with link below</div>
      <p>{project.description}</p>
      <Accordion title={"More Project Details"} content={project.details} />


    </div>
  )
}

export default ProjectCard;