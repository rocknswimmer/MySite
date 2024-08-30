import React from 'react';

function About({test}) {


  return (
    <div className="about">
      <h1>Andrew Simmons</h1>
      <img  crossOrigin="anonymous" src="https://i.imgur.com/9YmMjrH.jpg" className="mug"/>
      <h3>Full Stack Engineer</h3>
      <p className="summary">I liken coding to cooking. There are a lot of recipes out there and the real skill in cooking comes from trying out the recipes and blending the best parts to make your favorite dishes even better. I have a solid foundation in coding and can take my solutions and make them work for your needs. Look through this menu to see what I can bring to the table.</p>
      {/* {console.log(localStorage.viewer)} */}

      {/* <h3>Learned Tech Languages</h3> */}

    </div>
  )
}

export default About;