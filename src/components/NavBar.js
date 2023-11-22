import { NavLink } from "react-router-dom";
import Home from "../pages/Home";

function Navbar(){
    return(
 <>
  <div className="navbar">
  <div className="logo-container">
        <span className="logo-text">House Hunt</span>
      </div>

      <div className="nav-links">
        <NavLink to="/home" className="nav-link" >
          Home
         
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-link"
        
        >
          Contact Us
        </NavLink>
      </div>
    </div>

   

 
</>
  )}



export default Navbar ;