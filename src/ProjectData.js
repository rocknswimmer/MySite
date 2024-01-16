const projectData = [
  {title: "Virtual Relay", photo: "url/permanatelocation", link: "deployedurl", description: "App used for a Virtual Relay", details: "\tThis app was built for the second virtual relay I organized. Since I developed my full stack skills between relays, I wanted to give my runners a better experience this time. A relational database, like the PostgreSQL one I used, functions similarly to Google Sheets, so I was able to translate most of the work from last time into this app.\n\n \tI knew from the first relay I would need a convenient way to update and adjust the start times and leg information. I built a promise chain to update the leg estimates whenever the start time was adjusted. This promise chain maps through the legs takes the estimated start time, pace, and distance, passes the estimated end time to the next leg for its calculation, and posts the results to the database. I also had the leg information saved in a seed file to quickly update relay information changes and serve as a backup if needed.\n\n \tOnce the functionality was done I was able to add a bit of flare. I had a GIF of a running stick figure following the progress bar throughout the relay. Once the first leg was complete, and every 25% thereafter, an array of team shirts from our in-person relays would display a different shirt depending on how much of the relay was complete. My runners could also now safely mark their legs complete without edit access to potentially mess up the Google Sheet. After some user testing, to improve their experience, I added refreshes after certain events so that users would know a change happened. ", type: "solo"},
  {title: "Ecommerce Front and Back End Updates", photo: "url/permanatelocation", link: "deployedurl", description: "Simulated updates to an Ecommerce sites front end and the back end/API", details: "longer description for accordian", type: "team"},
  {title: "Generic Job Board", photo: "url/permanatelocation", link: "deployedurl", description: "Built a Job Board that had features missing from the ones I have been using while applying", details: "longer description for accordian", type: "solo"},
  {title: "Birder Connect", photo: "url/permanatelocation", link: "deployedurl", description: "Simulate a small team build for a client", details: "longer description for accordian", type: "team"},
  {title: "Modals and Accordians", photo: "url/permanatelocation", link: "deployedurl", description: "Provide a plug and play resource that explains what modals and accordians are", details: "longer description for accordian, how they work, and how to use them", type: "edu"},
]

export default projectData;

