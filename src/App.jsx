//Functionality
import { useState } from "react";
import { Routes, Route } from "react-router";

//Layouts&Pages
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/project/:id" element={<Project />} />
      </Route>
    </Routes>
  );
};

export default App;
