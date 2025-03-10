import React, { lazy, Suspense, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";

// Lazy-loaded components
const Catalogue = lazy(() => import("../../Components/Catalogue/catalogue"));
const Home = lazy(() => import("../../pages/Home/home"));
const Services = lazy(() => import("../../pages/Services/services"));
const About = lazy(() => import("../../pages/About/about"));
const OurApproach = lazy(() => import("../../pages/Approach/approach"));
const Products = lazy(() => import("../../pages/Products/products"));
const Whatsapp = lazy(() => import("../../pages/Whatsapp/whatsapp"));
const Review = lazy(() => import("../../pages/Reviews/reviews"));
const Contact = lazy(() => import("../../pages/Contact/contact"));

// Loading Spinner Component
const LoadingSpinner = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  }}>
    <div style={{
      width: "50px",
      height: "50px",
      border: "5px solid rgba(0, 0, 0, 0.1)",
      borderTop: "5px solid #3498db",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    }}></div>
    <style>{`
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

function Mainpage() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollWithOffset = (el) => {
    const navbarHeight = document.querySelector(".navbar").offsetHeight; // Get navbar height
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar
        onScrollToAbout={() => scrollWithOffset(aboutRef.current)}
        onScrollToContact={() => scrollWithOffset(contactRef.current)}
      />
      <Catalogue />
      <Home />
      <Services />
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <OurApproach />
      <Products />
      <Whatsapp />
      <Review />
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </Suspense>
  </div>
  );
}

export default Mainpage;
