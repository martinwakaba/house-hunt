import { Link } from "react-router-dom"
export default function Footer(){

    return(
        <>
          <footer className="footer">
          <Link to="/contact" className="contact-us-button">
          Contact Us
        </Link>
        <p>&copy; 2023 House Hunt. All rights reserved.</p>
      </footer>
        
        
        </>
    )
    
}