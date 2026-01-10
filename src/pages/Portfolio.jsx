import React from "react";

import freshFoodImg from "../assets/portfolio/fresh-food.jpg";
import restaurantJaponaisImg from "../assets/portfolio/restaurant-japonais.jpg";
import espaceBienEtreImg from "../assets/portfolio/espace-bien-etre.jpg";
import coderImg from "../assets/portfolio/coder.jpg";
import screensImg from "../assets/portfolio/screens.jpg";
import seoImg from "../assets/portfolio/seo.jpg";

function Portfolio() {
  return (
    <main>
      <section className="portfolio">
        <h2>Mes réalisations</h2>
        <p className="portfolio-intro">
          Voici quelques projets réalisés pendant ma formation et en autonomie.
        </p>

        <div className="portfolio-grid">
          {/* Card 1 : Fresh Food */}
          <div className="card project-card">
            <img
              src={freshFoodImg}
              className="card-img-top"
              alt="Maquette du site Fresh Food"
            />
            <div className="card-body">
              <h3 className="card-title">Fresh Food</h3>
              <p className="card-text">
                Site e-commerce de produits frais en ligne, conçu comme une
                boutique vitrine avec une interface claire, responsive et
                centrée sur l’expérience utilisateur.
              </p>
            </div>
          </div>

          {/* Card 2 : Restaurant Akira */}
          <div className="card project-card">
            <img
              src={restaurantJaponaisImg}
              className="card-img-top"
              alt="Site vitrine pour le restaurant Akira"
            />
            <div className="card-body">
              <h3 className="card-title">Restaurant Akira</h3>
              <p className="card-text">
                Site vitrine pour un restaurant japonais, mettant en valeur le
                menu, l’univers visuel et une fonctionnalité de réservation en
                ligne.
              </p>
            </div>
          </div>

          {/* Card 3 : Zen Studio */}
          <div className="card project-card">
            <img
              src={espaceBienEtreImg}
              className="card-img-top"
              alt="Site vitrine pour le salon Zen Studio"
            />
            <div className="card-body">
              <h3 className="card-title">Zen Studio</h3>
              <p className="card-text">
                Site vitrine pour un salon de bien-être, pensé autour d’une
                ambiance apaisante, d’un design épuré et d’une navigation fluide
                favorisant la lisibilité des contenus.
              </p>
            </div>
          </div>

          {/* Card 4 : Optimisation SEO */}
          <div className="card project-card">
            <img
              src={seoImg}
              className="card-img-top"
              alt="Visuel représentant un nuage de mots-clés SEO"
            />
            <div className="card-body">
              <h3 className="card-title">Optimisation SEO</h3>
              <p className="card-text">
                Optimisation d’un site e-commerce : structuration des pages,
                amélioration des balises HTML et des performances techniques
                pour renforcer le référencement naturel.
              </p>
            </div>
          </div>

          {/* Card 5 : Création d’une API REST */}
          <div className="card project-card">
            <img
              src={coderImg}
              className="card-img-top"
              alt="Écran de code représentant le développement d'une API REST"
            />
            <div className="card-body">
              <h3 className="card-title">Création d’une API REST</h3>
              <p className="card-text">
                Développement d’une API REST permettant la gestion de données de
                projets et leur consommation côté front dans une application
                web.
              </p>
            </div>
          </div>

          {/* Card 6 : Maquette Figma */}
          <div className="card project-card">
            <img
              src={screensImg}
              className="card-img-top"
              alt="Maquette de site web affichée sur plusieurs écrans"
            />
            <div className="card-body">
              <h3 className="card-title">Maquette de site web (Figma)</h3>
              <p className="card-text">
                Conception d’un prototype complet sur Figma avant intégration,
                en respectant une charte graphique cohérente et les principes
                fondamentaux de l’UX/UI design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
