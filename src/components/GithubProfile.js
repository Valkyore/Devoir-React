import React, { useState, useEffect } from "react";

function GithubProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Appel API GitHub 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/github-john-doe");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données.");
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur : {error}</p>;

  // Affichage du profil GitHub dans une card Bootstrap
  return (
    <div className="github-profile py-5 my-5">
      <div
        className="card mx-auto shadow"
        style={{ maxWidth: "600px", padding: "20px", borderRadius: "15px" }}
      >
        <div className="row g-0">
            
          {/* Avatar dans la colonne gauche */}
          <div
            className="col-md-4 d-flex justify-content-center align-items-center p-3"
            style={{ borderRadius: "15px 0 0 15px" }}
          >
            <img
              src={profile.avatar_url}
              alt={profile.name || "Profil GitHub"}
              className="img-fluid rounded-circle"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Informations dans la colonne droite */}
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{profile.name || "Nom non disponible"}</h4>
              <p className="card-text text-muted">
                {profile.bio || "Biographie non disponible"}
              </p>
              <p className="card-text">
                <small>
                  <strong>Répertoires publics :</strong> {profile.public_repos}
                </small>
              </p>
              <p className="card-text">
                <small>
                  <strong>Abonnés :</strong> {profile.followers} |{" "}
                  <strong>Abonnements :</strong> {profile.following}
                </small>
              </p>
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ marginTop: "10px" }}
              >
                Voir le profil GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubProfile;

