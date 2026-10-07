/**
 * Arman Hossain - Portfolio Website JavaScript
 * Handles typing animation, project & skill filtering, smooth scroll spy,
 * modals, theme toggle, stats counter, and contact handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ==========================================
     1. Typewriter Animation
     ========================================== */
  const typewriterText = document.getElementById('typewriterText');
  const words = [
    'intelligent AI/ML systems.',
    'cross-platform Flutter apps.',
    'enterprise ASP.NET software.',
    'connected IoT & ESP32 solutions.',
    'robust computer vision models.',
    'scalable backend architectures.'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeEffect() {
    if (!typewriterText) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
      typewriterText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typewriterText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 85;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 400; // Pause before new word
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

  /* ==========================================
     2. Sticky Navbar & Kinetic Side Journey Rail
     - Completely invisible at top (Hero & Who I Am)
     - Smoothly glides in from the left when user reaches Projects section (or below)
     - Inactive: Sleek 40px frosted-glass orbs with laser filament track
     - Active: Dynamically morphs into an illuminated luxury capsule pill with beacon pulse
     - Dynamically extensible: reads all [data-section] from HTML
     ========================================== */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTop = document.getElementById('backToTop');
  const kineticSideRail = document.getElementById('kineticSideRail');
  const railNodesContainer = document.getElementById('railNodes');
  const railNodes = document.querySelectorAll('.rail-node');
  const railFilamentGlow = document.getElementById('railFilamentGlow');
  const railFilamentTrack = document.querySelector('.rail-filament-track');

  function updateActiveSections() {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;

    // Top Navbar scrolled effect
    if (scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 400) {
      backToTop?.classList.add('visible');
    } else {
      backToTop?.classList.remove('visible');
    }

    // Determine currently active section on the page
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 180;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // Update top navbar active state
    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }

    // -------------------------------------------------------------
    // Side Rail Visibility Trigger: Appears ONLY once Projects section is reached!
    // -------------------------------------------------------------
    const projectsSection = document.getElementById('projects');
    if (kineticSideRail && projectsSection) {
      const triggerThreshold = projectsSection.offsetTop - (windowHeight * 0.45);
      if (scrollY >= triggerThreshold) {
        kineticSideRail.classList.add('is-visible');
      } else {
        kineticSideRail.classList.remove('is-visible');
      }
    }

    // -------------------------------------------------------------
    // Dynamic Active Side Rail Node & Laser Filament Glow Fill
    // -------------------------------------------------------------
    let activeNodeIndex = -1;
    railNodes.forEach((node, idx) => {
      const secKey = node.getAttribute('data-section');
      if (secKey === currentSectionId) {
        node.classList.add('active');
        activeNodeIndex = idx;
      } else {
        node.classList.remove('active');
      }
    });

    // If at the very bottom of the page, ensure the last rail node is active
    if (activeNodeIndex === -1 && railNodes.length > 0 && (window.innerHeight + scrollY) >= document.body.offsetHeight - 80) {
      activeNodeIndex = railNodes.length - 1;
      railNodes.forEach((node, idx) => {
        if (idx === activeNodeIndex) {
          node.classList.add('active');
        } else {
          node.classList.remove('active');
        }
      });
    }

    // -------------------------------------------------------------
    // Kinetic Elevator Stacking:
    // - Active & completed sections stack at the TOP
    // - Upcoming sections dock at the BOTTOM
    // - Smooth 0.7s ascent as each section is reached
    // -------------------------------------------------------------
    const totalNodes = railNodes.length;
    const railHeight = railNodesContainer ? railNodesContainer.offsetHeight : 460;
    const nodeSize = 48;
    const gap = 16;
    const step = nodeSize + gap; // 64px

    const effectiveActive = activeNodeIndex >= 0 ? activeNodeIndex : 0;

    railNodes.forEach((node, idx) => {
      let targetY = 0;
      if (idx <= effectiveActive) {
        // Upper zone: Stacked neatly from the top down
        targetY = idx * step;
      } else {
        // Lower zone: Docked at the bottom, stacked upwards
        const offsetFromBottom = (totalNodes - 1 - idx) * step;
        targetY = railHeight - nodeSize - offsetFromBottom;
      }
      node.style.transform = `translateY(${targetY}px)`;
    });

    // Update laser filament glow height to point to active node
    if (railFilamentGlow && railFilamentTrack) {
      if (activeNodeIndex >= 0) {
        const glowTarget = (effectiveActive * step) + 6;
        const maxTrackHeight = railFilamentTrack.offsetHeight;
        railFilamentGlow.style.height = `${Math.min(glowTarget, maxTrackHeight)}px`;
      } else {
        railFilamentGlow.style.height = '0px';
      }
    }
  }

  window.addEventListener('scroll', updateActiveSections);
  window.addEventListener('resize', updateActiveSections);
  updateActiveSections(); // Initial check on load

  // Smooth scroll click for kinetic rail nodes
  railNodes.forEach(node => {
    node.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = node.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const navHeight = navbar ? navbar.offsetHeight + 15 : 85;
        const targetPos = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================
     3. Mobile Hamburger Navigation
     ========================================== */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  /* ==========================================
     4. Theme Toggle (Light Default / Dark Option)
     ========================================== */
  const themeToggle = document.getElementById('themeToggle');
  // Check version to ensure fresh default to the new requested light aesthetic
  const themePref = localStorage.getItem('portfolio_theme') || 'light';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
    if (themeToggle) {
      if (theme === 'dark') {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        themeToggle.setAttribute('title', 'Switch to Light Theme');
      } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        themeToggle.setAttribute('title', 'Switch to Dark Theme');
      }
    }
  }

  // Initialize theme
  applyTheme(themePref);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  /* ==========================================
     5. Filter: Featured Projects
     ========================================== */
  const projectFilterBtns = document.querySelectorAll('.project-filter-tabs .filter-btn');
  const projectCards = document.querySelectorAll('.projects-grid .project-card');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active class
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ==========================================
     6. Filter: Skills Matrix
     ========================================== */
  const skillTabs = document.querySelectorAll('.skills-filter-tabs .skill-tab');
  const skillCards = document.querySelectorAll('.skills-grid .skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });


  /* ==========================================
     8. Resume Modal Management
     ========================================== */
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtn = document.getElementById('openResumeBtn');
  const heroResumeBtn = document.getElementById('heroResumeBtn');
  const closeResumeModal = document.getElementById('closeResumeModal');

  function openResume() {
    if (resumeModal) resumeModal.classList.add('active');
  }

  function closeResume() {
    if (resumeModal) resumeModal.classList.remove('active');
  }

  if (openResumeBtn) openResumeBtn.addEventListener('click', openResume);
  if (heroResumeBtn) heroResumeBtn.addEventListener('click', openResume);
  if (closeResumeModal) closeResumeModal.addEventListener('click', closeResume);

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResume();
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeResume();
      closeCertModal();
    }
  });

  /* ==========================================
     9. Certificate Lightbox Modal
     ========================================== */
  window.openCertModal = function(imageSrc, title) {
    const certModal = document.getElementById('certModal');
    const certModalImg = document.getElementById('certModalImg');
    const certModalTitle = document.getElementById('certModalTitle');

    if (certModal && certModalImg) {
      certModalImg.src = imageSrc;
      if (certModalTitle) certModalTitle.textContent = title || 'Certificate Preview';
      certModal.classList.add('active');
    }
  };

  window.closeCertModal = function() {
    const certModal = document.getElementById('certModal');
    if (certModal) {
      certModal.classList.remove('active');
    }
  };

  const certModal = document.getElementById('certModal');
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  /* ==========================================
     10. Interactive Contact Form Handler
     ========================================== */
  window.handleFormSubmit = function(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const feedback = document.getElementById('formFeedback');

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      feedback.textContent = 'Please fill out all fields.';
      feedback.className = 'form-feedback feedback-error';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Preparing message...';

    // Construct WhatsApp pre-filled text or mailto
    const encodedMsg = encodeURIComponent(
      `Hello Arman,\n\nMy name is ${name} (${email}).\nSubject: ${subject}\n\nMessage:\n${message}`
    );
    const whatsappUrl = `https://wa.me/8801793543783?text=${encodedMsg}`;

    setTimeout(() => {
      feedback.innerHTML = `
        Thank you, <strong>${name}</strong>! Your message is ready.<br/>
        <a href="${whatsappUrl}" target="_blank" style="color: #00f2fe; text-decoration: underline; display: inline-block; margin-top: 0.5rem;">
          <i class="fa-brands fa-whatsapp"></i> Click here to forward immediately via WhatsApp
        </a> or send via 
        <a href="mailto:ahrashel1213@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodedMsg}" style="color: #00f2fe; text-decoration: underline;">
          Email client
        </a>
      `;
      feedback.className = 'form-feedback feedback-success';

      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message Prepared!';
      form.reset();

      // Open whatsapp directly in new tab
      window.open(whatsappUrl, '_blank');
    }, 800);
  };
});
