import React from "react";
import Bannière from "../components/Bannière";
import '../App.css';
import { Helmet } from 'react-helmet';

function Réalisations () {
  return (

    <>

        <Helmet>
        <title>Accueil - John Doe, Développeur Web Full Stack</title>
        <meta
          name="description"
          content="Découvrez mes réalisations en tant que développeur web full stack : projets personnels, collaborations et sites développés sur mesure."
        />
        <meta
          name="keywords"
          content="John Doe, Réalisations, Projets,dévellopement web, Développeur web, Full Stack, Site web, Lyon"
        />
        <meta name="author" content="John Doe" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mes Réalisations - John Doe, Développeur Web Full Stack" />
        <meta
          property="og:description"
          content="Bonjour, je suis John Doe, développeur web full stack basé à Lyon. Découvrez mon parcours, mes compétences et mes projets."
        />
        <meta property="og:image" content="/img/john-doe-about.jpg" />
        <meta property="og:url" content="https://votre-site.com" />
        <meta property="og:type" content="website" />
      </Helmet>


    <div className="mainBackround">
      
      <Bannière
        desktopImage={`${process.env.PUBLIC_URL}/img/banner.jpg`}
        tabletImage={`${process.env.PUBLIC_URL}/img/banner-tablette.jpg`}
        mobileImage={`${process.env.PUBLIC_URL}/img/banner-mobile.jpg`}
      />

      {/* Section Portfolio */}
      <section className="portfolio  py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-semibold">PORTFOLIO</h1>
          <p className="text-muted mb-4 fs-5">
            Voici quelques-unes de mes réalisations.
          </p>
          <hr className="mx-auto mb-5 border-5 border-primary opacity-75" style={{ width: "230px"}} />

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}/img/portfolio/fresh-food.jpg`}// Image pour "Fresh Food"
                  className="card-img-top"
                  alt="Fresh Food"
                />
                <div className="card-body">
                  <h5 className="card-title">Fresh food</h5>
                  <p className="card-text">
                    Réalisation d'un site avec commande en <br/>ligne.
                  </p>
                  <button className="btn btn-primary">Voir</button>
                </div>
                <div className="card-footer text-muted">
                  Site réalisé avec PHP et MySQL
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}/img/portfolio/restaurant-japonais.jpg`} // Image pour "Restaurant Akira"
                  className="card-img-top"
                  alt="Restaurant Akira"
                />
                <div className="card-body">
                  <h5 className="card-title">Restaurant Akira</h5>
                  <p className="card-text">
                    Réalisation d'un site vitrine.
                  </p>
                  <button className="btn btn-primary">Voir</button>
                </div>
                <div className="card-footer text-muted">
                  Site réalisé avec WordPress
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}/img/portfolio/espace-bien-etre.jpg`} // Image pour "Espace bien-être"
                  className="card-img-top"
                  alt="Espace bien-être"
                />
                <div className="card-body">
                  <h5 className="card-title">Espace bien-être</h5>
                  <p className="card-text">
                    Réalisation d'un site vitrine pour un praticien <br/>de bien-être.
                  </p>
                  <button className="btn btn-primary">Voir</button>
                </div>
                <div className="card-footer text-muted">
                  Site réalisé en HTML/CSS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Réalisations;



//            className="hero-section"
  //          style={{
    //          backgroundImage: `url(/img/banner.jpg)`,
      //        backgroundSize: 'cover',
        //      backgroundPosition: 'center bottom',
          //    height: '25vh',
            //  position: 'relative',
           // }}