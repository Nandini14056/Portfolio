import "../App.css";
import ProjectCard from "./ProjectsCard";

const Projects = () => {
  return (
    <>
      <section className="projects-section card fade-in" id="projects">
        <h1>My Projects</h1>
        <div className="project-container">
          <ProjectCard />
        </div>
      </section>
    </>
  );
};

export default Projects;
