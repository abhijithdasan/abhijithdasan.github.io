import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
//import { Route , Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home />
        <Education />
        <Skills />
        <Project />
        <Contact />

       
    </div>
  );
}

export default App;
