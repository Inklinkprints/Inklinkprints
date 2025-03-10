import React, { lazy} from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./servicespage.css";

// Lazy-loaded components
const Navbar =lazy(() => import("../../Components/Navbar/navbar"));
const Sidebar =lazy(() => import("../../Components/Sidebar-services/sidebarservices"));
const Footer = lazy(() => import("../../Components/Footer/footer"));
const Design = lazy(() => import("../../pages/Design/design"));
const Digitalprint = lazy(() => import("../../pages/DigitalPrint/print"));
const Signage = lazy(() => import("../../pages/Signage/signage"));
const Gift = lazy(() => import("../../pages/Gifts/gift"));


export default function Servicessubpage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on every load
  }, []);

  return (
    <div className="servicessubpage-page">
      {/* Navbar */}
      <div className="servicessubpage-navbar">
        <Navbar fixedBackground={true} />
      </div>
     
      {/* Sidebar */}
      <div className="servicessubpage-container">
      <div className="servicessubpage-sidebar">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="servicessubpage-content">
        <Routes>
          <Route path="design" element={<Design />} />
          <Route path="digitalprint" element={<Digitalprint />} />
          <Route path="signage" element={<Signage />} />
          <Route path="gift" element={<Gift />} />
        </Routes>
       
      </div>
      </div>


      {/* Footer */}
      <div className="servicessubpage-footer">
        <Footer />
      </div>
     
    </div>
  );
}
