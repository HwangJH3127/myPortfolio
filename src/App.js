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
import { BallTriangle } from "react-loader-spinner";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    smooth();
  }, []);
  return (
    <>
      {loading ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#fff"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
        />
      ) : (
        <div className="main-content">
          <StarsCanvas />
          <Header />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <MoveTop />
        </div>
      )}
    </>
  );
}

export default App;
