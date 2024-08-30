import React from 'react';
import {useState} from 'react';
// import './accordian.css';

const Accordion = ({title, content, track, project}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => {setIsActive(!isActive); if(!isActive){track("details",`${project.title}`)}}}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </React.Fragment>
  );
};

export default Accordion;