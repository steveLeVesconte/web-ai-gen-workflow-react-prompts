import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import LayoutHome from "./components/LayoutHome";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<AboutMePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;