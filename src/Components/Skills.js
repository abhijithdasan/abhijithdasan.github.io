import React, { useEffect } from 'react';
import '../App.css';
import './Skills.css';

function Skills() {
  useEffect(() => {
    const rating = document.getElementsByClassName('rating')[0];

    // Increase the number of blocks to reduce the gap
    for (var i = 0; i < 100; i++) {
      rating.insertAdjacentHTML('beforeend', "<div class='block'></div>");
    }

    const blocks = document.querySelectorAll('.block');
    const totalBlocks = blocks.length;

    for (var j = 0; j < totalBlocks; j++) {
      const rotationAngle = (360 / totalBlocks) * j;
      blocks[j].style.transform = "rotate(" + rotationAngle.toFixed(2) + "deg)";
      blocks[j].style.animationDelay = `${j / 40}s`;
    }

    const counter = document.querySelector('.counter');
    counter.innerText = 0;

    const target = +counter.getAttribute('data-target');

    const NumberCounter = () => {
      const value = +counter.innerText;
      if (value < target) {
        counter.innerText = Math.ceil(value + 1);
        setTimeout(() => {
          NumberCounter();
        }, 25);
      }
    };

    NumberCounter();
  }, []);

  return (
    <div className='skills'>
      <div className='skills-head'>MY SKILLS</div>
      <div className='skill-box'>
        <div className='skill-lbox'>
          <div className='skill-box-head'>TECHNICAL SKILLS</div>

          <div className='skill-bar'>
            <div className='skill-name'>
              <p>HTML</p>
              <p>85%</p>
            </div>
            <div className='bar'>
              <div className='obar'>
                <div className='bar-1'></div>
              </div>
            </div>
          </div>
          <div className='skill-bar'>
            <div className='skill-name'>
              <p>CSS</p>
              <p>88%</p>
            </div>
            <div className='bar'>
              <div className='obar'>
                <div className='bar-2'></div>
              </div>
            </div>
          </div>

          {/* Repeat similar blocks for other technical skills */}

        </div>

        <div className='skill-rbox'>
          <div className='skill-box-head'>PROFESSIONAL SKILLS</div>

          <div className='skill-circle'>
            <div className='rating'>    
              <h2 className="circle-name"><span className='counter' data-target='90'>90</span><sup>%</sup></h2>
              <h2 className="circle-name">Team Work</h2>
              <div className="block"></div>
            </div>
          </div>

          {/* Repeat similar blocks for other professional skills */}
          <div className='skill-circle'>
            <div className='rating'>    
              <h2 className="circle-name"><span className='counter' data-target='60'>60</span><sup>%</sup></h2>
              <h2 className="circle-name">Leadership</h2>
              <div className="block"></div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Skills;
