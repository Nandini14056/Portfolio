import '../App.css';
import node from '../assets/nodejs.svg';
import express from '../assets/express.webp';
import next from '../assets/next.png';
import mongodb from '../assets/mongodb.png';

const BackendSkillCard = () => {
  return (
    <div className="skill-cards">
      <div className="skill-card">
        <img src={node} alt="react" />
        <h3>Node.js</h3>
        <div className="progress">
          <div className="progress-fill" style={{ width: "95%" }}></div>
        </div>
      </div>
      <div className="skill-card">
        <img src={express} alt="react" />
        <h3>Express</h3>
        <div className="progress">
          <div className="progress-fill" style={{ width: "90%" }}></div>
        </div>
      </div>
      <div className="skill-card">
        <img src={next} alt="react" />
        <h3>Next.js</h3>
        <div className="progress">
          <div className="progress-fill" style={{ width: "50%" }}></div>
        </div>
      </div>
      <div className="skill-card">
        <img src={mongodb} alt="" />
        <h3>MongoDB</h3>
        <div className="progress">
          <div className="progress-fill" style={{ width: "85%" }}></div>
        </div>
      </div>
    </div>
  )
}

export default BackendSkillCard;