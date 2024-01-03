import React from 'react';

function ProjectCard({project}) {


  return (
    <div>
      <h1>{project.title}</h1>
      <div>Photo here with link below</div>
      <p>{project.description}</p>


    </div>
  )
}

export default ProjectCard;