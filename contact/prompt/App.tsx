import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import LayoutHome from "./components/LayoutHome";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<HomePage />} />
     
          {/* Add more routes here as needed */}
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<AboutMePage />} />
          {/* Add more routes here as needed */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
