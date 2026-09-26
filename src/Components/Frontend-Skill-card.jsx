import "../App.css";
import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.webp";

const FrontendSkillCard = () => {
  return (
    <div className="skill-cards">
      <div className="skill-card">
        <img src={html} alt="" />
        <h3>HTML</h3>
        <div className="progress">
          <div className="progress-fill" style={{ width: "98%" }}></div>
        </div>
      </div>
      <div className="skill-card">
        <img src={css} alt="" />
        <h3>CSS</h3>
        <div className="progress">
          <div className="progress-fill" style={{ width: "95%" }}></div>
        </div>
      </div>
      <div className="skill-card">
        <img src={js} alt="" />
        <h3>JavaScript</h3>
        <div className="progress">
          <div className="progress-fill" style={{ width: "92%" }}></div>
        </div>
      </div>
      <div className="skill-card">
        <img src={react} alt="" />
        <h3>React.js</h3>
        <div className="progress">
          <div className="progress-fill" style={{ width: "90%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default FrontendSkillCard;
