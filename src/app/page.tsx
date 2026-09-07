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
  ScanLine,
  Terminal,
} from "lucide-react";
import { SnakeGame } from "@/components/snake-game";

const projects = [
  { number: "01", title: "Portfolio personnel", description: "Je construis ce site pour apprendre à organiser une interface, présenter un parcours et transformer une idée en projet concret.", objective: "Créer un espace clair pour montrer ce que j’apprends.", learned: "HTML · CSS · JavaScript · organisation web", tags: ["HTML", "CSS", "JavaScript"], tone: "mint" },
  { number: "02", title: "Bot Discord", description: "Un projet pour découvrir les commandes, les API et l’automatisation à travers un programme qui réagit aux actions des utilisateurs.", objective: "Comprendre comment un programme communique avec un service externe.", learned: "Programmation · API · logique · automatisation", tags: ["Bot", "API", "Logique"], tone: "sand" },
  { number: "03", title: "Projets Python", description: "Une série de petits programmes qui me servent à pratiquer régulièrement et à transformer chaque nouvelle notion en exercice.", objective: "Progresser par étapes et apprendre à résoudre des problèmes.", learned: "Python · logique · fonctions · fichiers", tags: ["Python", "Fonctions", "Fichiers"], tone: "blue" },
  { number: "04", title: "Linux & réseaux", description: "Des expérimentations autour des systèmes, des machines virtuelles et des premières notions de réseau, documentées au fil de mes découvertes.", objective: "Mieux comprendre ce qui se passe derrière une application.", learned: "Linux · systèmes · réseau · machines virtuelles", tags: ["Linux", "Systèmes", "Réseaux"], tone: "mint" },
  { number: "05", title: "Programmation Roblox", description: "Ma première rencontre avec la programmation : créer des interactions et des scripts avec Luau dans Roblox Studio.", objective: "Découvrir la logique de programmation en construisant quelque chose de visible.", learned: "Luau · logique · scripts · création de jeux", tags: ["Luau", "Scripts", "Roblox"], tone: "sand" },
];

const learningTopics = [
  { title: "Python", stage: "Débutant", detail: "Fonctions, logique, fichiers" },
  { title: "HTML / CSS", stage: "Bases", detail: "Structure, mise en page, responsive" },
  { title: "JavaScript", stage: "Découverte", detail: "Interactions et logique web" },
  { title: "Linux", stage: "Découverte", detail: "Systèmes, commandes, environnement" },
  { title: "Réseaux", stage: "Découverte", detail: "Premières notions et vocabulaire" },
  { title: "Luau", stage: "Bases", detail: "Scripts et interactions Roblox" },
];

const interests = ["Développement", "Systèmes", "Réseaux", "Support", "Automatisation", "Nouvelles technologies"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#accueil" aria-label="Accueil du portfolio de Roméo Paris">RP<span>.</span></a>
        <nav className="site-nav" aria-label="Navigation principale"><a href="#projets">Projets</a><a href="#parcours">Parcours</a><a href="#competences">Compétences</a><a href="#apropos">À propos</a><a href="#contact">Contact</a></nav>
        <a className="header-cv" href="/CV-Romeo-Paris.pdf" download="CV-Romeo-Paris.pdf">CV <Download size={14} /></a>
      </header>

      <section className="hero section-frame" id="accueil">
        <div className="hero-copy"><p className="eyebrow">Dossier de candidature · Septembre 2027</p><h1>Je cherche où <em>continuer à apprendre.</em></h1><p className="hero-summary">Je m’appelle Roméo Paris. J’ai 16 ans, j’habite à Bulle et je souhaite intégrer un <strong>CFC d’informaticien</strong> dans la région de Fribourg. Je construis des projets personnels pour découvrir le métier avant de le pratiquer en entreprise.</p><div className="hero-actions"><a className="primary-link" href="#projets">Voir mes projets <ArrowDownRight size={17} /></a><a className="text-link" href="/CV-Romeo-Paris.pdf" download="CV-Romeo-Paris.pdf">Télécharger mon CV <Download size={16} /></a><a className="text-link" href="#contact">Échanger avec moi <ArrowUpRight size={16} /></a></div></div>
        <aside className="hero-proof" aria-label="Objectif professionnel"><div className="proof-topline"><span className="proof-mark"><Terminal size={21} /></span><span className="proof-index">FICHE 01 / 05</span></div><p className="proof-label">Objectif professionnel</p><p className="proof-title">CFC Informatique<br />Septembre 2027</p><p className="proof-detail">Place d’apprentissage, stage ou journée de découverte dans la région de Fribourg et alentours.</p><div className="proof-footer"><span>16 ans</span><span>Bulle · Suisse</span></div></aside>
      </section>

      <section className="signal-strip" aria-label="Résumé du profil"><div><span className="signal-number">01</span><span>curieux et motivé</span></div><div><span className="signal-number">02</span><span>projets personnels</span></div><div><span className="signal-number">03</span><span>apprentissage honnête</span></div></section>

      <section className="focus-section section-frame" id="recherche"><div className="focus-grid"><div><p className="eyebrow">Ce que je recherche</p><h2>Un premier terrain pour apprendre le métier.</h2></div><div className="focus-copy"><p>Je souhaite rejoindre une équipe qui pourra m’accompagner dans la découverte de l’informatique professionnelle, avec de la pratique, des questions et des responsabilités adaptées à mon niveau.</p><div className="interest-grid">{interests.map((interest) => <span key={interest}>{interest}</span>)}</div><a className="text-link" href="#contact">Parler d’une opportunité <ArrowUpRight size={16} /></a></div></div></section>

      <section className="work-section section-frame" id="projets"><div className="section-heading"><div><p className="eyebrow">01 / Projets personnels</p><h2>Apprendre en construisant.</h2></div><p>Chaque projet est une étape de découverte. Je préfère montrer ce que j’essaie, ce que je comprends et ce que je dois encore apprendre.</p></div><div className="project-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.number}><div className="project-card-top"><span className="project-number">{project.number}</span><ScanLine size={17} /></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-detail"><strong>Objectif</strong><span>{project.objective}</span><strong>Notions travaillées</strong><span>{project.learned}</span></div></article>)}</div></section>

      <section className="learning-section section-frame" id="competences"><div className="section-heading"><div><p className="eyebrow">02 / En apprentissage</p><h2>Des bases, pas des promesses.</h2></div><p>Je situe honnêtement mon niveau actuel. L’objectif d’un CFC est justement de transformer ces découvertes en compétences professionnelles.</p></div><div className="learning-grid">{learningTopics.map((topic, index) => <article className="learning-card" key={topic.title}><p className="learning-number">0{index + 1} / EN COURS</p><h3>{topic.title}</h3><p>{topic.detail}</p><div className="learning-stage"><span>{topic.stage}</span><span>En progression</span></div></article>)}</div></section>

      <section className="about-section section-frame" id="parcours"><div className="about-grid"><div><p className="eyebrow">03 / Parcours</p><h2>Un parcours qui m’a appris à être précis.</h2></div><div className="timeline"><article className="timeline-item"><span className="timeline-year">Aujourd’hui</span><div><h3>Projet professionnel informatique</h3><p>Je développe mes projets personnels et je prépare mon entrée en CFC d’informaticien pour septembre 2027.</p></div></article><article className="timeline-item"><span className="timeline-year">Expérience</span><div><h3>Formation professionnelle en électronique</h3><p>Une expérience qui m’a permis de découvrir le monde du travail, le travail en équipe et l’importance de la précision.</p></div></article><article className="timeline-item"><span className="timeline-year">Premières découvertes</span><div><h3>HFR Fribourg · FutureKids</h3><p>Des expériences qui m’ont fait découvrir un environnement professionnel, l’organisation et les premières bases de la création numérique.</p></div></article></div></div></section>

      <section className="motivation-section section-frame"><div className="motivation-card"><p className="eyebrow">Pourquoi l’informatique ?</p><h2>Partir d’une idée et chercher une solution concrète.</h2><p>Ce qui me plaît dans l’informatique, c’est de pouvoir partir d’un problème ou d’une idée et chercher une solution concrète.</p><p>J’aime expérimenter, comprendre comment les choses fonctionnent et apprendre de mes erreurs. Mes projets personnels me permettent de découvrir progressivement différents domaines et de mieux comprendre dans quelle direction je souhaite évoluer.</p></div></section>

      <section className="about-section about-profile section-frame" id="apropos"><div className="about-grid"><div><p className="eyebrow">04 / À propos</p><h2>Quelqu’un de curieux, sociable et persévérant.</h2></div><div className="about-copy"><p>Lorsque quelque chose m’intéresse, j’aime chercher par moi-même, expérimenter et comprendre pourquoi une solution fonctionne.</p><p>Je suis encore au début de mon parcours informatique et je ne prétends pas tout connaître. Je cherche justement une formation qui me permettra d’apprendre, de progresser et de transformer progressivement ma passion en compétences professionnelles.</p><div className="values-list"><span><Check size={15} /> Curiosité</span><span><Check size={15} /> Persévérance</span><span><Check size={15} /> Esprit d’équipe</span></div></div></div></section>

      <section className="github-section section-frame" id="github"><div className="github-card"><div><p className="eyebrow">Mon GitHub</p><h2>Voir les projets au-delà des mots.</h2><p>Je publie progressivement mes projets et mes expérimentations pour garder une trace de mon apprentissage et montrer concrètement ce que je réalise.</p></div><a className="github-action github-link" href="https://github.com/Romeostart" target="_blank" rel="noreferrer"><Code2 size={27} /><span className="text-link">Voir mon GitHub <ExternalLink size={15} /></span><small>github.com/Romeostart</small></a></div></section>

      <section className="cv-section section-frame" id="cv"><div className="cv-card"><div><p className="eyebrow">Document de candidature</p><h2>Le parcours complet tient dans mon CV.</h2><p>Formation, expériences, coordonnées et projets réunis dans un document à télécharger.</p></div><a className="primary-link" href="/CV-Romeo-Paris.pdf" download="CV-Romeo-Paris.pdf">Télécharger mon CV <Download size={17} /></a></div></section>

      <section className="game-section section-frame" id="jeu"><div className="game-intro"><p className="eyebrow">05 / Démonstration</p><h2>Un petit projet pour rendre l’apprentissage visible.</h2><p>J’ai ajouté ce Snake pour montrer une première approche de la logique de programmation et rendre le portfolio un peu plus interactif.</p><p className="project-status">Projet d’apprentissage · passage à travers les murs</p><span className="text-link text-link-disabled">Code bientôt disponible <ArrowUpRight size={16} /></span></div><SnakeGame /></section>

      <section className="contact-section" id="contact"><div className="section-frame contact-inner"><div><p className="eyebrow">Contact</p><h2>Parlons de mon futur apprentissage.</h2><p className="contact-copy">Vous cherchez un apprenti informaticien pour septembre 2027 ? Je serais heureux de pouvoir échanger avec vous et de vous présenter mon parcours.</p></div><div className="contact-actions"><a className="primary-link" href="mailto:Romeo.paris321@gmail.com"><Mail size={17} /> Me contacter par e-mail</a><a className="contact-email" href="mailto:Romeo.paris321@gmail.com">Romeo.paris321@gmail.com <ArrowUpRight size={16} /></a><a className="contact-email" href="tel:+41766151828"><Phone size={16} /> +41 76 615 18 28</a><p className="location"><MapPin size={15} /> Bulle · Fribourg · Suisse</p></div></div></section>

      <footer className="site-footer section-frame"><div><strong>Roméo Paris</strong><span>Futur apprenti informaticien · CFC 2027</span><span>Bulle · Fribourg · Suisse</span></div><div><a href="mailto:Romeo.paris321@gmail.com">E-mail</a><a href="https://github.com/Romeostart" target="_blank" rel="noreferrer">GitHub</a><a href="/CV-Romeo-Paris.pdf" download="CV-Romeo-Paris.pdf">CV</a></div><span>© 2026 Roméo Paris</span></footer>
    </main>
  );
}
