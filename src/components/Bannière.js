import React from "react";

{/* composant réutilasable pour l'affichage d'une bannière responsive syr les page Services, Réalisations et Blog*/}

function Bannière(props) {
  const { desktopImage, tabletImage, mobileImage, height = "25vh" } = props;

  return (
    <section className="banner-section">
      {/* Bannière Desktop */}
      <div
        className="d-none d-lg-block"
        style={{
          backgroundImage: `url(${desktopImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height,
        }}
      ></div>

      {/* Bannière Tablette */}
      <div
        className="d-none d-md-block d-lg-none"
        style={{
          backgroundImage: `url(${tabletImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height,
        }}
      ></div>

      {/* Bannière Mobile */}
      <div
        className="d-block d-md-none"
        style={{
          backgroundImage: `url(${mobileImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height,
        }}
      ></div>
    </section>
  );
}

export default Bannière;
