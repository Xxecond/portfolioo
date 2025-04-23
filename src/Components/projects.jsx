import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    const projects = [
      { id: 1, name: "BLOGGER-APPLICATION", className: "Stop", text: "TAP TO VIEW" },
      { id: 2, name: "RESTAURANT SITE", className: "Sright", text: "TAP TO VIEW" },
      { id: 3, name: "PORTFOLIO", className: "Sleft", text: "TAP TO VIEW" },
      { id: 4, name: "COMING SOON", className: "Sbottom", text: "TAP TO VIEW" }
    ];
  
    return (
      <>
        <div className="section" id="projects">
          <p className="projects">MY PROJECTS</p>
          <div id="project-container">
            {projects.map((project) => (
              <Link to={`/project/${project.id}`} key={project.id}>
                <div className={`project-box ${project.className}`}>
                  <div className="project-text-container">
                    <p className="tap-text">{project.text}</p>
                    <p className="project-name">{project.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button className="btn"><Link to="/">HOME</Link></button>
        </div>
      </>
    );
  };

export default Projects;