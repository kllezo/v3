// ============================================
// KLLEZO — About Page
// ============================================

export function renderAbout() {
  return `
    <div class="about-hero">
      <h1 class="reveal">Creative Brains.<br/>Automated Gains.</h1>
      <p class="tagline reveal reveal-delay-1">Where creative storytelling meets intelligent automation.</p>
    </div>

    <section class="about-section">
      <h3 class="reveal">Our Philosophy</h3>
      <p class="body-text reveal reveal-delay-1">
        At Kllezo, we believe that the future of business growth lies at the intersection of creativity and technology. 
        We don't just market — we engineer systems that think, create, and execute with precision.
      </p>
      <p class="body-text reveal reveal-delay-2">
        Every strategy we design, every piece of content we create, and every automation we deploy is built with one goal: 
        to make your business grow smarter — not harder.
      </p>
    </section>

    <section class="about-section">
      <h3 class="reveal">What We Blend</h3>
      <div class="blend-grid">
        <div class="blend-item reveal">
          <div class="blend-item__icon"></div>
          <span>Creative Storytelling</span>
        </div>
        <div class="blend-item reveal reveal-delay-1">
          <div class="blend-item__icon"></div>
          <span>AI-Powered Communication</span>
        </div>
        <div class="blend-item reveal reveal-delay-2">
          <div class="blend-item__icon"></div>
          <span>Strategic Systems</span>
        </div>
        <div class="blend-item reveal reveal-delay-3">
          <div class="blend-item__icon"></div>
          <span>Automation Infrastructure</span>
        </div>
      </div>
    </section>

    <section class="about-section">
      <h3 class="reveal">Our Approach</h3>
      <p class="body-text reveal reveal-delay-1">
        We follow a precise, iterative process that ensures every project delivers real, measurable outcomes.
      </p>
      <div class="approach-grid">
        <div class="approach-card reveal">
          <div class="approach-card__number">01</div>
          <h4>Understand</h4>
          <p>Deep-dive into your business, market, and goals. We listen first, then strategize.</p>
        </div>
        <div class="approach-card reveal reveal-delay-1">
          <div class="approach-card__number">02</div>
          <h4>Design</h4>
          <p>Map out the strategy, systems, and creative direction. Every detail is intentional.</p>
        </div>
        <div class="approach-card reveal reveal-delay-2">
          <div class="approach-card__number">03</div>
          <h4>Execute</h4>
          <p>Build the creative and technical work. Launch with precision and confidence.</p>
        </div>
        <div class="approach-card reveal reveal-delay-3">
          <div class="approach-card__number">04</div>
          <h4>Optimize</h4>
          <p>Continuously refine and improve. Data-driven decisions for sustained growth.</p>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <h2 class="reveal">Ready to work with us?</h2>
      <a href="#/contact" class="btn btn--primary reveal reveal-delay-1">Connect Now</a>
    </section>

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

export function initAbout() {
  // Approach cards hover parallax
  const cards = document.querySelectorAll('.approach-card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -4,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
}
