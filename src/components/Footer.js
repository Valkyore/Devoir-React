import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

function Footer () {
  useEffect(() =>{
    const backToTopButton = document.getElementById('backToTopButton');

    const handleScroll = () => {
      if (window.scrollY > 200) {
        backToTopButton.style.display = 'block'; // Afficher le bouton
      } else {
        backToTopButton.style.display = 'none'; // Masquer le bouton
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    },[]);

  return (
    <footer className="text-dark py-4 text-start pt-5" style={{backgroundColor:'rgb(230, 230, 230) '}} >
      <div className="container mx-auto fw-semibold" >
        <div className="row">
          
          {/* Colonne 1 */}
          <div className="col-md-3 ">
            <h5><a href="#top" className="text-dark text-decoration-none">John Doe</a></h5>
            <p className='text-secondary'>
               40 Rue Laure Diebold <br/>
               69009 Lyon, France <br/>
               Téléphone : 06 20 30 40 50</p>
            <div className='pt-1 d-flex justify-content-heavenly'>
              <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github fs-2 mx-2 text-secondary"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter fs-2 mx-2 text-secondary"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin fs-2 mx-2 text-secondary"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="col-md-3  text-start ">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li className='pb-1'><a href="/" className="text-secondary text-decoration-none"> <i className="bi bi-chevron-right text-primary "></i>Accueil</a></li>
              <li className='pb-1'><Link to="/Johndoe" className="text-secondary text-decoration-none"><i className="bi bi-chevron-right text-primary"></i>À propos</Link></li>
              <li className='pb-1'><Link to="/Services" className="text-secondary text-decoration-none"><i className="bi bi-chevron-right text-primary"></i>Services</Link></li>
              <li className='pb-1'><Link to="/Contact" className="text-secondary text-decoration-none"><i className="bi bi-chevron-right text-primary"></i>Me contacter</Link></li>
              <li className='pb-1'><Link to='/Mentions' className="text-secondary text-decoration-none"><i className="bi bi-chevron-right text-primary"></i>Mentions légales</Link></li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-md-3  text-start ">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled ">
              <li className='pb-1'><Link to="/Réalisations" className="text-secondary text-decoration-none"><i className="bi bi-chevron-right text-primary"></i>Fresh food</Link></li>
              <li className='pb-1'><Link to="/Réalisations" className="text-secondary text-decoration-none"><i className="bi bi-chevron-right text-primary"></i>Restaurant Akira</Link></li>
              <li className='pb-1'><Link to="/Réalisations" className="text-secondary text-decoration-none"><i className="bi bi-chevron-right text-primary"></i>Espace bien-être</Link></li>
            </ul>
          </div>

          {/* Colonne 4 */}
          <div className="col-md-3  text-start">
            <h5>Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li className='pb-1'><Link to="/Blog" className="text-secondary text-decoration-none"><i className="bi bi-chevron-right text-primary"></i>Coder son site en HTML/CSS</Link></li>
              <li className='pb-1'><Link to="/Blog" className="text-secondary text-decoration-none"><i className="bi bi-chevron-right text-primary"></i>Vendre ses produits sur le web</Link></li>
              <li className='pb-1'><Link to="/Blog" className="text-secondary text-decoration-none"><i className="bi bi-chevron-right text-primary"></i>Se positionner sur Google</Link></li>
            </ul>
          </div>
        </div>
      </div>        
        <div className="text-center my-3  bg-dark w-100">
          <p className='text-white py-3 fw-bold'>© Designed by John Doe</p>
        </div>
        <button
        id="backToTopButton"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          display: 'none',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
