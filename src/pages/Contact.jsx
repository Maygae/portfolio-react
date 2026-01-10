import React from "react";

function Contact() {
  return (
    <main>
      <section className="contact">
        <h2>Contact</h2>
        <p className="contact-intro">
          Vous avez un projet, une question ou une demande de collaboration ?
          N’hésitez pas à m’écrire via ce formulaire.
        </p>

        <div className="contact-content">
          {/* Formulaire de contact */}
          <form className="contact-form">
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="phone" className="form-label">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="subject" className="form-label">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="form-control"
                required
              />
            </div>

            <button type="submit" className="btn contact-button">
              Envoyer
            </button>
          </form>

          {/* Coordonnées + Google Map */}
          <div className="contact-infos">
            <h3>Mes coordonnées</h3>
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

            <h3>Horaires</h3>
            <p>Lundi – Vendredi : 9h – 18h</p>

            <div className="contact-map">
              <iframe
                title="Localisation"
                src="https://www.google.com/maps?q=Bormes-les-Mimosas,France&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
