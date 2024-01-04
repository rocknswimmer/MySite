import React from 'react';

function ProjectCard({project}) {


  return (
    <div>
      <h3>{project.title}</h3>
      <div>Photo here with link below</div>
      <p>{project.description}</p>


    </div>
  )
}

export default ProjectCard;