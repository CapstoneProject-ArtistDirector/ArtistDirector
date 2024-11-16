import React from "react";
import { useNavigate } from "react-router-dom";
import DirectorHomePage from "./DirectorHomePage";
import About from "./About"
import Service from "./Service";
import Contact from "./Contact";


export default function Home() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);

    window.scrollTo(0, 0);
  };

  return (
    <>
      <DirectorHomePage onNavigate={handleNavigation} />
      <About />
      <Service />
      <Contact />
    </>
  );
}
