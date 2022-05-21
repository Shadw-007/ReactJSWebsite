import React from "react"
import Typed from "react-typed";

function Header() {
  return (
   <div className="header-wrapper">
       <div className="main-info">
           <h1>Media Powerhouse</h1>
          <h3>Empowering Imagination</h3>
           <Typed 
            className="typed-text"
            strings={["Videography", "Photography", "Cinematography", "Graphic Design", "Animations"]}
            typeSpeed={40}
            backSpeed={60}
            loop
           />
           <a href="#" className="btn-main-offer">Hire Us</a>
       </div>
   </div>
  )
}

export default Header;