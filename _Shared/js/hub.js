// CLAUDE TEACHING — Examination Atelier interactivity
// Search/filter + theme (light/dark) + progress + reveal + tape
(function(){
  // ---- Search / filter (hubs only) ----
  var q = document.getElementById('q');
  var cards = document.querySelectorAll('[data-k]');
  var empty = document.getElementById('empty');
  var chips = document.querySelectorAll('.filter-btn[data-filter]');
  function apply(){
    var v = (q && q.value || '').toLowerCase().trim();
    var active = document.querySelector('.filter-btn[aria-pressed="true"][data-filter]');
    var f = active ? (active.getAttribute('data-filter')||'').toLowerCase() : '';
    var vis=0;
    cards.forEach(function(c){
      var k=(c.getAttribute('data-k')||'').toLowerCase();
      var ms=!v || k.indexOf(v)>=0 || (c.textContent||'').toLowerCase().indexOf(v)>=0;
      var mf=!f || f==='all' || k.indexOf(f)>=0;
      var show=ms&&mf; c.style.display=show?'':'none'; if(show) vis++;
    });
    if(empty) empty.style.display= vis ? 'none' : '';
  }
  var _deb=null;
  function debouncedApply(){ clearTimeout(_deb); _deb=setTimeout(apply, 120); }
  if(q) q.addEventListener('input', debouncedApply);
  chips.forEach(function(b){
    b.addEventListener('click', function(){
      var on=b.getAttribute('aria-pressed')==='true';
      chips.forEach(function(x){x.setAttribute('aria-pressed','false')});
      if(!on) b.setAttribute('aria-pressed','true');
      apply();
    });
  });

  // ---- Theme: light / dark — atelier lamp ----
  var btn=document.getElementById('theme-toggle');
  var root=document.documentElement;
  function getPref(){ try{ return localStorage.getItem('ct-theme')}catch(e){return null}}
  function sanitizeTheme(v){ return (v==='dark'||v==='light') ? v : null; }
  function setTheme(t){
    t=sanitizeTheme(t);
    if(t) root.setAttribute('data-theme', t);
    else root.removeAttribute('data-theme');
    try{ if(t) localStorage.setItem('ct-theme', t); else localStorage.removeItem('ct-theme'); }catch(e){}
    if(btn){
      var isDark=(root.getAttribute('data-theme')==='dark') || (!root.getAttribute('data-theme') && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      btn.setAttribute('aria-pressed', String(isDark));
      btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      var lab=btn.querySelector('.theme-label');
      if(lab) lab.textContent = isDark ? 'Light' : 'Dark';
      var icon=btn.querySelector('.theme-icon');
      if(icon) icon.textContent = isDark ? '☾' : '☀';
    }
  }
  var saved=getPref();
  if(saved) setTheme(saved);
  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
  if(btn){
    btn.addEventListener('click', function(){
      var cur=root.getAttribute('data-theme');
      var next = cur==='dark' ? 'light' : cur==='light' ? 'dark' : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark');
      setTheme(next);
    });
  }

  // ---- Progress bar + toTop ----
  var prog=document.getElementById('progress');
  var topBtn=document.getElementById('toTop');
  function onScroll(){
    var h=document.documentElement;
    var max=h.scrollHeight - h.clientHeight;
    if(prog) prog.style.width = (max>0 ? (h.scrollTop / max * 100) : 0) + '%';
    if(topBtn) topBtn.classList.toggle('show', window.scrollY>420);
  }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  if(topBtn) topBtn.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}) });

  // ---- Reveal on scroll — quiet, respects reduced motion ----
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var io=new IntersectionObserver(function(ents){
      ents.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
    }, {threshold:.12, rootMargin:'0px 0px -6% 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
})();
