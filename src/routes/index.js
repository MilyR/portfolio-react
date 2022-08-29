import { Routes, Route } from "react-router-dom";

import Home from '../views/home';
import Contact from "../views/contact";
import Projects from "../views/projects";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default Router;