import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// css
import "./styles/index.css";

// import components
import AnnouncementBanner from "./components/AnnouncementBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import PopularCourses from "./components/PopularCourses";
import GetInTouch from "./components/GetInTouch";
import OurClassrooms from "./components/OurClassRooms";
import Footer from "./components/Footer";
import FloatingBanner from "./components/FloatingBanner";

import banner from "./assets/floating-banner.jpeg";

function App() {
  return (
    <div className="relative">
      {/* <AnnouncementBanner /> */}
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <PopularCourses />
      <OurClassrooms />
      <GetInTouch />
      <Footer />

      {/* Floating Ad Banner */}
      <FloatingBanner imageUrl={banner} />
    </div>
  );
}

export default App;
