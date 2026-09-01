// CLAUDE TEACHING — Examination Atelier interactivity
// Search/filter + theme (light/dark) + progress + reveal + tape
(function(){
  // ---- DIAGNOSTIC INSTRUMENTATION (validate hypotheses) ----
  var DIAG = (function(){ try{ return /[?&]diag=1/.test(location.search) || localStorage.getItem('ct-diag')==='1'; }catch(e){ return /[?&]diag=1/.test(location.search);} })();
  function dlog(ns, data){ if(!DIAG) return; try{ console.debug('[CT DIAG '+ns+']', data); }catch(e){} }
  function dwarn(ns, data){ if(!DIAG) return; try{ console.warn('[CT DIAG '+ns+']', data); }catch(e){} }
  var DIAG_TIMERS = { setBand:0, apply:0, theme:0, scroll:0 };
  if(DIAG) console.info('[CT DIAG] enabled — append ?diag=1 or localStorage ct-diag=1 to persist; hypotheses tracked: band persistence / timer leak / filter perf / XSS / null refs');
  // ---- Search / filter (hubs only) ----
  var q = document.getElementById('q');
  var cards = document.querySelectorAll('[data-k]');
  var empty = document.getElementById('empty');
  var chips = document.querySelectorAll('.filter-btn[data-filter]');
  var live = document.getElementById('filterLive');
  // Band ruler — interactive target control
  var ruler = document.getElementById('bandRuler');
  var hint = document.getElementById('bandHint');
  var dashTarget = document.getElementById('dashTarget');
  var heroPrimary = document.getElementById('heroPrimary');
  function getBandLabel(b){ var m={ '4-5':'Band 4–5', '5-6':'Band 5–6', '6-7':'Band 6–7', '7-8':'Band 7–8', '8-9':'Band 8–9'}; return m[b]||b; }
  function setBand(b){
    DIAG_TIMERS.setBand++; dlog('setBand #'+DIAG_TIMERS.setBand, {band:b, ruler:!!ruler, dashTarget:!!dashTarget, heroPrimary:!!heroPrimary, stack:(new Error()).stack.split('\n')[2]});
    // Hypothesis H2: unsanitized band used in href → sanitize against allowlist
    var ALLOWED = {'4-5':1,'5-6':1,'6-7':1,'7-8':1,'8-9':1};
    if(!ALLOWED[b]){ dwarn('setBand invalid', {got:b}); return; }
    try{ localStorage.setItem('ct-band', b); }catch(e){ dwarn('localStorage.setItem failed', e); }
    if(ruler){
      ruler.querySelectorAll('.band-ruler__item').forEach(function(btn){
        var on = btn.getAttribute('data-band')===b;
        btn.setAttribute('aria-checked', String(on));
        btn.classList.toggle('band-ruler__item--active', on);
      });
    }
    if(dashTarget) dashTarget.textContent = 'Target: ' + getBandLabel(b);
    if(hint) hint.textContent = 'You’re viewing ' + getBandLabel(b) + '. Cards and lessons will start here.';
    if(heroPrimary){
      var bandPath = b==='4-5' ? 'band 4 to band 5' : b==='5-6' ? 'band 5 to band 6' : b==='6-7' ? 'band 6 to band 7' : b==='7-8' ? 'band 7 to band 8' : 'band 8 to band 9 mastery';
      heroPrimary.textContent = 'Start at ' + getBandLabel(b) + ' →';
      heroPrimary.href = 'Listening/' + bandPath + '/Multiple Choice/';
      dlog('heroPrimary updated', {href:heroPrimary.href});
    }
  }
  try{
    var savedBand = localStorage.getItem('ct-band');
    if(savedBand) setBand(savedBand);
  }catch(e){}
  if(ruler){
    ruler.addEventListener('click', function(e){
      var btn = e.target.closest('.band-ruler__item');
      if(!btn) return;
      setBand(btn.getAttribute('data-band'));
    });
    ruler.addEventListener('keydown', function(e){
      if(e.key==='Enter' || e.key===' '){ var btn=e.target.closest('.band-ruler__item'); if(btn){ e.preventDefault(); setBand(btn.getAttribute('data-band')); } }
    });
  }
  if(dashTarget){
    dashTarget.addEventListener('click', function(){
      var cur = (function(){ try{ return localStorage.getItem('ct-band')}catch(e){return null}})() || '6-7';
      var order=['4-5','5-6','6-7','7-8','8-9'];
      var idx=order.indexOf(cur); setBand(order[(idx+1)%order.length]);
    });
    dashTarget.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); dashTarget.click(); }});
  }
  function apply(){
    var t0 = DIAG ? performance.now() : 0;
    var v = (q && q.value || '').toLowerCase().trim();
    var active = document.querySelector('.filter-btn[aria-pressed="true"][data-filter]');
    var f = active ? (active.getAttribute('data-filter')||'').toLowerCase() : '';
    var vis=0;
    // H4 perf hypothesis: textContent scan is O(N*m) — measure
    var scanned=0;
    if(!q) dwarn('apply: #q missing (null ref hypothesis H1)', {cards:cards.length});
    if(!cards.length) dwarn('apply: [data-k] empty NodeList H1', {url:location.href});
    cards.forEach(function(c){
      var k=(c.getAttribute('data-k')||'').toLowerCase();
      var ms=!v || k.indexOf(v)>=0 || (c.textContent||'').toLowerCase().indexOf(v)>=0;
      var mf=!f || f==='all' || k.indexOf(f)>=0;
      var show=ms&&mf; c.style.display=show?'':'none'; if(show) vis++; scanned++;
    });
    if(empty) empty.style.display= vis ? 'none' : '';
    if(live) live.textContent = v || (f && f!=='all') ? 'Showing ' + vis + ' of ' + cards.length + ' sections' + (v ? ' for “' + v + '”' : '') : '';
    DIAG_TIMERS.apply++; if(DIAG) dlog('apply #'+DIAG_TIMERS.apply, {v:v, f:f, vis:vis, scanned:scanned, ms:(performance.now()-t0).toFixed(1)+'ms', empty:!!empty, live:!!live});
    if(DIAG && (performance.now()-t0)>16) dwarn('apply slow >16ms (jank H4)', {ms:(performance.now()-t0).toFixed(1), cards:cards.length});
  }
  var _deb=null;
  function debouncedApply(){ clearTimeout(_deb); _deb=setTimeout(apply, 120); }
  if(q) q.addEventListener('input', debouncedApply);
  chips.forEach(function(b){
    b.addEventListener('click', function(){
      var on=b.getAttribute('aria-pressed')==='true';
      chips.forEach(function(x){x.setAttribute('aria-pressed','false')});
      if(!on) b.setAttribute('aria-pressed','true'); else document.querySelector('.filter-btn[data-filter="all"]').setAttribute('aria-pressed','true');
      apply();
    });
  });

  // ---- Theme: light / dark — atelier lamp ----
  var btn=document.getElementById('theme-toggle');
  var root=document.documentElement;
  function getPref(){ try{ return localStorage.getItem('ct-theme')}catch(e){return null}}
  function sanitizeTheme(v){ return (v==='dark'||v==='light') ? v : null; }
  function setTheme(t){
    DIAG_TIMERS.theme++; dlog('setTheme #'+DIAG_TIMERS.theme, {requested:t, sanitized:sanitizeTheme(t), hasBtn:!!btn});
    t=sanitizeTheme(t);
    if(t) root.setAttribute('data-theme', t);
    else root.removeAttribute('data-theme');
    try{ if(t) localStorage.setItem('ct-theme', t); else localStorage.removeItem('ct-theme'); }catch(e){ dwarn('setTheme localStorage failed H2', e); }
    if(btn){
      var isDark=(root.getAttribute('data-theme')==='dark') || (!root.getAttribute('data-theme') && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      btn.setAttribute('aria-pressed', String(isDark));
      btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      var lab=btn.querySelector('.theme-label');
      if(lab) lab.textContent = isDark ? 'Light' : 'Dark';
      var icon=btn.querySelector('.theme-icon');
      if(icon) icon.textContent = isDark ? '☾' : '☀';
    } else if(DIAG) dwarn('setTheme #theme-toggle missing H1', {t:t});
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
  // H1 null refs + H6 scroll perf: warn if elements missing, measure scroll
  if(DIAG && !prog) dwarn('progress #progress missing H1', {});
  if(DIAG && !topBtn) dwarn('toTop #toTop missing H1', {});
  function onScroll(){
    var h=document.documentElement;
    var max=h.scrollHeight - h.clientHeight;
    if(prog) prog.style.width = (max>0 ? (h.scrollTop / max * 100) : 0) + '%';
    if(topBtn) topBtn.classList.toggle('show', window.scrollY>420);
    DIAG_TIMERS.scroll++; if(DIAG && DIAG_TIMERS.scroll%100===0) dlog('onScroll sample', {scrollY:window.scrollY, max:max, prog:prog?prog.style.width:'n/a'});
  }
  // H6: passive already true — diagnostic verifies no layout thrash
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  if(topBtn) topBtn.addEventListener('click', function(){ dlog('toTop click', {}); window.scrollTo({top:0, behavior:'smooth'}) });
  else if(DIAG) dwarn('toTop click handler not bound (missing #toTop)', {});

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
