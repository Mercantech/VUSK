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

const aiLessons = [
  {
    id: "train",
    number: "01",
    title: "Lær maskinen",
    topic: "BILLEDER + DATA",
    duration: "2 TIMER + PAUSE",
    summary: "Træn en AI til at kende forskel på to helt almindelige ting — og til at opdage, når ingen af dem er der.",
    goal: "Jeg kan forklare, at AI lærer fra eksempler — ikke ved at gætte eller tænke som et menneske.",
    steps: [
      "Vælg Image Project i Teachable Machine.",
      "Lav to klasser til jeres ting og en tredje, der hedder INGEN.",
      "Tag cirka lige mange billeder fra forskellige vinkler og afstande.",
      "Træn modellen, og test den med helt nye billeder.",
    ],
    challenge: "Byt plads, lys eller baggrund. Virker modellen stadig?",
    reflection: "Hvilke eksempler hjalp modellen mest?",
  },
  {
    id: "improve",
    number: "02",
    title: "Gør den bedre",
    topic: "STEN · SAKS · PAPIR",
    duration: "2 TIMER + PAUSE",
    summary: "Byg en model med tre håndtegn, og undersøg hvorfor en AI nogle gange tager fejl.",
    goal: "Jeg kan forbedre en model ved at bruge flere og mere forskellige træningseksempler.",
    steps: [
      "Lav klasserne STEN, SAKS, PAPIR og INGEN HÅND.",
      "Saml billeder med forskellige hænder, vinkler og baggrunde.",
      "Træn modellen, og lad en anden gruppe teste den.",
      "Find dens svageste klasse, tilføj bedre data, og træn igen.",
    ],
    challenge: "Lav først med vilje en dårlig model. Kan I forklare præcis, hvorfor den fejler?",
    reflection: "Er 90 % sikkerhed altid det samme som et rigtigt svar?",
  },
  {
    id: "control",
    number: "03",
    title: "Bliv controlleren",
    topic: "KROP + BEVÆGELSE",
    duration: "2 TIMER + PAUSE",
    summary: "Træn tre kropspositioner, der kan bruges som VENSTRE, STOP og HØJRE i et fremtidigt spil.",
    goal: "Jeg kan bruge en AI-model som input og forklare, hvordan dens svar kan styre et spil.",
    steps: [
      "Vælg Pose Project, og lav tre tydelige positioner.",
      "Saml lige mange eksempler uden ansigter og personlige oplysninger.",
      "Træn modellen, og test den med flere personer.",
      "Eksportér modellinket, og sæt det ind i underviserens færdige spilskabelon.",
    ],
    challenge: "Find tre positioner, som modellen sjældent forveksler — også når en ny elev prøver.",
    reflection: "Hvordan kunne modellens svar flytte en figur i et spil?",
  },
];

function SiteHeader({ activePage }) {
  return (
    <header className="system-bar" aria-label="Sidehoved">
      <a className="brand" href="/" aria-label="VUSK Dev, gå til forsiden">VUSK_DEV</a>
      <nav className="main-nav" aria-label="Hovedmenu">
        <a className={activePage === "home" ? "is-active" : ""} href="/">FORSIDE</a>
        <a className={activePage === "css" ? "is-active" : ""} href="/css-spil">SPIL</a>
        <a className={activePage === "roblox" ? "is-active" : ""} href="/roblox">ROBLOX</a>
        <a className={activePage === "ai" ? "is-active" : ""} href="/ai-lab">AI-LAB</a>
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

function RobloxPage() {
  return (
    <div className="site-shell">
      <SiteHeader activePage="roblox" />

      <main id="top">
        <section className="roblox-hero" aria-labelledby="roblox-title">
          <p className="prompt-line" aria-hidden="true">elev@vusk:~$ start roblox-studio<span className="cursor" /></p>
          <p className="eyebrow">ROBLOX STUDIO // LUAU</p>
          <h1 id="roblox-title">BYG ET SPIL.<br />LÆR AT KODE.</h1>
          <p className="hero-copy">I Roblox Studio bygger du en 3D-verden og bruger kode til at få døre, point, fælder og figurer til at virke.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#roblox-start">[ START MED 4 TRIN ]</a>
            <a className="secondary-link" href="https://create.roblox.com/docs/studio/setup" target="_blank" rel="noreferrer">HENT ROBLOX STUDIO --&gt;</a>
          </div>
        </section>

        <section className="roblox-intro" aria-labelledby="language-heading">
          <div className="section-heading">
            <div><p className="prompt-label">~/roblox/grundviden</p><h2 id="language-heading">HVILKET SPROG BRUGER MAN?</h2></div>
            <p className="counter">[ LUAU ]</p>
          </div>
          <div className="roblox-intro-grid">
            <article className="roblox-feature-card is-highlighted">
              <p className="topic">KODESPROGET</p>
              <h3>LUAU</h3>
              <p>Luau er sproget, der fortæller spillet, hvad der skal ske. Det er bygget videre på sproget Lua og lavet til Roblox.</p>
              <code>print("Hej Roblox!")</code>
            </article>
            <article className="roblox-feature-card">
              <p className="topic">PROGRAMMET</p>
              <h3>ROBLOX STUDIO</h3>
              <p>Studio er det gratis program til Windows og Mac, hvor du bygger, skriver kode og tester dit spil.</p>
              <a href="https://create.roblox.com/docs/studio" target="_blank" rel="noreferrer">LÆS OM STUDIO --&gt;</a>
            </article>
          </div>
        </section>

        <section className="roblox-steps" id="roblox-start" aria-labelledby="steps-heading">
          <div className="section-heading">
            <div><p className="prompt-label">~/roblox/første-spil</p><h2 id="steps-heading">FRA IDÉ TIL SPIL</h2></div>
            <p className="counter">[ 4 TRIN ]</p>
          </div>
          <ol className="step-list">
            <li><span>01</span><div><strong>BYG</strong><p>Lav en verden med klodser, farver og figurer.</p></div></li>
            <li><span>02</span><div><strong>TILFØJ ET SCRIPT</strong><p>Et Script er stedet, hvor din kode bor.</p></div></li>
            <li><span>03</span><div><strong>SKRIV LUAU</strong><p>Fortæl spillet, hvad der skal ske.</p></div></li>
            <li><span>04</span><div><strong>TRYK PLAY</strong><p>Test, find fejl, ret koden og prøv igen.</p></div></li>
          </ol>
        </section>

        <section className="roblox-code-section" aria-labelledby="code-heading">
          <div className="code-window">
            <div className="window-bar"><span>FØRSTE_SCRIPT.LUAU</span><span className="level">BEGYNDER</span></div>
            <div className="roblox-code-content">
              <div className="code-instructions">
                <p className="topic">DIN FØRSTE KODE</p>
                <h2 id="code-heading">FÅ EN KLODS TIL AT SKIFTE FARVE</h2>
                <ol>
                  <li>Lav en <code>Part</code>, og kald den <code>PracticePart</code>.</li>
                  <li>Tilføj et <code>Script</code> i <code>ServerScriptService</code>.</li>
                  <li>Indsæt koden, og tryk <strong>Play</strong>.</li>
                </ol>
              </div>
              <div>
                <pre className="roblox-code" aria-label="Eksempel på Luau-kode"><code>{`-- Gør klodsen gul
workspace.PracticePart.Color = Color3.fromRGB(255, 230, 50)`}</code></pre>
                <p className="code-result"><span>[ RESULTAT ]</span> Klodsen bliver gul, når spillet starter.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="script-types" aria-labelledby="scripts-heading">
          <div className="section-heading">
            <div><p className="prompt-label">~/roblox/næste-niveau</p><h2 id="scripts-heading">TRE SLAGS SCRIPTS</h2></div>
          </div>
          <div className="script-type-grid">
            <article><span>01</span><h3>Script</h3><p>Brug det til spillets fælles regler. Som begynder kan du placere det i ServerScriptService.</p></article>
            <article><span>02</span><h3>LocalScript</h3><p>Kører hos én spiller. Det bruges blandt andet til knapper, kamera og spillerens input.</p></article>
            <article><span>03</span><h3>ModuleScript</h3><p>Gemmer kode, som flere scripts kan genbruge.</p></article>
          </div>
          <p className="server-note"><strong>KORT SAGT:</strong> Spilleren sender input. Serveren passer på de fælles regler, point og belønninger.</p>
        </section>

        <section className="roblox-next" aria-labelledby="roblox-next-heading">
          <div>
            <p className="prompt-label">[ KLAR TIL AT BYGGE? ]</p>
            <h2 id="roblox-next-heading">START SMÅT. TEST OFTE.</h2>
            <p>Lav først én klods, der gør én ting. Derefter kan du bygge mere på.</p>
          </div>
          <a className="primary-button" href="https://create.roblox.com/docs/tutorials/fundamentals/coding-1/object-properties" target="_blank" rel="noreferrer">[ ÅBN ROBLOX-GUIDEN ]</a>
        </section>
      </main>

      <SiteFooter />
      <div className="scanlines" aria-hidden="true" />
    </div>
  );
}

function AiLabPage() {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const activeLesson = aiLessons[activeLessonIndex];

  function selectLesson(index) {
    setActiveLessonIndex(index);
    document.querySelector("#ai-forloeb")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="site-shell">
      <SiteHeader activePage="ai" />

      <main id="top">
        <section className="ai-hero" aria-labelledby="ai-title">
          <p className="prompt-line" aria-hidden="true">elev@vusk:~$ start ai-lab<span className="cursor" /></p>
          <p className="eyebrow">TEACHABLE MACHINE // 3 LEKTIONER</p>
          <h1 id="ai-title">LÆR EN MASKINE<br />AT GENKENDE DIG.</h1>
          <p className="hero-copy">Træn din egen AI med billeder og bevægelser. Test den, find dens fejl, og brug den som en spil-controller.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#ai-forloeb">[ START LEKTION 1 ]</a>
            <a className="secondary-link" href="https://teachablemachine.withgoogle.com/train" target="_blank" rel="noreferrer">ÅBN TEACHABLE MACHINE --&gt;</a>
          </div>
        </section>

        <section className="ai-basics" aria-labelledby="ai-basics-heading">
          <div className="section-heading">
            <div><p className="prompt-label">~/ai/sådan-virker-det</p><h2 id="ai-basics-heading">TRE TING AI'EN SKAL BRUGE</h2></div>
          </div>
          <ol className="ai-flow" aria-label="Arbejdsgangen fra data til test">
            <li><span>01</span><strong>SAML DATA</strong><p>Vis mange forskellige eksempler.</p></li>
            <li><span>02</span><strong>TRÆN</strong><p>Lad modellen finde mønstre.</p></li>
            <li><span>03</span><strong>TEST</strong><p>Prøv med noget, den ikke har set før.</p></li>
          </ol>
          <p className="ai-definition"><span>[ HUSK ]</span> AI'en forstår ikke en hånd eller en blyant. Den leder efter mønstre i de eksempler, I giver den.</p>
        </section>

        <section className="ai-course" id="ai-forloeb" aria-labelledby="ai-course-heading">
          <div className="section-heading">
            <div><p className="prompt-label">~/ai/forløbet</p><h2 id="ai-course-heading">VÆLG LEKTION</h2></div>
            <p className="counter" aria-live="polite">[{String(activeLessonIndex + 1).padStart(2, "0")}/03]</p>
          </div>

          <div className="ai-course-layout">
            <nav className="ai-lesson-list" aria-label="AI-lektioner">
              {aiLessons.map((lesson, index) => (
                <button className={`ai-lesson-tab ${index === activeLessonIndex ? "is-active" : ""}`} key={lesson.id} type="button" onClick={() => selectLesson(index)} aria-current={index === activeLessonIndex ? "step" : undefined}>
                  <span>{lesson.number}</span>
                  <span><strong>{lesson.title}</strong><small>{lesson.topic}</small></span>
                  <span aria-hidden="true">{index === activeLessonIndex ? "<" : ">"}</span>
                </button>
              ))}
            </nav>

            <article className="ai-lesson-detail" aria-labelledby={`${activeLesson.id}-heading`}>
              <div className="window-bar"><span>LEKTION_{activeLesson.number}.TXT</span><span className="level">{activeLesson.duration}</span></div>
              <div className="ai-lesson-content">
                <p className="topic">{activeLesson.topic}</p>
                <h3 id={`${activeLesson.id}-heading`}>{activeLesson.title}</h3>
                <p className="summary">{activeLesson.summary}</p>
                <div className="ai-goal"><span>MÅL</span><p>{activeLesson.goal}</p></div>
                <ol className="ai-mission-steps">
                  {activeLesson.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}
                </ol>
                <div className="ai-prompts">
                  <p><span>BONUSMISSION</span>{activeLesson.challenge}</p>
                  <p><span>TÆNK OVER</span>{activeLesson.reflection}</p>
                </div>
                <div className="detail-actions">
                  <a className="primary-button" href="https://teachablemachine.withgoogle.com/train" target="_blank" rel="noreferrer">[ ÅBN VÆRKTØJET ]</a>
                  {activeLessonIndex < aiLessons.length - 1 && <button className="text-button" type="button" onClick={() => selectLesson(activeLessonIndex + 1)}>NÆSTE LEKTION --&gt;</button>}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="ai-safety" aria-labelledby="ai-safety-heading">
          <div className="section-heading">
            <div><p className="prompt-label">~/ai/gode-regler</p><h2 id="ai-safety-heading">TRYGT AI-LAB</h2></div>
          </div>
          <div className="ai-rule-grid">
            <article><span>01</span><h3>INGEN ANSIGTER</h3><p>Brug genstande, hænder og kropspositioner. Man kan også vælge en rolle helt uden at stå foran kameraet.</p></article>
            <article><span>02</span><h3>TEST ANDRE</h3><p>En model skal også virke med nye personer, vinkler og baggrunde.</p></article>
            <article><span>03</span><h3>FEJL ER DATA</h3><p>Når modellen tager fejl, har I fundet et spor til, hvordan den kan forbedres.</p></article>
          </div>
        </section>

        <section className="ai-teacher-note" aria-labelledby="teacher-heading">
          <div>
            <p className="prompt-label">[ TIL UNDERVISEREN ]</p>
            <h2 id="teacher-heading">KLAR INDEN START</h2>
            <p>Arbejd i grupper på 2–3. Tjek kameraadgang, hav små genstande klar, og aftal at ingen gemmer eller uploader billeder af andre. Lektion 3 kræver en færdig JavaScript-spilskabelon, hvor eleverne kun indsætter deres modellink.</p>
          </div>
          <a className="primary-button" href="https://teachablemachine.withgoogle.com/" target="_blank" rel="noreferrer">[ SE AI-VÆRKTØJET ]</a>
        </section>
      </main>

      <SiteFooter />
      <div className="scanlines" aria-hidden="true" />
    </div>
  );
}

export function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/css-spil") return <CssGamesPage />;
  if (path === "/roblox") return <RobloxPage />;
  if (path === "/ai-lab") return <AiLabPage />;
  return <HomePage />;
}
