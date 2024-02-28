import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
// import { SelectedPage } from './types';
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        // setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <Navbar isTopOfPage={isTopOfPage} />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
