import "../App.css";
import Resume from "../assets/Nandini_Raulji_Resume.pdf";
import Avtar from "../assets/avatar.png";

const Home = () => {
  return (
    <section className="home card fade-in" id="home">
      <div className="info">
        <p id="intro">Hi, I'm Nandini Raulji</p>
        <p id="id">Full Stack Developer</p>
        <p>
          I love building modern web experiences that feel fast, clean, and
          intuitive.
        </p>
        <button className="btn-primary">
          <a href="#projects">View Projects</a>
        </button>
        <a href={Resume} download="Nandini_Raulji_Resume.pdf">
          <button className="btn-outline">Download Resume</button>
        </a>
      </div>
      <div className="image-conatiner">
        <div className="gradient-circle"></div>
        <img src={Avtar} alt="avatar" className="avatar" />
      </div>
    </section>
  );
};

export default Home;
