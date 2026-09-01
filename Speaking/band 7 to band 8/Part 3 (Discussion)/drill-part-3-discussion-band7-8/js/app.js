(function(){
  var qs=[
    {q:"Q1 — meaning match?", opts:["A keyword trap","B partial","C correct paraphrase","D inference"], ans:"C"},
    {q:"Q2 — correction trap?", opts:["A first mention","B second (correct)","C average","D not mentioned"], ans:"B"},
    {q:"Q3 — hedging/scope?", opts:["A all","B some (correct)","C never","D always"], ans:"B"},
    {q:"Q4 — literal presence?", opts:["A inferred","B unstated","C stated fact","D guess"], ans:"C"},
  ];
  var el=document.getElementById('qs');
  qs.forEach(function(item,i){
    var d=document.createElement('div'); d.className='q'; d.dataset.ans=item.ans;
      var title=document.createElement('div'); title.style.fontWeight='700'; title.style.marginBottom='.4rem'; title.textContent=item.q; d.appendChild(title);
  item.opts.forEach(function(o,j){
    var v=String.fromCharCode(65+j);
    var label=document.createElement('label'); label.style.display='block'; label.style.margin='0.3rem 0'; label.style.cursor='pointer';
    var inp=document.createElement('input'); inp.type='radio'; inp.name='q'+i; inp.value=v;
    label.appendChild(inp); label.appendChild(document.createTextNode(' '+o));
    d.appendChild(label);
  });
  el.appendChild(d);
  });
  var timer=document.getElementById('timer'), start=document.getElementById('startBtn'), reset=document.getElementById('resetBtn');
  var sec=360, iv=null;
  // H3 diagnostic + fix: clear timer on hidden to prevent leak
  document.addEventListener('visibilitychange', function(){ if(document.hidden && iv){ clearInterval(iv); iv=null; var s=document.getElementById('startBtn'); if(s) s.textContent='Resume'; } }); function fmt(s){var m=Math.floor(s/60), r=s%60; return String(m).padStart(2,'0')+':'+String(r).padStart(2,'0')}
  function tick(){sec--; timer.textContent=fmt(sec); if(sec<=0){timer.classList.add('over'); clearInterval(iv); iv=null;}}
  timer.textContent=fmt(sec);
  start.addEventListener('click', function(){ if(iv){clearInterval(iv); iv=null; start.textContent='Start 6:00'; return;} sec=360; timer.textContent=fmt(sec); timer.classList.remove('over'); iv=setInterval(tick,1000); start.textContent='Pause';});
  reset.addEventListener('click', function(){clearInterval(iv); iv=null; sec=360; timer.textContent=fmt(sec); timer.classList.remove('over'); start.textContent='Start 6:00'; document.querySelectorAll('input[type=radio]').forEach(function(i){i.checked=false}); document.querySelectorAll('.q').forEach(function(q){q.classList.remove('correct','wrong')}); document.getElementById('score').textContent='';});
  document.getElementById('checkBtn').addEventListener('click', function(){ var score=0; document.querySelectorAll('.q').forEach(function(q){ var c=q.querySelector('input:checked'); var ok=c && c.value===q.dataset.ans; q.classList.toggle('correct', ok); q.classList.toggle('wrong', c && !ok); if(ok) score++;}); document.getElementById('score').textContent=score+' / '+qs.length;});
  document.getElementById('showBtn').addEventListener('click', function(){ var m=document.getElementById('models'); m.style.display=m.style.display==='none'?'block':'none'; this.textContent=m.style.display==='none'?'Show models':'Hide models';});
})();
