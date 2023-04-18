import React from 'react';
import '../../CSS/About.css';
import Footer from '../Footer'
import luckyImage from '../../Assest/lucky.jpg';
import RitikaImage from '../../Assest/ritika.jpg';


const members = [
  {
    name: 'Piyush Upadhyay',
    role: 'Front End Developer',
    image: 'https://via.placeholder.com/150',
    bio: 'I am Piyush , I worked as a Front End developer in this project'
  },
  {
    name: 'Lucky Verma',
    role: 'Back End Developer',
    image: 'https://photos.app.goo.gl/yYPWuaP3wS88mn7N7',
    bio:   'I am Lucky , I worked as a Back End developer in this project'
  },
  {
    name: 'Ritika Singh',
    role: 'Front End Developer',
    image: <img src={RitikaImage} />,
    bio: "I am Ritika , I worked as a Front End developer in this project  "
  }
];

function About() {
  return (
    <>
    <div className="project">
      
    <img src='https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'alt="project" />
      <div className="member-blocks">
        {members.map(member => (
          <div key={member.name} className="member-block">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>

            
            <h3>{member.name}</h3>
            <h5>{member.role}</h5>
            <p>{member.bio}</p>

            
          </div>
          
          ))}
      </div>
      <h2>About this Project</h2>
      <p>This project was created using React JS and is designed to showcase the team's skills and expertise in web development. We hope you enjoy exploring our site and learning more about us.</p>
    
    </div>
    <Footer />
          </>
  );
}

export default About;