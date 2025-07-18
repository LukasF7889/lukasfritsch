//Functionality
import { useState } from "react";
import { Routes, Route } from "react-router";

//Layouts&Pages
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Imprint from "./pages/Imprint";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/imprint" element={<Imprint />} />
      </Route>
    </Routes>
  );
};

export default App;
