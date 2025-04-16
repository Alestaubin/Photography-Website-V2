import React from "react";
import "./About.css"; // Add styling for layout and typography

function About() {
  return (
    <div className="about-page container py-5">
      <div className="row align-items-start">
            <div className="col-md-7 mb-4 mb-md-0 pt-5">
              <p>
                I am a Montreal-based photographer specializing in sports, events, and nightlife. 
                With a background in Mathematics from McGill University and an upcoming Master's in Computer Science, photography is my creative outlet and a growing part of my professional life.
                What started as a hobby quickly evolved into something more serious. I've since worked with a range of clients, from student associations to local businesses, capturing moments that matter.
                </p>
              <p>
                Notable clients and assignments include:
              </p>
              <ul>
                <li>
                  <a href="https://alexstaubinphoto.com/SSMU_GGG" target="_blank" rel="noopener noreferrer">
                    Student Society of McGill University
                  </a>
                </li>
                <li>
                    <a href="https://alexstaubinphoto.com/ESG_HOMMAGE" target="_blank" rel="noopener noreferrer">
                    Association étudiante à l'École des sciences de la Gestion de l'UQAM
                    </a>
                </li>
                <li>
                    <a href="https://alexstaubinphoto.com/PERT2025" target="_blank" rel="noopener noreferrer">
                    Provincial Employment Roundtable (PERT)
                    </a>
                </li>       
                <li>
                    <a href="https://alexstaubinphoto.com/Halloween_yoko_2024" target="_blank" rel="noopener noreferrer">
                    The Commerce and Administration Students' Association (CASA) at Concordia
                    </a>
                </li>  
                <li>
                    <a href="https://alexstaubinphoto.com/UDES_MED_24" target="_blank" rel="noopener noreferrer">
                    Faculté de Médecine de l'Université Sherbrooke
                    </a>
                </li> 
                </ul>

              {/* Contact Note */}
          <p className="mt-4">
            <em>For bookings, collaborations, or inquiries, feel free to reach out at <strong>alexstaubinphoto@gmail.com</strong>.</em>
          </p>
        </div>

        {/* <div className="col-md-5 text-center pt-5">
          <img
            src="https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744827410/sqbicy5txmcjfuxupv7d.jpg" // Replace with your actual image path
            alt="Portrait of Alexandre St-Aubin"
            className="img-fluid"
          />
        </div> */}
        </div>
    </div>
  );
}

export default About;