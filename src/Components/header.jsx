import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (<header>
        <div className="section" id="home"> 
            <ul id="top">
                <h4>PORTFOLIO</h4>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/projects">PROJECTS</Link></li>
                <li><Link to="/about-me" >CONTACT ME</Link></li>
            </ul>
        </div>
    </header>
    )
}

export default Header;