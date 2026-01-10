// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import "../App.css";
import heroBg from "../assets/images/hero-bg.jpg";
import aboutImg from "../assets/images/john-doe-about.jpg";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [githubData, setGithubData] = useState(null);
  const [isLoadingGithub, setIsLoadingGithub] = useState(true);
  const [githubError, setGithubError] = useState(null);

  // Chargement du profil GitHub une seule fois
  useEffect(() => {
    const fetchGithubProfile = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Maygae");
        if (!response.ok) {
          throw new Error("Impossible de récupérer le profil GitHub.");
        }
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        setGithubError(error.message);
      } finally {
        setIsLoadingGithub(false);
      }
    };

    fetchGithubProfile();
  }, []);

  return (
    <main>
      {/* Hero */}
      <section
        className="hero d-flex align-items-center justify-content-center text-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay">
          <h1 className="display-4 mb-3">Bonjour, moi c’est Johanne</h1>
          <h2 className="h4 mb-4">
            Développeuse web &amp; mobile en formation, je crée des projets
            modernes.
          </h2>
          <button
            type="button"
            className="btn btn-danger btn-lg hero-btn"
            onClick={() => setIsModalOpen(true)}
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* À propos + Compétences */}
      <section className="container my-5">
        <div className="row g-4">
          {/* À propos */}
          <article className="col-12 col-lg-6">
            <h3 className="about-title mb-3">À propos</h3>

            <img
              src={aboutImg}
              alt="Portrait de Johanne"
              className="img-fluid mb-3"
            />

            <p>
              Je suis Johanne, en formation de développeuse web &amp; mobile
              depuis septembre 2025, où j’apprends à créer des projets en HTML,
              CSS, JavaScript et React.
            </p>
            <p>
              Créative et rigoureuse, j’aime donner vie à des interfaces claires
              et fonctionnelles, en accordant une attention particulière à la
              qualité du code et à l’expérience utilisateur.
            </p>
            <p>
              Cette formation me permet d’explorer différents aspects du
              développement web et de construire des bases solides pour la suite
              de mon parcours, afin de développer mes compétences et de définir
              progressivement ma spécialité.
            </p>
          </article>

          {/* Mes compétences */}
          <article className="col-12 col-lg-6">
            <h3 className="skills-title mb-3">Mes compétences</h3>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>HTML</span>
                <span>80%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>CSS / Bootstrap</span>
                <span>75%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>JavaScript</span>
                <span>60%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>PHP</span>
                <span>40%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>React</span>
                <span>50%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Modale GitHub */}
      {isModalOpen && (
        <div className="modal-backdrop-custom">
          <div className="modal-github">
            <div className="modal-github-header-bar d-flex justify-content-between align-items-center">
              <h2 className="h4 mb-0">Mon profil GitHub</h2>
              <button
                type="button"
                className="btn-close modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Fermer la fenêtre"
              />
            </div>

            {isLoadingGithub && <p className="p-3">Chargement du profil…</p>}

            {githubError && (
              <p className="p-3 text-danger">
                Une erreur est survenue : {githubError}
              </p>
            )}

            {githubData && !isLoadingGithub && !githubError && (
              <>
                <div className="modal-github-body row g-3 p-3">
                  <div className="col-12 col-md-4 d-flex justify-content-center">
                    <img
                      src={githubData.avatar_url}
                      alt={`Avatar GitHub de ${githubData.login}`}
                      className="modal-github-avatar rounded-circle img-fluid"
                    />
                  </div>

                  <div className="col-12 col-md-8">
                    <a
                      href={githubData.html_url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="modal-github-username d-inline-block mb-2"
                    >
                      @{githubData.login}
                    </a>

                    {githubData.bio && (
                      <p className="modal-github-bio">{githubData.bio}</p>
                    )}

                    <ul className="modal-github-stats list-unstyled mb-0">
                      <li>Repos publics : {githubData.public_repos}</li>
                      <li>Followers : {githubData.followers}</li>
                      <li>Following : {githubData.following}</li>
                    </ul>
                  </div>
                </div>

                <div className="modal-github-footer p-3 text-end">
                  <button
                    type="button"
                    className="btn btn-secondary btn-github-close"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Fermer
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
