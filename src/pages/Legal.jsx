
import React from "react";

function Legal() {
  return (
    <main>
      <section className="legal">
        <div className="container">
          <h1 className="text-center my-5">Mentions légales</h1>

          <div className="accordion" id="legalAccordion">
            {/* Éditeur du site */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEditor">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEditor"
                  aria-expanded="true"
                  aria-controls="collapseEditor"
                >
                  Éditeur du site
                </button>
              </h2>
              <div
                id="collapseEditor"
                className="accordion-collapse collapse show"
                aria-labelledby="headingEditor"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <p>
                    <strong>Johanne Maygae</strong>
                    <br />
                    <i className="bi bi-building me-2"></i>
                    10 rue des Mimosas
                    <br />
                    <i className="bi bi-geo-alt me-2"></i>
                    83000 Bormes-Les-Mimosas, France
                    <br />
                    <i className="bi bi-telephone me-2"></i>
                    10 20 30 40 50
                    <br />
                    <i className="bi bi-envelope me-2"></i>
                    <a href="mailto:johanne.maygae@gmail.com">
                      johanne.maygae@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHost">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHost"
                  aria-expanded="false"
                  aria-controls="collapseHost"
                >
                  Hébergeur
                </button>
              </h2>
              <div
                id="collapseHost"
                className="accordion-collapse collapse"
                aria-labelledby="headingHost"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <p>
                    <strong>Alwaysdata</strong>
                    <br />
                    91 Rue du Faubourg Saint-Honoré, 75008 Paris
                    <br />
                    <i className="bi bi-globe me-2"></i>
                    <a
                      href="https://www.alwaysdata.com"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      www.alwaysdata.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Crédits */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingCredits">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCredits"
                  aria-expanded="false"
                  aria-controls="collapseCredits"
                >
                  Crédits
                </button>
              </h2>
              <div
                id="collapseCredits"
                className="accordion-collapse collapse"
                aria-labelledby="headingCredits"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Site réalisé dans le cadre d’un exercice de formation au
                    développement web au{" "}
                    <a
                      href="https://www.centre-europeen-formation.fr/"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      Centre Européen de Formation
                    </a>
                    .
                  </p>
                  <p>
                    Les images utilisées sur ce site sont libres de droits et
                    ont été obtenues sur le site{" "}
                    <a
                      href="https://pixabay.com"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      Pixabay
                    </a>
                    .
                  </p>
                  <p>
                    La favicon de ce site a été fournie par{" "}
                    <a
                      href="https://www.flaticon.com"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      Flaticon
                    </a>
                    .
                  </p>
                  <p>
                    Les icônes d’interface proviennent de{" "}
                    <a
                      href="https://icons.getbootstrap.com/"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      Bootstrap Icons
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Legal;
