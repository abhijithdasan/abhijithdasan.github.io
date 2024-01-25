/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid
import React, { useState, useEffect } from 'react';
import '../App.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const homeSection = document.getElementById('home');
    const educationSection = document.getElementById('education');
    const skillsSection = document.getElementById('skills');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');
    // Add more sections as needed

    const scrollPosition = window.scrollY;

    if (
      homeSection &&
      scrollPosition >= homeSection.offsetTop &&
      scrollPosition < homeSection.offsetTop + homeSection.offsetHeight
    ) {
      setActiveSection('home');
    } else if (
      educationSection &&
      scrollPosition >= educationSection.offsetTop &&
      scrollPosition <
        educationSection.offsetTop + educationSection.offsetHeight
    ) {
      setActiveSection('education');
    } else if (
      skillsSection &&
      scrollPosition >= skillsSection.offsetTop &&
      scrollPosition <
        skillsSection.offsetTop + skillsSection.offsetHeight
    ) {
      setActiveSection('skills');
    } else if (
      projectsSection &&
      scrollPosition >= projectsSection.offsetTop &&
      scrollPosition <
        projectsSection.offsetTop + projectsSection.offsetHeight
    ) {
      setActiveSection('projects');
    } else if (
      contactSection &&
      scrollPosition >= contactSection.offsetTop &&
      scrollPosition <
        contactSection.offsetTop + contactSection.offsetHeight
    ) {
      setActiveSection('contact');
    }
    // Add more conditions for other sections
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = -20; // Adjust this value to control the gap
      const scrollToPosition = section.offsetTop + offset;

      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h2 className="nav-name">
          <a
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            href="#"
            onClick={() => scrollToSection('home')}
          >
            <span className="word-spn">A</span>bhijith.
          </a>
        </h2>
      </div>
      <div>
        <ul className="nav-item">
          <li
            className={`nav-link a-link nav-light ${
              activeSection === 'home' ? 'active' : ''
            }`}
            onClick={() => scrollToSection('home')}
          >
            Home
          </li>
          <li
            className={`nav-link a-link nav-light ${
              activeSection === 'education' ? 'active' : ''
            }`}
            onClick={() => scrollToSection('education')}
          >
            Education
          </li>
          <li
            className={`nav-link a-link nav-light ${
              activeSection === 'skills' ? 'active' : ''
            }`}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </li>
          <li
            className={`nav-link a-link nav-light ${
              activeSection === 'projects' ? 'active' : ''
            }`}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </li>
          <li
            className={`nav-link a-link nav-light ${
              activeSection === 'contact' ? 'active' : ''
            }`}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
