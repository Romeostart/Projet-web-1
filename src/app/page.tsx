import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Terminal,
} from "lucide-react";
import { SnakeGame } from "@/components/snake-game";

const interests = [
  "Développement",
  "Systèmes",
  "Réseaux",
  "Support",
  "Automatisation",
  "IA et cybersécurité",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a
          className="wordmark"
          href="#accueil"
          aria-label="Accueil du portfolio de Roméo Paris"
        >
          romeoparis.ch
        </a>
        <nav className="site-nav" aria-label="Navigation principale">
          <a href="#recherche">Recherche</a>
          <a href="#projet-personnel">Mon site</a>
          <a href="#parcours">Parcours</a>
          <a href="#apropos">À propos</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cv" href="/CV-Romeo-Paris.pdf" download="CV-Romeo-Paris.pdf">
          CV <Download size={14} />
        </a>
      </header>

      <section className="hero section-frame" id="accueil">
        <div className="hero-copy">
          <div className="hero-intro">
            <p className="eyebrow">Dossier de candidature</p>
            <figure className="hero-portrait">
              <Image
                src="/romeo-paris-portrait.jpg"
                alt="Portrait de Roméo Paris"
                width={180}
                height={180}
                priority
              />
            </figure>
          </div>
          <h1>
            Je cherche où <em>continuer à apprendre.</em>
          </h1>
          <p className="hero-summary">
            Je m’appelle Roméo Paris. J’ai 16 ans, j’habite à Bulle et je souhaite intégrer un{" "}
            <strong>CFC d’informaticien</strong> dans la région de Fribourg.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#parcours">
              Voir mon parcours <ArrowDownRight size={17} />
            </a>
            <a className="text-link" href="/CV-Romeo-Paris.pdf" download="CV-Romeo-Paris.pdf">
              Télécharger mon CV <Download size={16} />
            </a>
            <a className="text-link" href="#contact">
              Échanger avec moi <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <aside className="hero-proof" aria-label="Objectif professionnel">
          <div className="proof-topline">
            <span className="proof-mark">
              <Terminal size={21} />
            </span>
            <span className="proof-index">FICHE 01 / 04</span>
          </div>
          <p className="proof-label">Objectif professionnel</p>
          <p className="proof-title">CFC Informatique</p>
          <p className="proof-detail">
            Place d’apprentissage, stage ou journée de découverte dans la région de Fribourg et alentours.
          </p>
          <div className="proof-footer">
            <span>16 ans</span>
            <span>Bulle · Suisse</span>
          </div>
        </aside>
      </section>

      <section className="focus-section section-frame" id="recherche">
        <div className="focus-grid">
          <div>
            <p className="eyebrow">Ce que je recherche</p>
            <h2>Un premier terrain pour apprendre le métier.</h2>
          </div>
          <div className="focus-copy">
            <p>
              Je souhaite rejoindre une équipe qui pourra m’accompagner dans la découverte de
              l’informatique professionnelle, avec de la pratique, des questions et des responsabilités
              adaptées à mon niveau.
            </p>
            <div className="interest-grid">
              {interests.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>
            <a className="text-link" href="#contact">
              Parler d’une opportunité <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="personal-project-section section-frame" id="projet-personnel">
        <div className="personal-project-grid">
          <div>
            <p className="eyebrow">01 / Projet personnel</p>
            <h2>Mon premier projet personnel</h2>
          </div>
          <div className="personal-project-copy">
            <p>
              J’ai créé mon propre site internet pour découvrir comment fonctionne la création d’un site,
              apprendre par moi-même et tester les outils actuels.
            </p>
            <p>
              J’ai utilisé Claude.ai et ChatlyAI pour m’aider à créer le site, puis GitHub pour stocker et
              gérer le code. J’ai ensuite connecté GitHub à Vercel pour mettre le site en ligne.
            </p>
            <p>
              Après plusieurs modifications, j’ai testé le site sur ordinateur et téléphone pour vérifier
              que tout fonctionnait correctement.
            </p>
            <p>
              Pour finir, j’ai acheté le nom de domaine romeoparis.ch sur Infomaniak et je l’ai relié à
              Vercel pour rendre mon site accessible en ligne.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section section-frame" id="parcours">
        <div className="about-grid">
          <div>
            <p className="eyebrow">02 / Parcours</p>
            <h2>Un parcours qui m’a appris à être précis.</h2>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-year">Aujourd’hui</span>
              <div>
                <h3>Projet professionnel informatique</h3>
                <p>Je développe mes projets personnels et je prépare mon entrée en CFC d’informaticien.</p>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-year">Expérience</span>
              <div>
                <h3>Formation professionnelle en électronique</h3>
                <p>
                  Une expérience qui m’a permis de découvrir le monde du travail, le travail en équipe et
                  l’importance de la précision.
                </p>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-year">Premières découvertes</span>
              <div>
                <h3>HFR Fribourg · FutureKids</h3>
                <p>
                  Des expériences qui m’ont fait découvrir un environnement professionnel, l’organisation
                  et les premières bases de la création numérique.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="motivation-section section-frame">
        <div className="motivation-card">
          <p className="eyebrow">Pourquoi l’informatique ?</p>
          <h2>Partir d’une idée et chercher une solution concrète.</h2>
          <p>
            Ce qui me plaît dans l’informatique, c’est de pouvoir partir d’un problème ou d’une idée et
            chercher une solution concrète.
          </p>
          <p>
            J’aime expérimenter, comprendre comment les choses fonctionnent et apprendre de mes erreurs.
            Lors de ma première année de CFC d’électronicien, j’ai notamment appris le langage C, ce qui
            m’a permis de développer ma logique et mes bases en programmation. Cette expérience a renforcé
            mon intérêt pour l’informatique et la programmation et m’a donné envie de continuer dans ce
            domaine.
          </p>
        </div>
      </section>

      <section className="about-section about-profile section-frame" id="apropos">
        <div className="about-grid">
          <div>
            <p className="eyebrow">03 / À propos</p>
            <h2>Quelqu’un de curieux, sociable et persévérant.</h2>
          </div>
          <div className="about-copy">
            <p>
              Je cherche une formation qui me permettra d’apprendre, de progresser et de transformer
              progressivement ma passion en compétences professionnelles.
            </p>
            <div className="values-list">
              <span>
                <Check size={15} /> Curiosité
              </span>
              <span>
                <Check size={15} /> Persévérance
              </span>
              <span>
                <Check size={15} /> Esprit d’équipe
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="github-section section-frame" id="github">
        <div className="github-card">
          <div>
            <p className="eyebrow">Mon GitHub</p>
            <h2>Voir les projets au-delà des mots.</h2>
            <p>
              Je publie progressivement mes projets et mes expérimentations pour garder une trace de mon
              apprentissage et montrer concrètement ce que je réalise.
            </p>
          </div>
          <a
            className="github-action github-link"
            href="https://github.com/Romeostart"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={27} />
            <span className="text-link">
              Voir mon GitHub <ExternalLink size={15} />
            </span>
            <small>github.com/Romeostart</small>
          </a>
        </div>
      </section>

      <section className="cv-section section-frame" id="cv">
        <div className="cv-card">
          <div>
            <p className="eyebrow">Document de candidature</p>
            <h2>Le parcours complet tient dans mon CV.</h2>
            <p>Formation, expériences, coordonnées et projets réunis dans un document à télécharger.</p>
          </div>
          <a className="primary-link" href="/CV-Romeo-Paris.pdf" download="CV-Romeo-Paris.pdf">
            Télécharger mon CV <Download size={17} />
          </a>
        </div>
      </section>

      <section className="game-section section-frame" id="jeu">
        <div className="game-intro">
          <p className="eyebrow">04 / Démonstration</p>
          <h2>Un peu de distraction</h2>
          <p>J’ai ajouté ce jeu Snake pour rendre le portfolio un peu plus interactif.</p>
          <p className="project-status">Projet d’apprentissage · passage à travers les murs</p>
        </div>
        <SnakeGame />
      </section>

      <section className="contact-section" id="contact">
        <div className="section-frame contact-inner">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Parlons de mon futur apprentissage.</h2>
            <p className="contact-copy">
              Vous cherchez un apprenti informaticien ? Je serais heureux de pouvoir échanger avec vous et
              de vous présenter mon parcours.
            </p>
          </div>
          <div className="contact-actions">
            <a className="primary-link" href="mailto:Romeo.paris321@gmail.com">
              <Mail size={17} /> Me contacter par e-mail
            </a>
            <a className="contact-email" href="mailto:Romeo.paris321@gmail.com">
              Romeo.paris321@gmail.com <ArrowUpRight size={16} />
            </a>
            <a className="contact-email" href="tel:+41766151828">
              <Phone size={16} /> +41 76 615 18 28
            </a>
            <p className="location">
              <MapPin size={15} /> Bulle · Fribourg · Suisse
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer section-frame">
        <div>
          <strong>Roméo Paris</strong>
          <span>Futur apprenti informaticien</span>
          <span>Bulle · Fribourg · Suisse</span>
        </div>
        <div>
          <a href="mailto:Romeo.paris321@gmail.com">E-mail</a>
          <a href="https://github.com/Romeostart" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="/CV-Romeo-Paris.pdf" download="CV-Romeo-Paris.pdf">
            CV
          </a>
        </div>
        <span>© 2026 Roméo Paris</span>
      </footer>
    </main>
  );
}
