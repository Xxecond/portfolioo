import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Components/home";
import Projects from "./Components/projects";
import About from "./Components/about";
import Footer from "./Components/footer";
import Mode from "./Components/mode";
import Preview from "./Components/preview";

function App() {
  return (
    <>
      <Mode />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Preview />} /> {/* Updated this line */}
        <Route path="/about-me" element={
          <>
            <About />
            <Footer /> 
          </>
        } />
      </Routes>
    </>
  );
}

export default App;