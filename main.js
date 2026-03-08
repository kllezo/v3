// ============================================
// KLLEZO — Main Application
// SPA Router + Lenis + GSAP + Page Transitions
// ============================================

import { renderHome, initHome, destroyHome } from './pages/home.js';
import { renderServices, initServices } from './pages/services.js';
import { renderAbout, initAbout } from './pages/about.js';
import { renderContact, initContact } from './pages/contact.js';

// --- State ---
let currentRoute = null;
let lenis = null;
let isTransitioning = false;

// --- Routes ---
const routes = {
  '/': { render: renderHome, init: initHome, destroy: destroyHome },
  '/services': { render: renderServices, init: initServices, destroy: null },
  '/about': { render: renderAbout, init: initAbout, destroy: null },
  '/contact': { render: renderContact, init: initContact, destroy: null },
};

// --- Initialize Lenis Smooth Scrolling ---
function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  // Sync Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

// --- Background Parallax Shapes ---
function initBgParallax() {
  const shapes = document.querySelectorAll('.bg-shape');
  if (!shapes.length) return;

  shapes.forEach((shape, i) => {
    const speed = 0.05 + i * 0.03;
    gsap.to(shape, {
      y: () => window.innerHeight * speed,
      rotation: 15 * (i % 2 === 0 ? 1 : -1),
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
    });
  });

  // Subtle floating animation
  shapes.forEach((shape, i) => {
    gsap.to(shape, {
      x: `+=${15 + i * 8}`,
      y: `+=${10 + i * 5}`,
      duration: 8 + i * 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  });
}

function initParticles() {
  const container = document.createElement('div');
  container.className = 'ambient-particles';
  document.body.appendChild(container);

  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'ambient-particle';
    container.appendChild(p);

    gsap.set(p, {
      x: "random(0, 100vw)",
      y: "random(0, 100vh)",
      scale: "random(0.3, 1)",
      opacity: "random(0.1, 0.4)"
    });

    gsap.to(p, {
      y: "+=random(-60, 60)",
      x: "+=random(-60, 60)",
      duration: "random(10, 20)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
}

// --- Global Custom Cursor (Wing Flapping) ---
function initCursor() {
  const cursor = document.getElementById('cursorDot');
  if (!cursor) return;

  const wingLeft = cursor.querySelector('.cursor-wing--left');
  const wingRight = cursor.querySelector('.cursor-wing--right');

  // Fast tracking using GSAP quickTo
  const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
  const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

  // Cursor Motion Trails Setup
  const canvas = document.getElementById('cursorTrails');
  let ctx = null;
  let trailHistory = [];

  if (canvas) {
    ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
  }

  let mouse = { x: 0, y: 0 };
  let lastPos = { x: 0, y: 0 };
  let flapPhase = 0;
  let idleTime = 0;
  let isHovering = false;

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // Let CSS transform: translate(-50%, -50%) handle centering
    xTo(e.clientX);
    yTo(e.clientY);
  });

  // Hover states
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .clickable, img, .icon');
    if (target) {
      cursor.classList.add('cursor-wings--glow');
      isHovering = true;
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('a, button, .clickable, img, .icon');
    if (target) {
      cursor.classList.remove('cursor-wings--glow');
      isHovering = false;
    }
  });

  document.addEventListener('mousedown', () => cursor.classList.add('cursor-wings--active'));
  document.addEventListener('mouseup', () => cursor.classList.remove('cursor-wings--active'));

  gsap.ticker.add((time) => {
    const dx = mouse.x - lastPos.x;
    const dy = mouse.y - lastPos.y;
    const speed = Math.sqrt(dx * dx + dy * dy);

    let flapAngle = 0;

    // Threshold to start flapping
    if (speed > 0.5) {
      // Moving: Flap continuously but slowly
      idleTime = 0;
      // Much slower flapping speeds for elegance
      const flapSpeed = isHovering ? 0.08 : 0.04;

      // Speed multiplier heavily reduced
      flapPhase += (Math.min(speed, 50) * 0.002) + flapSpeed;

      // Bird wing motion: majestic slow flap
      flapAngle = Math.sin(flapPhase) * 35; // amplitude 35 degrees max
    } else {
      // Idle
      idleTime += gsap.ticker.deltaRatio();

      // Breathing animation (subtle scaling)
      const breathScale = 1 + Math.sin(time * 1.5) * 0.02;
      gsap.set(cursor, { scale: breathScale });

      // Extremely calm hover flaps every few seconds
      const flapCycle = idleTime % 400; // longer wait, ~6-7 seconds
      if (flapCycle > 360) {
        // Very slow, subtle single flap
        flapAngle = Math.sin((flapCycle - 360) * 0.08) * 15;
      } else {
        // Wings open at rest, slowly returning to 0
        flapAngle = 0;
        // Keep flap phase synced so it transitions smoothly when moving again
        flapPhase = 0;
      }
    }

    // Smooth rotation approach (slight up/down based on mouse movement direction)
    // Reduce rotation effect to stay minimal
    let rotateOffset = (dy * 0.2);
    rotateOffset = Math.max(-10, Math.min(10, rotateOffset));

    if (wingLeft && wingRight) {
      // Left wing: rotate up is negative, down is positive
      gsap.set(wingLeft, {
        rotation: -flapAngle + rotateOffset,
        transformOrigin: "right center"
      });
      // Right wing: rotate up is positive, down is negative
      gsap.set(wingRight, {
        rotation: flapAngle - rotateOffset,
        transformOrigin: "left center"
      });
    }

    // Decay lastPos slowly towards mouse for smooth velocity reading
    lastPos.x += (mouse.x - lastPos.x) * 0.15;
    lastPos.y += (mouse.y - lastPos.y) * 0.15;

    // Cursor trail drawing: Sparkle / Twinkle Effect
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new sparkles when moving (don't add when idle)
      if (speed > 1 && Math.random() > 0.4) {
        // Spawn 1-2 sparkles per frame when moving sufficiently
        const spawnCount = Math.random() > 0.8 ? 2 : 1;

        for (let j = 0; j < spawnCount; j++) {
          // Spread them slightly around the cursor path
          const offsetX = (Math.random() - 0.5) * 40;
          const offsetY = (Math.random() - 0.5) * 40;

          // Brand colors for sparkles: soft green, lighter highlights, and occasional bright yellow-green
          const colors = ['rgba(9, 69, 62, OPACITY)', 'rgba(30, 100, 80, OPACITY)', 'rgba(150, 200, 180, OPACITY)', 'rgba(200, 230, 210, OPACITY)'];
          const colorTemplate = colors[Math.floor(Math.random() * colors.length)];

          trailHistory.push({
            x: mouse.x + offsetX,
            y: mouse.y + offsetY,
            age: 0,
            life: Math.random() * 30 + 30, // 30-60 frames lifespan (0.5 to 1 sec)
            size: Math.random() * 3 + 1, // 1px to 4px
            rotation: Math.random() * Math.PI * 2, // Random initial rotation
            rotationSpeed: (Math.random() - 0.5) * 0.1, // Slow spin
            color: colorTemplate
          });
        }
      }

      // Draw and update sparkles
      for (let i = 0; i < trailHistory.length; i++) {
        const p = trailHistory[i];
        p.age += gsap.ticker.deltaRatio();
        p.rotation += p.rotationSpeed;

        // Calculate opacity based on age (fade in quick, fade out smooth)
        let opacity = 0;
        const progress = p.age / p.life;

        if (progress < 0.2) {
          opacity = progress / 0.2; // fade in
        } else if (progress < 1) {
          opacity = 1 - ((progress - 0.2) / 0.8); // fade out
        }

        // Twinkle effect: add sine wave to opacity for pulsing
        opacity = opacity * (0.5 + 0.5 * Math.sin(p.age * 0.5));

        if (opacity <= 0) continue; // Skip rendering if invisible

        const drawColor = p.color.replace('OPACITY', opacity.toFixed(2));

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Draw 4-point star
        ctx.beginPath();
        const r1 = p.size; // Outer radius
        const r2 = p.size * 0.3; // Inner radius
        const spikes = 4;

        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? r1 : r2;
          const angle = (Math.PI / spikes) * i;

          if (i === 0) ctx.moveTo(radius * Math.cos(angle), radius * Math.sin(angle));
          else ctx.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
        }

        ctx.closePath();

        // Glow effect
        ctx.shadowBlur = p.size * 2;
        ctx.shadowColor = drawColor;
        ctx.fillStyle = drawColor;
        ctx.fill();

        ctx.restore();
      }

      // Remove dead particles
      trailHistory = trailHistory.filter(p => p.age < p.life);
    }
  });
}
// --- Magnetic Buttons ---
function attachMagneticEffect() {
  const magnets = document.querySelectorAll('.btn');
  magnets.forEach(btn => {
    if (btn.dataset.magneticInit) return;
    btn.dataset.magneticInit = 'true';

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)"
      });
    });
  });
}

// --- Page Transition ---
async function pageTransition(direction = 'in') {
  const overlay = document.getElementById('pageTransition');
  const app = document.getElementById('app');

  return new Promise((resolve) => {
    if (direction === 'in') {
      // Page fades out while green overlay wipes in from bottom
      const tl = gsap.timeline({ onComplete: resolve });
      tl.to(app, { opacity: 0, duration: 0.4, ease: 'power2.inOut' })
        .fromTo(overlay,
          { scaleY: 0, transformOrigin: 'bottom' },
          { scaleY: 1, duration: 0.7, ease: 'power4.inOut' },
          0 // start at the same time
        );
    } else {
      // Overlay wipes out to top, page fades in
      const tl = gsap.timeline({ onComplete: resolve });
      tl.fromTo(overlay,
        { scaleY: 1, transformOrigin: 'top' },
        { scaleY: 0, duration: 0.7, ease: 'power4.inOut' }
      )
        .to(app, { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.4'); // app fades in as wipe reveals
    }
  });
}

// --- Navigation ---
function setupNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // Logo click
  document.querySelector('.nav__logo').addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/');
  });

  // Nav links
  navLinks.addEventListener('click', (e) => {
    const link = e.target.closest('.nav__link');
    if (!link) return;
    e.preventDefault();
    const route = link.getAttribute('data-route');
    navigateTo(route);

    // Close mobile nav
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  updateActiveLink();
}

function updateActiveLink() {
  const links = document.querySelectorAll('.nav__link');
  const path = getRoutePath();
  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('data-route') === path);
  });
}

// --- Router ---
function getRoutePath() {
  const hash = window.location.hash || '#/';
  return hash.slice(1) || '/';
}

async function navigateTo(path) {
  if (isTransitioning) return;
  if (path === currentRoute) return;

  isTransitioning = true;

  // Destroy current page
  const oldRoute = routes[currentRoute];
  if (oldRoute && oldRoute.destroy) {
    oldRoute.destroy();
  }

  // Kill all ScrollTriggers
  ScrollTrigger.getAll().forEach((st) => st.kill());

  // Transition overlay in
  await pageTransition('in');

  // Update hash (will not re-trigger if same)
  window.location.hash = '#' + path;
  currentRoute = path;

  // Render new page
  const app = document.getElementById('app');
  const route = routes[path] || routes['/'];
  app.innerHTML = route.render();
  gsap.set(app, { opacity: 0 }); // guarantee hidden before wipe out

  // Scroll to top
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo(0, 0);
  }

  // Update nav
  updateActiveLink();

  // Re-init background parallax
  initBgParallax();

  // Transition overlay out
  await pageTransition('out');

  // Initialize page after reveal
  if (route.init) {
    route.init();
  }

  // Init scroll reveals
  initScrollReveals();
  attachMagneticEffect();

  // Refresh ScrollTrigger
  ScrollTrigger.refresh();

  isTransitioning = false;
}

// --- Scroll Reveal Animations ---
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => el.classList.add('revealed'),
    });
  });
}

// --- Hash Change Handler ---
function onHashChange() {
  const path = getRoutePath();
  if (path !== currentRoute && !isTransitioning) {
    navigateTo(path);
  }
}

// --- Boot ---
function boot() {
  // Wait for GSAP and Lenis to load
  const checkDeps = setInterval(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof Lenis !== 'undefined') {
      clearInterval(checkDeps);

      gsap.registerPlugin(ScrollTrigger);
      initLenis();
      setupNavigation();

      // Listen for hash changes
      window.addEventListener('hashchange', onHashChange);

      // Initial route
      const initialPath = getRoutePath();
      currentRoute = initialPath;
      const route = routes[initialPath] || routes['/'];
      const app = document.getElementById('app');
      app.innerHTML = route.render();

      initBgParallax();
      initParticles();

      if (route.init) {
        route.init();
      }

      initScrollReveals();
      attachMagneticEffect();
      updateActiveLink();
      initCursor();
    }
  }, 50);
}

// Start
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
