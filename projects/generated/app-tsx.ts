import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import LayoutHome from "./components/LayoutHome";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectContainerPage from "./pages/ProjectContainerPage";

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
          <Route path="projects" element={<ProjectListPage />} />
          <Route path="project/:id" element={<ProjectContainerPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
