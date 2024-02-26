import React from 'react';
import '../App.css';
import './Skills.css';

const Skill = ({ name, percentage, isCircular }) => {
  if (isCircular) {
    return (
      <div className='skill-bar'>
        <div className='skill-name'>
          <p>{name}</p>
          <p>{percentage}%</p>
        </div>
        <div className='circular-bar'>
          <div className='bar-inner-circle' style={{ transform: `rotate(${(percentage / 100) * 360}deg)` }}></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='skill-bar'>
        <div className='skill-name'>
          <p>{name}</p>
          <p>{percentage}%</p>
        </div>
        <div className='bar'>
          <div className='rectangular-bar' style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    );
  }
};

function Skills() {
  return (
    <div id="skills" className='skills'>
      <div className='skills-head'>MY SKILLS</div>
      <div className='skill-box'>
        <div className='left-container'>
          <div className='skill-box-head'>TECHNICAL SKILLS</div>
          <Skill name="HTML / CSS" percentage={90} />
          <Skill name="Javascript" percentage={80} />
          <Skill name="React.js" percentage={75} />
          <Skill name="Node.js / Express.js" percentage={70} />
          <Skill name="C / C++" percentage={80} />
          <Skill name="Python" percentage={75} />
          <Skill name="Django" percentage={65} />
          <Skill name="SQL" percentage={70} />
          {/* <Skill name="DSA" percentage={65} />
          <Skill name="Excel" percentage={60} /> */}
        </div>
        <div className='right-container'>
          <div className='skill-box-head'>PROFESSIONAL SKILLS</div>
          <div className='circle-box'>
            <div className='progress-circle'>
            <Skill name="Team Work" percentage={90} isCircular /></div>
            <div className='progress-circle'>
            <Skill name="Leadership" percentage={87} isCircular /></div>
            <div className='progress-circle'>
            <Skill name="Creativity" percentage={88} isCircular /></div>
            <div className='progress-circle'>
            <Skill name="Communication" percentage={85} isCircular /></div>
            <div className='progress-circle'>
            <Skill name="Problem Solving" percentage={88} isCircular /></div>
            <div className='progress-circle'>
            <Skill name="Project management" percentage={75} isCircular /></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
