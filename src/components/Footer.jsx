import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      {/* Colonne 1 : infos + réseaux */}
      <div className="footer-column">
        <h3>Johanne Maygae</h3>
        <p>
          10 rue des Mimosas
          <br />
          83000 Bormes-Les-Mimosas, France
        </p>
        <p>
          06 20 33 65 50
          <br />
          <a href="mailto:johanne.maygae@gmail.com">
            johanne.maygae@gmail.com
          </a>
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/johanne-doe"
            target="_blank"
            rel="noreferrer noopener nofollow"
            aria-label="Profil GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://twitter.com/johanne-doe"
            target="_blank"
            rel="noreferrer noopener nofollow"
            aria-label="Profil Twitter"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/johanne-doe"
            target="_blank"
            rel="noreferrer noopener nofollow"
            aria-label="Profil LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Colonne 2 : liens de navigation */}
      <div className="footer-column">
        <h3>Liens utiles</h3>
        <ul>
          <li>
            <NavLink to="/" end>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Me contacter</NavLink>
          </li>
          <li>
            <NavLink to="/mentions-legales">Mentions légales</NavLink>
          </li>
        </ul>
      </div>

      {/* Colonne 3 : dernières réalisations */}
      <div className="footer-column">
        <h3>Mes dernières réalisations</h3>
        <ul>
          <li>Fresh Food</li>
          <li>Restaurant Akira</li>
          <li>Zen Studio</li>
          <li>SEO</li>
          <li>Création d’une API</li>
          <li>Maquette d’un site</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
