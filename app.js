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
    });
  }

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Hide topbar on scroll down, show on up
  const topbar = document.querySelector('.topbar');
  let lastY = window.scrollY;
  let ticking = false;
  function onScroll(){
    const y = window.scrollY;
    if(y > lastY + 4){ // scrolling down
      topbar && topbar.classList.add('topbar--hide');
    } else if (y < lastY - 4){ // scrolling up
      topbar && topbar.classList.remove('topbar--hide');
    }
    lastY = y;
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if(!ticking){
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
})();