import weather from './assets/wether.png';
import campus from './assets/campus.png';
import resumeAnalyzer from './assets/resumeAnalyzer.png';

const Projects = [
  {
    title: "Weather app",
    description: "A responsive weather application that displays real-time weather data using a public API.",
    tech: ["HTML", "CSS" , "JS"],
    image: weather,
    link: `https://github.com/Nandini14056/weather-forecast-app`
  },
  {
    title: "CampusEats",
    description: "A student-focused food ordering platform that enables seamless meal browsing, ordering, and delivery within a college campus.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: campus,
    link: `https://github.com/Nandini14056/CampusEats`
  },
  {
  title: "AI Powered Resume Analyzer",
  description: "Built an AI-powered resume analyzer that evaluates resumes and provides ATS-based feedback.",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Groq API", "JWT"],
  image: resumeAnalyzer,
  link: `https://github.com/Nandini14056/AI-Resume-Analyzer`
}
];

export default Projects;