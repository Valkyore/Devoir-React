import React from "react";
import Bannière from "../components/Bannière";
import '../App.css';
import { Helmet } from 'react-helmet';

function Services() {
  return (

    <>

      <Helmet>
        <title>Mes Services- John Doe, Développeur Web Full Stack</title>
        <meta
          name="description"
          content="Découvrez les services que je propose en tant que développeur web : création de sites, UX design, SEO, et développement sur mesure."
        />
        <meta
          name="keywords"
          content="Création de sites web, Développeur freelance, SEO, UX design, maintenance de sites web"
        />
        <meta name="author" content="John Doe" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content=" Mes Services - John Doe, Développeur Web Full Stack" />
        <meta
          property="og:description"
          content="Découvrez les services que je propose en tant que développeur web : création de sites, UX design, SEO, et développement sur mesure."
        />
        <meta property="og:image" content="/img/john-doe-about.jpg" />
        <meta property="og:url" content="https://votre-site.com" />
        <meta property="og:type" content="website" />
      </Helmet>


    <div className="mainBackround">
      <Bannière
        desktopImage={"/img/banner.jpg"}
        tabletImage="/img/banner-tablette.jpg"
        mobileImage="/img/banner-mobile.jpg"
      />


      {/* Section services */}
      <section className="services  py-5">
        <div className="container text-center py-5">
          <h1 className="display-5 fw-semibold">MON OFFRE DE SERVICES</h1>
          <p className="text-muted mb-4 fs-5">
            Voici les prestations sur lesquelles je peux intervenir.
          </p>
          <hr className="mx-auto mb-5 pb-5 border-5 border-primary opacity-75" style={{ width: "280px"}} />

          <div className="row g-4">
            
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card rounded-4 cardService">
                <div className="card-body py-5">
                  <i className="bi bi-display fs-1 text-primary mb-3"></i>
                  <h5 className="card-title">UX DESIGN</h5>
                  <p className="card-text">
                  L’<strong>UX Design</strong> est une méthode de conception centrée sur l’utilisateur.
                  Son but est d’offrir une expérience de navigation optimale à
                  l’internaute.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 " >
              <div className="card rounded-4 cardService">
                <div className="card-body py-5">
                  <i className="bi bi-file-earmark-code fs-1 text-primary mb-3"></i>
                  <h5 className="card-title">DÉVELOPPEMENT WEB</h5>
                  <p className="card-text ">
                    Le <strong>développement de sites web</strong> repose sur l’utilisation des langages
                    HTML, CSS, JavaScript et PHP.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 ">
              <div className="card rounded-4 cardService">
                <div className="card-body py-5">
                  <i className="bi bi-zoom-in fs-1 text-primary mb-3"></i>
                  <h5 className="card-title">Espace bien-être</h5>
                  <p className="card-text">
                    Le <strong>référencement naturel d’un site</strong>, aussi appelé SEO, consiste à mettre
                    des techniques en œuvre pour améliorer sa position dans les résultats
                    des moteurs de recherche.
                  </p>
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

export default Services;
