/**
 * HAXBION - INTERACTIVE JAVASCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {

  /* 1. NAVBAR SCROLL EFFECT */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function handleScroll() {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  /* 2. MOBILE MENU */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  /* 3. INTERSECTION OBSERVER */
  const animatedElements = document.querySelectorAll('.fade-in-up');
  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => scrollObserver.observe(el));

  /* 4. FAQ ACCORDION */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  /* 5. DOWNLOAD BUTTONS (WINDOWS / LINUX) */
  const downloadWindowsBtn = document.getElementById('downloadWindowsBtn');
  const windowsMsg = document.getElementById('windowsMsg');
  const downloadLinuxBtn = document.getElementById('downloadLinuxBtn');
  const linuxMsg = document.getElementById('linuxMsg');

  if (downloadWindowsBtn && windowsMsg) {
    downloadWindowsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      windowsMsg.textContent = 'Por ahora no está disponible. Cuando se suba la V3 va a funcionar.';
    });
  }

  if (downloadLinuxBtn && linuxMsg) {
    downloadLinuxBtn.addEventListener('click', (e) => {
      e.preventDefault();
      linuxMsg.textContent = 'Próximamente.';
    });
  }

  /* TERMS & PRIVACY LINK HANDLERS */
  const termsLinks = [document.getElementById('termsLink'), document.getElementById('termsLink2')];
  const privacyLinks = [document.getElementById('privacyLink'), document.getElementById('privacyLink2')];

  termsLinks.forEach(link => {
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Términos de Servicio Haxbion:\n\n1. Haxbion es un software gratuito de uso personal.\n2. Está prohibida la reventa o distribución con fines comerciales.\n3. El uso indebido de la herramienta es responsabilidad exclusiva del usuario.');
      });
    }
  });

  privacyLinks.forEach(link => {
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Política de Privacidad Haxbion:\n\n1. No almacenamos datos personales sensibles.\n2. No se requiere registro ni pago para usar Haxbion.\n3. Tu privacidad y seguridad están 100% garantizadas.');
      });
    }
  });

});
