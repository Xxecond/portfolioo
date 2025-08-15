import Pic from "../assets/PIC.jpg";
import Cv from "../assets/CV.pdf";
const Home = () => {
  return (
    <div className="section" id="home">
      <div id="first-box" >
        <div className="cont">
          <img src={Pic} alt="Andrews profile pic" id="profile-pic" />

          <div id="text-content">
            <h1>WELCOME!!</h1>
          </div>
        </div>
        <h2 className="name">i'm Andrews,<br /><p className="design">a web developer.</p></h2>
      </div>
       <a href={Cv} target="_blank" class="resume-btn">View Resume</a> 
    </div>
  )
}

export default Home;