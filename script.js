const navbar = document.querySelector('#navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

const hamburger  = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.add('hidden');
  });
});

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      target.classList.add('visible');
      fadeObserver.unobserve(target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));


const animateCounter = (el) => {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1500; // ms
  const step = target / (duration / 16);
  let current = 0;

  const update = () => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current < target) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      document.querySelectorAll('.counter').forEach(animateCounter);
      counterObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const heroSection = document.querySelector('#home');
if (heroSection) counterObserver.observe(heroSection);

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const activeLinkObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      const id = target.getAttribute('id');
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('text-[#00f5ff]', isActive);
        link.classList.toggle('font-bold', isActive);
      });
    }
  });
}, { threshold: 0.45 });

sections.forEach(s => activeLinkObserver.observe(s));

const form     = document.querySelector('#contact-form');
const feedback = document.querySelector('#form-feedback');

const showFeedback = (msg, isError = false) => {
  feedback.textContent = msg;
  feedback.className = `text-center text-xs font-display tracking-widest ${isError ? 'text-red-400' : 'text-[#00f5ff]'}`;
  setTimeout(() => feedback.classList.add('hidden'), 4000);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const { value: name }    = document.querySelector('#input-name');
  const { value: email }   = document.querySelector('#input-email');
  const { value: message } = document.querySelector('#input-message');

  if (!name.trim() || !email.trim() || !message.trim()) {
    showFeedback('[ ERROR ] Semua field harus diisi!', true);
    return;
  }
  if (!email.includes('@')) {
    showFeedback('[ ERROR ] Format email tidak valid!', true);
    return;
  }

  showFeedback(`[ OK ] Pesan dari ${name.trim()} berhasil dikirim!`);
  form.reset();
});
