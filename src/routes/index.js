import { Routes, Route } from "react-router-dom";

import Home from '../views/home';
import Contact from "../views/contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;