import { useState, useEffect } from "react";
import Preloader from "@components/ui/Pre";
import Navbar from "@components/Navbar";
import Home from "@pages/Home";
import About from "@pages/About";
import Projects from "@pages/Projects";
import Footer from "@components/Footer";
import Resume from "@pages/Resume";

import {
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import ScrollToTop from "./components/ui/ScrollToTop";
import Particle from "./components/ui/Particle";
import Experience from "./pages/Experience";
import { AnimatePresence } from "framer-motion";
import CursorFollower from "./components/ui/CursorFollower";

function App() {
  const [load, upadateLoad] = useState(true);
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <CursorFollower/>
      <Particle/>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/hire" element={<Navigate to="/"/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </div>  
  );
}

export default App;
