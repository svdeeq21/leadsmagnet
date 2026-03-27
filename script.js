  // ============================================
    // YEAR — Auto-updates copyright year in footer
    // ============================================
    document.getElementById('year').textContent = new Date().getFullYear();


    // ============================================
    // NAVIGATION — Scroll detection + mobile menu
    // ============================================

    // Add border to nav when user scrolls past 10px
    window.addEventListener('scroll', () => {
      document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });

    // Toggle mobile nav
    document.getElementById('nav-toggle').addEventListener('click', () => {
      document.getElementById('nav-mobile').classList.toggle('open');
    });

    function closeMobileNav() {
      document.getElementById('nav-mobile').classList.remove('open');
    }


    // ============================================
    // FAQ ACCORDION
    // Click a question to expand/collapse the answer.
    // Only one open at a time (closes others).
    // ============================================

    function toggleFAQ(btn) {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all open items first
      document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-answer').style.maxHeight = '0';
      });

      // If it was closed, open it now
      if (!isOpen) {
        item.classList.add('open');
        // Set max-height to scroll height so CSS transition works
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    }


    // ============================================
    // SCROLL REVEAL ANIMATION
    // Uses IntersectionObserver to add .visible class
    // when elements enter the viewport.
    // CSS handles the actual transition.
    // ============================================

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target); // only trigger once
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe all .reveal and .reveal-children elements
    document.querySelectorAll('.reveal, .reveal-children').forEach(el => {
      revealObserver.observe(el);
    });


    // ============================================
    // FORM SUBMISSION
    // Shows spinner → success message on submit.
    // 
    // TO CONNECT TO A REAL BACKEND:
    // Replace the setTimeout with a fetch() call
    // to your API endpoint or form service (e.g. Formspree, Make, etc.)
    // ============================================

    function handleFormSubmit(e) {
      e.preventDefault();

      const btn    = document.getElementById('submit-btn');
      const label  = document.getElementById('submit-label');
      const spinner = document.getElementById('submit-spinner');

      // Show loading state
      btn.disabled = true;
      label.textContent = 'Sending...';
      spinner.style.display = 'block';

      // ---- REPLACE THIS BLOCK WITH YOUR REAL API CALL ----
      // Example using Formspree:
      // fetch('https://formspree.io/f/YOUR_ID', {
      //   method: 'POST',
      //   body: new FormData(e.target),
      //   headers: { Accept: 'application/json' }
      // }).then(() => showSuccess());
      // ---- END OF BLOCK TO REPLACE ----

      // Simulated 1.5s delay (remove when using real backend)
      setTimeout(showSuccess, 1500);
    }

    function showSuccess() {
      document.getElementById('lead-form').style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    }
