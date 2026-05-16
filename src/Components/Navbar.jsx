import { useEffect, useState } from "react";
import useFadeIn from "../FadeEffect";
import '../App.css'

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFadeIn();

  return (
    <div className="navbar">
      <a href="#home" className={active === "home" ? "active" : ""}>Home</a>
      <a href="#about" className={active === "about" ? "active" : ""}>About</a>
      <a href="#skills" className={active === "skills" ? "active" : ""}>Skills</a>
      <a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a>
    </div>
  );
};

export default Navbar;