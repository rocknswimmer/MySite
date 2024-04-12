import React from 'react';
import Accordion from "./accordian.js"

function ProjectCard({project}) {


  return (
    <div className="project">
      <h3>{project.title}</h3>
      <img  crossorigin="anonymous" src={project.photo} className="photos"/>
      <p>{project.description}</p>

      <h4>{project.link.length > 1 ? "links:" : "Link:"}</h4>
      <div>
        {project.link.map((tuple) => {


          return (<p>{<a href={tuple[1]}>{tuple[0]}</a>}</p>)
        })}
      </div>
      <Accordion title={"More Project Details"} content={<p className="newlines" >{project.details}</p>} />


    </div>
  )
}

export default ProjectCard;