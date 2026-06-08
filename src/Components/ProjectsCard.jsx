import '../App.css';
import Projects from '../projectsInfo.js'

const ProjectCard = () => {
  return (
    <>
      {Projects.map((project, index) => (
        <div key={index} className='project-card'>
          <img src={project.image} alt="Weather App" />
          <div className="project-overlay">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tag">React</span>
            <span className="tag">API</span>
            <div className="project-buttons">
              <button className="btn-primary"><a href={project.link} >GitHub</a></button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectCard;