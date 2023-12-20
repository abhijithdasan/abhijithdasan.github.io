/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css'
// import {Link} from 'react-router-dom'
// import Home from './Home';
// import Education from './Education';
// import { Route , Routes } from 'react-router-dom';


function Navbar(){
    return (
      <div className = "navbar">
        <div className = "nav-logo">
          <h2 className='nav-name'>
            <a className="nav-link"  
              href="#"
              target="_blank"
              rel="noopener noreferrer">            
              <span className = "word-spn">A</span>bhijith.
            </a>
          </h2>
        </div>
        <div>
          <ul className = "nav-item">
            <li
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer">Home
            </li>
            <li
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer">
              Education
            </li>
            <li
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer">
              Skills
            </li>
            <li
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer">
              Projects
            </li>
            <li
              className="nav-link"
          
              rel="noopener noreferrer">
              Contact
            </li>
          </ul>
        </div>
          
      </div>
    );
}
export default Navbar;







// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import Education from './Education';

// function Navbar() {
//   return (
//     <Router>
//       <div className="navbar">
//         <div className="nav-logo">
//           <h2 className="nav-name">
//             <Link className="nav-link" to="/" target="_blank" rel="noopener noreferrer">
//               <span className="word-spn">A</span>bhijith.
//             </Link>
//           </h2>
//         </div>
//         <div>
//           <ul className="nav-item">
//             <li className="nav-link" target="_blank" rel="noopener noreferrer">
//             <Link className="nav-link" to="/Home" target="_blank" rel="noopener noreferrer">
//               Home
//               </Link>
//             </li>
//             <li className="nav-link" target="_blank" rel="noopener noreferrer">
//               <Link to="/Education">Education</Link>
//             </li>
//             <li className="nav-link" target="_blank" rel="noopener noreferrer">
//               Skills
//             </li>
//             <li className="nav-link" target="_blank" rel="noopener noreferrer">
//               Projects
//             </li>
//             <li className="nav-link" rel="noopener noreferrer">
//               Contact
//             </li>
//           </ul>
//         </div>
//         <Routes>
//           <Route path="/Education" element={<Education />} />
//           <Route path="/Home" element={<Home />} />
//           {/* Add routes for Skills, Projects, and Contact */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default Navbar;
