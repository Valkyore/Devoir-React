import React from "react";
import Bannière from "../components/Bannière";
import '../App.css';
import { Helmet } from 'react-helmet';

function Blog () {
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


    <div className="background">
        <Bannière
          desktopImage={"/img/banner.jpg"}
          tabletImage="/img/banner-tablette.jpg"
          mobileImage="/img/banner-mobile.jpg"
        />

      {/* Section Blog */} 
      <section className="Blog  py-5">
        <div className="container text-center">
          <h1 className="display-5 text-uppercase fw-semibold">Blog</h1>
          <p className=" mb-4 fs-5">
            Retrouver ici quelques articles sur le développement web.
          </p>
          <hr className="mx-auto mb-5 border-5 border-primary opacity-75" style={{ width: "280px"}} />

          <div className="row g-4">

            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src="/img/blog/coder.jpg" 
                  className="card-img-top"
                  alt="coder.jpg"
                />
                <div className="card-body">
                  <h2 className="card-title text-start">Coder son site en HTML/CSS</h2>
                  <p className="card-text text-start">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <button className="btn btn-primary d-md-flex justify-content-md-start">Lire la suite</button>
                </div>
                <div className="card-footer text-muted text-start">
                  Publié le 22 août 2022
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src="/img/blog/croissance.jpg"
                  className="card-img-top"
                  alt="croissance.jpg"
                />
                <div className="card-body">
                <h2 className="card-title text-start">Vendre ses produits sur le web</h2>
                  <p className="card-text text-start">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <button className="btn btn-primary d-md-flex justify-content-md-end">Lire la suite</button>
                </div>
                <div className="card-footer text-muted text-start">
                  Publié le 20 août 2022
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src="/img/blog/google.jpg"
                  className="card-img-top"
                  alt="google.jpg"
                />
                <div className="card-body">
                  <h2 className="card-title text-start">Se positionner sur <br/>Google</h2>
                  <p className="card-text text-start">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <button className="btn btn-primary d-md-flex justify-content-md-end">Lire la suite</button>
                </div>
                <div className="card-footer text-muted text-start">
                  Publié le 1 août 2022
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src="/img/blog/screens.jpg"
                  className="card-img-top"
                  alt="google.jpg"
                />
                <div className="card-body">
                  <h2 className="card-title text-start">Coder en reponsive Design</h2>
                  <p className="card-text text-start">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <button className="btn btn-primary d-md-flex justify-content-md-end">Lire la suite</button>
                </div>
                <div className="card-footer text-muted text-start">
                  Publié le 31 juillet 2022
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src="/img/blog/seo.jpg"
                  className="card-img-top"
                  alt="google.jpg"
                />
                <div className="card-body">
                  <h2 className="card-title text-start">Techniques de référencement</h2>
                  <p className="card-text text-start">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <button className="btn btn-primary d-md-flex justify-content-md-end">Lire la suite</button>
                </div>
                <div className="card-footer text-muted text-start">
                  Publié le 30 juillet 2022
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src="/img/blog/technos.png"
                  className="card-img-top"
                  alt="google.jpg"
                />
                <div className="card-body">
                  <h2 className="card-title text-start">Apprendre à coder</h2>
                  <p className="card-text text-start">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <button className="btn btn-primary d-md-flex justify-content-md-end">Lire la suite</button>
                </div>
                <div className="card-footer text-muted text-start">
                  Publié le 12 juillet 2022
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

export default Blog;
