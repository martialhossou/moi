(function(){
  const root = document.documentElement;
  const key = 'mh-theme';
  const saved = localStorage.getItem(key);
  if(saved) root.setAttribute('data-theme', saved);

  const toggle = document.getElementById('themeToggle');
  if(toggle){
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', current);
      localStorage.setItem(key, current);
      const meta = document.querySelector('meta[name="theme-color"]');
      if(meta) meta.setAttribute('content', current === 'light' ? '#f4f6ff' : '#0a0b10');
      const og = document.querySelector('meta[property="og:image"]');
      const tw = document.querySelector('meta[name="twitter:image"]');
      if(og) og.setAttribute('content', current === 'light' ? 'assets/og-image-light.png' : 'assets/og-image-dark.png');
      if(tw) tw.setAttribute('content', current === 'light' ? 'assets/og-image-light.png' : 'assets/og-image-dark.png');
    });
  }

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();