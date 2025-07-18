import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  // Hide navbar on imprint and privacy
  const location = useLocation();
  const hideNavbarOnRoutes = ["/Privacy", "/Imprint"];
  const shouldHideNavbar = hideNavbarOnRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <Outlet />
      {!shouldHideNavbar && <Footer />}
    </div>
  );
};

export default MainLayout;
