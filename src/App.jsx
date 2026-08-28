import { useState } from "react";

const games = [
  {
    id: "diner",
    number: "01",
    category: "CSS",
    title: "CSS Diner",
    icon: "/favicons/css-diner.png",
    topic: "SELECTORS",
    level: "START HER",
    url: "https://flukeout.github.io/",
    summary: "Lær at pege på de helt rigtige HTML-elementer. Du vælger tallerkener og mad med CSS-selectors.",
    lesson: "Selectors fortæller CSS, hvilke elementer der skal have en bestemt stil. Du kan vælge efter tag, class, id eller kombinere flere selectors.",
    example: "p { color: lime; }",
    cta: "ÅBN CSS DINER",
  },
  {
    id: "defense",
    number: "02",
    category: "CSS",
    title: "Flexbox Defense",
    icon: "/favicons/flexbox-defense.ico",
    topic: "FLEXBOX",
    level: "BYG ET FORSVAR",
    url: "http://www.flexboxdefense.com/",
    summary: "Placér dine forsvarstårne med Flexbox, før fjenderne når frem.",
    lesson: "Flexbox placerer elementer i rækker eller kolonner. Du træner blandt andet display, justify-content, align-items og flex-direction.",
    example: ".forsvar { display: flex; justify-content: center; }",
    cta: "ÅBN FLEXBOX DEFENSE",
  },
  {
    id: "froggy",
    number: "03",
    category: "CSS",
    title: "Flexbox Froggy",
    icon: "/favicons/flexbox-froggy.ico",
    topic: "FLEXBOX",
    level: "24 BANER",
    url: "http://flexboxfroggy.com/#da",
    summary: "Hjælp frøerne hen på åkanderne gennem 24 korte Flexbox-baner på dansk.",
    lesson: "Hver bane giver dig en lille opgave. Du ser med det samme, hvordan din Flexbox-kode flytter frøerne.",
    example: ".dam { display: flex; align-items: flex-end; }",
    cta: "ÅBN FLEXBOX FROGGY",
  },
  {
    id: "garden",
    number: "04",
    category: "CSS",
    title: "Grid Garden",
    icon: "/favicons/grid-garden.ico",
    topic: "CSS GRID",
    level: "28 BANER",
    url: "https://codepip.com/games/grid-garden/",
    summary: "Vand gulerødderne og fjern ukrudtet gennem 28 baner med CSS Grid.",
    lesson: "CSS Grid deler en side op i rækker og kolonner. Det er smart, når du vil bygge større layouts med præcis placering.",
    example: ".have { display: grid; grid-template-columns: 1fr 1fr; }",
    cta: "ÅBN GRID GARDEN",
  },
  {
    id: "flex-adventure",
    number: "05",
    category: "CSS",
    title: "Flex Box Adventure",
    icon: "/favicons/coding-fantasy.png",
    topic: "FLEXBOX",
    level: "24 BANER",
    url: "https://codingfantasy.com/games/flexboxadventure",
    summary: "Brug Flexbox til at føre din helt gennem 24 små eventyrbaner.",
    lesson: "Du øver placering, retning og afstand med blandt andet justify-content, align-items og flex-direction.",
    example: ".helte { display: flex; justify-content: space-between; }",
    cta: "ÅBN FLEX BOX ADVENTURE",
  },
  {
    id: "grid-attack",
    number: "06",
    category: "CSS",
    title: "Grid Attack",
    icon: "/favicons/coding-fantasy.png",
    topic: "CSS GRID",
    level: "80 BANER",
    url: "https://codingfantasy.com/games/css-grid-attack",
    summary: "Lær CSS Grid gennem et stort baneeventyr med monstre og belønninger.",
    lesson: "Du bygger layouts med rækker, kolonner og områder. Spillet går fra små øvelser til mere virkelige designs.",
    example: ".verden { display: grid; grid-template-columns: repeat(3, 1fr); }",
    cta: "ÅBN GRID ATTACK",
  },
  {
    id: "blockly",
    number: "07",
    category: "JAVASCRIPT",
    title: "Blockly Games",
    icon: "/favicons/blockly-games.ico",
    topic: "JAVASCRIPT",
    level: "START MED BLOKKE",
    url: "https://blockly.games/",
    summary: "Løs små gåder med kodeblokke, og se hvordan blokkene bliver til JavaScript.",
    lesson: "Du lærer rækkefølge, løkker og funktioner uden først at skulle huske alle tegnene i koden.",
    example: "for (let i = 0; i < 4; i++) { moveForward(); }",
    cta: "ÅBN BLOCKLY GAMES",
  },
  {
    id: "game-lab",
    number: "08",
    category: "JAVASCRIPT",
    title: "Code.org Game Lab",
    icon: "/favicons/game-lab.ico",
    topic: "JAVASCRIPT",
    level: "LAV DIT EGET SPIL",
    url: "https://code.org/en-US/tools/game-lab",
    summary: "Design figurer, animationer og små spil med blokke eller skrevet JavaScript.",
    lesson: "Du arbejder med spillets regler, bevægelse og animation og kan dele det, du bygger, med andre.",
    example: "function draw() { background(\"skyblue\"); }",
    cta: "ÅBN GAME LAB",
  },
  {
    id: "codecombat",
    number: "09",
    category: "PYTHON",
    title: "CodeCombat",
    icon: "/favicons/codecombat.png",
    topic: "PYTHON + JAVASCRIPT",
    level: "KODE-EVENTYR",
    url: "https://codecombat.com/",
    summary: "Styr en helt gennem et eventyr ved at skrive rigtig Python- eller JavaScript-kode.",
    lesson: "Du lærer kommandoer, variabler og løkker. Startbanerne er begyndervenlige, men en konto kan være nødvendig.",
    example: "hero.moveRight()",
    cta: "ÅBN CODECOMBAT",
  },
];

const categories = ["CSS", "JAVASCRIPT", "PYTHON"];

function SiteHeader({ activePage }) {
  return (
    <header className="system-bar" aria-label="Sidehoved">
      <a className="brand" href="/" aria-label="VUSK Dev, gå til forsiden">VUSK_DEV</a>
      <nav className="main-nav" aria-label="Hovedmenu">
        <a className={activePage === "home" ? "is-active" : ""} href="/">FORSIDE</a>
        <a className={activePage === "css" ? "is-active" : ""} href="/css-spil">KODE-SPIL</a>
      </nav>
      <span className="status" aria-label="Status: klar"><span className="status-dot" aria-hidden="true" /> KLAR</span>
    </header>
  );
}

function SiteFooter() {
  return <footer><span>VIBORG UNGDOMSSKOLE</span><span>WEB_OG_SPILDESIGN // 2026</span></footer>;
}

function HomePage() {
  return (
    <div className="site-shell">
      <SiteHeader activePage="home" />
      <main id="top">
        <section className="home-hero" aria-labelledby="home-title">
          <p className="prompt-line" aria-hidden="true">elev@vusk:~$ velkommen<span className="cursor" /></p>
          <p className="eyebrow">FRITIDSAKTIVITET // 2026–2027</p>
          <h1 id="home-title">WEB- OG<br />SPILDESIGN</h1>
          <p className="hero-copy">Byg hjemmesider, små apps og computerspil. Du behøver ikke kunne programmere på forhånd—kun være nysgerrig.</p>
          <div className="hero-actions">
            <a className="primary-button" href="/css-spil">[ GÅ TIL KODE-SPIL ]</a>
            <a className="secondary-link" href="https://viborgungdomsskole.dk/tilbud/?id=b90988c3-06f1-44dc-93cf-33e643e72f8e" target="_blank" rel="noreferrer">TILBAGE TIL OVERSIGTEN --&gt;</a>
          </div>
        </section>

        <section className="course-facts" aria-label="Praktisk information">
          <div><span>PERIODE</span><strong>17/09/2026–16/03/2027</strong></div>
          <div><span>TID</span><strong>TORSDAG 16.30–19.00</strong></div>
          <div><span>STED</span><strong>MERCANTEC</strong></div>
          <div><span>LEDIGE PLADSER</span><strong className="availability">11 / 20</strong></div>
        </section>

        <section className="welcome-section" aria-labelledby="welcome-heading">
          <div className="welcome-heading">
            <p className="prompt-label">~/om-holdet</p>
            <h2 id="welcome-heading">VELKOMMEN PÅ HOLDET</h2>
          </div>
          <div className="welcome-copy">
            <p className="lead">Har du nogensinde tænkt over, hvordan hjemmesider, apps og computerspil bliver lavet?</p>
            <p>På Web- og spiludvikling bygger du dine egne digitale projekter gennem praktisk programmering og kreativ problemløsning. Vi arbejder med moderne webteknologier og laver ting, du kan dele med venner og familie.</p>
            <p>Undervejs lærer du om programmering, design, kunstig intelligens og digitale værktøjer. Fokus er på at skabe noget selv, eksperimentere med idéer og have det sjovt med teknologi.</p>
            <p className="no-experience">[ OK ] INGEN ERFARING NØDVENDIG</p>
          </div>
        </section>

        <section className="start-panel" aria-labelledby="start-heading">
          <div>
            <p className="prompt-label">[ FØRSTE OPGAVE ]</p>
            <h2 id="start-heading">KLAR TIL AT GÅ I GANG?</h2>
            <p>Start med CSS-spillene og lær at styre farver, placering og layout.</p>
          </div>
          <a className="primary-button" href="/css-spil">[ START CSS ]</a>
        </section>

        <section className="contact-line" aria-label="Kontakt og opstart">
          <p><span>START:</span> UGE 38 · VI FØLGER FOLKESKOLERNES FERIER</p>
          <p><span>KONTAKT:</span> ANDERS MØLBAK · <a href="tel:+4520874168">20 87 41 68</a></p>
        </section>
      </main>
      <SiteFooter />
      <div className="scanlines" aria-hidden="true" />
    </div>
  );
}

function CssGamesPage() {
  const [activeCategory, setActiveCategory] = useState("CSS");
  const [activeGameId, setActiveGameId] = useState("diner");
  const visibleGames = games.filter((game) => game.category === activeCategory);
  const activeGame = visibleGames.find((game) => game.id === activeGameId) ?? visibleGames[0];
  const activeIndex = visibleGames.findIndex((game) => game.id === activeGame.id);

  function selectGame(gameId) {
    setActiveGameId(gameId);
    document.querySelector("#spil")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function selectCategory(category) {
    const firstGame = games.find((game) => game.category === category);
    setActiveCategory(category);
    setActiveGameId(firstGame.id);
  }

  return (
    <div className="site-shell">
      <SiteHeader activePage="css" />

      <main id="top">
        <section className="hero" aria-labelledby="page-title">
          <p className="prompt-line" aria-hidden="true">elev@vusk:~$ start kode-spil<span className="cursor" /></p>
          <p className="eyebrow">LÆR KODE VED AT SPILLE</p>
          <h1 id="page-title">KODE. PRØV.<br />SE HVAD DER SKER.</h1>
          <p className="hero-copy">Ni begyndervenlige spil om CSS, JavaScript og Python. Vælg et sprog, og tag ét spil ad gangen.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#spil">[ SE DE 9 SPIL ]</a>
            <span className="time-note">CA. 10–20 MIN. PR. SPIL</span>
          </div>
        </section>

        <section className="games-section" id="spil" aria-labelledby="games-heading">
          <div className="section-heading">
            <div><p className="prompt-label">~/css/rejsen</p><h2 id="games-heading">VÆLG DIT SPIL</h2></div>
            <p className="counter" aria-live="polite">[{String(activeIndex + 1).padStart(2, "0")}/{String(visibleGames.length).padStart(2, "0")}]</p>
          </div>

          <div className="category-tabs" aria-label="Vælg sprog">
            {categories.map((category) => (
              <button className={`category-tab ${category === activeCategory ? "is-active" : ""}`} key={category} type="button" onClick={() => selectCategory(category)} aria-pressed={category === activeCategory}>
                {category}
              </button>
            ))}
          </div>

          <div className="game-layout">
            <nav className="game-list" aria-label={`${activeCategory}-spil`}>
              {visibleGames.map((game, index) => (
                <button className={`game-tab ${index === activeIndex ? "is-active" : ""}`} key={game.id} type="button" onClick={() => selectGame(game.id)} aria-current={index === activeIndex ? "step" : undefined}>
                  <span className="game-number">{game.number}</span>
                  <span className="game-icon-shell" aria-hidden="true"><img src={game.icon} alt="" /></span>
                  <span className="game-tab-copy"><strong>{game.title}</strong><small>{game.topic}</small></span>
                  <span className="tab-marker" aria-hidden="true">{index === activeIndex ? "<" : ">"}</span>
                </button>
              ))}
            </nav>

            <article className="game-detail" aria-labelledby={`${activeGame.id}-title`}>
              <div className="window-bar"><span>SPIL_{activeGame.number}.TXT</span><span className="level">{activeGame.level}</span></div>
              <div className="game-content">
                <p className="topic">{activeGame.topic}</p>
                <h3 id={`${activeGame.id}-title`}>{activeGame.title}</h3>
                <p className="summary">{activeGame.summary}</p>
                <div className="lesson-block"><p className="lesson-title">HVAD LÆRER DU?</p><p>{activeGame.lesson}</p></div>
                <pre className="code-example" aria-label="Eksempel på kode"><code>{activeGame.example}</code></pre>
                <div className="detail-actions">
                  <a className="primary-button" href={activeGame.url} target="_blank" rel="noreferrer">[ {activeGame.cta} ]</a>
                  {activeIndex < visibleGames.length - 1 && <button className="text-button" type="button" onClick={() => selectGame(visibleGames[activeIndex + 1].id)}>NÆSTE SPIL --&gt;</button>}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="help-section" aria-labelledby="help-heading">
          <p className="prompt-label">[ TIP ]</p>
          <h2 id="help-heading">SIDDER DU FAST?</h2>
          <p>Prøv dig frem, læs spillets hint, og spørg en klassekammerat. Fejl er en del af at lære at kode.</p>
          <a href="#spil">&gt; VÆLG ET SPIL IGEN</a>
        </section>
      </main>

      <SiteFooter />
      <div className="scanlines" aria-hidden="true" />
    </div>
  );
}

export function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return path === "/css-spil" ? <CssGamesPage /> : <HomePage />;
}
