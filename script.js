const EMAIL='mariaelnagjorba@gmail.com';
const CONCEPT=[['character-design','Character design / Creature'],['environment-design','Environment design'],['keyarts','Keyarts'],['prop-design','Prop design'],['matte-painting','Matte paintings']];
const MENU=[['concept-art','Concept art'],['modeling','3D modeling'],['texturing','Texturing'],['animation-2d','2D animation / FX'],['storyboards','Storyboards'],['lighting','Lighting']];
const item=m=>m[0]==='concept-art'
  ?`<li class="sub"><a href="concept-art.html">${m[1]}</a><ul class="menu2">${CONCEPT.map(c=>`<li><a href="${c[0]}.html">${c[1]}</a></li>`).join('')}</ul></li>`
  :`<li><a href="${m[0]}.html">${m[1]}</a></li>`;
const on=document.body.dataset.on||'';
const cl=k=>on===k?' class="on"':'';
const hd=document.getElementById('site-header');
if(hd)hd.outerHTML=`<header><a class="logo" href="index.html"><img src="images/avatar.png" alt="Avatar" onerror="this.remove()"></a><nav><a href="index.html"${cl('about')}>About</a><div class="dd"><a href="my-works.html"${cl('works')}>My Works</a><ul class="menu">${MENU.map(item).join('')}</ul></div><a href="projects.html"${cl('projects')}>Projects</a><a href="resume.html"${cl('resume')}>Resume</a></nav></header>`;
const ft=document.getElementById('site-footer');
if(ft)ft.innerHTML=`<div><b>Maria Elna Güell Jorba</b><br><small>Portfolio</small></div>
<div class="soc">
<a href="mailto:${EMAIL}" aria-label="Email"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="m3 7 9 7 9-7" fill="none" stroke="currentColor" stroke-width="2"/></svg></a>
<a href="https://www.linkedin.com/in/maria-elna-g%C3%BCell-jorba-634a37355/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-8.5H5.5v8.5h2.84zM6.92 8.6a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28zM18.5 18.34v-4.66c0-2.29-1.22-3.35-2.85-3.35-1.31 0-1.9.72-2.23 1.23v-1.06h-2.84v8.5h2.84v-4.75c0-1 .6-1.72 1.5-1.72s1.43.78 1.43 1.92v4.55h2.15z"/></svg></a>
<a href="https://www.artstation.com/mayel_tt" target="_blank" rel="noopener" aria-label="ArtStation"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 17l2 3.5h10.5l-2-3.5zM11 3 4.5 14.5h4.2L11 10.3l2.4 4.2H17.6z"/></svg></a>
<a href="https://www.instagram.com/mayel_tt" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg></a>
</div>`;

/* ===== mode fosc ===== */
const root=document.documentElement;
const MOON='<svg viewBox="0 0 24 24"><path d="M21 13.5A9 9 0 1 1 10.5 3a7 7 0 0 0 10.5 10.5z" fill="currentColor"/></svg>';
const SUN='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
let saved=null;try{saved=localStorage.getItem('theme')}catch(e){}
if(saved==='dark')root.classList.add('dk');
const nv=document.querySelector('header nav');
if(nv){
  const b=document.createElement('button');b.className='tg';b.type='button';
  const set=()=>{const d=root.classList.contains('dk');b.innerHTML=d?SUN:MOON;b.setAttribute('aria-label',d?'Mode clar':'Mode fosc')};
  b.onclick=()=>{root.classList.toggle('dk');try{localStorage.setItem('theme',root.classList.contains('dk')?'dark':'light')}catch(e){};set()};
  set();nv.after(b);
}

/* ===== slider de la portada ===== */
document.querySelectorAll('.show').forEach(w=>{
  const sl=[...w.querySelectorAll('.sh')],dots=w.querySelector('.dots');
  if(!sl.length)return;
  let i=0,timer;
  const go=k=>{i=(k+sl.length)%sl.length;sl.forEach((s,j)=>s.classList.toggle('on',j===i));if(dots)[...dots.children].forEach((d,j)=>d.classList.toggle('on',j===i))};
  const play=()=>{clearInterval(timer);timer=setInterval(()=>go(i+1),4500)};
  if(dots)sl.forEach((_,k)=>{const b=document.createElement('button');b.setAttribute('aria-label','Slide '+(k+1));b.onclick=()=>{go(k);play()};dots.appendChild(b)});
  const l=w.querySelector('.arr.l'),r=w.querySelector('.arr.r');
  if(l)l.onclick=()=>{go(i-1);play()};
  if(r)r.onclick=()=>{go(i+1);play()};
  w.onmouseenter=()=>clearInterval(timer);w.onmouseleave=play;
  go(0);play();w.classList.add('ready');
});

/* ===== brillantors ===== */
const star=(c,o)=>'url("data:image/svg+xml,'+encodeURIComponent(o
  ?`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='none' stroke='${c}' stroke-width='1.4' stroke-linejoin='round' d='M12 1Q13.2 10.8 23 12Q13.2 13.2 12 23Q10.8 13.2 1 12Q10.8 10.8 12 1Z'/></svg>`
  :`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='${c}' d='M12 0Q13 11 24 12Q13 13 12 24Q11 13 0 12Q11 11 12 0Z'/></svg>`)+'")';
const rnd=(a,b)=>a+Math.random()*(b-a);
const pick=a=>a[Math.random()*a.length|0];
const mk=(el,x,y,z,c,o)=>{
  const s=document.createElement('i');s.className='sp tw';
  s.style.cssText=`left:${x}%;top:${y}%;width:${z}px;height:${z}px;background-image:${star(c,o)};--d:${rnd(2.2,5)}s;--l:${rnd(0,4)}s`;
  el.appendChild(s);
};
document.querySelectorAll('.hero,.show').forEach(el=>{
  const C=['#ffffff','#ffffff','#d8b4fe','#8ec5ff'];
  for(let i=0;i<20;i++)mk(el,rnd(0,98),rnd(0,92),rnd(8,30),pick(C),false);
});
document.querySelectorAll('.hello-wrap').forEach(el=>{
  const C=['#9b4daa','#c58bd6','#5aa9e6'];
  for(let i=0;i<12;i++)mk(el,i%2?rnd(82,96):rnd(2,16),rnd(4,88),rnd(24,52),pick(C),true);
  for(let i=0;i<10;i++)mk(el,rnd(0,97),rnd(0,92),rnd(8,20),pick(C),false);
});

/* ===== estela del cursor (només amb ratolí) ===== */
if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&matchMedia('(hover:hover)').matches){
  let last=0;const TR=['#ffffff','#d8b4fe','#8ec5ff','#c58bd6'];
  addEventListener('mousemove',e=>{
    const now=performance.now();if(now-last<45)return;last=now;
    const s=document.createElement('i'),z=rnd(8,20);
    s.className='sp trail';
    s.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;width:${z}px;height:${z}px;background-image:${star(pick(TR),false)};--dx:${rnd(-20,20)}px;--dy:${rnd(10,40)}px`;
    document.body.appendChild(s);setTimeout(()=>s.remove(),900);
  });
}

/* ===== aparició en fer scroll ===== */
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.hub .card,.row3 .card,.tile,.hello>img,.hello>div').forEach(el=>{el.classList.add('rv');io.observe(el)});
}
