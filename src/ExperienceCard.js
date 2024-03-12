import React from 'react';
import Accordion from "./accordian.js"

function ExperienceCard({gig}) {


  return (
    <div className="project">
      <h3>{git.title}</h3>
      {/* company name or title first? */}
      <h4>{gig.company}</h4>

      <p>Experience Gained: {gig.exp}</p>
      <p>Skills Learned: {gig.skills}</p>


      <Accordion title={"More Details"} content={<p className="newlines" >{gig.details}</p>} />


    </div>
  )
}

export default ExperienceCard;