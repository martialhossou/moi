(function(){
  const root=document.documentElement, key='mh-theme'; const saved=localStorage.getItem(key);
  if(saved) root.setAttribute('data-theme', saved);
  const toggle=document.getElementById('themeToggle');
  if(toggle){ toggle.addEventListener('click', ()=>{ const cur=root.getAttribute('data-theme')==='light'?'dark':'light'; root.setAttribute('data-theme',cur); localStorage.setItem(key,cur); }); }
  const io=new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); }); }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
})();