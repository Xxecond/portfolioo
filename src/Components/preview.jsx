import { useParams, Link } from "react-router-dom";
import blogger from "../assets/bbg.jpg";
import restaurant from "../assets/rrt.jpg";
import portfolio from "../assets/poo.jpg";

const Preview = () => {
  const { id } = useParams();
  
  // Project data
  const projects = {
    1: {
      title: "Blogger Application",
      image: blogger,
      description: "A user-friendly platform that allows you to create, read, update and delete blog posts.Built with React and Vite, with a clean and responsive UI.",
      liveLink: "https://blogger-red.vercel.app/",
    },
2: {
      title: "Restaurant Website",
      image: restaurant,
      description: "A user-friendly platform that allows customers to browse a menu, view detailed food items and place orders.Built with React and Vite, and ideal for showcasing restaurant dishes online.",
      liveLink:"https://restaurant-zeta-khaki.vercel.app/",
    },
    3: {
      title: "Portfolio Website",
      image: portfolio,
      description: "A showcase of my personal devlopment project, skills and contact info. users can view project and explore my tech stack.Built with React and vite, it's responsive and easy to navigate.",
      liveLink: "https://portfolio-peach-one-98.vercel.app/",
    },
    4: {
      title: "Coming Soon",
      image: "",
      description: "This project is currently in development. Check back later!😊",
      liveLink: "#",
      githubLink: "#"
    }
  };

  const project = projects[id] || projects[4]; // Default to "Coming Soon" if invalid ID

  return (
    <div className="preview-container">
      <h4>{project.title}</h4>
        {project.image && <img src={project.image} alt={project.title} className="preview-img" />}
        <p className="project-description">{project.description}</p>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
            View Live
            </a>
      <Link to="/projects" className="back-btn">
        BACK
      </Link>
    </div>
  );
};

export default Preview;