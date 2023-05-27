import { Route, BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./Components/layout/NavBar";
import "./styles/styles.css";
import { Hero } from "./Components/pages/Hero";
import { AboutMe } from "./Components/pages/AboutMe";
import { Projects } from "./Components/pages/Projects";
import { Contact } from "./Components/pages/Contact";
import { Footer } from "./Components/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Route path="/blog" element/> */}

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
