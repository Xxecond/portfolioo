import React from "react";
import {Link} from "react-router-dom";
import blogger from "../assets/block.jpg";
import restaurant from "../assets/tiger.jpg";
import portfolio from "../assets/black.jpg";
const Projects =()=>{
    return(
        <>
        <div className="section" id="projects">
            <p className="projects">MY PROJECTS</p>
            <div id="project-container" >
            <a href="https://xxecond.github.io/blogger"  target="_blank" rel="noopener noreferrer"> <div className="project-box Stop"><img src={blogger} className="image" alt="BLOGGER-APPLICATION" /></div></a>
            <a href="https://xxecond.github.io/restaurant/" target="_blank" rel="noopener noreferrer"><div className="project-box Sright"><img src={restaurant} className="image" alt="RESTAURANT SITE"/></div></a>
            <a href="https://xxecond.github.io/portfolio/" target="_blank" rel="noopener noreferrer"><div className="project-box Sleft"><img src={portfolio} className="image" alt="PORTFOLIO"/></div></a>
            <a href="https://xecond.github.io/soon" target="_blank" rel="noopener noreferrer"><div className="project-box Sbottom"><img src="" className="image" alt="SOON"/></div></a>
                {/*
                 <a href="https://xecond.github.io/soon" target="_blank" rel="noopener noreferrer"><div className="project-box Sleft"><img src="" className="image" alt="SOON"/></div></a>
                 <a href="https://xecond.github.io/soon" target="_blank" rel="noopener noreferrer"><div className="project-box Sleft"><img src="" className="image" alt="SOON"/></div></a>
                 <a href="https://xecond.github.io/soon" target="_blank" rel="noopener noreferrer"><div className="project-box Sleft"><img src="" className="image" alt="SOON"/></div></a>
                 <a href="https://xecond.github.io/soon" target="_blank" rel="noopener noreferrer"><div className="project-box Sleft"><img src=""  className="image" alt="SOON"/></div></a>
                 <a href="https://xecond.github.io/soon" target="_blank" rel="noopener noreferrer"><div className="project-box Sleft"><img src="" className="image" alt="SOON"/></div></a>
                */}
                </div>
                <button className="btn"><Link to="/">HOME</Link></button>
                </div>
                </>
    )
}
export default Projects;