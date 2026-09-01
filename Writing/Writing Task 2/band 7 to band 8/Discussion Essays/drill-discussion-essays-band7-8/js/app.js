(function(){
  var qs=[
    {q:"Q1 — apply Strategy 1 (predict/paraphrase). Which option is the meaning match?", opts:["A distractor (keyword match)","B partial trap","C correct paraphrase","D inference beyond text"], ans:"C"},
    {q:"Q2 — Strategy 3 (correction/trap). What is the final value after the speaker's self-correction?", opts:["A first mention","B second mention (correct)","C average","D not mentioned"], ans:"B"},
    {q:"Q3 — Scope / hedging. Which option respects 'some' vs 'all'?", opts:["A all (overgeneral)","B some (correct)","C never","D always"], ans:"B"},
    {q:"Q4 — No inference beyond text. Which is literally stated?", opts:["A inferred cause","B unstated effect","C stated fact","D plausible guess"], ans:"C"},
  ];
  var el=document.getElementById('qs');
  qs.forEach(function(item,i){
    var d=document.createElement('div'); d.className='q'; d.dataset.ans=item.ans;
    d.innerHTML='<div style="font-weight:700;margin-bottom:.4rem">'+item.q+'</div>' + item.opts.map(function(o,j){
      var v=String.fromCharCode(65+j);
      return '<label style="display:block;margin:.3rem 0;cursor:pointer"><input type="radio" name="q'+i+'" value="'+v+'"> '+o+'</label>';
    }).join('');
    el.appendChild(d);
  });
  var timer=document.getElementById('timer'), start=document.getElementById('startBtn'), reset=document.getElementById('resetBtn');
  var sec=360, iv=null;
  function fmt(s){var m=Math.floor(s/60), r=s%60; return String(m).padStart(2,'0')+':'+String(r).padStart(2,'0')}
  function tick(){sec--; timer.textContent=fmt(sec); if(sec<=0){timer.classList.add('over'); clearInterval(iv); iv=null;}}
  timer.textContent=fmt(sec);
  start.addEventListener('click', function(){
    if(iv){clearInterval(iv); iv=null; start.textContent='Start 6:00'; return;}
    sec=360; timer.textContent=fmt(sec); timer.classList.remove('over');
    iv=setInterval(tick,1000); start.textContent='Pause';
  });
  reset.addEventListener('click', function(){clearInterval(iv); iv=null; sec=360; timer.textContent=fmt(sec); timer.classList.remove('over'); start.textContent='Start 6:00'; document.querySelectorAll('input[type=radio]').forEach(function(i){i.checked=false}); document.querySelectorAll('.q').forEach(function(q){q.classList.remove('correct','wrong')}); document.getElementById('score').textContent='';});
  document.getElementById('checkBtn').addEventListener('click', function(){
    var score=0;
    document.querySelectorAll('.q').forEach(function(q,i){
      var chosen=q.querySelector('input:checked');
      var ok=chosen && chosen.value===q.dataset.ans;
      q.classList.toggle('correct', ok);
      q.classList.toggle('wrong', chosen && !ok);
      if(ok) score++;
    });
    document.getElementById('score').textContent=score+' / '+qs.length + (score===qs.length?' — perfect.':' — review models and retake.');
  });
  document.getElementById('showBtn').addEventListener('click', function(){
    var m=document.getElementById('models'); m.style.display=m.style.display==='none'?'block':'none';
    this.textContent=m.style.display==='none'?'Show models':'Hide models';
  });
})();
