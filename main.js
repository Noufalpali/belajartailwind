
const PLAYERS = [
  {
    id: 1,
    ign:       'Pawi',
    realName:  'Fari Farhan',
    role:      'All role/FlexPro',
    division:  'mlbb',
    divLabel:  'Mobile Legends',
    rank:      'Mythic',
    country:   '🇮🇩',
    roleColor: '#E879F9',
    roleBg:    'rgba(232,121,249,0.12)',
    since:     '2023',
    image:     'assets/foto/pawi.png',
  },
  {
    id: 2,
    ign:       'Pali',
    realName:  'Noufal Izdihar',
    role:      'Gold laner',
    division:  'mlbb',
    divLabel:  'Mobile Legends',
    rank:      'Mythic',
    country:   '🇮🇩',
    roleColor: '#C084FC',
    roleBg:    'rgba(192,132,252,0.12)',
    since:     '2023',
    image:     'assets/foto/pali.png',
  },
  {
    id: 3,
    ign:       'Koto',
    realName:  'Syahbi Ramadhan',
    role:      'Exp Laner',
    division:  'mlbb',
    divLabel:  'Mobile Legends',
    rank:      'Mythic',
    country:   '🇮🇩',
    roleColor: '#A855F7',
    roleBg:    'rgba(168,85,247,0.12)',
    since:     '2023',
    image:     'assets/foto/koto.png',
  },
  {
    id: 4,
    ign:       'Rokky',
    realName:  'Rokky Pratama',
    role:      'Mid Laner',
    division:  'mlbb',
    divLabel:  'Mobile Legends',
    rank:      'Mythic',
    country:   '🇮🇩',
    roleColor: '#7B2BFF',
    roleBg:    'rgba(123,43,255,0.15)',
    since:     '2023',
    image:     'assets/foto/rokky.png',
  },
  {
    id: 5,
    ign:       'Abib',
    realName:  'M. Habib Tohirullah',
    role:      'Roamer',
    division:  'mlbb',
    divLabel:  'Mobile Legends',
    rank:      'Mythic',
    country:   '🇮🇩',
    roleColor: '#E879F9',
    roleBg:    'rgba(232,121,249,0.12)',
    since:     '2023',

  },
  {
    id: 6,
    ign:       'Maul',
    realName:  'M. Maulana',
    role:      'Coach',
    division:  'mlbb',
    divLabel:  'Mobile Legends',
    rank:      'Mythic',
    country:   '🇮🇩',
    roleColor: '#C084FC',
    roleBg:    'rgba(192,132,252,0.12)',
    since:     '2023',
  },
  {
    id: 7,
    ign:       'Akew 47',
    realName:  'Franz Munte',
    role:      'Roamer',
    division:  'mlbb',
    divLabel:  'Mobile Legends',
    rank:      'Mythic',
    country:   '🇮🇩',
    roleColor: '#A855F7',
    roleBg:    'rgba(168,85,247,0.12)',
    since:     '2023',
    image:     'assets/foto/akew.png',
  },
  {
    id: 8,
    ign:       'Zigger',
    realName:  'S. Zikri Rianda',
    role:      'Analyst',
    division:  'mlbb',
    divLabel:  'Mobile Legends',
    rank:      'Mythic',
    country:   '🇮🇩',
    roleColor: '#E879F9',
    roleBg:    'rgba(232,121,249,0.12)',
    since:     '2023',
    image:     'assets/foto/zigger.png',
  },
];

const ACHIEVEMENTS = [
  {
    id: 1, year: 2024,
    title: '🥇 JUARA 1 — MPL Indonesia Season 13',
    event: 'Mobile Legends Professional League',
    result: 'champion',
    prize: 'IDR 1.500.000.000',
    division: 'mlbb',
  },
  {
    id: 2, year: 2024,
    title: '🥈 Runner-Up — Valorant SEA Championship',
    event: 'Valorant South East Asia Regional',
    result: 'runner-up',
    prize: 'USD 25,000',
    division: 'valorant',
  },
  {
    id: 3, year: 2023,
    title: '🥇 JUARA 1 — PUBG Mobile Nations Cup IDN',
    event: 'PUBG Mobile National Cup Indonesia',
    result: 'champion',
    prize: 'IDR 750.000.000',
    division: 'pubg',
  },
  {
    id: 4, year: 2023,
    title: '🥇 JUARA 1 — Free Fire Pro League S6',
    event: 'Free Fire Pro League Indonesia Season 6',
    result: 'champion',
    prize: 'IDR 500.000.000',
    division: 'freefire',
  },
  {
    id: 5, year: 2023,
    title: '🥉 Top 3 — PMGC 2023',
    event: 'PUBG Mobile Global Championship',
    result: 'third',
    prize: 'USD 40,000',
    division: 'pubg',
  },
  {
    id: 6, year: 2022,
    title: '🥇 JUARA 1 — MPL Indonesia Season 10',
    event: 'Mobile Legends Professional League',
    result: 'champion',
    prize: 'IDR 1.200.000.000',
    division: 'mlbb',
  },
  {
    id: 7, year: 2022,
    title: '🥈 Runner-Up — M4 World Championship',
    event: 'Mobile Legends World Championship M4',
    result: 'runner-up',
    prize: 'USD 120,000',
    division: 'mlbb',
  },
  {
    id: 8, year: 2021,
    title: '🥇 JUARA 1 — Valorant National Championship',
    event: 'Valorant Championship Series Indonesia',
    result: 'champion',
    prize: 'IDR 400.000.000',
    division: 'valorant',
  },
  {
    id: 9, year: 2021,
    title: '🥇 JUARA 1 — MPL Indonesia Season 7',
    event: 'Mobile Legends Professional League',
    result: 'champion',
    prize: 'IDR 1.000.000.000',
    division: 'mlbb',
  },
  {
    id: 10, year: 2020,
    title: '🥈 Runner-Up — Free Fire Indonesia Open',
    event: 'Free Fire Indonesia Open Circuit',
    result: 'runner-up',
    prize: 'IDR 200.000.000',
    division: 'freefire',
  },
];

function buildPlayerCard(p) {
  const wrapper = document.createElement('div');
  wrapper.className = 'player-card reveal';
  wrapper.dataset.division = p.division;

  wrapper.innerHTML = `
    <!-- Signature Frame -->
    <div class="sig-frame">
      <!-- Background pattern (always visible) -->
      <div class="sig-bg-pattern"></div>

      <!-- Player photo (replace via upload) -->
      <img
        id="player-photo-${p.id}"
        class="sig-photo"
        src="${p.image? p.image : getPlaceholderPhoto(p)}"
        alt="${p.ign}"
        loading="lazy"
      />

      <!-- Bottom gradient overlay -->
      <div class="sig-photo-overlay"></div>

      <!-- Top accent stripe -->
      <div class="sig-top-stripe"></div>

      <!-- Division badge -->
      <div class="sig-div-badge">${p.divLabel}</div>

      <!-- Rank badge -->
      <div class="sig-rank-badge">${p.rank}</div>

      <!-- Glow border overlay -->
      <div class="sig-frame-border"></div>

      <!-- Upload hover trigger -->
      <label class="sig-upload-btn" for="upload-${p.id}" title="Upload foto ${p.ign}">
        <span>📁 Upload Foto</span>
      </label>
      <input
        type="file"
        id="upload-${p.id}"
        accept="image/*"
        class="hidden"
        data-player-id="${p.id}"
      />
    </div>

    <!-- Player Info -->
    <div class="player-info">
      <div class="player-ign">${p.country} ${p.ign}</div>
      <div class="player-real-name">${p.realName}</div>
      <span
        class="player-role-tag"
        style="background:${p.roleBg}; color:${p.roleColor}; border: 1px solid ${p.roleColor}40;"
      >${p.role}</span>
    </div>
  `;

  const fileInput = wrapper.querySelector(`#upload-${p.id}`);
  fileInput.addEventListener('change', (e) => handlePhotoUpload(e, p.id));

  return wrapper;
}

function getPlaceholderPhoto(p) {
  const initials = p.ign.slice(0,2);
  const color    = p.roleColor.replace('#','%23');
  const bg1 = '%230D0020';
  const bg2 = '%23130030';

  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 320'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='${bg1}'/%3E%3Cstop offset='1' stop-color='${bg2}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='240' height='320' fill='url(%23g)'/%3E%3Ccircle cx='120' cy='120' r='55' fill='${color}' opacity='.15'/%3E%3Ccircle cx='120' cy='120' r='38' fill='${color}' opacity='.08'/%3E%3Ctext x='120' y='136' text-anchor='middle' font-family='monospace' font-weight='900' font-size='36' fill='${color}'%3E${initials}%3C/text%3E%3Crect x='60' y='210' width='120' height='1' fill='${color}' opacity='.3'/%3E%3Ctext x='120' y='240' text-anchor='middle' font-family='monospace' font-size='10' fill='${color}' opacity='.5' letter-spacing='4'%3EUPLOAD FOTO%3C/text%3E%3Ctext x='120' y='258' text-anchor='middle' font-family='monospace' font-size='9' fill='${color}' opacity='.3' letter-spacing='2'%3EKLIK UNTUK GANTI%3C/text%3E%3C/svg%3E`;
}

function handlePhotoUpload(e, playerId) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = document.getElementById(`player-photo-${playerId}`);
    if (img) {
      img.style.transition = 'opacity 0.3s';
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = ev.target.result;
        img.style.opacity = '1';
      }, 300);
    }
  };
  reader.readAsDataURL(file);
}

function renderPlayers(filter = 'all') {
  const grid = document.getElementById('players-grid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? PLAYERS
    : PLAYERS.filter(p => p.division === filter);

  filtered.forEach((p, i) => {
    const card = buildPlayerCard(p);
    card.style.transitionDelay = `${i * 0.05}s`;
    grid.appendChild(card);
  });

  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach(el => {
      setTimeout(() => el.classList.add('visible'), 60);
    });
  });
}

function renderTimeline(yearFilter = 'all') {
  const container = document.getElementById('timeline');
  if (!container) return;

  // Keep spine
  const spine = container.querySelector('.timeline-spine');
  container.innerHTML = '';
  if (spine) container.appendChild(spine);
  else {
    const s = document.createElement('div');
    s.className = 'timeline-spine';
    container.appendChild(s);
  }

  const filtered = yearFilter === 'all'
    ? ACHIEVEMENTS
    : ACHIEVEMENTS.filter(a => a.year === parseInt(yearFilter));

  if (!filtered.length) {
    const msg = document.createElement('p');
    msg.className = 'text-center font-rajdhani text-white/30 py-12';
    msg.textContent = 'Tidak ada data untuk tahun ini.';
    container.appendChild(msg);
    return;
  }

  filtered.forEach((a, i) => {
    const item = document.createElement('div');
    item.className = 'timeline-item reveal';
    item.style.transitionDelay = `${i * 0.07}s`;

    const badgeClass  = a.result;
    const badgeLabel  = a.result === 'champion'  ? '🏆 Champion'
                       : a.result === 'runner-up' ? '🥈 Runner-Up'
                       : '🥉 Top 3';

    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="tc-year">${a.year}</div>
        <div class="tc-title">${a.title}</div>
        <div class="tc-event">${a.event}</div>
        <span class="tc-badge ${badgeClass}">${badgeLabel}</span>
        <div class="tc-prize">💰 ${a.prize}</div>
      </div>
      <div class="hidden md:block flex-1"></div>
    `;

    container.appendChild(item);
  });

  requestAnimationFrame(() => {
    container.querySelectorAll('.reveal').forEach(el => {
      setTimeout(() => el.classList.add('visible'), 80);
    });
  });
}

function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const menu      = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu
        hamburger?.classList.remove('open');
        menu?.classList.remove('open');
      }
    });
  });
}

function initCursor() {
  const cursor  = document.getElementById('cursor');
  const dot     = document.getElementById('cursor-dot');
  if (!cursor || !dot) return;
  if (!window.matchMedia('(hover: hover)').matches) return;

  let cx = 0, cy = 0, dx = 0, dy = 0;
  let visible = false;

  window.addEventListener('mousemove', e => {
    dx = e.clientX; dy = e.clientY;
    if (!visible) {
      visible = true;
      cursor.style.opacity = '1';
      dot.style.opacity    = '1';
    }
    // Dot follows instantly
    dot.style.left = `${dx}px`;
    dot.style.top  = `${dy}px`;
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    dot.style.opacity    = '0';
    visible = false;
  });

  function animateCursor() {
    cx += (dx - cx) * 0.1;
    cy += (dy - cy) * 0.1;
    cursor.style.left = `${cx}px`;
    cursor.style.top  = `${cy}px`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a,button,label,.player-card,.contact-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });
}

function initScrollReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  new MutationObserver(muts => {
    muts.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        node.querySelectorAll?.('.reveal').forEach(el => io.observe(el));
        if (node.classList?.contains('reveal')) io.observe(node);
      });
    });
  }).observe(document.body, { childList: true, subtree: true });
}

function initLogoUpload() {
  const zone   = document.getElementById('about-logo-zone');
  const input  = document.getElementById('logo-upload');
  const navImg = document.getElementById('team-logo-img');
  const heroImg = document.getElementById('hero-logo-img');
  const aboutImg = document.getElementById('about-logo-img');

  zone?.addEventListener('click', () => input?.click());

  input?.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const src = ev.target.result;
      [navImg, heroImg, aboutImg].forEach(img => {
        if (img) {
          img.style.opacity = '0';
          img.style.transition = 'opacity 0.4s';
          setTimeout(() => { img.src = src; img.style.opacity = '1'; }, 400);
        }
      });
    };
    reader.readAsDataURL(file);
  });
}

function initDivisionFilter() {
  document.querySelectorAll('.div-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.div-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPlayers(btn.dataset.div);
    });
  });
}

function initYearFilter() {
  document.querySelectorAll('.year-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.year-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTimeline(btn.dataset.year);
    });
  });
}

function initHeroGlitch() {
  const el = document.querySelector('#hero h1 span:first-child');
  if (!el) return;

  setInterval(() => {
    el.style.textShadow = `${(Math.random()-0.5)*6}px 0 #E879F9, ${(Math.random()-0.5)*4}px 0 #7B2BFF`;
    setTimeout(() => { el.style.textShadow = 'none'; }, 80);
  }, 3500 + Math.random() * 2000);
}

document.addEventListener('DOMContentLoaded', () => {
  renderPlayers('all');
  renderTimeline('all');

  initNavbar();
  initCursor();
  initScrollReveal();
  initLogoUpload();
  initDivisionFilter();
  initYearFilter();
  initHeroGlitch();

  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => { document.body.style.opacity = '1'; });

  console.log('%c⬡ VORTEX ESPORT ID', 'color:#C084FC;font-family:monospace;font-size:1.1rem;font-weight:bold;');
  console.log('%cPlay Beyond Limits.', 'color:#E879F9;font-family:monospace;font-size:0.85rem;');
});

export {};
