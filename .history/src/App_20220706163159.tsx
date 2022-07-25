import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import "./styles/styles.css";
import { Hero } from "./Components/Hero";
import { AboutMe } from "./Components/AboutMe";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <hr />
      <Footer />
    </Router>
  );
}

export default App;
