import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center mx-5 px-5 fixed-bottom">
        <p className="col-md-4 mb-0 text-body-secondary">&copy; 2024 Alexandre St-Aubin</p>
        <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><a href="https://www.instagram.com/alex_staubin/" className="nav-link px-2 text-body-secondary"><img src="https://img.icons8.com/?size=50&id=32292&format=png&color=000000" alt="Instagram Logo"></img></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
