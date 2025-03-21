import React from "react";
import {Link, Route, HashRouter as Router, Routes} from "react-router-dom";
import {Resume} from "./pages/resume/Resume.tsx";
import { Home } from "./pages/home/Home.tsx";
import { NotFound } from "./pages/notFound/NotFound.tsx";
import { CoverLetter } from "./pages/coverletter/CoverLetter.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow">
        <div className="flex space-x-4">
          <Link
            to="/"
            className="px-3 py-2 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/resume"
            className="px-3 py-2 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Resume
          </Link>
          <Link
            to="/coverletter"
            className="px-3 py-2 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Cover letter
          </Link>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/coverletter" element={<CoverLetter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
