import React from 'react';
import ExperienceCard from './ExperienceCard.js';
import experienceData from './ExperienceData.js';

function Experience() {


  return (
    <div className="projects">
       <h1>Less Abridged Resume</h1>
      <div className="horizontal">
        <div>
          {experienceData.map((gig, index) => {
            return (<ExperienceCard gig={gig} key={index}/>)
          })
          }
        </div>

        {/* experience cards */}


      </div>

      {/* <div className="horizontal">
      </div> */}




    </div>
  )
}

export default Experience;