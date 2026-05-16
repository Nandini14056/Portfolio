// useFadeIn.js
import { useEffect } from "react";

const useFadeIn = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useFadeIn;