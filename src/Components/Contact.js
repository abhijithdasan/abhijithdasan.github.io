import './Contact.css'
import '../App.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faCopyright, faCode } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram, faLinkedin, faTwitter, faHackerrank, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';



function Contact() {
    return (
        <div id='contact' className='contact'>
            <div className='con-heading'>
                CONTACT
            </div>
            <div className='cont-box'>
                <div className='abt-me'>
                    <h3 >More about me.!</h3>
                    <p className='abt-phrah'>&nbsp;I am a dedicated student currently in the third year
                     of pursuing a B.Tech in Computer Science with a specialization in Big Data Analysis
                      at SRM IST Ramapuram, Chennai. I have gained valuable experience through internships
                       with Tech Anology during my first year and Accenture during my second year, focusing
                        on Data Analytics and Visualization.
                    <br/><br/>
                    My keen interest lies in areas such as web development, coding, cloud computing, and
                     web designing. These interests have been further cultivated through my academic 
                     coursework and hands-on experiences. I'm enthusiastic about applying my skills 
                     and knowledge to contribute effectively to dynamic projects and teams in the field.
                    </p>

                </div>
                <div className='cont-me'>
                    <h3>Connect me.!</h3>
                    <div className='cont-wrapper'>
                        <p><FontAwesomeIcon className='icon' icon={faLocationDot} size='2x' /><span className='info'>&ensp; Kerala, India</span></p>
                        <p><FontAwesomeIcon className='icon' icon={faPhone} size='2x' /><span className='info'> +91 9446228946</span></p>
                        <p><FontAwesomeIcon className='icon' icon={faEnvelope} size='2x' /><span className='info'> abhijithdasan@gmail.com</span></p>

                        <p className='icon-social'>
                            <a href="https://wa.me/+919446228946" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faWhatsapp} size='2x' /></a>
                            <a href="https://www.instagram.com/ig_marx/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faInstagram} size='2x' /></a>
                            <a href="https://www.facebook.com/abhijith.dasan.5/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faFacebook} size='2x' /></a>
                            <a href="https://www.linkedin.com/in/abhijithdasan05/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faLinkedin} size='2x' /></a>
                            <a href="https://twitter.com/AbhijithDasan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faTwitter} size='2x' /></a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p>
                    <a href="https://leetcode.com/AbhijithDasan/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faCode} size='2x' /></a>
                    <a href="https://github.com/abhijithdasan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faGithub} size='2x' /></a>
                    <a href="https://stackoverflow.com/users/18595415/abhijith-dasan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faStackOverflow} size='2x' /></a>
                    <a href="https://www.hackerrank.com/profile/ad7242" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faHackerrank} size='2x' /></a>
                            
                </p>
                <p><FontAwesomeIcon className='icon' icon={faCopyright}  /> 2024 Abhijith Dasan, All right reserved</p>
            </div>
        </div>
    );
    }
export default Contact;