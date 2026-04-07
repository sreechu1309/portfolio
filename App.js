export default function FilmmakerPortfolio() {
  const shortFilms = [
    {
      title: "people forget..",
      type: "Short Film",
      year: "2025",
      youtubeUrl: "https://youtu.be/Q_Jf2cYhVfI",
      thumbnail: "https://img.youtube.com/vi/Q_Jf2cYhVfI/maxresdefault.jpg",
      description:
        "A young man rushes to catch his office bus. At the bus stop, he lights a cigarette — and in that brief pause, something else sparks too.",
      credits: "A film by Team 119",
      creditsLink:
        "https://www.instagram.com/119.studios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      creditsLinkLabel: "Insta page",
    },
    {
      title: "The Director",
      type: "Short Film",
      year: "2025",
      youtubeUrl: "https://youtu.be/KuJ6nDMrRV0",
      thumbnail: "https://img.youtube.com/vi/KuJ6nDMrRV0/maxresdefault.jpg?v=2",
      description:
        "The laziest guy on the planet suddenly gets hit by an idea — and what follows is a chaotic attempt to turn that spark into something real.",
      credits: "A film by Team 119",
    },
    {
      title: "A Day at NITT",
      type: "Short Film",
      year: "2022",
      youtubeUrl: "https://youtu.be/S1e5fLM0wyc",
      thumbnail: "https://img.youtube.com/vi/S1e5fLM0wyc/maxresdefault.jpg",
      description:
        "A glimpse into a student’s life at NIT Trichy — from morning routines to late-night moments — told through different students, each living a fragment of the same shared journey.",
      credits: "A film by VPS",
    },
  ];

  const scripts = [
    {
      title: "VP's Omelette",
      year: "2025",
      poster: "/poster_vp.png",
      scriptUrl: "/VP's Omelette.pdf",
      description:
        "A disciplined college student who refuses to compromise on anything spirals into frustration when a simple craving for an omelette turns into a night of chaos, delays, and unexpected realizations about control and flexibility.",
      credits: "A script by VPS",
    },
    {
      title: "Lucky Hour",
      year: "2025",
      poster: "/poster.jpg",
      scriptUrl: "/lucky hour.pdf",
      description:
        "Two friends get pulled into a tense late-night gambling session where luck shifts rapidly between them. As greed takes over, their decisions spiral into chaos, testing control, friendship, and the thin line between winning and losing.",
      credits: "A script by VPS",
    },
  ];

  const aiTools = ["Midjourney", "DALL·E", "Stable Diffusion", "Runway ML"];

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#0f172a",
      color: "#f8f2e8",
      fontFamily: "Inter, Arial, sans-serif",
    },
    header: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      borderBottom: "1px solid rgba(245, 230, 211, 0.14)",
      background: "rgba(15, 23, 42, 0.92)",
      backdropFilter: "blur(8px)",
    },
    nav: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "18px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    brand: {
      fontSize: "18px",
      fontWeight: 700,
      letterSpacing: "0.02em",
      color: "#f8f2e8",
    },
    navLinks: {
      display: "flex",
      gap: "22px",
      flexWrap: "wrap",
    },
    navItemWrap: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: "6px",
    },
    navLink: {
      color: "#e7d7bf",
      textDecoration: "none",
      fontSize: "15px",
      transition: "color 0.25s ease",
      cursor: "pointer",
    },
    navGlow: {
      position: "absolute",
      left: "50%",
      bottom: 0,
      width: "0px",
      height: "2px",
      borderRadius: "999px",
      background: "linear-gradient(90deg, #f4c27a, #f8f2e8)",
      transform: "translateX(-50%)",
      boxShadow: "0 0 12px rgba(244,194,122,0.55)",
      transition: "width 0.28s ease",
      pointerEvents: "none",
    },
    hero: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "70px 24px",
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: "40px",
      alignItems: "start",
    },
    heroTitle: {
      fontSize: "56px",
      lineHeight: 1.1,
      margin: "0 0 20px",
      fontWeight: 700,
      maxWidth: "760px",
      color: "#fff7ed",
    },
    heroText: {
      color: "#e7d7bf",
      fontSize: "18px",
      lineHeight: 1.8,
      maxWidth: "760px",
      marginBottom: "24px",
      whiteSpace: "pre-line",
    },
    overline: {
      color: "#d8c3a5",
      textTransform: "uppercase",
      letterSpacing: "0.28em",
      fontSize: "13px",
      marginBottom: "18px",
    },
    pillRow: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
    },
    pill: {
      border: "1px solid rgba(231, 215, 191, 0.16)",
      borderRadius: "999px",
      padding: "14px 22px",
      color: "#f4e7d3",
      fontSize: "15px",
      fontWeight: 600,
      background:
        "linear-gradient(135deg, rgba(245, 230, 211, 0.08), rgba(244, 194, 122, 0.06))",
      boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
      transition: "all 0.28s ease",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
    },
    pillGlow: {
      position: "absolute",
      inset: 0,
      borderRadius: "999px",
      background:
        "linear-gradient(120deg, rgba(244,194,122,0.0) 0%, rgba(244,194,122,0.18) 50%, rgba(248,242,232,0.0) 100%)",
      opacity: 0,
      transition: "opacity 0.28s ease",
      pointerEvents: "none",
    },
    pillLabel: {
      position: "relative",
      zIndex: 1,
    },
    cardWrap: {
      display: "flex",
      justifyContent: "flex-end",
    },
    introCard: {
      width: "100%",
      maxWidth: "420px",
      borderRadius: "28px",
      border: "1px solid rgba(245, 230, 211, 0.12)",
      background: "rgba(245, 230, 211, 0.05)",
      padding: "16px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    },
    worksSection: {
      borderTop: "1px solid rgba(245, 230, 211, 0.12)",
      background: "#162033",
    },
    worksInner: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "70px 24px",
    },
    worksLead: {
      maxWidth: "760px",
      marginBottom: "36px",
    },
    worksTitle: {
      fontSize: "48px",
      lineHeight: 1.1,
      margin: "0 0 18px",
      fontWeight: 700,
      color: "#fff7ed",
    },
    worksText: {
      color: "#e7d7bf",
      fontSize: "18px",
      lineHeight: 1.8,
    },
    articleList: {
      display: "flex",
      flexDirection: "column",
      gap: "28px",
    },
    article: {
      display: "grid",
      gridTemplateColumns: "420px 1fr",
      gap: "32px",
      padding: "24px",
      borderRadius: "28px",
      border: "1px solid rgba(245, 230, 211, 0.12)",
      background: "rgba(245, 230, 211, 0.04)",
    },
    thumbLink: {
      display: "block",
      borderRadius: "20px",
      overflow: "hidden",
      border: "1px solid rgba(245, 230, 211, 0.12)",
      background: "#0f172a",
      textDecoration: "none",
    },
    thumbWrap: {
      position: "relative",
      aspectRatio: "16 / 9",
      overflow: "hidden",
    },
    thumb: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.35s ease",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(0,0,0,0.28)",
      transition: "background 0.28s ease",
    },
    overlayButton: {
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: "999px",
      background: "rgba(15, 23, 42, 0.7)",
      padding: "12px 18px",
      color: "#fff7ed",
      fontSize: "14px",
      fontWeight: 600,
      transition: "transform 0.28s ease, background 0.28s ease",
    },
    metaRow: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: "14px",
      color: "#d8c3a5",
      fontSize: "14px",
    },
    typeBadge: {
      border: "1px solid rgba(245, 230, 211, 0.14)",
      borderRadius: "999px",
      padding: "6px 12px",
      background: "rgba(245, 230, 211, 0.05)",
    },
    articleTitle: {
      fontSize: "34px",
      fontWeight: 700,
      margin: "0 0 16px",
      lineHeight: 1.15,
      color: "#fff7ed",
    },
    articleText: {
      color: "#e7d7bf",
      fontSize: "17px",
      lineHeight: 1.8,
      maxWidth: "760px",
    },
    credits: {
      color: "#d8c3a5",
      fontSize: "14px",
      marginTop: "18px",
      lineHeight: 1.7,
    },
    creditsAnchor: {
      color: "#f4c27a",
      marginLeft: "8px",
      textDecoration: "none",
      borderBottom: "1px solid rgba(244,194,122,0.45)",
      paddingBottom: "1px",
    },
    subSectionTitle: {
      fontSize: "30px",
      lineHeight: 1.2,
      margin: "18px 0 22px",
      fontWeight: 700,
      color: "#fff7ed",
    },
    scriptGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "28px",
    },
    scriptCard: {
      borderRadius: "28px",
      border: "1px solid rgba(245, 230, 211, 0.12)",
      background: "rgba(245, 230, 211, 0.04)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      minHeight: "100%",
    },
    scriptPosterLink: {
      position: "relative",
      display: "block",
      textDecoration: "none",
      overflow: "hidden",
      background: "#0f172a",
      cursor: "pointer",
    },
    scriptPosterWrap: {
      position: "relative",
      aspectRatio: "2 / 3",
      overflow: "hidden",
    },
    scriptPoster: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.4s ease",
    },
    scriptOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to top, rgba(6,11,23,0.82), rgba(6,11,23,0.18))",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      opacity: 0,
      transition: "opacity 0.28s ease",
    },
    scriptOverlayButton: {
      border: "1px solid rgba(255,255,255,0.24)",
      borderRadius: "999px",
      background: "rgba(15, 23, 42, 0.84)",
      padding: "12px 18px",
      color: "#fff7ed",
      fontSize: "14px",
      fontWeight: 600,
      transform: "translateY(8px)",
      transition: "transform 0.28s ease, background 0.28s ease",
    },
    scriptBody: {
      padding: "22px 22px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      flex: 1,
    },
    scriptMeta: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      flexWrap: "wrap",
      color: "#d8c3a5",
      fontSize: "14px",
    },
    scriptTitle: {
      fontSize: "30px",
      lineHeight: 1.15,
      margin: 0,
      color: "#fff7ed",
      fontWeight: 700,
    },
    scriptText: {
      color: "#e7d7bf",
      fontSize: "16px",
      lineHeight: 1.8,
      margin: 0,
    },
    aiSection: {
      borderTop: "1px solid rgba(245,230,211,0.12)",
      background: "#0b1220",
    },
    aiInner: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "70px 24px",
    },
    editingFeature: {
      marginBottom: "34px",
      padding: "34px",
      borderRadius: "28px",
      background:
        "linear-gradient(135deg, rgba(22,32,51,0.95), rgba(12,18,32,0.96))",
      border: "1px solid rgba(244,194,122,0.18)",
      boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
    },
    editingGrid: {
      marginTop: "22px",
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "24px",
      alignItems: "stretch",
    },
    editingCard: {
      borderRadius: "22px",
      background:
        "linear-gradient(135deg, rgba(30,41,59,0.75), rgba(15,23,42,0.88))",
      border: "1px solid rgba(245,230,211,0.1)",
      minHeight: "240px",
      padding: "26px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    tagRow: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginTop: "18px",
    },
    smallTag: {
      border: "1px solid rgba(245,230,211,0.12)",
      borderRadius: "999px",
      padding: "8px 12px",
      fontSize: "13px",
      color: "#f4e7d3",
      background: "rgba(245,230,211,0.05)",
    },
    courseCard: {
      marginBottom: "28px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "24px",
      borderRadius: "28px",
      overflow: "hidden",
      border: "1px solid rgba(244,194,122,0.16)",
      background:
        "linear-gradient(135deg, rgba(20,29,45,0.98), rgba(10,16,28,0.98))",
      boxShadow: "0 16px 40px rgba(0,0,0,0.2)",
    },
    courseImageWrap: {
      background: "#111827",
      padding: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    courseImage: {
      width: "100%",
      height: "auto",
      display: "block",
      borderRadius: "18px",
    },
    courseBody: {
      padding: "28px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    aiToolsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "28px",
    },
    aiToolCard: {
      position: "relative",
      padding: "30px",
      borderRadius: "22px",
      background:
        "linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))",
      border: "1px solid rgba(244,194,122,0.15)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      minHeight: "190px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  };

  const onNavEnter = (e) => {
    e.target.style.color = "#f4c27a";
    if (e.target.nextSibling) e.target.nextSibling.style.width = "100%";
  };

  const onNavLeave = (e) => {
    e.target.style.color = "#e7d7bf";
    if (e.target.nextSibling) e.target.nextSibling.style.width = "0px";
  };

  const onPillEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
    e.currentTarget.style.borderColor = "rgba(244,194,122,0.45)";
    e.currentTarget.style.boxShadow = "0 16px 30px rgba(244,194,122,0.14)";
    const glow = e.currentTarget.querySelector("span[data-glow='true']");
    if (glow) glow.style.opacity = "1";
  };

  const onPillLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0px) scale(1)";
    e.currentTarget.style.borderColor = "rgba(231, 215, 191, 0.16)";
    e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.18)";
    const glow = e.currentTarget.querySelector("span[data-glow='true']");
    if (glow) glow.style.opacity = "0";
  };

  const onFilmEnter = (e) => {
    const img = e.currentTarget.querySelector("img");
    const overlay = e.currentTarget.querySelector("div[data-overlay='film']");
    const button = e.currentTarget.querySelector("div[data-button='film']");
    if (img) img.style.transform = "scale(1.05)";
    if (overlay) overlay.style.background = "rgba(0,0,0,0.42)";
    if (button) {
      button.style.transform = "translateY(-2px) scale(1.02)";
      button.style.background = "rgba(15, 23, 42, 0.92)";
    }
  };

  const onFilmLeave = (e) => {
    const img = e.currentTarget.querySelector("img");
    const overlay = e.currentTarget.querySelector("div[data-overlay='film']");
    const button = e.currentTarget.querySelector("div[data-button='film']");
    if (img) img.style.transform = "scale(1)";
    if (overlay) overlay.style.background = "rgba(0,0,0,0.28)";
    if (button) {
      button.style.transform = "translateY(0px) scale(1)";
      button.style.background = "rgba(15, 23, 42, 0.7)";
    }
  };

  const onScriptEnter = (e) => {
    const img = e.currentTarget.querySelector("img");
    const overlay = e.currentTarget.querySelector("div[data-overlay='script']");
    const button = e.currentTarget.querySelector("div[data-button='script']");
    if (img) img.style.transform = "scale(1.06)";
    if (overlay) overlay.style.opacity = "1";
    if (button) button.style.transform = "translateY(0px)";
  };

  const onScriptLeave = (e) => {
    const img = e.currentTarget.querySelector("img");
    const overlay = e.currentTarget.querySelector("div[data-overlay='script']");
    const button = e.currentTarget.querySelector("div[data-button='script']");
    if (img) img.style.transform = "scale(1)";
    if (overlay) overlay.style.opacity = "0";
    if (button) button.style.transform = "translateY(8px)";
  };

  const onAiCardEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
    e.currentTarget.style.boxShadow = "0 20px 40px rgba(244,194,122,0.15)";
  };

  const onAiCardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.brand}>
            Hello, Welcome to V P Sreenath&apos;s Portfolio
          </div>
          <div style={styles.navLinks}>
            {[
              ["#profile", "Profile"],
              ["#works", "Works"],
              ["#ai", "Softwares & AI Prompting"],
              ["#experience", "Multilingual & On-set Experience"],
              ["#contact", "Contact Me"],
            ].map(([href, label]) => (
              <div style={styles.navItemWrap} key={label}>
                <a
                  href={href}
                  style={styles.navLink}
                  onMouseEnter={onNavEnter}
                  onMouseLeave={onNavLeave}
                >
                  {label}
                </a>
                <span style={styles.navGlow}></span>
              </div>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section id="profile" style={styles.hero}>
          <div>
            <h1 style={styles.heroTitle}>
              Hello, Welcome to V P Sreenath&apos;s Portfolio
            </h1>
            <p
              style={styles.heroText}
            >{`Hi, I’m V.P. Sreenath, a 22-year-old engineering graduate from NIT Trichy (Class of 2025), currently working as an analyst in Hyderabad for the past 9 months.

Alongside my work, I’ve been exploring my interest in storytelling and filmmaking. I create short films (shared on my Instagram page @119.studios), write scripts, and have been learning and experimenting with AI prompting as part of my creative process.

During my time in college, I was also involved in various clubs and team activities, which helped me understand collaboration and working with people in different settings.

I’m still learning and growing in this space, and I’ve put together this portfolio to share my journey so far.`}</p>
            <div style={styles.pillRow}>
              {[
                "Short Filmmaking",
                "AI Prompting and Software Experience",
                "Multilingual",
                "On-Set and Production",
              ].map((label) => (
                <span
                  key={label}
                  style={styles.pill}
                  onMouseEnter={onPillEnter}
                  onMouseLeave={onPillLeave}
                >
                  <span data-glow="true" style={styles.pillGlow}></span>
                  <span style={styles.pillLabel}>{label}</span>
                </span>
              ))}
            </div>
          </div>

          <div style={styles.cardWrap}>
            <div style={styles.introCard}>
              <img
                src="/IMG_0277.jpeg"
                alt="V P Sreenath"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>

        <section id="works" style={styles.worksSection}>
          <div style={styles.worksInner}>
            <div style={styles.worksLead}>
              <p style={styles.overline}>Works</p>
              <h2 style={styles.worksTitle}>Short Films & Scripts</h2>
              <p style={styles.worksText}>
                Click a cover image to open the YouTube video. In the scripts
                section, hovering over a poster lets you open the PDF directly.
              </p>
            </div>

            <div style={styles.articleList}>
              {shortFilms.map((project) => (
                <article key={project.title} style={styles.article}>
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.thumbLink}
                    aria-label={`Open ${project.title} on YouTube`}
                    onMouseEnter={onFilmEnter}
                    onMouseLeave={onFilmLeave}
                  >
                    <div style={styles.thumbWrap}>
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        style={styles.thumb}
                      />
                      <div data-overlay="film" style={styles.overlay}>
                        <div data-button="film" style={styles.overlayButton}>
                          Watch on YouTube
                        </div>
                      </div>
                    </div>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div style={styles.metaRow}>
                      <span style={styles.typeBadge}>{project.type}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 style={styles.articleTitle}>{project.title}</h3>
                    <p style={styles.articleText}>{project.description}</p>
                    <p style={styles.credits}>
                      {project.credits}
                      {project.creditsLink && (
                        <a
                          href={project.creditsLink}
                          target="_blank"
                          rel="noreferrer"
                          style={styles.creditsAnchor}
                          onMouseEnter={(e) =>
                            (e.target.style.color = "#fff7ed")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.color = "#f4c27a")
                          }
                        >
                          {project.creditsLinkLabel || "Link"}
                        </a>
                      )}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <h3 style={styles.subSectionTitle}>Scripts</h3>
            <div style={styles.scriptGrid}>
              {scripts.map((script) => (
                <article key={script.title} style={styles.scriptCard}>
                  <a
                    href={script.scriptUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.scriptPosterLink}
                    aria-label={`Open ${script.title} PDF`}
                    onMouseEnter={onScriptEnter}
                    onMouseLeave={onScriptLeave}
                  >
                    <div style={styles.scriptPosterWrap}>
                      <img
                        src={script.poster}
                        alt={script.title}
                        style={styles.scriptPoster}
                      />
                      <div data-overlay="script" style={styles.scriptOverlay}>
                        <div
                          data-button="script"
                          style={styles.scriptOverlayButton}
                        >
                          Open Script PDF
                        </div>
                      </div>
                    </div>
                  </a>

                  <div style={styles.scriptBody}>
                    <div style={styles.scriptMeta}>
                      <span style={styles.typeBadge}>Script</span>
                      <span>{script.year}</span>
                    </div>
                    <h4 style={styles.scriptTitle}>{script.title}</h4>
                    <p style={styles.scriptText}>{script.description}</p>
                    <p style={styles.credits}>{script.credits}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ai" style={styles.aiSection}>
          <div style={styles.aiInner}>
            <div style={styles.worksLead}>
              <p style={styles.overline}>Creative Tech</p>
              <h2 style={styles.worksTitle}>Softwares & AI Prompting</h2>
              <p style={styles.worksText}>
                A dedicated section for editing tools, visual workflows, and
                AI-assisted creative development.
              </p>
            </div>

            <div style={styles.editingFeature}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <p style={styles.overline}>Editing Suite</p>
                  <h3
                    style={{
                      fontSize: "34px",
                      color: "#fff7ed",
                      margin: "0 0 12px",
                      lineHeight: 1.15,
                    }}
                  >
                    Premiere Pro & After Effects
                  </h3>
                </div>
                <span
                  style={{
                    border: "1px solid rgba(244,194,122,0.18)",
                    borderRadius: "999px",
                    padding: "10px 16px",
                    color: "#f4c27a",
                    background: "rgba(244,194,122,0.06)",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  Editing • Motion • Post-production
                </span>
              </div>

              <div style={styles.editingGrid}>
                <div style={styles.editingCard}>
                  <div>
                    <h4
                      style={{
                        fontSize: "24px",
                        color: "#fff7ed",
                        margin: "0 0 10px",
                      }}
                    >
                      Project Showcase
                    </h4>
                    <div>
                      <video
                        src="/premiere.mp4"
                        controls
                        style={{
                          width: "100%",
                          borderRadius: "16px",
                          marginBottom: "12px",
                        }}
                      />
                      <p
                        style={{
                          color: "#d8c3a5",
                          fontSize: "16px",
                          lineHeight: 1.8,
                          margin: 0,
                        }}
                      >
                        I have amateur experience in Adobe Premiere Pro and
                        After Effects.
                      </p>
                    </div>
                  </div>
                  <div style={styles.tagRow}>
                    {[
                      "Video Editing",
                      "Motion Graphics",
                      "Title Design",
                      "Cinematic Cuts",
                    ].map((tag) => (
                      <span key={tag} style={styles.smallTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "18px" }}>
              <p style={styles.overline}>AI Prompting</p>
              <h3
                style={{
                  fontSize: "34px",
                  color: "#fff7ed",
                  margin: "0 0 12px",
                  lineHeight: 1.15,
                }}
              >
                Generative AI Tools
              </h3>
            </div>

            <div style={styles.courseCard}>
              <div style={styles.courseImageWrap}>
                <img
                  src="/prompt_course.png"
                  alt="Prompt engineering course"
                  style={styles.courseImage}
                />
              </div>
              <div style={styles.courseBody}>
                <p style={{ ...styles.overline, marginBottom: "12px" }}>
                  Course Foundation
                </p>
                <h4
                  style={{
                    fontSize: "30px",
                    color: "#fff7ed",
                    margin: "0 0 14px",
                    lineHeight: 1.15,
                  }}
                >
                  Prompt Engineering for AI
                </h4>
                <p
                  style={{
                    color: "#e7d7bf",
                    fontSize: "16px",
                    lineHeight: 1.85,
                    margin: "0 0 16px",
                  }}
                >
                  I have completed a structured prompt engineering course and
                  built the practical skills needed to work with generative AI
                  tools in a more intentional and professional way. This
                  learning foundation supports how I approach creative
                  prompting, iteration, visual ideation, and tool-specific
                  workflows.
                </p>
                <p
                  style={{
                    color: "#d8c3a5",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    margin: "0 0 18px",
                  }}
                >
                  The course helped me strengthen skills in prompt framing,
                  refining outputs, understanding tool behavior, and using AI
                  for creative production tasks rather than only casual
                  experimentation.
                </p>
                <div style={styles.tagRow}>
                  {[
                    "Prompt Structuring",
                    "Iteration",
                    "Tool-Specific Workflows",
                    "Creative Output Refinement",
                  ].map((tag) => (
                    <span key={tag} style={styles.smallTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "22px" }}>
              <p
                style={{
                  color: "#e7d7bf",
                  fontSize: "17px",
                  lineHeight: 1.8,
                  maxWidth: "860px",
                  margin: "0 0 18px",
                }}
              >
                I have worked with all these generative AI tools as part of my
                creative exploration and visual development workflow.
              </p>
              <div style={styles.tagRow}>
                {aiTools.map((tool) => (
                  <span key={tool} style={styles.smallTag}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div style={styles.aiToolsGrid}>
              <div
                style={styles.aiToolCard}
                onMouseEnter={onAiCardEnter}
                onMouseLeave={onAiCardLeave}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "26px",
                      color: "#fff7ed",
                      margin: "0 0 12px",
                    }}
                  >
                    Midjourney Work Example
                  </h4>
                  <p
                    style={{
                      color: "#d8c3a5",
                      fontSize: "15px",
                      lineHeight: 1.7,
                      margin: "0 0 16px",
                    }}
                  >
                    Poster-style visual exploration created as part of my
                    concept development workflow.
                  </p>
                  <div
                    style={{
                      borderRadius: "18px",
                      overflow: "hidden",
                      border: "1px solid rgba(245,230,211,0.12)",
                    }}
                  >
                    <img
                      src="/midjourney_people_forget.jpg"
                      alt="Midjourney work example"
                      style={{
                        width: "100%",
                        display: "block",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                style={styles.aiToolCard}
                onMouseEnter={onAiCardEnter}
                onMouseLeave={onAiCardLeave}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "26px",
                      color: "#fff7ed",
                      margin: "0 0 12px",
                    }}
                  >
                    Runway ML Work Example
                  </h4>
                  <p
                    style={{
                      color: "#d8c3a5",
                      fontSize: "15px",
                      lineHeight: 1.7,
                      margin: "0 0 16px",
                    }}
                  >
                    Example of AI-assisted motion generation and visual
                    experimentation using short-form video workflow.
                  </p>
                  <video
                    src="/runway.mp4"
                    controls
                    style={{
                      width: "100%",
                      borderRadius: "18px",
                      display: "block",
                      background: "#0f172a",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          style={{
            borderTop: "1px solid rgba(245,230,211,0.12)",
            background: "#111827",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "70px 24px",
            }}
          >
            <div style={styles.worksLead}>
              <p style={styles.overline}>Experience</p>
              <h2 style={styles.worksTitle}>
                Multilingual & On-set Experience
              </h2>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "28px" }}
            >
              <div
                style={{
                  borderRadius: "24px",
                  padding: "28px",
                  background: "rgba(245,230,211,0.04)",
                  border: "1px solid rgba(245,230,211,0.12)",
                  maxWidth: "760px",
                }}
              >
                <h3 style={{ color: "#fff7ed", marginBottom: "14px" }}>
                  Multilingual
                </h3>
                <ul
                  style={{
                    color: "#d8c3a5",
                    lineHeight: 1.8,
                    paddingLeft: "18px",
                    margin: 0,
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    Reading, writing, and speaking efficiency in English and
                    Tamil
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Reading and speaking efficiency in Hindi
                  </li>
                  <li>Speaking efficiency in Telugu</li>
                </ul>
              </div>

              <div
                style={{
                  borderRadius: "24px",
                  padding: "28px",
                  background: "rgba(245,230,211,0.04)",
                  border: "1px solid rgba(245,230,211,0.12)",
                  maxWidth: "980px",
                }}
              >
                <h3 style={{ color: "#fff7ed", marginBottom: "14px" }}>
                  On-set & Production
                </h3>
                <ul
                  style={{
                    color: "#d8c3a5",
                    lineHeight: 1.8,
                    paddingLeft: "18px",
                    margin: 0,
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    I do not have professional on-set or production experience
                    yet.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Cultural Secretary, NIT Trichy (2024–2025): Represented
                    student body across cultural clubs and administration,
                    managed budgets (~43 lakhs), and executed large-scale
                    cultural activities.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Head, Organising Committee – Festember: Led a 70+ member
                    team, handled crowd management (~15,000 footfall),
                    logistics, permissions, and coordination.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Deputy Manager, SCIENT: Worked with E-Cell on "Pitchers"
                    event and led promotional strategy achieving strong
                    engagement.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Cinematographer, Film Society: Directed "Life at NITT"
                    (1000+ views) and worked as action cinematographer in "Iron
                    Fist".
                  </li>
                  <li style={{ marginBottom: "18px" }}>
                    Manager, Exhibitions Team – Mettle 23: Coordinated with
                    companies, handled exhibition setup, and managed large-scale
                    logistics.
                  </li>
                </ul>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "18px",
                    marginTop: "24px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "18px",
                      overflow: "hidden",
                      border: "1px solid rgba(245,230,211,0.12)",
                      background: "#0f172a",
                    }}
                  >
                    <img
                      src="/DSC06040.jpg"
                      alt="Fest and team experience"
                      style={{
                        width: "100%",
                        display: "block",
                        objectFit: "cover",
                        aspectRatio: "16 / 10",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      borderRadius: "18px",
                      overflow: "hidden",
                      border: "1px solid rgba(245,230,211,0.12)",
                      background: "#0f172a",
                    }}
                  >
                    <img
                      src="/Culsec.jpeg"
                      alt="Cultural secretary recognition"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: "18px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          style={{
            borderTop: "1px solid rgba(245,230,211,0.12)",
            background: "#0d1424",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "70px 24px",
            }}
          >
            <div style={styles.worksLead}>
              <p style={styles.overline}>Contact</p>
              <h2 style={styles.worksTitle}>Contact Me</h2>
            </div>

            <div
              style={{
                borderRadius: "24px",
                padding: "28px",
                background: "rgba(245,230,211,0.04)",
                border: "1px solid rgba(245,230,211,0.12)",
                maxWidth: "760px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#d8c3a5",
                    fontSize: "14px",
                    margin: "0 0 6px",
                  }}
                >
                  Phone Number
                </p>
                <a
                  href="tel:+918148117713"
                  style={{
                    color: "#fff7ed",
                    fontSize: "26px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  +91 8148117713
                </a>
              </div>

              <div>
                <p
                  style={{
                    color: "#d8c3a5",
                    fontSize: "14px",
                    margin: "0 0 6px",
                  }}
                >
                  Email
                </p>
                <a
                  href="mailto:sreenathvp13@gmail.com"
                  style={{
                    color: "#f4c27a",
                    fontSize: "18px",
                    textDecoration: "none",
                  }}
                >
                  sreenathvp13@gmail.com
                </a>
              </div>

              <div>
                <p
                  style={{
                    color: "#d8c3a5",
                    fontSize: "14px",
                    margin: "0 0 6px",
                  }}
                >
                  Instagram (Personal)
                </p>
                <a
                  href="https://www.instagram.com/__sreenath_13_.09"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#f4c27a",
                    fontSize: "18px",
                    textDecoration: "none",
                  }}
                >
                  @__sreenath_13_.09
                </a>
              </div>

              <div>
                <p
                  style={{
                    color: "#d8c3a5",
                    fontSize: "14px",
                    margin: "0 0 6px",
                  }}
                >
                  Instagram (Short Films)
                </p>
                <a
                  href="https://www.instagram.com/119.studios"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#f4c27a",
                    fontSize: "18px",
                    textDecoration: "none",
                  }}
                >
                  @119.studios
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
