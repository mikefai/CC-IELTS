// CLAUDE TEACHING — hub interactivity (search + filter + toTop)
(function(){
  var q = document.getElementById('q');
  var cards = document.querySelectorAll('[data-k]');
  var empty = document.getElementById('empty');
  var chips = document.querySelectorAll('.filter-btn[data-filter]');

  function apply(){
    var v = (q && q.value || '').toLowerCase().trim();
    var activeFilter = document.querySelector('.filter-btn[aria-pressed="true"][data-filter]');

    // check if active chip is a level/band filter — not generic, so skip token check if 'all'
    var f = activeFilter ? (activeFilter.getAttribute('data-filter')||'').toLowerCase() : '';

    var visible = 0;
    cards.forEach(function(c){
      var k = (c.getAttribute('data-k')||'').toLowerCase();
      var matchSearch = !v || k.indexOf(v) >= 0 || (c.textContent||'').toLowerCase().indexOf(v) >= 0;
      var matchFilter = !f || f === 'all' || k.indexOf(f) >= 0;
      var show = matchSearch && matchFilter;
      c.style.display = show ? '' : 'none';
      if(show) visible++;
    });
    if(empty) empty.style.display = visible ? 'none' : '';
    // hide section headings with no visible items? optional
  }

  if(q) q.addEventListener('input', apply);
  chips.forEach(function(b){
    b.addEventListener('click', function(){
      var isActive = b.getAttribute('aria-pressed') === 'true';
      chips.forEach(function(x){ x.setAttribute('aria-pressed','false'); });
      if(!isActive) b.setAttribute('aria-pressed','true');
      apply();
    });
  });

  var t = document.getElementById('toTop');
  if(t){
    t.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
    window.addEventListener('scroll', function(){ t.classList.toggle('show', window.scrollY>420); }, {passive:true});
  }
})();
