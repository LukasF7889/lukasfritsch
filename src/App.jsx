//Functionality
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

//Layouts&Pages
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ReferenceModal from "./components/ReferenceModal";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Imprint from "./pages/Imprint";

const App = () => {
  // Work with location to ensure modals have an URL route
  const location = useLocation();
  const state = location.state || {};
  const backgroundLocation = state.backgroundLocation || null;

  return (
    <>
      {/* Use backgroundLocation if available, else use location */}
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="imprint" element={<Imprint />} />
          <Route path="project/:id" element={<ReferenceModal />} />
        </Route>
      </Routes>

      {backgroundLocation && (
        <Routes>
          {/* Render modal outside of normal Route */}
          <Route path="project/:id" element={<ReferenceModal />} />
        </Routes>
      )}
    </>
  );
};

export default App;
