import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import Projects from "./components/Projects";
import TechSkills from "./components/TechSkills";

function App() {
  return (
    <>
      <About />
      <Projects />
      <TechSkills />
      <Experience />
      <Interests />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
