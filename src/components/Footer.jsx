import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(<div className="footer-container">
            <p>Copyright &copy; 2025 Oumer Jemal. All rights reserved.</p><br />
            <div className="contact-links">
                <Link>Linkedin  </Link>
                <Link>GitHub  </Link>
                <Link>Email</Link>
                </div>
           </div>)
}

export default Footer