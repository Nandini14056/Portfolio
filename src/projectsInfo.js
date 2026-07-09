import weather from './assets/wether.png';
import campus from './assets/campus.png';
import interviewCoach from './assets/interviewCoach.png'

const Projects = [
  {
    title: "Weather app",
    description: "A responsive weather application that displays real-time weather data using a public API.",
    tech: "HTML, CSS and JS",
    image: weather,
    link: `https://github.com/Nandini14056/weather-forecast-app`
  },
  {
    title: "CampusEats",
    description: "A student-focused food ordering platform that enables seamless meal browsing, ordering, and delivery within a college campus.",
    tech: "React.js, Node.js, Express.js, MongoDB",
    image: campus,
    link: `https://github.com/Nandini14056/CampusEats`
  },
  {
  title: "AI Interview Coach",
  description: "A full-stack AI interview platform that generates role-specific mock interviews, analyzes user responses, provides AI-powered feedback, tracks interview history, and helps candidates prepare for real-world technical and HR interviews.",
  tech: "React.js, Node.js, Express.js, MongoDB, Groq API, JWT, Multer",
  image: interviewCoach,
  link: `https://github.com/Nandini14056/AI-Interview-Coach`
}
];

export default Projects;