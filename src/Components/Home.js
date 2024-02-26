import '../App.css'
import mainImage from '../Images/main-img.png';

function Home() {
    const handleDownloadCV = () => {
        // Redirect to the specified URL
        window.location.href =
          'https://drive.google.com/file/d/1t-zeIMYq0LGUAOepH7JoPmGD9ckO91XY/view?usp=sharing';
      };
    return (
        <div id="home" className = "home">
            <div className = "home-des">
                <div className = "main-des">
                    <h1 className = "des-name">Hi! I'm Abhijith Dasan</h1>
                    <p className = "main-sub-des"><em>And I'm a <span>Web Developer</span></em></p>
                </div>
                <div className = "sub-des">
                    <p className='qte'>"Programming isn't about what you know; it's about what you can figure out."</p>
                    <p className='qte-author'>- Chris Pine</p>
                    <p className = "home-contact"><strong>Email:</strong></p>
                    <p className = "contact-des">abhijithdasan05@gmail.com</p>
                    <p className = "home-contact"><strong>Contact no:</strong></p>
                    <p className = "contact-des contact-des1">+91 9446228946</p>
                </div>
                <div className="btn">
                <button className="custom-btn btn-15" onClick={handleDownloadCV}>
                         <strong>Download CV</strong>
            
                    </button>
                </div>
            </div>
            <div className="home-img">
                <img className = "pro-img"src={mainImage} alt="profile img" />
                <div className = "liquid-shape" />
            </div> 
            
        </div>
    );
}
export default Home;
