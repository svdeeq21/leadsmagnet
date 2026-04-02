 // ---- AUTO YEAR ----
    document.getElementById('year').textContent = new Date().getFullYear();


    // ---- NAVIGATION SCROLL BEHAVIOUR ----
    // Adds a solid background + border to nav after scrolling 20px
    window.addEventListener('scroll', () => {
      document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });


    // ---- MOBILE NAV TOGGLE ----
    document.getElementById('nav-toggle').addEventListener('click', () => {
      document.getElementById('nav-mobile').classList.toggle('open');
    });
    function closeMobileNav() {
      document.getElementById('nav-mobile').classList.remove('open');
    }


    // ---- HERO CARDS STAGGER ----
    // Animate the floating proof cards on the right of the hero with a delay
    window.addEventListener('load', () => {
      const cards = document.querySelectorAll('.hero-card');
      cards.forEach((card, i) => {
        setTimeout(() => card.classList.add('visible'), 400 + i * 180);
      });
    });


    // ---- FAQ ACCORDION ----
    // One open at a time. Closes others when a new one opens.
    function toggleFAQ(btn) {
      const item   = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-answer').style.maxHeight = '0';
      });

      // Open clicked one if it was closed
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    }


    // ---- SCROLL REVEAL ----
    // Fades in .reveal and .reveal-children elements as they enter viewport.
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-children').forEach(el => {
      revealObs.observe(el);
    });


    // ---- FORM SUBMISSION ----
    // Shows spinner → success state on submit.
    //
    // TO CONNECT TO A REAL BACKEND, replace the setTimeout block with:
    //
    //   fetch('https://YOUR_ENDPOINT', {
    //     method: 'POST',
    //     body: new FormData(e.target),
    //     headers: { Accept: 'application/json' }
    //   }).then(() => showFormSuccess());
    //
    // Good free options: Formspree, Make.com webhook, Netlify Forms
    function handleFormSubmit(e) {
      e.preventDefault();
      const btn     = document.getElementById('submit-btn');
      const label   = document.getElementById('submit-label');
      const spinner = document.getElementById('submit-spinner');

      btn.disabled       = true;
      label.textContent  = 'Sending...';
      spinner.style.display = 'block';

      // ↓ Replace this with your real API call
      setTimeout(showFormSuccess, 1500);
    }

    function showFormSuccess() {
      document.getElementById('lead-form').style.display    = 'none';
      document.getElementById('form-success').style.display = 'block';
    }