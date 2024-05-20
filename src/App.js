import "../src/assets/css/style.css";
import Header from "./components/layout/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/layout//Footer/Footer";
import MoveTop from "./components/layout/MoveTop/MoveTop";
import StarsCanvas from "./components/layout/StarCanvas/StarCanvas";
import smooth from "./utils/smooth";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    smooth();
  }, []);
  return (
    <>
      <StarsCanvas />
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <MoveTop />
    </>
  );
}

export default App;
