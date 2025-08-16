import React, { useState, useEffect, useRef } from "react";

// Utility hook for scroll reveal animation
function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    function reveal() {
      const windowHeight = window.innerHeight;
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150; // Adjust this value for when the element starts to reveal

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add("active");
        } else {
          // Optional: remove 'active' class when out of view, for repeated animation
          // el.classList.remove('active');
        }
      });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Initial check on component mount

    return () => window.removeEventListener("scroll", reveal);
  }, []);
}

const page = {
  max: "1120px",
  gap: "20px",
  radius: "14px",
};

/* =========== SVG Icons =========== */
const GitHubIcon = (props) => (
  <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    ></path>
  </svg>
);
const LinkedInIcon = (props) => (
  <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
  </svg>
);
// Updated LiveDemoIcon
const LiveDemoIcon = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor" // Fill the icon with current color
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <polygon points="10,8 16,12 10,16" fill="currentColor" />
  </svg>
);
const MenuIcon = (props) => (
  <svg
    height="28"
    width="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);
const CloseIcon = (props) => (
  <svg
    height="28"
    width="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

/* =========== Loader =========== */
function Loader({ isLoading }) {
  const styles = `
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(0.95); }
    }
    @keyframes flash {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.2; }
    }
    .loader-lightning {
      animation: flash 1s ease-in-out infinite;
      fill: none; /* Make fill none, stroke for outline */
      stroke: var(--accent-color); /* Use accent color for stroke */
      margin-left: 8px;
    }
    .loader-text {
      color: var(--accent-color);
      font-size: 24px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  `;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--bg-color)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? "auto" : "none",
        transition: "opacity 0.5s ease-out, background 0.3s ease",
      }}
    >
      <style>{styles}</style>
      <div className="loader-text">
        Uday's Folio
        <svg
          className="loader-lightning"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
        </svg>
      </div>
    </div>
  );
}

/* =========== Thunder Background =========== */
function ThunderBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden', // Hide overflow from blurred circles
        opacity: 0.15, // Make it subtle
      }}
    >
      {[...Array(8)].map((_, i) => ( // Increased to 8 blurred circles for more effect
        <div
          key={i}
          style={{
            position: 'absolute',
            background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)', // Greatly blur the circles
            opacity: 0.7,
            animation: `moveCircle${i % 5} ${15 + i * 3}s linear infinite alternate`, // Vary animation speed
            width: `${200 + i * 30}px`, // Vary sizes
            height: `${200 + i * 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
      <style>{`
        @keyframes moveCircle0 {
          from { transform: translate(-50%, -50%) translate(0, 0); }
          to { transform: translate(-50%, -50%) translate(100px, 50px); }
        }
        @keyframes moveCircle1 {
          from { transform: translate(-50%, -50%) translate(0, 0); }
          to { transform: translate(-50%, -50%) translate(-80px, 120px); }
        }
        @keyframes moveCircle2 {
          from { transform: translate(-50%, -50%) translate(0, 0); }
          to { transform: translate(-50%, -50%) translate(150px, -70px); }
        }
        @keyframes moveCircle3 {
          from { transform: translate(-50%, -50%) translate(0, 0); }
          to { transform: translate(-50%, -50%) translate(-100px, -100px); }
        }
        @keyframes moveCircle4 {
          from { transform: translate(-50%, -50%) translate(0, 0); }
          to { transform: translate(-50%, -50%) translate(70px, -150px); }
        }
      `}</style>
    </div>
  );
}


/* =========== Advanced Cursor (Reverted to simple dot/outline) =========== */
function AdvancedCursor({ isVisible }) {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    // Disable custom cursor on mobile/tablet for better UX and performance
    if (!isVisible || window.innerWidth <= 768) {
      if (document.body) document.body.style.cursor = 'default'; // Ensure default cursor is restored
      return;
    }

    if (document.body) document.body.style.cursor = 'none'; // Hide default cursor

    const dot = dotRef.current;
    const outline = outlineRef.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      dot.style.left = `${clientX}px`;
      dot.style.top = `${clientY}px`;

      outline.animate(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 500, fill: "forwards" }
      );
    };

    const handleMouseEnter = (e) => {
      outline.style.transform = "translate(-50%, -50%) scale(2.5)";
      outline.style.backgroundColor = "rgba(255, 153, 0, 0.2)";
      e.target.style.transform = "scale(1.05)"; // Apply transform to the hovered element
    };
    const handleMouseLeave = (e) => {
      outline.style.transform = "translate(-50%, -50%) scale(1)";
      outline.style.backgroundColor = "transparent";
      e.target.style.transform = "scale(1)"; // Reset transform on mouse leave
    };

    window.addEventListener("mousemove", moveCursor);
    const elements = document.querySelectorAll("a, button, .skill-chip"); // Include skill-chip for interactivity
    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.style.transition = "transform 0.2s ease-out"; // Ensure smooth transition for target element
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      if (document.body) document.body.style.cursor = 'default'; // Restore default cursor on unmount/disable
    };
  }, [isVisible]);


  // Only render if isVisible and on a large screen
  if (!isVisible || window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <style>
        {`body { cursor: none !important; }
        .cursor-dot { position: fixed; width: 8px; height: 8px; background-color: var(--accent-color); border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; z-index: 9999; }
        .cursor-outline { position: fixed; width: 40px; height: 40px; background-color: transparent; border: 2px solid var(--accent-color); border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; z-index: 9999; transition: transform 0.2s ease-out, background-color 0.2s ease-out; }`}
      </style>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
}


/* =========== Nav =========== */
function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#connect", label: "Connect" },
  ];
  const [active, setActive] = useState("#about");
  const [isMenuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const id of links.map((l) => l.href.slice(1))) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4)
          current = "#" + id;
      }
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);


  const handleClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false); // Close mobile menu on link click
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const yOffset = -60; // Offset for fixed header
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActive(href);
  };


  return (
    <>
      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav-toggle { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: block !important; }
        }
      `}</style>
      <header
        style={{
          position: "fixed",
          insetInline: 0,
          top: 0,
          zIndex: 10,
          background: "var(--panel-color)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div
          style={{
            maxWidth: page.max,
            margin: "0 auto",
            padding: "0 20px",
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Updated Logo with Lightning Icon */}
          <a
            href="#"
            style={{
              fontWeight: 700,
              color: "var(--text-color)",
              display: "flex",
              gap: 8,
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                width: 16,
                height: 16,
                background: "var(--accent-color)",
                borderRadius: 4,
                boxShadow: "0 0 14px rgba(255,153,0,.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--bg-color)" }}>
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
              </svg>
            </span>
            Uday's Folio
          </a>
          <nav className="desktop-nav" style={{ gap: 18 }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                style={{
                  color: active === l.href ? "var(--accent-color)" : "var(--dim-color)",
                  fontSize: 14,
                  textDecoration: "none",
                  borderBottom:
                    active === l.href
                      ? `2px solid var(--accent-color)`
                      : "2px solid transparent",
                  paddingBottom: 4,
                  transition: "color 0.2s ease, border-bottom 0.2s ease",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="mobile-nav-toggle"
            onClick={() => setMenuOpen(!isMenuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-color)",
              cursor: "pointer",
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: '56px',
            zIndex: 40,
            background: "var(--bg-color)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: '40px',
            gap: 24,
            transition: 'opacity 0.3s ease-in-out',
            overflowY: 'auto',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              style={{
                color: active === l.href ? "var(--accent-color)" : "var(--text-color)",
                fontSize: 24,
                textDecoration: "none",
                padding: '10px 0',
                width: '100%',
                textAlign: 'center',
                transition: "color 0.2s ease",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}


/* =========== Hero =========== */
function Hero() {
  const greetings = [
    "Hello",
    "Bonjour",
    "Hola",
    "こんにちは",
    "नमस्ते",
    "مرحبا",
    "Привет",
    "Ciao",
    "Olá",
    "안녕하세요",
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % greetings.length), 1400);
    return () => clearInterval(t);
  }, []);


  const btn = {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "12px 18px",
      borderRadius: 12,
      fontWeight: 600,
      transition: "all .2s ease",
      textDecoration: "none",
      cursor: "pointer",
    },
    primary: {
      background: "var(--accent-color)",
      color: "var(--bg-color)",
      boxShadow: "0 0 18px rgba(255,153,0,.35)",
    },
    ghost: {
      background: "transparent",
      color: "var(--accent-color)",
      border: `1px solid var(--accent-color)`,
    },
  };


  return (
    <section id="hero" className="reveal" style={{ position: "relative", zIndex: 1, paddingTop: 96, paddingBottom: 40 }}>
      <div style={{ maxWidth: page.max, margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
        <div style={{ fontSize: 32, color: "var(--accent-color)", letterSpacing: 1, marginBottom: 8, fontWeight: 500 }}>
          {greetings[i]}
        </div>
        <h1 style={{ fontSize: 44, margin: 0, fontWeight: 800, color: "var(--text-color)" }}>I’m Galma Uday Kiran Reddy</h1>
        <p style={{ color: "var(--dim-color)", marginTop: 10, fontSize: 18, maxWidth: "700px", marginInline: "auto" }}>
          AI/ML Engineer & Data Analyst passionate about building intelligent, data-driven solutions.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 22 }}>
          <a href="#connect" style={{ ...btn.base, ...btn.primary }}>Hire Me</a>
          <a href="/Resume/Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ ...btn.base, ...btn.ghost }}>
            View Resume
          </a>
        </div>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 24 }}>
          <a href="https://github.com/udaykiranreddy36" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon style={{ color: "var(--dim-color)", transition: "color .2s" }} />
          </a>
          <a href="https://www.linkedin.com/in/galma-uday-kiran-reddy-2117b4287/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon style={{ color: "var(--dim-color)", transition: "color .2s" }} />
          </a>
        </div>
      </div>
    </section>
  );
}


/* =========== Section Header =========== */
function SectionHeader({ id, title, subtitle }) {
  return (
    <div id={id} style={{ paddingTop: 80, marginBottom: 20 }}>
      <h2 style={{ fontSize: 32, margin: 0, textAlign: "center", color: "var(--text-color)" }}>{title}</h2>
      {subtitle && <p style={{ color: "var(--dim-color)", marginTop: 6, textAlign: "center" }}>{subtitle}</p>}
    </div>
  );
}


/* =========== About =========== */
function About() {
  return (
    <section id="about" className="reveal" style={{ position: "relative", zIndex: 1, padding: "30px 0" }}>
      <div style={{ maxWidth: page.max, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader id="about-header" title="About Me" />
        <div style={{
            background: "var(--panel-color)",
            backdropFilter: "blur(6px)",
            border: `1px solid var(--border-color)`,
            borderRadius: page.radius,
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            padding: 24,
            textAlign: "center"
          }}>
          <p style={{ color: "var(--dim-color)", fontSize: 16, maxWidth: "800px", margin: "0 auto" }}>
            Enthusiastic and adaptable technology professional with hands-on experience in AI/ML, data analysis, and web development.
            Skilled in building intelligent, user-centric applications and leveraging machine learning models to solve real-world problems.
            Passionately combining data-driven insights with innovative design to create impactful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}


/* =========== University Projects =========== */
function UniversityProjects() {
  const projects = [
    {
      title: "EXPLAINABLE AI MEDICAL DIAGNOSIS FOR DIABETES",
      desc: "Built an interactive web app that predicts diabetes risk from key health metrics (glucose, blood pressure, BMI) with real-time sliders and model explainability. Integrated an LLM-powered chatbot to interpret results and guide users.",
      date: "Jan 2025",
      live: "https://github.com/udaykiranreddy36/Diaabetes",
      source: "https://github.com/udaykiranreddy36/Diaabetes",
    },
    {
      title: "NOMAD COMPASS – ALL-IN-ONE TOURISM PLATFORM",
      desc: "Designed a unified travel platform with features like local guide registration, customizable itineraries, couchsurfing, and virtual tours. Integrated an ML-based trip planner and sustainability tools.",
      date: "Feb 2025",
      live: "https://github.com/udaykiranreddy36",
      source: "https://github.com/udaykiranreddy36",
    },
    {
      title: "SUSTAINABLE FERTILIZER USAGE OPTIMIZER",
      desc: "Developed an ML-powered web app to recommend optimal fertilizers using crop, soil, and weather data. Integrated speech-to-text, a weather API, and a Django-based prediction system.",
      date: "Nov 2024",
      live: "https://github.com/udaykiranreddy36",
      source: "https://github.com/udaykiranreddy36",
    },
    {
      title: "ECONEST – SUSTAINABLE COMMUNITIES PLATFORM",
      desc: "Created a full-stack platform for community-based sustainable activities during HackAttack Hackathon. Developed event registration and donation systems, awarded ‘Most Impactful Project’.",
      date: "Aug 2024",
      live: "https://github.com/udaykiranreddy36/hackattack",
      source: "https://github.com/udaykiranreddy36/hackattack",
    },
    {
      title: "FOODIE PAL – SMART ORDERING PLATFORM",
      desc: "Built an interactive web app for restaurants enabling food ordering, table reservations, and bill payments with user-friendly customization options.",
      date: "Nov 2023",
      live: "https://github.com/udaykiranreddy36/PBL",
      source: "https://github.com/udaykiranreddy36/PBL",
    },
  ];


  const btn = { // Redefine btn here to use CSS variables
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "12px 18px",
      borderRadius: 12,
      fontWeight: 600,
      transition: "all .2s ease",
      textDecoration: "none",
      cursor: "pointer",
    },
    primary: {
      background: "var(--accent-color)",
      color: "var(--bg-color)",
      boxShadow: "0 0 18px rgba(255,153,0,.35)",
    },
    ghost: {
      background: "transparent",
      color: "var(--accent-color)",
      border: `1px solid var(--accent-color)`,
    },
  };


  return (
    <section id="projects" className="reveal" style={{ position: "relative", zIndex: 1, padding: "30px 0" }}>
      <div style={{ maxWidth: page.max, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader id="projects-header" title="University Projects" />
        <div style={{ display: "grid", gap: page.gap, gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
          {projects.map((p) => (
            <div key={p.title} style={{
                background: "var(--panel-color)",
                backdropFilter: "blur(6px)",
                border: `1px solid var(--border-color)`,
                borderRadius: page.radius,
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                padding: 20,
                display: "flex",
                flexDirection: "column"
              }}>
              <div style={{ flexGrow: 1 }}>
                <div style={{ color: "var(--accent-color)", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{p.date}</div>
                <h3 style={{ marginTop: 0, marginBottom: 8, color: "var(--text-color)" }}>{p.title}</h3>
                <p style={{ color: "var(--dim-color)", margin: 0 }}>{p.desc}</p>
              </div>
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid var(--border-color)`, display: "flex", gap: 16, alignItems: "center" }}>
                <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ ...btn.base, ...btn.primary, padding: "8px 12px", fontSize: 14 }}>
                  <LiveDemoIcon style={{ marginRight: 8 }} /> Live Demo
                </a>
                <a href={p.source} target="_blank" rel="noopener noreferrer" style={{ ...btn.base, ...btn.ghost, padding: "8px 12px", fontSize: 14 }}>
                  <GitHubIcon style={{ marginRight: 8, width: 20, height: 20 }} /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* =========== Skills =========== */
function Skills() {
  const skillGroups = {
    "AI & Machine Learning": ["TensorFlow", "Scikit-learn", "XGBoost"],
    "Web Development": ["HTML", "CSS", "JS", "Tailwind CSS", "Bootstrap", "Angular", "React JS"],
    Frameworks: ["Django", "Spring Boot", "Flask", "Streamlit"],
    Databases: ["MySQL", "MongoDB", "PostgreSQL", "MySQLWorkbench", "PgAdmin"],
    Programming: ["C", "Java", "Python"],
    "Tools & UI/UX": ["Figma", "Canva", "Postman", "VS Code", "ECLIPSE IDE", "JetBrains", "AWS"],
    "Data Visualization": ["Matplotlib", "Seaborn", "PowerBI", "Plotly"],
  };


  return (
    <section id="skills" className="reveal" style={{ position: "relative", zIndex: 1, padding: "30px 0" }}>
      <div style={{ maxWidth: page.max, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader id="skills-header" title="Technical Skills" />
        <div style={{
            background: "var(--panel-color)",
            backdropFilter: "blur(6px)",
            border: `1px solid var(--border-color)`,
            borderRadius: page.radius,
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            padding: 24,
          }}>
          <div style={{ display: "grid", gap: "24px 32px", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
            {Object.entries(skillGroups).map(([group, skills]) => (
              <div key={group}>
                <h3 style={{ marginTop: 0, marginBottom: 12, color: "var(--accent-color)" }}>{group}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {skills.map((skill) => (
                    <span key={skill} className="skill-chip"> {/* Added class for hover effect */}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* =========== Achievements =========== */
function Achievements() {
  const achievements = [
    {
      title: "HACKTIVATE",
      desc: "Selected among the Top 50 from 1800+ teams across India for the Nomad Compass project.",
      date: "Feb 2025",
    },
    {
      title: "TECHHACKS – Runner-Up",
      desc: "Awarded for developing an Agrotourism Project promoting sustainable farm tourism.",
      date: "Sep 2024",
    },
  ];
  return (
    <section id="achievements" className="reveal" style={{ position: "relative", zIndex: 1, padding: "30px 0" }}>
      <div style={{ maxWidth: page.max, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader id="achievements-header" title="Achievements" />
        <div style={{ display: "grid", gap: page.gap, gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
          {achievements.map((p) => (
            <div key={p.title} style={{
                background: "var(--panel-color)",
                backdropFilter: "blur(6px)",
                border: `1px solid var(--border-color)`,
                borderRadius: page.radius,
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                padding: 20
              }}>
              <div style={{ color: "var(--accent-color)", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{p.date}</div>
              <h3 style={{ marginTop: 0, marginBottom: 8, color: "var(--text-color)" }}>{p.title}</h3>
              <p style={{ color: "var(--dim-color)", margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* =========== Connect (Contact Form) =========== */
function Connect() {
  // Toggle provider: true = Formspree, false = Web3Forms
  const USE_FORMSPREE = true;


  // Fill these with your actual values
  const FORMSPREE_FORM_ID = "xovlbbrl"; // e.g., "xgeqrbzy"
  const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";


  const [status, setStatus] = useState({ state: "idle", msg: "" });


  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", msg: "Sending..." });


    const form = e.currentTarget;
    const data = new FormData(form);


    // Honeypot to deter bots
    if (data.get("company")) {
      setStatus({ state: "ok", msg: "Thanks!" });
      form.reset();
      return;
    }


    try {
      let resp;
      if (USE_FORMSPREE) {
        resp = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
      } else {
        data.append("access_key", WEB3FORMS_ACCESS_KEY);
        resp = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: data,
        });
      }


      if (resp.ok) {
        setStatus({ state: "ok", msg: "Thanks! Your message has been sent." });
        form.reset();
      } else {
        const txt = await resp.text();
        setStatus({
          state: "error",
          msg: `Failed to send. Please try again. ${txt.slice(0, 220)}`,
        });
      }
    } catch (err) {
      setStatus({
        state: "error",
        msg: "Network error. Please try again later.",
      });
    }
  }


  const btn = {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "12px 18px",
      borderRadius: 12,
      fontWeight: 600,
      transition: "all .2s ease",
      textDecoration: "none",
      cursor: "pointer",
    },
    primary: {
      background: "var(--accent-color)",
      color: "var(--bg-color)",
      boxShadow: "0 0 18px rgba(255,153,0,.35)",
    },
    ghost: {
      background: "transparent",
      color: "var(--accent-color)",
      border: `1px solid var(--accent-color)`,
    },
  };


  return (
    <section id="connect" className="reveal" style={{ position: "relative", zIndex: 1, padding: "30px 0 60px" }}>
      <div style={{ maxWidth: page.max, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader
          id="connect-header"
          title="Let’s Connect"
          subtitle="Ready to create something awesome together?"
        />
        <div style={{ display: "grid", gap: page.gap, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>

          {/* Form starts here */}
          <form onSubmit={handleSubmit} style={{
              background: "var(--panel-color)",
              backdropFilter: "blur(6px)",
              border: `1px solid var(--border-color)`,
              borderRadius: page.radius,
              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
              padding: 50,
              display: "grid",
              gap: 12
            }}>
            {/* Honeypot field for spam prevention */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

            {/* Name Input */}
            <div>
              <label htmlFor="name" style={{ fontSize: 13, color: "var(--dim-color)" }}>Name</label>
              <input
                id="name"
                name="name"
                required
                style={{
                  width: "100%",
                  marginTop: 6,
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: `1px solid var(--border-color)`,
                  background: "rgba(255,255,255,.04)",
                  color: "var(--text-color)",
                }}
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" style={{ fontSize: 13, color: "var(--dim-color)" }}>Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                style={{
                  width: "100%",
                  marginTop: 6,
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: `1px solid var(--border-color)`,
                  background: "rgba(255,255,255,.04)",
                  color: "var(--text-color)",
                }}
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="subject" style={{ fontSize: 13, color: "var(--dim-color)" }}>Subject</label>
              <input
                id="subject"
                name="subject"
                placeholder="Optional"
                style={{
                  width: "100%",
                  marginTop: 6,
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: `1px solid var(--border-color)`,
                  background: "rgba(255,255,255,.04)",
                  color: "var(--text-color)",
                }}
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" style={{ fontSize: 13, color: "var(--dim-color)" }}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                style={{
                  width: "100%",
                  marginTop: 6,
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: `1px solid var(--border-color)`,
                  background: "rgba(255,255,255,.04)",
                  color: "var(--text-color)",
                  resize: "vertical",
                }}
              />
            </div>


            {/* Optional custom subject for Formspree */}
            {USE_FORMSPREE && <input type="hidden" name="_subject" value="New Portfolio Contact" />}


            {/* Submit Button and Status Message */}
            <div>
              <button
                type="submit"
                disabled={status.state === "sending"}
                style={{
                  ...btn.base,
                  ...btn.primary,
                  width: "100%",
                  opacity: status.state === "sending" ? 0.7 : 1,
                }}
              >
                {status.state === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status.msg && (
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 13,
                    color: status.state === "error" ? "#ff6b6b" : "var(--dim-color)",
                  }}
                >
                  {status.msg}
                </div>
              )}
            </div>
          </form>
          {/* Form ends here */}


          <div style={{ display: "grid", gap: 12, alignContent: "start" }}>
            <div style={{
                background: "var(--panel-color)",
                backdropFilter: "blur(6px)",
                border: `1px solid var(--border-color)`,
                borderRadius: page.radius,
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                padding: 20
              }}>
              <div style={{ fontWeight: 600, marginBottom: 6, color: "var(--text-color)" }}>Email</div>
              <a href="mailto:galmauday@gmail.com" style={{ color: "var(--accent-color)", textDecoration: "none" }}>
                galmauday@gmail.com
              </a>
            </div>
            <div style={{
                background: "var(--panel-color)",
                backdropFilter: "blur(6px)",
                border: `1px solid var(--border-color)`,
                borderRadius: page.radius,
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                padding: 20
              }}>
              <div style={{ fontWeight: 600, marginBottom: 6, color: "var(--text-color)" }}>Phone</div>
              <a href="tel:+918885496463" style={{ color: "var(--accent-color)", textDecoration: "none" }}>
                +91 8885496463
              </a>
            </div>
            <div style={{
                background: "var(--panel-color)",
                backdropFilter: "blur(6px)",
                border: `1px solid var(--border-color)`,
                borderRadius: page.radius,
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                padding: 20
              }}>
              <div style={{ fontWeight: 600, marginBottom: 6, color: "var(--text-color)" }}>Location</div>
              <div style={{ color: "var(--dim-color)" }}>Hyderabad, Telangana, India</div>
            </div>
          </div>
        </div>
        <footer
          style={{
            marginTop: 40,
            paddingTop: 20,
            borderTop: `1px solid var(--border-color)`,
            textAlign: "center",
            color: "var(--dim-color)",
            fontSize: 13,
          }}
        >
          © {new Date().getFullYear()} Galma Uday Kiran Reddy
        </footer>
      </div>
    </section>
  );
}

/* =========== App =========== */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useScrollReveal();

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', '#0b0b0c');
    root.style.setProperty('--panel-color', '#121214cc');
    root.style.setProperty('--text-color', '#eaeaea');
    root.style.setProperty('--dim-color', 'rgba(255,255,255,0.65)');
    root.style.setProperty('--border-color', 'rgba(255,255,255,0.08)');
    root.style.setProperty('--accent-color', '#ff9900');
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Global CSS styles for theme and animations */}
      <style>{`
        body {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          margin: 0;
          background: var(--bg-color);
          color: var(--text-color);
          transition: background 0.3s ease, color 0.3s ease;
          overflow-x: hidden; /* Prevent horizontal scroll due to animations */
        }
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        .skill-chip {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid var(--border-color);
          background: rgba(255, 153, 0, 0.1);
          color: var(--accent-color);
          font-size: 13px;
          margin: 3px;
          transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
          cursor: default;
          user-select: none;
        }
        .skill-chip:hover {
          background: var(--accent-color);
          color: var(--bg-color);
          box-shadow: 0 0 8px var(--accent-color);
          transform: scale(1.05);
        }

        /* Responsive adjustments for overall layout */
        @media (max-width: 768px) {
          html { font-size: 14px; }
          .hero h1 { font-size: 36px !important; }
          .hero p { font-size: 16px !important; }
          .section-header h2 { font-size: 28px !important; }
          .section-header p { font-size: 14px !important; }
        }
        @media (max-width: 480px) {
          html { font-size: 13px; }
          .hero h1 { font-size: 32px !important; }
          .section-header h2 { font-size: 24px !important; }
        }
      `}</style>

      <Loader isLoading={isLoading} />
      <div
        style={{
          visibility: isLoading ? "hidden" : "visible",
          opacity: isLoading ? 0 : 1,
          transition: "visibility 0s, opacity 0.5s linear",
        }}
      >
        <ThunderBackground />
        <AdvancedCursor isVisible={!isLoading} />

        <Nav />
        <main style={{ position: "relative", zIndex: 1 }}>
          <Hero />
          <About />
          <UniversityProjects />
          <Skills />
          <Achievements />
          <Connect />
        </main>
      </div>
    </>
  );
}
