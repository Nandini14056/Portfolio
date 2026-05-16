import '../App.css';
import git from '../assets/git.png';
import github from '../assets/github.png';

const ToolSkillCard = () => {
  return (
    <div className="skill-cards">

      <div className="skill-card">
        <img src={git} alt="react" />
        <h3>Git</h3>
        <div className="progress">
          <div className="progress-fill" style={{ width: "95%" }}></div>
        </div>
      </div>
      <div className="skill-card">
        <img src={github} alt="react" />
        <h3>Github</h3>
        <div className="progress">
          <div className="progress-fill" style={{ width: "90%" }}></div>
        </div>
      </div>
    </div>
  )
}

export default ToolSkillCard;