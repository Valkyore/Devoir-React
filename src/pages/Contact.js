import React from "react";
import '../App.css';
import { Helmet } from 'react-helmet';

function Contact() {
  return (

    <>

<Helmet>
        <title>Accueil - John Doe, Développeur Web Full Stack</title>
        <meta
          name="description"
          content="Contactez-moi, John Doe, développeur web à Lyon, pour toute demande de projet ou collaboration."
        />
        <meta
          name="keywords"
          content="Contact, demande de devis, Lyon, développeur freelance"
        />
        <meta name="author" content="John Doe" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact- John Doe, Développeur Web Freelance" />
        <meta
          property="og:description"
          content="Contactez-moi, John Doe, développeur web à Lyon, pour toute demande de projet ou collaboration."
        />
        <meta property="og:image" content="/img/john-doe-about.jpg" />
        <meta property="og:url" content="https://votre-site.com" />
        <meta property="og:type" content="website" />
      </Helmet>


    <div className="background">
      <section className="contact-bg d-flex flex-column justify-content-center align-items-center"
        style={{
        backgroundImage: `url(/img/contact-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
        overflow:'hidden'
        }}>

        <div className="overlay"
          style={{
          backgroundColor: 'rgba(0, 105, 255, 0.5)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex:1,
          }}>
        </div>

        <div id="contact" className="container my-5 p-4 "
          style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          position:'relative',
          zIndex:2
          }}>

          <div className="container text-center">
            <h1 className="display-5 fw-semibold text-uppercase">Me contacter</h1>
            <p className=" mb-4 fs-5">
              Pour me contacter e, vue d'un entretien ou d'une future colaboration, merci de remplir le formulaire de contact.
            </p>
            <hr className="mx-auto mb-5 border-5 border-primary opacity-75" style={{ width: "280px"}} />


              <div className="row d-flex align-items-start">

                {/* Colonne 1 : formulaire */}

                <div className="col-md-6">
                  
                  <h3 className="text-start">Formulaire de contact</h3>
                  <hr className="border border-primary border-2 opacity-75" ></hr>

                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Votre nom" aria-label="votre nom"/>
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Votre adresse mail" aria-label="votre adresse mail"/>
                    </div>
                    <div className="mb-3">
                      <input type="tel" className="form-control"  placeholder='Votre numéro de téléphone' aria-label="votre numéro de téléphone"/>
                    </div>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Sujet" aria-label="Sujet"/>
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control" rows={7} placeholder="Votre message"/>
                    </div>              
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                  </form>

                </div>

                 {/* Colonne 2 : coordonnées */}
                  <div className="col-md-6">
                    <h3 className="text-start">Mes coordonnées</h3>
                    <hr className="border border-primary border-2 opacity-75" ></hr>
                      <div className="container">
                        <ul className="list-unstyled">
                          <li><i className="bi bi-geo-alt-fill d-flex align-content-start" > 40 rue Laure Diebold, 69009 Lyon, France</i></li>
                          <li><i className="bi bi-phone d-flex align-content-start"> <a href="tel:0620304050" className="d-flex align-content-start text-dark text-decoration-none"> 06 20 30 40 50</a> </i></li>
                        </ul>
                        <div class="ratio ratio-16x9">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657541047!2d4.796403976637495!3d45.778665712401505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1737640022618!5m2!1sfr!2sfr"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

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

export default Contact;