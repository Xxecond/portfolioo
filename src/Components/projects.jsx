import React from "react";
import {Link} from "react-router-dom";
const Projects =()=>{
    return(
        <>
        <div className="section" id="projects">
            <p className="section-title">MY PROJECTS</p>
            <div id="project-container" >
                <div className="project-box">DRAKE</div>
                <div className="project-box">DRAKE</div>
                <div className="project-box">DRAKE</div>
                <div className="project-box">DRAKE</div>
                <div className="project-box">DRAKE</div>
                <div className="project-box">DRAKE</div>
                <div className="project-box">DRAKE</div>
                <div className="project-box">DRAKE</div>
                <div className="project-box">DRAKE</div>
                </div>
                <button><Link to="/">HOME</Link></button>
                </div>
                </>
    )
}
export default Projects;