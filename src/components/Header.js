import React from "react";
import { Link } from "react-router-dom";

function Header () {
    return (
        
    <header className="App-header ">

      <nav className=" navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">

          <Link className="navbar-brand text-white ms-5 fs-3 fw-semibold text-uppercase" to="/">john doe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" id="menuBurger"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-start ms-auto me-5 pe-5 fw-semibold fs-6 gap-4 py-2" onClick={() => document.querySelector('.navbar-collapse').classList.remove('show')}>
              <li className="nav-item">
                <Link className="nav-link active text-white text-uppercase " aria-current="page" to="/">accueuil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white text-uppercase" to="/Services">services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white text-uppercase" to="/Réalisations">réalisations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white text-uppercase" to='/Blog'>blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white text-uppercase" to='/Contact'>me contacter</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
      
    </header>
    );
};

export default Header;