import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Experts from './components/Expert';
import  Instagram from './assets/media/Instagram.jpg';
import  Linkedin from './assets/media/Linkedin.jpg';


function App() {
  return (
    <>
    <Navbar/>
     <Hero />
     <About />
     <Services />
     <Contact />
     <Gallery />
     <Experts />

      <footer className="Footer">
  <div className="Footer-inner">
    {/* other footer columns here */}

    <div className="Footer-column">
      <h4>Follow</h4>
      <div className="Footer-social">
        <img src={Instagram}
          alt="Instagram" />
        <a href="https://www.instagram.com/vanity.by.fatima/?next=%2F" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/9170509966XX" aria-label="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <img src={Linkedin}
          alt="LinkedIn" />
        <a href="https://www.linkedin.com/in/fatimazohra1724/" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="Footer-bottom">
    <p>© 2025 Zohra Salon. All rights reserved.</p>
  </div>
</footer>

    </>
  );
}

export default App;