import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Play, X } from 'lucide-react';
import './style.css';
const avatar = 'https://avatars.githubusercontent.com/u/118201498?v=4';
const copy = {
  it: {
    nav: ['Profilo', 'Competenze', 'Progetti', 'Percorso', 'Contatti'],
    eyebrow: 'Portfolio personale · 2026',
    role: 'Technology. Interaction. Digital Experiences.',
    intro: 'Studio informatica e progetto esperienze digitali, unendo pensiero analitico e attenzione per le persone.',
    scroll: 'Scopri il mio percorso',
    about: 'Un percorso tra tecnologia e comunicazione',
    aboutText: 'Sono uno studente di Informatica per la Comunicazione Digitale all’Università degli Studi di Milano. Mi interessa il punto d’incontro tra software, design e bisogni reali: trasformare problemi complessi in strumenti chiari e intuitivi.',
    education: 'Formazione',
    skills: 'Strumenti per dare forma alle idee',
    projects: 'Progetti selezionati',
    exp: 'Esperienze',
    contact: 'Costruiamo qualcosa di utile.',
    contactText: 'Per collaborazioni, opportunità o semplicemente per scambiare idee, scrivimi.',
    experiences: [
      [
        '2019 — 2020',
        'BCC Triuggio e della Valle del Lambro',
        'IT Support · Digitalizzazione documenti e supporto alle attività amministrative'
      ],
      [
        '2019',
        'Marano Ragazzi Spot Festival',
        'Videomaker · Produzione fotografica, video e contenuti backstage in team'
      ]
    ],
    projectDetails: [
      ['01', 'Geometry Run', 'Un gioco sviluppato in Racket in team: logica, movimento e sfide geometriche.', 'Racket · Team project'],
      ['02', 'M&L App', 'Progettazione di un’app mobile, dalla ricerca con interviste e sondaggi ai flussi UX e prototipi Figma.', 'Ricerca · UX · Figma'],
      ['03', 'SN4M · Social Network for Music', 'Una piattaforma per esplorare musica, cercare artisti e brani, creare playlist e unirsi a community.', 'JavaScript · Spotify API']
    ],
    footer: 'Progettato e sviluppato da Alessandro Lucchesi.'
  },
  en: {
    nav: ['About', 'Skills', 'Projects', 'Experience', 'Contact'],
    eyebrow: 'Personal portfolio · 2026',
    role: 'Technology. Interaction. Digital Experiences.',
    intro: 'I study computer science and design digital experiences, bringing analytical thinking together with care for people.',
    scroll: 'Explore my work',
    about: 'A path between technology and communication',
    aboutText: 'I study Digital Communication and Computer Science at the University of Milan. I’m interested in the meeting point between software, design and real needs: turning complex problems into clear, intuitive tools',
    education: 'Education',
    skills: 'Tools to bring ideas to life',
    projects: 'Selected projects',
    exp: 'Experience',
    contact: 'Let’s make something useful',
    contactText: 'For collaborations, opportunities or just to exchange ideas, get in touch',
    experiences: [
      [
        '2019 — 2020',
        'BCC Triuggio e della Valle del Lambro',
        'IT Support · Document digitization and administrative assistance'
      ],
      [
        '2019',
        'Marano Ragazzi Spot Festival',
        'Videomaker · Photography, video production and backstage content'
      ]
    ],
    projectDetails: [
      ['01', 'Geometry Run', 'A team-built game in Racket exploring game logic, movement and geometric challenges.', 'Racket · Team project'],
      ['02', 'M&L App', 'Mobile app design, from interview and survey research to UX flows and Figma prototypes.', 'Research · UX · Figma'],
      ['03', 'SN4M · Social Network for Music', 'A platform to explore music, search for artists and tracks, create playlists and join communities.', 'JavaScript · Spotify API']
    ],
    footer: 'Designed and developed by Alessandro Lucchesi.'
  }
};
const projectImages = [
  '/projects/geometry-run.png',
  '/projects/ml-app.webp',
  '/projects/spotify-community.png'
];
const geometryRunVideo = '/projects/geometry-run.mp4';
const geometryRunGithub = 'https://github.com/lucchal0/Geometry-Run';
const mlAppGithub = 'https://github.com/lucchal0/ML-APP';
const sn4mGithub = 'https://github.com/lucchal0/awc-spotify-music-community';
const sn4mLive = 'https://sn4m.netlify.app/';
const skillCategories = [
  {
    title: 'Linguaggi di programmazione',
    titleEn: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript', 'C', 'Go', 'Racket', 'SQL']
  },
  {
    title: 'Frontend & Web Development',
    titleEn: 'Frontend & Web Development',
    skills: ['HTML5', 'CSS3', 'React', 'Bootstrap']
  },
  {
    title: 'Backend & Database',
    titleEn: 'Backend & Database',
    skills: ['Node.js', 'REST APIs', 'PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    title: 'Tools & Version Control',
    titleEn: 'Tools & Version Control',
    skills: ['Git', 'GitHub', 'VS Code', 'JetBrains']
  },
  {
    title: 'Design & Prototyping',
    titleEn: 'Design & Prototyping',
    skills: ['Figma', 'LaTeX']
  }
];
function App() {
  const [lang, setLang] = useState('en');
  const [geometryVideoOpen, setGeometryVideoOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const videoRef = useRef(null);
  const t = copy[lang];
  useEffect(() => {
    if (geometryVideoOpen) {
      videoRef.current?.play().catch(() => { });
    }
    else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [geometryVideoOpen]);
  useEffect(() => {
    if (!geometryVideoOpen && !selectedImage)
      return;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setGeometryVideoOpen(false);
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [geometryVideoOpen, selectedImage]);
  const anchors = ['about', 'skills', 'projects', 'experience', 'contact'];
  const allSkills = skillCategories.flatMap(category => category.skills);
  return (<>
    <header className="topbar">
      <a className="wordmark" href="#top">AL<span>®</span></a>
      <nav>
        {t.nav.map((item, index) => (<a key={item} href={`#${anchors[index]}`}>{item}</a>))}
      </nav>
      <button className="language" onClick={() => setLang(lang === 'it' ? 'en' : 'it')} aria-label={lang === 'it' ? 'Switch to English' : 'Passa all’italiano'}>
        {lang === 'it' ? 'EN' : 'IT'} <span>↗</span>
      </button>
    </header>
    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot" />{t.eyebrow}</p>
          <h1>Alessandro<br /><em>Lucchesi</em></h1>
          <p className="hero-role">{t.role}</p>
          <p className="hero-intro">{t.intro}</p>
          <a className="scroll-link" href="#about">
            <ArrowDown size={15} />{t.scroll}
          </a>
        </div>
        <figure className="hero-art hero-photo" aria-label="Foto di Alessandro Lucchesi">
          <img className="hero-photo-image" src="public/projects/profile.jpg" alt="Alessandro Lucchesi" />
        </figure>
      </section>
      <section id="about" className="section about">
        <div className="section-label">01 / {t.nav[0]}</div>
        <div className="about-grid">
          <div>
            <h2>{t.about}</h2>
            <p className="body-copy">{t.aboutText}</p>
          </div>
          <div className="profile-block">
            <img src={avatar} alt="Ritratto provvisorio di Alessandro Lucchesi" />
            <span>AL · MILANO, IT</span>
          </div>
        </div>
        <div className="education">
          <span className="mini-label">{t.education}</span>
          <div>
            <strong>IIS Leonardo Da Vinci</strong>
            <span><h3>Diploma in Informatica</h3></span>
            <span>2016 — 2021 · Carate Brianza (IT)</span>
          </div>
          <div>
            <strong>Università della Svizzera italiana</strong>
            <span><h3>Bachelor of Informatics</h3></span>
            <span>2022 — 2024 · Lugano (CH)</span>
          </div>
          <div>
            <strong>Università degli Studi di Milano</strong>
            <span><h3>Informatica per la comunicazione digitale</h3></span>
            <span>2024 — oggi · Milano (IT)</span>
          </div>
        </div>
      </section>
      <section id="skills" className="section skills">
        <div className="section-label">02 / {t.nav[1]}</div>
        <h2>{t.skills}</h2>
        <div className="skill-categories">
          {skillCategories.map((category) => (<div className="skill-category" key={category.title}>
            <div className="skill-category-title">
              <h3>
                {lang === 'it' ? category.title : category.titleEn}
              </h3>
            </div>
            <div className="skill-list">
              {category.skills.map((skill) => (<span key={skill}>
                {skill}
              </span>))}
            </div>
          </div>))}
        </div>
      </section>
      <section id="projects" className="section projects">
        <div className="section-label">03 / {t.nav[2]}</div>
        <h2>{t.projects}</h2>
        <div className="project-list">
          {t.projectDetails.map(([num, title, desc, tags], index) => (<article className="project" key={title}>
            <span className="project-num">{num}</span>
            <div className="project-info">
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="tags">{tags}</span>
              {index === 0 && (<div className="project-actions">
                <button className="project-action" type="button" onClick={() => setGeometryVideoOpen(true)}>
                  <Play size={13} fill="currentColor" />
                  {lang === 'it' ? 'Guarda il video' : 'Watch video'}
                </button>
                <a className="project-action" href={geometryRunGithub} target="_blank" rel="noopener noreferrer">
                  <Github size={14} /> GitHub <ArrowUpRight size={12} />
                </a>
              </div>)}
              {index === 1 && (<div className="project-actions">
                <a className="project-action" href={mlAppGithub} target="_blank" rel="noopener noreferrer">
                  <Github size={14} /> GitHub <ArrowUpRight size={12} />
                </a>
              </div>)}
              {index === 2 && (<div className="project-actions">
                <a className="project-action" href={sn4mGithub} target="_blank" rel="noopener noreferrer">
                  <Github size={14} /> GitHub <ArrowUpRight size={12} />
                </a>
                <a className="project-action" href={sn4mLive} target="_blank" rel="noopener noreferrer">
                  {lang === 'it' ? 'Demo live' : 'Live demo'}
                  <ArrowUpRight size={12} />
                </a>
              </div>)}
            </div>
            <button className="project-art-button" type="button" onClick={() => setSelectedImage(projectImages[index])} aria-label={`${lang === 'it' ? 'Ingrandisci immagine' : 'Enlarge image'}: ${title}`}>
              <img className="project-art" src={projectImages[index]} alt={`${title} — anteprima del progetto`} loading="lazy" decoding="async" />
            </button>
          </article>))}
        </div>
      </section>
      <section id="experience" className="section experience">
        <div className="section-label">04 / {t.nav[3]}</div>
        <h2>{t.exp}</h2>
        <div className="timeline">
          {t.experiences.map(([date, org, desc]) => (<article key={org}>
            <time>{date}</time>
            <div>
              <h3>{org}</h3>
              <p>{desc}</p>
              {org === 'Marano Ragazzi Spot Festival' && (<div className="project-actions">
                <a className="project-action" href="https://www.calameo.com/books/005455203bd5ec5a0ac14" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight size={14} />
                  {lang === 'it' ? 'Catalogo MRSF 2019' : 'MRSF 2019 Catalogue'}
                </a>
              </div>)}
            </div>
            <span className="timeline-mark" />
          </article>))}
        </div>
      </section>
      <section id="languages" className="section languages">
        <div className="section-label">
          05 / {lang === 'it' ? 'Lingue' : 'Languages'}
        </div>
        <h2>
          {lang === 'it'
            ? 'Le lingue che parlo'
            : 'Languages I speak'}
        </h2>
        <div className="languages-list">
          <div>
            <strong>Italiano</strong>
            <span>
              {lang === 'it' ? 'Madrelingua' : 'Native'}
            </span>
          </div>
          <div>
            <strong>English</strong>
            <span>
              B2 · {lang === 'it'
                ? 'Certificazione prevista · Gennaio 2027'
                : 'Certification expected · January 2027'}
            </span>
          </div>
        </div>
      </section>
      <section id="contact" className="section contact">
        <div className="section-label">06 / {t.nav[4]}</div>
        <h2>{t.contact}</h2>
        <p>{t.contactText}</p>
        <a className="email-link" href="mailto:alex2002.lu@gmail.com">
          alex2002.lu@gmail.com <ArrowUpRight size={22} />
        </a>
        <div className="socials">
          <a href="https://www.linkedin.com/in/alessandro-lucchesi-375534233/" target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
          </a>
          <a href="https://github.com/lucchal0" target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub <ArrowUpRight size={13} />
          </a>
          <a href="mailto:alex2002.lu@gmail.com">
            <Mail size={16} /> Email <ArrowUpRight size={13} />
          </a>
        </div>
      </section>
    </main>
    {selectedImage && (<div className="image-modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget)
        setSelectedImage(null);
    }}>
      <section className="image-modal" role="dialog" aria-modal="true" aria-label={lang === 'it' ? 'Immagine ingrandita' : 'Enlarged image'}>
        <button className="video-close image-modal-close" type="button" onClick={() => setSelectedImage(null)} aria-label={lang === 'it' ? 'Chiudi immagine' : 'Close image'}>
          <X size={20} />
        </button>
        <img src={selectedImage} alt={lang === 'it' ? 'Anteprima ingrandita del progetto' : 'Enlarged project preview'} />
      </section>
    </div>)}
    {geometryVideoOpen && (<div className="video-modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget)
        setGeometryVideoOpen(false);
    }}>
      <section className="video-modal" role="dialog" aria-modal="true" aria-label={lang === 'it' ? 'Video Geometry Run' : 'Geometry Run video'}>
        <div className="video-modal-header">
          <span>GEOMETRY RUN · GAMEPLAY</span>
          <button className="video-close" type="button" onClick={() => setGeometryVideoOpen(false)} aria-label={lang === 'it' ? 'Chiudi video' : 'Close video'}>
            <X size={20} />
          </button>
        </div>
        <video ref={videoRef} controls autoPlay playsInline preload="auto">
          <source src={geometryRunVideo} type="video/mp4" />
          {lang === 'it'
            ? 'Il browser non supporta la riproduzione video.'
            : 'Your browser does not support video playback.'}
        </video>
      </section>
    </div>)}
    <footer>
      <a className="wordmark" href="#top">AL<span>®</span></a>
      <span>{t.footer}</span>
      <span>© 2026</span>
    </footer>
  </>);
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
