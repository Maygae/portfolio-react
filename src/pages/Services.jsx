import React from "react";
import "../App.css";
import banner from "../assets/images/banner.jpg";

function Services() {
  return (
    <main>
      {/* ======================
          Bannière Services
      ====================== */}
      <section
        className="hero hero-services"
        style={{ backgroundImage: `url(${banner})` }}
        aria-hidden="true"
      />

      {/* ======================
          En-tête Services
      ====================== */}
      <section className="services-header">
        <div className="container text-center">
          <h1>Mon offre de services</h1>
          <p>Voici les prestations sur lesquelles je peux intervenir</p>
          <div className="services-separator"></div>
        </div>
      </section>

      {/* ======================
          Cartes Services
      ====================== */}
      <section className="services">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* UX Design */}
            <div className="col-md-4">
              <article className="service-card h-100">
                <div className="service-icon">
                  <i className="bi bi-pencil"></i>
                </div>
                <h3>UX Design</h3>
                <p>
                  L’UX Design est une discipline qui consiste à concevoir des
                  produits (sites web, applications mobiles, logiciels, objets
                  connectés, etc.) en plaçant l’utilisateur au centre des
                  préoccupations. L’objectif est de rendre l’expérience
                  utilisateur la plus fluide et agréable possible.
                </p>
              </article>
            </div>

            {/* Développement web */}
            <div className="col-md-4">
              <article className="service-card h-100">
                <div className="service-icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h3>Développement web</h3>
                <p>
                  Le développement de sites web consiste à créer des sites
                  internet en utilisant des langages de programmation (HTML,
                  CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                  React, Angular, etc.).
                </p>
              </article>
            </div>

            {/* Référencement */}
            <div className="col-md-4">
              <article className="service-card h-100">
                <div className="service-icon">
                  <i className="bi bi-search"></i>
                </div>
                <h3>Référencement</h3>
                <p>
                  Le référencement naturel (SEO) est une technique qui consiste
                  à optimiser un site web pour le faire remonter dans les
                  résultats des moteurs de recherche (Google, Bing, Yahoo,
                  etc.). L’objectif est d’attirer un maximum de visiteurs
                  qualifiés sur le site.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
