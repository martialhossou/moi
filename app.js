(function(){
  const root = document.documentElement;
  const key = 'mh-theme';
  const saved = localStorage.getItem(key);
  if(saved) root.setAttribute('data-theme', saved);
  document.getElementById('themeToggle')?.addEventListener('click', ()=>{
    const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', current);
    localStorage.setItem(key, current);
  });
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
})();