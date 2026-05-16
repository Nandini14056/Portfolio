import '../App.css';
import Avtar from '../assets/avatar.png'

const About = () => {
  return (
    <section className="about card fade-in" id="about">
  <div className="about-container">

    {/* LEFT SIDE */}
    <div className="about-img">
      <img src={Avtar} alt="about" />
    </div>

    {/* RIGHT SIDE */}
    <div className="about-content">
      <h2>About Me</h2>

      <p>
        I am a B.Tech Information Technology student passionate about building
        modern, responsive, and user-friendly web applications.
      </p>

      <p>
        I focus on creating clean UI designs and continuously improving my skills
        by working on real-world projects.
      </p>

      {/* STATS */}
      <div className="about-stats">
        <div className="stat">
          <h3>MERN</h3>
          <p>Specialization</p>
        </div>
        <div className="stat">
          <h3>Frontend</h3>
          <p>Specialization</p>
        </div>
        <div className="stat">
          <h3>Fast</h3>
          <p>Learner</p>
        </div>
      </div>

    </div>

  </div>
</section>
  )
}

export default About;