import React from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';

function Main () {
  return (
    <>
      {/* Helmet pour le SEO */}
      <Helmet>
        <title>John Doe, Développeur Web Full Stack</title>
        <meta
          name="description"
          content="Bonjour, je suis John Doe, développeur web full stack basé à Lyon. Découvrez mon parcours, mes compétences et mes projets."
        />
        <meta
          name="keywords"
          content="John Doe, Développeur web, Full Stack, HTML, CSS, JavaScript, React, PHP, Lyon"
        />
        <meta name="author" content="John Doe" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Accueil - John Doe, Développeur Web Full Stack" />
        <meta
          property="og:description"
          content="Bonjour, je suis John Doe, développeur web full stack basé à Lyon. Découvrez mon parcours, mes compétences et mes projets."
        />
        <meta property="og:image" content="/img/john-doe-about.jpg" />
        <meta property="og:url" content="https://votre-site.com" />
        <meta property="og:type" content="website" />
      </Helmet>



    <main className='main pb-5 '>
      {/* Section image de fond */}
      <section
        className="hero-section d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(/img/hero-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          position: 'relative',
        }}>

        {/* image de fond Tablette */}
        <div
          className="d-none d-md-block d-lg-none"
          style={{
            backgroundImage: `url(/img/hero-bg-tablette.jpg)`,
            position:'absolute',
            top:0,
            left:0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width:"100%",
            zIndex:'0',
          }}
        ></div>

        {/* Image de fond Mobile */}
        <div
          className="d-block d-md-none"
          style={{
            backgroundImage: `url(/img/hero-bg-mobile.jpg)`,
            position:'absolute',
            top:0,
            left:0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width:'100%',
            zIndex:0,
          }}
        ></div>

        <div
          className="overlay"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex:1,
          }}
        ></div>

        <div className="hero-content text-center text-white"
        style={{
            position:'relative',
            zIndex: 2,
            diplay:'flex',
            flexDirection:'column',
            justifyContent:'flex-end',
            alignItems:'center',
            height:'100%',
            paddingTop:'15%',
        }}>
          <h1 style={{fontSize: '90px', marginBottom: '3rem'}}>Bonjour, je suis John Doe</h1>
          <h2 style={{fontSize: '40px', marginBottom: '1rem'}}>Développeur web full stack</h2>
          <a href="#about" className="btn btn-primary mt-3">
            En savoir plus
          </a>
        </div>
      </section>

      {/* Section À propos et compétences */}
      <section
        id="about"
        className="container my-5 p-4 "
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="row d-flex align-items-start">
          {/* Colonne 1 : À propos */}
          <div className="col-md-6">
            <h3 className="text-start">À propos</h3>
            <hr className="border border-primary border-2 opacity-75" ></hr>

            <p className='text-start  fs-4 mt-5'>
              Passionné par l’informatique et les nouvelles technologies, j’ai
              suivi une formation d’intégrateur-développeur web au CEF. Au cours de
              cette formation, j’ai acquis des bases solides pour travailler dans
              le domaine du développement web.
            </p>
            <p className='text-start  fs-4'>
              Basé à Lyon, je suis en recherche d’une alternance au sein d’une
              agence digitale pour consolider ma formation de développeur web full
              stack.
            </p>
            <p className='text-start fs-4'>
              J’accorde une attention particulière à la qualité du code que
              j’écris et je respecte les bonnes pratiques du web.
            </p>
          </div>

          {/* Colonne 2 : Image et compétences */}
          <div className="col-md-6">
            {/* Image */}
            <img
              src="/img/john-doe-about.jpg"
              alt="À propos illustration"
              className="img-fluid rounded mb-4"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />

            {/* Compétences */}
            <h3 className="text-start mb-3">Mes compétences</h3>
                <div className="text-start mb-3 text-uppercase">
                    <label>HTML5 90%</label>
                    <div className="progress">
                        <div className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>

            {/* Barre de progression pour CSS */}
            <div className="text-start mb-3 text-uppercase">
                <label>CSS3 80%</label>
                <div className="progress">
                    <div className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: '80%' }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100">
                    </div>
                </div>
            </div>

            {/* Barre de progression pour JavaScript */}
            <div className="text-start mb-3 text-uppercase">
                <label>JavaScript 70%</label>
                <div className="progress">
                    <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: '70%' }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100">    
                    </div>
                </div>
            </div>

            {/* Barre de progression pour PHP */}
            <div className="text-start mb-3 text-uppercase">
                <label>PHP 60%</label>
                <div className="progress">
                    <div 
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: '60%' }}
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100">
                    </div>
                </div>
            </div>

            <div className="text-start mb-3 text-uppercase">
                <label>React 50%</label>
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '50%' }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100">    
                    </div>
                </div>
            </div>
            </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Main;