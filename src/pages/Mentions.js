import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import { Helmet } from 'react-helmet';

function Mentions () {
    return (

<>
        <Helmet>
        <title>Accueil - John Doe, Développeur Web Full Stack</title>
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

        <div className="background fw-bold">

                <section className="mentions py-5">
                    <div className="container text-center">
                        <h1 className="display-5 fw-bold">MENTIONS LÉGALES</h1>
                        <hr className="mx-auto mb-5 border-5 border-primary opacity-75" style={{ width: "280px"}} />
                    </div>
                
                <div className="accordion px-5 my-5 mx-5 py-5" id="accordionExample">

                        {/* premier volet*/}

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Éditeur du site 
                            </button>
                        </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h2 className="text-start fw-bold">John Doe</h2>
                                    <ul className="list-unstyled">
                                        <li><i className="bi bi-geo-alt-fill d-flex align-content-start" > <a className='text-decoration-none text-dark' href="https://maps.app.goo.gl/Ck6gpRUTx4gDdKDd9" target="_blank" >40 rue Laure Diebold <br/>69009 Lyon France</a></i></li>
                                        <li><i className="bi bi-envelope-fill d-flex align-content-start"> <a href="mailto:john.doe@gmail.com" className="d-flex align-content-start text-decoration-none"> john.doe@gmail.com</a></i></li>
                                        <li><i className="bi bi-phone d-flex align-content-start"> <a href="tel:0620304050" className="d-flex align-content-start text-decoration-none"> 06 20 30 40 50</a> </i></li>
                                    </ul>
                                </div>
                            </div>
                    </div>

                        {/* deuxième volet*/}

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Hébergeur
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h2 className="text-start fw-bold"> Always Data</h2>
                                <p className="text-start">91 rue du Faubourg Saint Honoré <br/>75008 Paris</p>
                                <i className="bi bi-globe2 d-flex align-content-start"><a href="https://www.alwaysdata.com/en/" target="_blanck" className="text-decoration-none fw-bold">www.alwaysdata.com</a></i>
                            </div>
                        </div>
                    </div>

                        {/* troisième volet*/}

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Crédits
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h2 className="text-start fw-bold" >Crédits</h2>
                                <p className="text-start">Site développé par John Doe, étudiant CEF</p>
                                <p className="text-start">Les images libres de droit sont issues du site <a className="text-decoration-none" href="https://pixabay.com/fr/" target="_blanck">Pixabay</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        </div>
        </>
    );
};

export default Mentions;
