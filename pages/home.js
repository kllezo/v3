// ============================================
// KLLEZO — Homepage
// Cinematic intro + scroll-driven services + parallax + CTA
// ============================================

const services = [
  {
    icon: '/icon-content.svg.png',
    title: 'Content Creation',
    desc: `Attention isn't given. It's taken.\nScroll-stopping visuals. Strategic storytelling.\nContent engineered to spark conversations and convert silently.`,
    impact: 'Stories that travel further than ads.',
  },
  {
    icon: '/icon-website.svg.png',
    title: 'Website Experiences',
    desc: `Not just websites. Digital first impressions.\nFast. Fluid. Conversion-focused.\nBuilt to turn curiosity into commitment.`,
    impact: 'A website that works as hard as your business does.',
  },
  {
    icon: '/icon-ai.svg.png',
    title: 'AI Communication Systems',
    desc: `Conversations that never sleep.\nInstant replies. Intelligent follow-ups.\nHuman-like interactions powered by automation.`,
    impact: 'Your business responding — even while you sleep.',
  },
  {
    icon: '/icon-growth.svg.png',
    title: 'Growth Strategy & Consultancy',
    desc: `Clarity over chaos. Direction over noise.\nSharp positioning. Calculated moves.\nGrowth that feels intentional — not accidental.`,
    impact: 'Strategy that makes every move count.',
  },
  {
    icon: '/icon-workflow.svg.png',
    title: 'Workflow Automation',
    desc: `Manual is outdated.\nSystems that connect, trigger, and execute.\nSilent engines running your backend at full throttle.`,
    impact: 'Your operations — finally on autopilot.',
  },
];

export function renderHome() {
  return `
    <!-- SCENE 1: HOOK (Now the direct start) -->
    <section class="story-scroll advanced-story" id="storyScroll">
      <canvas id="systemNetworkBg" class="system-network-bg"></canvas>
      <div class="story-scroll__pinned" id="storyPinned">
        
        <!-- Scroll Guide (Scene 1 only) -->
        <div class="scroll-guide" id="scrollGuide">
          <span>SCROLL</span>
          <div class="scroll-guide__line-wrap">
            <div class="scroll-guide__line"></div>
            <div class="scroll-guide__arrow-left"></div>
            <div class="scroll-guide__arrow-right"></div>
          </div>
        </div>

        <div class="story-container">
          <!-- SCENE 1: HOOK -->
          <div class="story-scene scene-1">
            <h2 class="story-line">The internet<br>is crowded.</h2>
          </div>
          
          <!-- SCENE 2A: ATTENTION IS RARE -->
          <div class="story-scene scene-2a">
            <h2 class="story-line text-large relative">
              Attention<br>is <span class="word-rare">RARE.
                <svg class="svg-underline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M 5 15 Q 50 20, 95 12" />
                </svg>
              </span>
            </h2>
          </div>

          <!-- SCENE 2B: PAIN (Staggered Auto-Fade) -->
          <div class="story-scene scene-2b">
            <div class="staggered-stack" id="scene2Stack">
              <h2 class="stagger-line">More content.</h2>
              <h2 class="stagger-line">More tools.</h2>
              <h2 class="stagger-line">More effort.</h2>
            </div>
          </div>

          <!-- SCENE 2C: NO MOMENTUM -->
          <div class="story-scene scene-2c">
            <div class="momentum-wrap" id="scene2Conclusion">
              <span class="word-still">Still</span><br>
              <div class="momentum-group">
                <svg class="svg-highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path class="stroke-path" d="M 0 22 Q 25 10, 50 18 T 100 16" stroke="#d32f2f" stroke-width="18" stroke-linecap="round" fill="none" />
                    <path class="stroke-path" d="M 2 26 Q 30 18, 60 22 T 96 22" stroke="#d32f2f" stroke-width="12" stroke-linecap="round" fill="none" opacity="0.8"/>
                </svg>
                <span class="conclusion-text word-highlight">no momentum.</span>
              </div>
            </div>
          </div>

          <!-- SCENE 3A: REALIZATION -->
          <div class="story-scene scene-3a">
            <h2 class="story-line">Because growth today<br>isn't effort.</h2>
          </div>

          <!-- SCENE 3B: IT'S SYSTEMS (own screen) -->
          <div class="story-scene scene-3b">
            <div class="story-line systems-group">
              <div class="systems-flex">
                <span class="word-its">It's</span>
                <span class="word-systems word-lasso">Systems.
                  <svg class="svg-lasso" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 100" preserveAspectRatio="none">
                    <path d="M 5 50 A 65 45 0 1 1 135 50 A 65 45 0 1 1 5 50 Z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <!-- SCENE 3C: "And we build those systems." + Logo Reveal (SAME SCREEN) -->
          <div class="story-scene scene-3c">
            <div class="scene-3c-content">
              <h2 class="story-line" id="weBuildSystems">And we build those systems.</h2>
              <div class="hero-reveal-logo-container" id="logoRevealWrap" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <div class="hero-reveal-logo-row" style="display: flex; align-items: center; justify-content: center; gap: clamp(10px, 3vw, 30px); width: 100%;">
                  <div class="reveal-wing reveal-wing--left" id="revealWingLeft"></div>
                  <h1 class="kllezo-logo-title" id="finalKllezoLogo" style="font-size: clamp(4.5rem, 14vw, 12rem); font-weight: 800; margin: 0; line-height: 1; color: var(--green); letter-spacing: -0.02em; text-transform: uppercase;">KLLEZO</h1>
                  <div class="reveal-wing reveal-wing--right" id="revealWingRight"></div>
                </div>
                <p class="kllezo-logo-tagline" id="finalKllezoTagline" style="color: var(--green); font-weight: 600; letter-spacing: 0.15em; font-size: clamp(0.85rem, 2vw, 1.2rem); margin: 1rem 0 0 0; text-align: center;">CREATIVE BRAINS, AUTOMATED GAINS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Node Activation (Services) -->
    <section class="system-activation sequential" id="systemActivation">
      <div class="activation-nodes" id="activationNodesWrap">
        ${services.map((s, i) => `
          <a href="#/services" class="activation-node sequential-node" data-index="${i}">
            <div class="spark-effect"></div>
            <div class="activation-node__glow-bg"></div>
            <div class="activation-node__icon">
              <img src="${s.icon}" alt="${s.title}" />
            </div>
            <p class="activation-node__label">${s.title}</p>
          </a>
        `).join('')}
      </div>
      
      <!-- SVG Connection Line connecting all nodes visually floating -->
      <svg class="system-activation__line floating-line" id="systemLine" xmlns="http://www.w3.org/2000/svg">
        <line x1="0%" y1="40%" x2="100%" y2="40%" class="base-line" />
        <line x1="0%" y1="40%" x2="100%" y2="40%" class="active-line" id="systemActiveLine" />
        <!-- Pulse travel circle -->
        <circle cx="0" cy="40%" r="4" class="pulse-circle" id="systemPulse" />
      </svg>
    </section>

    <!-- Final Cinematic Conclusion & CTA -->
    <section class="story-conclusion cta-wavy" id="storyConclusion">
      <div class="wavy-arrows-container">
        <!-- Centralized SVG for all arrows converging to the area above the button -->
        <svg class="cta-arrows-svg" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" style="position: absolute; top: -50px; left: 0; width: 100%; height: 100%;">
          <!-- Step 1: Main Guide Arrow from Icons -->
          <g class="arrow-group guide-arrow">
            <path class="arrow-path" d="M 500,-50 C 480,20 520,80 500,150" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round"/>
            <path class="arrow-head" d="M 490,140 L 500,150 L 510,140" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round"/>
          </g>
          
          <!-- Auxiliary Arrow: Left Edge -->
          <g class="arrow-group aux-arrow">
            <path class="arrow-path" d="M -50,100 C 100,120 250,160 380,170" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
            <path class="arrow-head" d="M 370,160 L 380,170 L 370,180" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
          </g>

          <!-- Auxiliary Arrow: Right Edge -->
          <g class="arrow-group aux-arrow">
            <path class="arrow-path" d="M 1050,100 C 900,120 750,160 620,170" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
            <path class="arrow-head" d="M 630,160 L 620,170 L 630,180" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
          </g>

          <!-- Auxiliary Arrow: Bottom Left -->
          <g class="arrow-group aux-arrow">
            <path class="arrow-path" d="M 100,550 C 150,420 200,320 380,220" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
            <path class="arrow-head" d="M 365,225 L 380,220 L 375,235" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
          </g>

          <!-- Auxiliary Arrow: Bottom Right -->
          <g class="arrow-group aux-arrow">
            <path class="arrow-path" d="M 900,550 C 850,420 800,320 620,220" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
            <path class="arrow-head" d="M 635,225 L 620,220 L 625,235" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
          </g>
        </svg>
      </div>

      <div class="final-cta relative-z">
        <a href="#/contact" class="btn btn--primary btn-magnetic btn--massive" id="ctaBtn">Let's Grow</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__main">
          <div class="footer__brand">
            <h2 class="footer__title">Kllezo</h2>
            <p class="footer__desc">Creative Brains. Automated Gains. Elevating brands through intelligent design and systems.</p>
          </div>
          <div class="footer__links">
            <div class="footer__col">
              <h4>Company</h4>
              <a href="#/">Home</a>
              <a href="#/services">Services</a>
              <a href="#/about">About</a>
              <a href="#/contact">Contact</a>
            </div>
            <div class="footer__col">
              <h4>Connect</h4>
              <a href="#" target="_blank">Twitter / X</a>
              <a href="#" target="_blank">LinkedIn</a>
              <a href="#" target="_blank">Instagram</a>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <p>© ${new Date().getFullYear()} Kllezo Agency. All rights reserved.</p>
          <div class="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function initHome() {
  initNetworkBackground();
  initStoryScroll();
  initSystemActivation();
  initStoryConclusion();
}

export function destroyHome() {
  // ScrollTriggers are killed in main.js before navigation
}

// --- Cinematic Advanced Story Sequence ---
function initStoryScroll() {
  const container = document.getElementById('storyScroll');
  const pinned = document.getElementById('storyPinned');

  if (!container) return;

  // Elements — each scene has a unique class now
  const scene1 = document.querySelector('.scene-1');
  const scene2a = document.querySelector('.scene-2a');
  const scene2b = document.querySelector('.scene-2b');
  const scene2c = document.querySelector('.scene-2c');
  const scene3a = document.querySelector('.scene-3a');
  const scene3b = document.querySelector('.scene-3b');
  const scene3c = document.querySelector('.scene-3c');

  // SVGs
  const svgUnderline = document.querySelector('.svg-underline path');
  const svgHighlightPaths = gsap.utils.toArray('.svg-highlight path');
  const svgLasso = document.querySelector('.svg-lasso path');

  // Reset SVG paths for DrawSVG logic
  const setupPath = (path) => {
    if (!path) return 0;
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    return len;
  };
  setupPath(svgUnderline);
  svgHighlightPaths.forEach(setupPath);
  setupPath(svgLasso);

  // Initial states — hide all story-lines AND stagger-lines
  const allStoryLines = gsap.utils.toArray('.story-line');
  const allStaggerLines = gsap.utils.toArray('.stagger-line');
  gsap.set(allStoryLines, { autoAlpha: 0, y: 40 });
  gsap.set(allStaggerLines, { autoAlpha: 0, y: 30 });
  gsap.set('.scroll-guide', { autoAlpha: 1 });

  // Also hide Scene 2c (momentum wrap) and conclusion initially
  const momentumWrap = document.getElementById('scene2Conclusion');
  const conclusionText = document.querySelector('.conclusion-text');
  gsap.set(momentumWrap, { autoAlpha: 0, y: 40 });
  gsap.set(conclusionText, { autoAlpha: 0 });

  // Scene 3C logo — hidden initially
  const logoWrap = document.getElementById('logoRevealWrap');
  if (logoWrap) gsap.set(logoWrap, { autoAlpha: 0, scale: 0.1 });

  // Hero logo initial state & load entrance
  const heroLogoImg = document.querySelector('.hero-initial-logo__img');
  if (heroLogoImg) {
    gsap.fromTo(heroLogoImg,
      { autoAlpha: 0, scale: 0.95, y: 30 },
      { autoAlpha: 1, scale: 1.05, y: 0, duration: 2, ease: "power3.out" }
    );
  }

  // Master Timeline — tighter scroll for 1 scroll = 1 scene
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "+=4000",
      pin: pinned,
      scrub: 0.5,
      anticipatePin: 1
    }
  });

  // Fade the scroll guide out immediately
  tl.to('.scroll-guide', { autoAlpha: 0, duration: 0.2 }, "+=0.2");

  // ========================================
  // SCENE 1 : HOOK — "The internet is crowded."
  // ========================================
  const s1Lines = scene1.querySelectorAll('.story-line');
  s1Lines.forEach((line) => {
    tl.to(line, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" })
      .to({}, { duration: 0.8 })
      .to(line, { autoAlpha: 0, duration: 0.5 });
  });

  tl.to({}, { duration: 0.3 });

  // ========================================
  // SCENE 2A : "Attention is RARE."
  // ========================================
  const s2aLine = scene2a.querySelector('.story-line');
  const rareWord = scene2a.querySelector('.word-rare');
  tl.to(s2aLine, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" })
    .from(rareWord, { scale: 0.5, autoAlpha: 0, duration: 0.6, ease: "back.out(1.5)" }, "-=0.3")
    .to(svgUnderline, { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" }, "-=0.2")
    .to({}, { duration: 0.8 })
    .to(s2aLine, { autoAlpha: 0, duration: 0.5 });

  tl.to({}, { duration: 0.3 });

  // ========================================
  // SCENE 2B : STAGGERED AUTO-FADE
  // "More content." → "More tools." → "More effort."
  // These fade in automatically without extra scrolling
  // ========================================
  const staggerLines = gsap.utils.toArray('#scene2Stack .stagger-line');

  tl.to(staggerLines, {
    autoAlpha: 1,
    y: 0,
    duration: 0.4,
    stagger: 0.4,
    ease: "power2.out"
  });

  // Hold all three visible
  tl.to({}, { duration: 0.8 });
  // Fade them all out together
  tl.to(staggerLines, { autoAlpha: 0, duration: 0.4 });

  tl.to({}, { duration: 0.3 });

  // ========================================
  // SCENE 2C : "Still / no momentum."
  // Red highlight ONLY on "no momentum"
  // ========================================
  tl.to(momentumWrap, { autoAlpha: 1, y: 0, duration: 0.3 })
    .to(svgHighlightPaths, { strokeDashoffset: 0, duration: 0.6, ease: "power2.inOut", stagger: 0.2 })
    .to(conclusionText, { autoAlpha: 1, duration: 0.3 }, "-=0.1")
    .to({}, { duration: 0.8 })
    .to(momentumWrap, { autoAlpha: 0, duration: 0.5 });

  tl.to({}, { duration: 0.3 });

  // ========================================
  // SCENE 3A : "Because growth today isn't effort."
  // ========================================
  const s3aLine = scene3a.querySelector('.story-line');
  tl.to(s3aLine, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" })
    .to({}, { duration: 0.8 })
    .to(s3aLine, { autoAlpha: 0, duration: 0.5 });

  tl.to({}, { duration: 0.3 });

  // ========================================
  // SCENE 3B : "It's Systems." (own screen)
  // ========================================
  const s3bLine = scene3b.querySelector('.story-line');
  const systemsWord = scene3b.querySelector('.word-systems');

  tl.to(s3bLine, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" })
    .from(systemsWord, { scale: 0.5, autoAlpha: 0, duration: 0.5, ease: "back.out(1.5)" }, "-=0.3")
    .to(svgLasso, { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" }, "-=0.2")
    .to({}, { duration: 0.8 })
    .to(s3bLine, { autoAlpha: 0, duration: 0.5 });

  tl.to({}, { duration: 0.3 });

  // ========================================
  // SCENE 3C : "And we build those systems." + Logo Reveal (SAME SCREEN)
  // Text appears first, then logo auto-reveals after ~0.6s
  // ========================================
  const weBuildLine = document.getElementById('weBuildSystems');
  const wingLeft = document.getElementById('revealWingLeft');
  const wingRight = document.getElementById('revealWingRight');
  const finalLogo = document.getElementById('finalKllezoLogo');
  const finalTagline = document.getElementById('finalKllezoTagline');

  if (wingLeft && wingRight && finalLogo) {
    gsap.set(wingLeft, { autoAlpha: 0, x: -80 });
    gsap.set(wingRight, { autoAlpha: 0, x: 80 });
    gsap.set(finalLogo, { autoAlpha: 0 });
    if (finalTagline) gsap.set(finalTagline, { autoAlpha: 0, y: 20 });
    gsap.set(logoWrap, { autoAlpha: 1, scale: 1 });

    tl.to(weBuildLine, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" })
      .to(finalLogo, { autoAlpha: 1, duration: 0.8 }, "+=0.6")
      .to(wingLeft, { autoAlpha: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
      .to(wingRight, { autoAlpha: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.8");

    if (finalTagline) {
      tl.to(finalTagline, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
    }

    tl.to({}, { duration: 1.0 }); // Hold before CTA
  } else {
    tl.to(weBuildLine, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" })
      .to(logoWrap, { autoAlpha: 1, scale: 1, duration: 1.0, ease: "power2.out" }, "+=0.6")
      .to({}, { duration: 1.0 }); // Hold before CTA
  }
}

// --- Interactive System Activation (Sequential Shift) ---
function initSystemActivation() {
  const section = document.getElementById('systemActivation');
  const nodes = gsap.utils.toArray('.sequential-node');
  const activeLine = document.getElementById('systemActiveLine');
  const pulse = document.getElementById('systemPulse');

  if (!section || !nodes.length) return;

  // Reset line stroke
  let pathLen = 0;
  if (activeLine) {
    pathLen = 10000;
    gsap.set(activeLine, {
      strokeDasharray: pathLen,
      strokeDashoffset: pathLen
    });
  }

  // Determine target width & margin based on screen size
  const isMobile = window.innerWidth < 768;
  const targetWidth = isMobile ? "120px" : "clamp(120px, 14vw, 200px)";
  const targetGap = isMobile ? "1rem" : "1.5rem";

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "center center",
      end: "+=1000", // Fast pacing for very quick icon reveal
      pin: true,
      scrub: 0.2,      // Very snappy and precise scrub
      anticipatePin: 1
    }
  });

  nodes.forEach((node, i) => {
    const spark = node.querySelector('.spark-effect');
    const iconContainer = node.querySelector('.activation-node__icon');
    const icon = iconContainer.querySelector('img');
    const label = node.querySelector('.activation-node__label');

    // Initial setup for flex row expansion
    gsap.set(node, { autoAlpha: 0, y: 80, width: 0, margin: "0px" });

    // Expansion sequence tightly linked to scrub
    tl.to(node, {
      width: targetWidth,
      marginLeft: targetGap,
      marginRight: targetGap,
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    })
      // Spark explosion
      .fromTo(spark,
        { scale: 0, autoAlpha: 0 },
        { scale: 1.8, autoAlpha: 0.8, duration: 0.3, ease: "power2.out" },
        "-=0.5"
      ).to(spark, { autoAlpha: 0, scale: 2.5, duration: 0.5, ease: "power2.out" })

      // Icon Pop & Rotation + Glow
      .fromTo(icon,
        { scale: 0.6, rotation: -15 },
        { scale: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" },
        "-=0.8"
      )
      .to(iconContainer, {
        filter: "drop-shadow(0 0 15px rgba(9, 69, 62, 0.6))",
        duration: 0.5
      }, "-=0.6")

      // Label Reveal
      .to(label, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.4");

    // Explicit wait-for-next-scroll gap only between items, not at the end
    if (i < nodes.length - 1) {
      tl.to({}, { duration: 0.8 });
    }
  });

  // Draw the connection line across all nodes simultaneously while scrubbing
  if (activeLine && !isMobile) {
    tl.to(activeLine, {
      strokeDashoffset: 0,
      duration: nodes.length * 1.5,
      ease: "none"
    }, 0);
  }
}

// --- Final Cinematic Conclusion & CTA ---
function initStoryConclusion() {
  const section = document.getElementById('storyConclusion');
  const finalCta = document.querySelector('.final-cta');
  const arrowPaths = gsap.utils.toArray('.arrow-path');
  const arrowHeads = gsap.utils.toArray('.arrow-head');

  const guidePath = document.querySelector('.guide-arrow .arrow-path');
  const guideHead = document.querySelector('.guide-arrow .arrow-head');
  const auxPaths = gsap.utils.toArray('.aux-arrow .arrow-path');
  const auxHeads = gsap.utils.toArray('.aux-arrow .arrow-head');

  if (!section || !finalCta) return;

  gsap.set(finalCta, { autoAlpha: 0, scale: 0.95 });

  // Setup SVG Arrows drawing lengths
  const allPaths = [guidePath, ...auxPaths];
  allPaths.forEach(path => {
    if (path) {
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    }
  });

  const allHeads = [guideHead, ...auxHeads];
  allHeads.forEach(head => {
    if (head) gsap.set(head, { autoAlpha: 0 });
  });
  gsap.set('.wavy-arrow', { autoAlpha: 1 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%", // begin animating when section slowly comes into view
      end: "+=600", // Draw arrows smoothly over scroll without pinning
      scrub: 1 // smooth natural drawing linked to scroll
    }
  });

  // Step 1: Draw the main guide line downward
  if (guidePath) {
    tl.to(guidePath, { strokeDashoffset: 0, duration: 0.6, ease: "power2.inOut" }, 0);
  }
  if (guideHead) {
    tl.to(guideHead, { autoAlpha: 1, duration: 0.2 }, "-=0.2");
  }

  // Step 2: Draw the auxiliary arrows converging inward from edges
  if (auxPaths.length > 0) {
    tl.to(auxPaths, {
      strokeDashoffset: 0,
      duration: 1.0,
      stagger: 0.05,
      ease: "power2.out"
    }, 0.2); // Overlaps with guide line drawing
  }

  if (auxHeads.length > 0) {
    tl.to(auxHeads, {
      autoAlpha: 1,
      duration: 0.2,
      stagger: 0.05
    }, "-=1.0"); // Shows heads near end of stroke draw
  }

  // Step 3: Button fade/scale
  tl.to(finalCta, {
    autoAlpha: 1,
    scale: 1,
    duration: 0.4,
    ease: "back.out(1.5)"
  }, 0.6); // Comes in quickly as arrows converge

  // Final CTA push
  tl.to(finalCta, {
    autoAlpha: 1,
    scale: 1,
    duration: 1,
    ease: "back.out(1.5)"
  }, "-=0.5");

  // Magnetic CTA Effect
  const ctaBtn = document.getElementById('ctaBtn');
  section.addEventListener('mousemove', (e) => {
    if (!ctaBtn) return;
    const rect = ctaBtn.getBoundingClientRect();
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const dist = Math.hypot(e.clientX - btnX, e.clientY - btnY);

    if (dist < 150) {
      const pullX = (e.clientX - btnX) * 0.15;
      const pullY = (e.clientY - btnY) * 0.15;

      gsap.to(ctaBtn, {
        x: pullX,
        y: pullY,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
      ctaBtn.classList.add('glow-active');

      gsap.to('.wavy-arrows-container', {
        x: pullX * 0.4,
        y: pullY * 0.4,
        duration: 0.3
      });
    } else {
      gsap.to(ctaBtn, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)"
      });
      ctaBtn.classList.remove('glow-active');

      gsap.to('.wavy-arrows-container', {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)"
      });
    }
  });

  section.addEventListener('mouseleave', () => {
    if (!ctaBtn) return;
    gsap.to([ctaBtn, '.wavy-arrows-container'], {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)"
    });
    ctaBtn.classList.remove('glow-active');
  });
}

// --- System Network Background ---
function initNetworkBackground() {
  const canvas = document.getElementById('systemNetworkBg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  const particles = [];
  const numParticles = 40;
  for (let i = 0; i < numParticles; i++) {
    particles.push({
      baseX: Math.random() * width,
      baseY: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      x: 0, y: 0
    });
  }

  const bgState = { progress: 0 };

  ScrollTrigger.create({
    trigger: '#storyScroll',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      bgState.progress = self.progress;
    }
  });

  gsap.ticker.add(() => {
    ctx.clearRect(0, 0, width, height);

    let maxDist = 0;
    let globalAlpha = 0;

    if (bgState.progress > 0) {
      if (bgState.progress < 0.3) {
        globalAlpha = bgState.progress * 1.5; // up to ~0.45
      } else {
        globalAlpha = 0.45 + (bgState.progress - 0.3) * 0.5;
        maxDist = (bgState.progress - 0.3) * 300; // max ~200 connection dist
      }
    }

    if (globalAlpha < 0.05) return;

    let cx = width / 2;
    let cy = height / 2;
    let pullStrength = bgState.progress > 0.6 ? (bgState.progress - 0.6) * 1.5 : 0;
    pullStrength = Math.min(pullStrength, 0.8);

    particles.forEach(p => {
      p.baseX += p.vx;
      p.baseY += p.vy;

      if (p.baseX < 0 || p.baseX > width) p.vx *= -1;
      if (p.baseY < 0 || p.baseY > height) p.vy *= -1;

      let displayX = p.baseX;
      let displayY = p.baseY;

      if (pullStrength > 0) {
        displayX += (cx - p.baseX) * pullStrength;
        displayY += (cy - p.baseY) * pullStrength;
      }
      p.x = displayX;
      p.y = displayY;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(9, 69, 62, ${globalAlpha * 0.5})`;
      ctx.fill();
    });

    if (maxDist > 0) {
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * globalAlpha * 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(9, 69, 62, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }
    }
  });
}
