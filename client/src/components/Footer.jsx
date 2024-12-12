import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center mx-5 px-5 fixed-bottom">
        <p className="col-md-4 mb-0 text-body-secondary">&copy; 2024 Alexandre St-Aubin</p>
        <ul className="nav col-md-4 justify-content-end align-items-center">
          <li className="nav-item d-flex align-items-center">
            <a href="https://alexandrest-aubinphoto.pixieset.com" className="nav-link px-2 text-body-secondary">
              <img 
                src="https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_64/v1732132296/Pixieset-removebg-preview_enqrff.png" 
                alt="Pixieset Logo" 
                style={{ width: "32px", height: "32px" }}
              />
            </a>
          </li>
          <li className="nav-item d-flex align-items-center">
            <a href="https://www.instagram.com/alex_staubin/" className="nav-link px-2 text-body-secondary">
              <img 
                src="https://img.icons8.com/?size=50&id=32292&format=png&color=000000" 
                alt="Instagram Logo" 
                style={{ width: "32px", height: "32px" }}
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}


export default Footer;
