import campus from './assets/campus.png';
import interview from './assets/interview.png';
import resumeAnalyzer from './assets/resumeAnalyzer.png';

const Projects = [
  {
    title: "AI-powered Interview Coach",
    description: "An AI-powered interview platform that generates personalized questions and provides instant feedback and performance analysis.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Groq API"],
    image: interview,
    link: `https://github.com/Nandini14056/AI-Interview-Coach`
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