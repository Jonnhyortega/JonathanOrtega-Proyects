import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";
import NoPage from "../pages/NoPage/NoPage";
export const AppRoutes = () => {
  return (
    <ReactDomRoutes>
      <Route index path="/" element={<Home />} />
      <Route index path="contact" element={<Contact />} />
      <Route index path="projects" element={<Projects />} />
      <Route index path="*" element={<NoPage />} />
    </ReactDomRoutes>
  );
};

export default AppRoutes;
