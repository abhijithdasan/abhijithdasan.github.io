import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faBook } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import './Education.css'
function Education (){
    return (
        <div className = "edu">
            <div className = "edu-main">
                <p className= "edu-head">EDUCATION</p>
                <div className = "edu-box">
                    <div className='edu-name'>
                        <FontAwesomeIcon className='icon' icon={faGraduationCap} size='2x' />
                        <h2>SRM UNIVERSITY, CHENNAI</h2>
                    </div>
                    <p className='edu-des edu-des1'>B.Tech Computer Science and Eng.</p>
                    <p className='edu-mark'><strong>8.42 cgpa</strong></p>
                </div>
                
                <div className = "edu-box">
                    <div className='edu-name'>
                        <FontAwesomeIcon className='icon' icon={faSchool} size='2x' />
                        <h2>ST. GOERGE HSS    , IDUKKI</h2>
                    </div>
                    <p className='edu-des'>XII Science</p>
                    <p className='edu-mark'><strong>82%</strong></p>
                </div>
                <div className = "edu-box">
                    <div className='edu-name'>
                        <FontAwesomeIcon className='icon' icon={faBook} size='2x' />
                        <h2>ST. THOMAS PUB. SCHL, IDUKKI</h2>
                    </div>
                    <p className='edu-des'>Xth CBSE</p>
                    <p className='edu-mark'><strong>83%</strong></p>
                </div>
                
            </div>
        </div>
    );
}
export default Education;