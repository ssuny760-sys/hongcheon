/* 사진·영상은 GitHub(ssuny760-sys/hongcheon)에 올려져 있습니다. 수정할 필요 없습니다. */
var HC_MEDIA = {
  /* 사진 17장 (필수) */
  "img/life.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/life.jpg",
  "img/real1.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/real1.jpg",
  "img/real2.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/real2.jpg",
  "img/real3.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/real3.jpg",
  "img/real4.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/real4.jpg",
  "img/dining.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/dining.jpg",
  "img/golf.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/golf.jpg",
  "img/hero.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/hero.jpg",
  "img/leisure.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/leisure.jpg",
  "img/master.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/master.jpg",
  "img/park.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/park.jpg",
  "img/reading.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/reading.jpg",
  "img/river.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/river.jpg",
  "img/road.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/road.jpg",
  "img/typeA.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/typeA.jpg",
  "img/typeB.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/typeB.jpg",
  "img/water.jpg": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/img/water.jpg",
  /* 영상 12개 (선택: 비워두면 같은 자리에 위 사진이 대신 나옵니다) */
  "vid/dining.mp4": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/vid/dining.mp4",
  "vid/golf.mp4": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/vid/golf.mp4",
  "vid/hero.mp4": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/vid/hero.mp4",
  "vid/leisure.mp4": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/vid/leisure.mp4",
  "vid/master.mp4": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/vid/master.mp4",
  "vid/park.mp4": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/vid/park.mp4",
  "vid/reading.mp4": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/vid/reading.mp4",
  "vid/river.mp4": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/vid/river.mp4",
  "vid/road.mp4": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/vid/road.mp4",
  "vid/typeA.mp4": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/vid/typeA.mp4",
  "vid/typeB.mp4": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/vid/typeB.mp4",
  "vid/water.mp4": "https://cdn.jsdelivr.net/gh/ssuny760-sys/hongcheon@750537281635/vid/water.mp4"
};

(function(){
  var root=document.getElementById('hc');
  root.querySelectorAll('[data-hc-src],[data-hc-poster]').forEach(function(el){
    ['src','poster'].forEach(function(a){var k=el.getAttribute('data-hc-'+a); if(k&&HC_MEDIA[k]) el.setAttribute(a,HC_MEDIA[k]);});
    if(el.tagName==='VIDEO'){
      if(!el.getAttribute('src')){ var im=document.createElement('img'); im.src=el.getAttribute('poster')||''; im.alt=el.getAttribute('aria-label')||''; im.setAttribute('style',el.getAttribute('style')||''); el.parentNode.replaceChild(im,el); return; }
      el.muted=true; var pr=el.play&&el.play(); if(pr&&pr.catch)pr.catch(function(){});
    }
  });
})();

document.getElementById('copyBtn').addEventListener('click',function(){
  var out=document.getElementById('copied'),num='010-6592-0445';
  function sel(){var r=document.createRange();r.selectNodeContents(document.getElementById('phone'));var s=getSelection();s.removeAllRanges();s.addRange(r);out.textContent='번호를 선택했습니다. 복사해 주세요.';}
  try{navigator.clipboard.writeText(num).then(function(){out.textContent='번호를 복사했습니다.';},sel);}catch(e){sel();}
});
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.querySelectorAll('video').forEach(function(v){v.removeAttribute('autoplay');v.pause();});}

(function(){
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce||!('IntersectionObserver' in window))return;
  document.getElementById('hc').classList.add('js-motion');
  var vh=window.innerHeight||800;
  function below(el){var r=el.getBoundingClientRect();return r.top>vh*0.9;}
  function fmt(v,d){return d?v.toFixed(d):Math.round(v).toLocaleString('ko-KR');}
  function count(el,from,to,dur,delay,done){
    var d=(String(to).split('.')[1]||'').length,t0=null;
    setTimeout(function(){requestAnimationFrame(function st(ts){if(!t0)t0=ts;var p=Math.min(1,(ts-t0)/dur),e=1-Math.pow(1-p,3);
      el.textContent=fmt(from+(to-from)*e,d);if(p<1)requestAnimationFrame(st);else if(done)done();});},delay||0);
  }
  function clipDraw(svg){
    var lines=svg.querySelectorAll('.sl');
    lines.forEach(function(l,i){var id=l.getAttribute('clip-path').match(/#([^)]+)/)[1],r=svg.querySelector('#'+id+' rect'),x1=+l.getAttribute('data-x1');
      r.setAttribute('x',x1);r.setAttribute('width',1000-x1);
      setTimeout(function(){var t0=null;requestAnimationFrame(function st(ts){if(!t0)t0=ts;var p=Math.min(1,(ts-t0)/1100),e=1-Math.pow(1-p,2);
        var x=x1-(x1-0)*e;r.setAttribute('x',x);r.setAttribute('width',1000-x);if(p<1)requestAnimationFrame(st);});},1100+i*450);
    });
  }
  function run(el){
    el.classList.remove('pre');
    var a=el.dataset.anim;
    if(a==='lots')el.querySelectorAll('.pct').forEach(function(t){var seq=t.dataset.seq.split(',').map(Number);
      count(t,0,seq[0],900,0,function(){if(seq[1])count(t,seq[0],seq[1],500,100);});});
    if(a==='section')clipDraw(el.querySelector('svg'));
    if(a==='cnt'){var to=+el.dataset.to;count(el,0,to,1400,0);}
  }
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){io.unobserve(e.target);run(e.target);}});},{threshold:0.3});
  function prep(el,animName){ if(animName)el.dataset.anim=animName; el.classList.add('pre');
    if(el.dataset.anim==='cnt')el.textContent='0';
    if(el.dataset.anim==='section')el.querySelectorAll('.sl').forEach(function(l){var id=l.getAttribute('clip-path').match(/#([^)]+)/)[1],r=el.querySelector('#'+id+' rect');r.setAttribute('x',1000);r.setAttribute('width',0);});
    io.observe(el);}
  document.querySelectorAll('.anim').forEach(function(el){prep(el);});
  document.querySelectorAll('.cnt').forEach(function(el){prep(el,'cnt');});
  document.querySelectorAll('#hc section h2, #hc section .lead').forEach(function(el){
    if(!below(el))return; el.classList.add('rv','pre');
    var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){o.disconnect();el.classList.remove('pre');}});},{threshold:0.2});o.observe(el);});
})();

(function(){
  var root=document.getElementById('viewmg'); if(!root)return;
  var els=[].slice.call(root.querySelectorAll('[data-a]'));
  function clamp(x){return Math.min(1,Math.max(0,x));}
  function eo(x){return 1-Math.pow(1-x,3);} function eio(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;}
  function bo(x){var c1=1.70158,c3=c1+1;return 1+c3*Math.pow(x-1,3)+c1*Math.pow(x-1,2);}
  els.forEach(function(el){if(el.dataset.a.indexOf('draw')===0){var L=el.getTotalLength();el.dataset.len=L;if(!el.getAttribute('stroke-dasharray')){el.style.strokeDasharray=L;}else el.dataset.mask=1;}});
  function frame(lt){els.forEach(function(el){var a=el.dataset.a.split(' '),p=clamp((lt-(+a[1]))/(+a[2])),e=eo(p);
    switch(a[0]){
      case 'fade':el.style.opacity=e;break;
      case 'up':el.style.opacity=e;el.style.transform='translateY('+((1-e)*24)+'px)';break;
      case 'pop':var b=p>=1?1:bo(p);el.style.opacity=clamp(p*2);el.style.transformBox='fill-box';el.style.transformOrigin='center';el.style.transform='scale('+(.7+.3*b)+')';break;
      case 'draw':var L=+el.dataset.len;if(el.dataset.mask){el.style.opacity=p>0?1:0;el.style.clipPath='inset(0 '+(100-eio(p)*100)+'% 0 0)';}else el.style.strokeDashoffset=L*(1-eio(p));break;}});}
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce||!('IntersectionObserver' in window)){frame(99);return;}
  frame(0);
  var io=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;io.disconnect();var t0=null;
    requestAnimationFrame(function st(ts){if(!t0)t0=ts;var lt=(ts-t0)/1000;frame(lt);if(lt<4.2)requestAnimationFrame(st);else frame(99);});},{threshold:0.35});
  io.observe(root);
})();

(function(){
  var root=document.getElementById('landmg'); if(!root)return;
  var els=[].slice.call(root.querySelectorAll('[data-a]'));
  var A=document.getElementById('fpA'),B=document.getElementById('fpB'),bA=document.getElementById('bA'),yA=document.getElementById('yA');
  function c(x){return Math.min(1,Math.max(0,x));} function eo(x){return 1-Math.pow(1-x,3);} function eio(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;}
  function bo(x){var c1=1.70158,c3=c1+1;return 1+c3*Math.pow(x-1,3)+c1*Math.pow(x-1,2);}
  function frame(lt){
    els.forEach(function(el){var a=el.dataset.a.split(' '),p=c((lt-(+a[1]))/(+a[2])),e=eo(p);
      if(a[0]==='up'){el.style.opacity=e;el.style.transform='translateY('+((1-e)*24)+'px)';}
      if(a[0]==='pop'){var b=p>=1?1:bo(p);el.style.opacity=c(p*2);el.style.transform='scale('+(.7+.3*b)+')';}});
    var pA=eo(c((lt-0.4)/0.9)),inc=eio(c((lt-1.5)/0.8)),pB=eo(c((lt-0.7)/0.9));
    var rA=(0.40+0.10*inc)*pA,rB=0.20*pB;
    A.style.width=A.style.height=(Math.sqrt(rA)*100)+'%';B.style.width=B.style.height=(Math.sqrt(rB)*100)+'%';
    bA.textContent=Math.round(40+10*inc);yA.textContent=Math.round(100+25*inc);
  }
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce||!('IntersectionObserver' in window)){frame(99);return;}
  frame(0);
  var io=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;io.disconnect();var t0=null;
    requestAnimationFrame(function st(ts){if(!t0)t0=ts;var lt=(ts-t0)/1000;frame(lt);if(lt<3.2)requestAnimationFrame(st);else frame(99);});},{threshold:0.35});
  io.observe(root);
})();

(function(){
  var roots=document.querySelectorAll('.mg'); if(!roots.length)return;
  function c(x){return Math.min(1,Math.max(0,x));} function eo(x){return 1-Math.pow(1-x,3);} function eio(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;}
  function bo(x){var c1=1.70158,c3=c1+1;return 1+c3*Math.pow(x-1,3)+c1*Math.pow(x-1,2);}
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches, ok=!reduce&&('IntersectionObserver' in window);
  roots.forEach(function(root){
    var els=[].slice.call(root.querySelectorAll('[data-a]')), cnts=[].slice.call(root.querySelectorAll('[data-count]'));
    var vert=function(el){return getComputedStyle(el).transformOrigin.indexOf('0px')===0&&el.classList.contains('rail')&&innerWidth<760;};
    function frame(lt){
      els.forEach(function(el){var a=el.dataset.a.split(' '),p=c((lt-(+a[1]))/(+a[2])),e=eo(p);
        if(a[0]==='up'){el.style.opacity=e;el.style.transform='translateY('+((1-e)*28)+'px)';}
        else if(a[0]==='pop'){var b=p>=1?1:bo(p);el.style.opacity=c(p*2);el.style.transform='scale('+(.4+.6*b)+')';}
        else if(a[0]==='grow'){var g=eio(p);el.style.transform=(el.classList.contains('rail')&&innerWidth<760)?'scaleY('+g+')':'scaleX('+g+')';}});
      cnts.forEach(function(el){var to=+el.dataset.count,p=eo(c((lt-(+el.dataset.cs))/(+el.dataset.cd)));el.textContent=Math.round(to*p);});
    }
    if(!ok){frame(99);return;}
    frame(0);
    var dur=+root.dataset.dur||4;
    var io=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;io.disconnect();var t0=null;
      requestAnimationFrame(function st(ts){if(!t0)t0=ts;var lt=(ts-t0)/1000;frame(lt);if(lt<dur)requestAnimationFrame(st);else frame(99);});},{threshold:0.3});
    io.observe(root);
  });
})();