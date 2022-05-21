import React from "react"
// import React, {useState, useEffect} from "react";
import logo from "../Logo1.png"
// import { Link} from "react-router-dom";
// REACT FONTAWESOME IMPORT

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  
  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">

  <a className="navbar-brand" href="#">{/*<img className="logo" src={logo} alt="logo"/>*/}<h1>Monet Hive</h1></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
  </button>

  <div className="collapse_navbar_collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home {/*<span className="sr-only">(current)</span>*/}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="About">About Us</a> 
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Service">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><button className="signup_btn">Sign Up</button></a>
      </li>
    </ul>
  </div>
</div>
</nav>
  )
}

export default Navbar