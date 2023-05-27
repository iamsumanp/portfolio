import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar } from "./Components/layout/NavBar";
import "./styles/styles.css";
import { Hero } from "./Components/pages/Hero";
import { AboutMe } from "./Components/pages/AboutMe";
import { Projects } from "./Components/pages/Projects";
import { Contact } from "./Components/pages/Contact";
import { Footer } from "./Components/layout/Footer";
import Blogs from "./Components/pages/Blogs";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutMe />
              <Projects />
              <Contact />
              <hr />
            </>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
