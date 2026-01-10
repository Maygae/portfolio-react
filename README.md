# Portfolio React – Johanne Maygae

Portfolio réalisé en React et Bootstrap dans le cadre de ma formation de développeuse web au CEF.  
Il présente le profil de Johanne Maygae, ses services, ses réalisations et un formulaire de contact. [file:1125]

## Stack technique

- React & React Router  
- Bootstrap 5 + CSS personnalisé  
- Git / GitHub pour le versionnage [file:1125]

## Structure du projet

- `src/pages` : pages (Accueil, Services, Réalisations, Contact, Mentions légales)  
- `src/components` : Header, Footer et autres composants réutilisables  
- `src/assets` : images et ressources statiques  
- `src/styles` : styles globaux et spécifiques [file:1125]

## Fonctionnalités

- Site responsive basé sur les maquettes fournies (desktop, tablette, mobile). [file:1125]  
- Composants Bootstrap (cards, barres de progression, accordéon, modale) avec effets au survol. [file:1125]  
- Modale affichant les informations d’un profil GitHub via l’API, chargée une seule fois avec le hook `useEffect`. [file:1125]

## Qualité du code

- CSS principal validé sans erreur par le validateur W3C (seulement quelques avertissements liés à des propriétés préfixées). [file:1397]  
- Fichier `index.html` vérifié : remarques limitées à la syntaxe auto‑fermante des balises et aux variables de template propres à l’outillage React. [file:1398]

## Installation

```bash
git clone URL_DU_REPO
cd mon-portfolio
npm install
npm start

L’application est accessible sur `http://localhost:3000`.
