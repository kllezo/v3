// ============================================
// KLLEZO — Contact Page
// ============================================

export function renderContact() {
  return `
    <div class="contact-page">
      <div class="contact-grid">
        <div class="contact-info">
          <h1 class="reveal">Let's Connect</h1>
          <p class="tagline reveal reveal-delay-1">
            Have a project in mind? Let's talk about how Kllezo can help you build something smarter.
          </p>

          <div class="reveal reveal-delay-2" style="margin-top: 2.5rem;">
            <div class="contact-detail">
              <span class="contact-detail__label">Email</span>
              <span>hello@kllezo.com</span>
            </div>
            <div class="contact-detail">
              <span class="contact-detail__label">WhatsApp</span>
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>

        <form class="contact-form reveal reveal-delay-1" id="contactForm" onsubmit="return false;">
          <div class="form-group">
            <label for="contactName">Name</label>
            <input type="text" id="contactName" name="name" placeholder="Your full name" required />
          </div>

          <div class="form-group">
            <label for="contactEmail">Email</label>
            <input type="email" id="contactEmail" name="email" placeholder="you@company.com" required />
          </div>

          <div class="form-group">
            <label for="contactPhone">Phone / WhatsApp</label>
            <input type="tel" id="contactPhone" name="phone" placeholder="+91 00000 00000" />
          </div>

          <div class="form-group">
            <label for="contactCompany">Company <span class="optional">(optional)</span></label>
            <input type="text" id="contactCompany" name="company" placeholder="Company name" />
          </div>

          <div class="form-group">
            <label for="contactPurpose">Purpose of Contact</label>
            <select id="contactPurpose" name="purpose" required>
              <option value="" disabled selected>Select a service</option>
              <option value="content">Content Creation</option>
              <option value="website">Website Experiences</option>
              <option value="ai">AI Communication Systems</option>
              <option value="growth">Growth Strategy & Consultancy</option>
              <option value="workflow">Workflow Automation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="contactMessage">Message</label>
            <textarea id="contactMessage" name="message" placeholder="Tell us about your project..." rows="4" required></textarea>
          </div>

          <button type="submit" class="btn btn--primary" id="contactSubmitBtn">Start the Conversation</button>
        </form>
      </div>
    </div>

    <!-- WhatsApp floating button -->
    <a href="https://wa.me/919876543210" target="_blank" rel="noopener" class="whatsapp-float" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>

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

export function initContact() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // Focus animation for inputs
  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach((input) => {
    input.addEventListener('focus', () => {
      gsap.to(input, {
        borderColor: '#09453e',
        duration: 0.3,
        ease: 'power2.out',
      });
    });
    input.addEventListener('blur', () => {
      gsap.to(input, {
        borderColor: 'rgba(9, 69, 62, 0.12)',
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });

  // Submit handler
  const submitBtn = document.getElementById('contactSubmitBtn');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Button animation
    gsap.to(submitBtn, {
      scale: 0.95,
      duration: 0.1,
      ease: 'power2.in',
      onComplete: () => {
        gsap.to(submitBtn, {
          scale: 1,
          duration: 0.3,
          ease: 'elastic.out(1, 0.5)',
        });
        submitBtn.textContent = 'Message Sent ✓';
        submitBtn.style.background = '#25d366';
        setTimeout(() => {
          submitBtn.textContent = 'Start the Conversation';
          submitBtn.style.background = '';
          form.reset();
        }, 2500);
      },
    });
  });
}
