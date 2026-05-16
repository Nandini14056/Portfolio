import '../App.css';
import FrontendSkillCard from './Frontend-Skill-card';
import BackendSkillCard from './Backend-skill-card';
import ToolSkillCard from './Tool-skill-card';
import { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section className="skills card fade-in" id="skills">
      <h2 className="skills-title">My Skills</h2>

      {/* CATEGORY TABS */}
      <div className="skill-tabs">
        <button className={activeTab === 'frontend' ? 'active' : 'disactive'} onClick={() => setActiveTab('frontend')}>Frontend</button>
        <button className={activeTab === 'backend' ? 'active' : 'disactive'} onClick={() => setActiveTab('backend')}>Backend</button>
        <button className={activeTab === 'tools' ? 'active' : 'disactive'} onClick={() => setActiveTab('tools')}>Tools</button>
      </div>

      {/* SKILLS GRID */}
      <div className="skills-grid">
        {activeTab === 'frontend' && <FrontendSkillCard />}
        {activeTab === 'backend' && <BackendSkillCard />}
        {activeTab === 'tools' && <ToolSkillCard />}
      </div>
    </section>
  )
}

export default Skills;