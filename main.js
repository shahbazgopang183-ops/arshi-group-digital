/* =============================================
   AG Portfolio – Main JavaScript
   GSAP, ScrollTrigger, Marquee, Accordion, 
   Carousel, Counter, Nav behavior
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Register GSAP Plugins ----------
  gsap.registerPlugin(ScrollTrigger);

  // ---------- Liquid Glass Nav - Scroll Behavior ----------
  const nav = document.querySelector('.glass-nav');
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    // Scroll to top button
    if (scrollTopBtn) {
      if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- Mobile Menu ----------
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('show');
      document.body.style.overflow = mobileMenu.classList.contains('show') ? 'hidden' : '';
    });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('show');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Active Nav Link on Scroll ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-links a, .mobile-menu a');
  
  function setActiveNav() {
    const scrollPos = window.scrollY + 200;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinksAll.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', setActiveNav);
  setActiveNav();

  // ---------- GSAP Scroll Reveals ----------
  gsap.utils.toArray('.gs-reveal').forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    });
  });

  // Stagger reveals for card groups
  document.querySelectorAll('.gs-stagger-parent').forEach(parent => {
    const children = parent.querySelectorAll('.gs-stagger-child');
    gsap.fromTo(children, 
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: parent,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
      }
    );
  });

  // ---------- Hero Floating Parallax ----------
  const heroBadges = document.querySelectorAll('.float-badge');
  heroBadges.forEach((badge, i) => {
    gsap.to(badge, {
      y: i % 2 === 0 ? -12 : 12,
      duration: 2.5 + i * 0.3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });

  // ---------- Counter Animation ----------
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          duration: 2,
          ease: 'power1.out',
          onUpdate: function() {
            counter.textContent = Math.ceil(target * this.progress());
          },
          onComplete: () => {
            counter.textContent = target;
          }
        });
      }
    });
  });

  // ---------- FAQ Accordion ----------
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all
      faqItems.forEach(fi => {
        fi.classList.remove('active');
        fi.classList.add('inactive');
        fi.querySelector('.faq-toggle').textContent = '+';
      });
      
      // Open clicked if was closed
      if (!isActive) {
        item.classList.remove('inactive');
        item.classList.add('active');
        item.querySelector('.faq-toggle').textContent = '–';
      }
    });
  });

  // ---------- Testimonial Swiper ----------
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      }
    });
  }

  // ---------- Smooth Scroll for Nav Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 100;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

}); // end DOMContentLoaded

// Global Certificate Lookup Table
const CERTIFICATE_DATA = {
  'https://www.testdome.com/certificates/b1c75dc5136740b9a24c2e1ed84aa7f9': {
    title: 'Laravel Certified', company: 'TestDome', year: '2024',
    desc: 'Ranked in the top 25% of all Laravel developers tested worldwide on the TestDome skill assessment platform.'
  },
  'https://www.testdome.com/certificates/c06e811773384d12802bab32f05f9fc9': {
    title: 'Web Developer Certified', company: 'TestDome', year: '2024',
    desc: 'Achieved top 25% ranking for Web Developer skills — covering HTML, CSS, JavaScript, and web fundamentals.'
  },
  'https://www.testdome.com/certificates/68bfb24b3a7849c6a26738af14d91d39': {
    title: 'HTML/CSS Certified', company: 'TestDome', year: '2024',
    desc: 'Top 25% ranking in HTML & CSS assessment, demonstrating mastery of web markup and styling standards.'
  },
  'https://tinyurl.com/2cpdc6gj': {
    title: 'Professional Certificate', company: 'Simplilearn', year: '2024',
    desc: 'Completed an industry-recognized professional certification course through Simplilearn\'s SkillUp platform.'
  },
  'http://verify.skilljar.com/c/76zndky3ocrb': {
    title: 'Content & Creative Design', company: 'LinkedIn', year: '2024',
    desc: 'Official LinkedIn certification for Content and Creative Design — covering brand strategy, visual design, and campaign creation.'
  },
  'https://simpli-web.app.link/e/xLn4DjgDIZb': {
    title: 'Digital Skills Certificate', company: 'Simplilearn', year: '2024',
    desc: 'Earned a verified digital skills certificate through Simplilearn\'s globally recognized online learning platform.'
  }
};

// Global Certificate Popup – shows cert info card + external link
window.openCertificatePopup = function(url, title, company, desc, year) {
  const modal = document.getElementById('certModal');
  const inner = document.getElementById('certModalInner');
  if (!modal) return;

  // Auto-fill from lookup if needed
  if (!title && CERTIFICATE_DATA[url]) {
    const data = CERTIFICATE_DATA[url];
    title = data.title;
    company = data.company;
    desc = data.desc;
    year = data.year;
  }

  // Fill in the content
  const titleEl = document.getElementById('certTitle2');
  const compEl  = document.getElementById('certCompany');
  const descEl  = document.getElementById('certDescEl');
  const yearEl  = document.getElementById('certYear');
  const linkEl  = document.getElementById('certLink');

  if (titleEl) titleEl.textContent = title || 'Certificate';
  if (compEl)  compEl.textContent  = company || 'Verified Issuer';
  if (descEl)  descEl.textContent  = desc || 'A verified digital credential defining professional expertise.';
  if (yearEl)  yearEl.textContent  = year || new Date().getFullYear();
  if (linkEl) { linkEl.href = url; linkEl.style.display = url ? 'inline-flex' : 'none'; }

  modal.style.pointerEvents = 'auto';
  modal.classList.remove('opacity-0');
  inner.classList.remove('scale-95');
  inner.classList.add('scale-100');
};

window.closeCertificatePopup = function() {
  const modal = document.getElementById('certModal');
  const inner = document.getElementById('certModalInner');
  if (!modal) return;
  modal.style.pointerEvents = 'none';
  modal.classList.add('opacity-0');
  inner.classList.remove('scale-100');
  inner.classList.add('scale-95');
};
