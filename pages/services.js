// ============================================
// KLLEZO — Services Page
// ============================================

const services = [
  {
    icon: '/icon-content.svg.png',
    title: 'Content Creation',
    desc: `Attention isn't given. It's taken. We craft scroll-stopping visuals and strategic storytelling — content engineered to spark conversations and convert silently.`,
    capabilities: [
      'Social media content strategy & creation',
      'Video production & motion graphics',
      'Brand storytelling & copywriting',
      'Campaign-level content systems',
      'Performance-driven creative testing',
    ],
    impact: 'Stories that travel further than ads.',
  },
  {
    icon: '/icon-website.svg.png',
    title: 'Website Experiences',
    desc: `Not just websites. Digital first impressions. Fast, fluid, and conversion-focused — built to turn curiosity into commitment.`,
    capabilities: [
      'Custom website design & development',
      'Landing page & funnel optimization',
      'E-commerce experiences',
      'Performance & speed optimization',
      'SEO-integrated architecture',
    ],
    impact: 'A website that works as hard as your business does.',
  },
  {
    icon: '/icon-ai.svg.png',
    title: 'AI Communication Systems',
    desc: `Conversations that never sleep. Instant replies, intelligent follow-ups, and human-like interactions powered by automation.`,
    capabilities: [
      'AI-powered chatbots & assistants',
      'Automated email & WhatsApp sequences',
      'Lead qualification & routing',
      'CRM integration & sync',
      'Intelligent response workflows',
    ],
    impact: 'Your business responding — even while you sleep.',
  },
  {
    icon: '/icon-growth.svg.png',
    title: 'Growth Strategy & Consultancy',
    desc: `Clarity over chaos. Direction over noise. Sharp positioning and calculated moves — growth that feels intentional, not accidental.`,
    capabilities: [
      'Market research & competitive analysis',
      'Brand positioning & messaging strategy',
      'Go-to-market planning',
      'Revenue growth frameworks',
      'Performance analytics & KPI tracking',
    ],
    impact: 'Strategy that makes every move count.',
  },
  {
    icon: '/icon-workflow.svg.png',
    title: 'Workflow Automation',
    desc: `Manual is outdated. Systems that connect, trigger, and execute — silent engines running your backend at full throttle.`,
    capabilities: [
      'Business process automation',
      'Tool & platform integrations',
      'Automated reporting & dashboards',
      'Task routing & approval workflows',
      'Custom API-driven automation',
    ],
    impact: 'Your operations — finally on autopilot.',
  },
];

export function renderServices() {
  const blocksHTML = services
    .map(
      (s, i) => `
    <div class="service-block" data-index="${i}">
      <div class="service-block__inner">
        <div class="service-block__icon-col">
          <div class="service-block__icon">
            <img src="${s.icon}" alt="${s.title}" />
          </div>
        </div>
        <div class="service-block__text-col">
          <h3 class="service-block__title">${s.title}</h3>
          <p class="service-block__desc body-text">${s.desc}</p>
          <ul class="service-block__capabilities">
            ${s.capabilities.map((c) => `<li>${c}</li>`).join('')}
          </ul>
          <p class="impact-line">${s.impact}</p>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  return `
    <div class="services-page__hero">
      <h1 class="reveal">What We Build</h1>
      <p class="tagline reveal reveal-delay-1">Systems, stories, and strategies — engineered for growth.</p>
    </div>
    ${blocksHTML}
    <section class="cta-section">
      <h2 class="reveal">Let's build your growth engine.</h2>
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

export function initServices() {
  const blocks = document.querySelectorAll('.service-block');

  blocks.forEach((block, index) => {
    const isEven = index % 2 !== 0; // The second block (index 1) is visually even based on CSS nth-child

    const iconCol = block.querySelector('.service-block__icon-col');
    const icon = block.querySelector('.service-block__icon img');
    const textElements = block.querySelectorAll('.service-block__title, .service-block__desc, .service-block__capabilities li, .impact-line');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: 'top 80%',
        once: true,
      }
    });

    // Alternating slide direction
    const iconX = isEven ? 60 : -60;
    const textX = isEven ? -60 : 60;

    // Slide in wrappers
    tl.fromTo(iconCol,
      { x: iconX, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    );

    // Icon pop and slight rotate
    tl.fromTo(icon,
      { scale: 0.9, rotation: isEven ? -5 : 5 },
      { scale: 1, rotation: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)' },
      '-=0.7'
    );

    // Stagger text lines with fade and translateY
    tl.fromTo(textElements,
      { opacity: 0, y: 15, x: textX },
      { opacity: 1, y: 0, x: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
      '-=1.0'
    );
  });
}
