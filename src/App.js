import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Education from './Components/Education';
import Skills from './Components/Skills';
//import { Route , Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home />
        <Education />
        <Skills />

       
    </div>
  );
}

export default App;
