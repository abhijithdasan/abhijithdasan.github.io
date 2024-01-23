import '../App.css';
import './Project.css';
import travelsImage from '../Images/travels.png';

function Project (){

    const handleCode = () => {
        
        window.open (
             'https://github.com/abhijithdasan', '_blank'
             );
         
      };
    return (
        <div className='project'>
            <div className='project-head'>PROJECTS</div>
            <div className ='pro-card'>
                <h2 className = "pro-title">QR Generator</h2>
                <img className = "project-img"src={travelsImage} alt="qr img" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                     voluptatum, quia explicabo 
                </p>
                <button onClick={handleCode} className ="pro-btn">
                         <strong>Code</strong>
                </button>
                <button onClick={handleCode} className ="pro-btn">
                         <strong>Demo</strong>
                </button>
            </div>
            <div className ='pro-card'>
                <h2 className = "pro-title">Travels Website</h2>
                <img className = "project-img"src={travelsImage} alt="qr img" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                     voluptatum, quia explicabo 
                </p>
                <button onClick={handleCode} className ="pro-btn">
                         <strong>Code</strong>
                </button>
                <button onClick={handleCode} className ="pro-btn">
                         <strong>Demo</strong>
                </button> 
            </div>
            <div className ='pro-card'>
                <h2 className = "pro-title">Musical Keyboard</h2>
                <img className = "project-img"src={travelsImage} alt="qr img" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                     voluptatum, quia explicabo 
                </p>
                <button onClick={handleCode} className ="pro-btn">
                         <strong>Code</strong>
                </button>
                <button onClick={handleCode} className ="pro-btn">
                         <strong>Demo</strong>
                </button>
            </div>
            <div className ='pro-card'>
                <h2 className = "pro-title">Login Page</h2>
                <img className = "project-img"src={travelsImage} alt="qr img" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                     voluptatum, quia explicabo 
                </p>
                <button onClick={handleCode} className ="pro-btn">
                         <strong>Code</strong>
                </button>
                <button onClick={handleCode} className ="pro-btn">
                         <strong>Demo</strong>
                </button>
                
            </div>
            <div className ='pro-card'>
                <h2 className = "pro-title">ToDo List</h2>
                <img className = "project-img"src={travelsImage} alt="qr img" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                     voluptatum, quia explicabo 
                </p>
                <button onClick={handleCode} className ="pro-btn">
                         <strong>Code</strong>
                </button>
                <button onClick={handleCode} className ="pro-btn">
                         <strong>Demo</strong>
                </button>
            </div>
            <div className ='pro-card'>
                <h2 className = "pro-title">Weather Predictor</h2> 
                <img className = "project-img"src={travelsImage} alt="qr img" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                     voluptatum, quia explicabo 
                </p>
                <button onClick={handleCode} className ="pro-btn">
                         <strong>Code</strong>
                </button>
                <button onClick={handleCode} className ="pro-btn">
                         <strong>Demo</strong>
                </button>
            </div>
            <div className='footer-space'></div>
        </div>
    );
}
export default Project;