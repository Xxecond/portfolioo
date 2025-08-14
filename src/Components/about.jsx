import { Link } from "react-router-dom";
const About = () => {
    return (
        <>
            <div className="sectionz" id="about-me">
                <div id="space" >
                    <p className="p-1">LET'S WORK TOGETHER.</p>
                    <p className="p-2">GET IN TOUCH:</p>
                    <ul id="media">
                        <li><a href="https://wa.me/233531467213" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a></li>
                        <li><a href="mailto:andrewsampadu9@gmail.com" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/andrews-ampadu-a2672b323" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                        <li>
                            <a href="https://www.facebook.com/Xecond.Xhooter" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        </li>
                    </ul>
                    <button><Link to="/">HOME</Link></button>
                </div>
            </div>
        </>
    )
}

export default About;