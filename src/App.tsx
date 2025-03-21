import React from "react";
import {Link, Route, HashRouter as Router, Routes} from "react-router-dom";
import {Resume} from "./pages/resume/Resume.tsx";
import { Home } from "./pages/home/Home.tsx";
import { NotFound } from "./pages/notFound/NotFound.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/resume">
          <button className="btn">resume</button>
        </Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
