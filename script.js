const EMAIL='mariaelnagjorba@gmail.com';
const CONCEPT=[['character-design','Character design / Creature'],['environment-design','Environment design'],['keyarts','Keyarts'],['prop-design','Prop design'],['matte-painting','Matte paintings']];
const MENU=[['concept-art','Concept art'],['modeling','3D modeling'],['texturing','Texturing'],['animation-2d','2D animation / FX'],['storyboards','Storyboards'],['lighting','Lighting']];
const item=m=>m[0]==='concept-art'
  ?`<li class="sub"><a href="concept-art.html">${m[1]}</a><ul class="menu2">${CONCEPT.map(c=>`<li><a href="${c[0]}.html">${c[1]}</a></li>`).join('')}</ul></li>`
  :`<li><a href="${m[0]}.html">${m[1]}</a></li>`;
const on=document.body.dataset.on||'';
const cl=k=>on===k?' class="on"':'';

/* ===== capçalera ===== */
try{
  const hd=document.getElementById('site-header');
  if(hd)hd.outerHTML=`<header><a class="logo" href="index.html"><img src="images/avatar.png" alt="Avatar" onerror="this.remove()"></a><nav><a href="index.html"${cl('about')}>About</a><div class="dd"><a href="my-works.html"${cl('works')}>My Works</a><ul class="menu">${MENU.map(item).join('')}</ul></div><a href="projects.html"${cl('projects')}>Projects</a><a href="resume.html"${cl('resume')}>Resume</a></nav></header>`;
}catch(e){console.error('header',e)}

/* ===== peu (el nom porta a About) ===== */
try{
  const ft=document.getElementById('site-footer');
  if(ft)ft.innerHTML=`<a class="fb" href="index.html" aria-label="Anar a About"><b>Maria Elna Güell Jorba</b><span>Portfolio</span><small>Visual Dev · Concept Artist · 3D Modeler &amp; Texturer · Lighting Artist</small></a>
<div class="soc">
<a href="mailto:${EMAIL}" aria-label="Email"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="m3 7 9 7 9-7" fill="none" stroke="currentColor" stroke-width="2"/></svg></a>
<a href="https://www.linkedin.com/in/maria-elna-g%C3%BCell-jorba-634a37355/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-8.5H5.5v8.5h2.84zM6.92 8.6a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28zM18.5 18.34v-4.66c0-2.29-1.22-3.35-2.85-3.35-1.31 0-1.9.72-2.23 1.23v-1.06h-2.84v8.5h2.84v-4.75c0-1 .6-1.72 1.5-1.72s1.43.78 1.43 1.92v4.55h2.15z"/></svg></a>
<a href="https://www.artstation.com/mayel_tt" target="_blank" rel="noopener" aria-label="ArtStation"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 17l2 3.5h10.5l-2-3.5zM11 3 4.5 14.5h4.2L11 10.3l2.4 4.2H17.6z"/></svg></a>
<a href="https://www.instagram.com/mayel_tt" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg></a>
</div>`;
}catch(e){console.error('footer',e)}

/* ===== mode fosc (per defecte fosc) ===== */
try{
  const root=document.documentElement;
  const MOON='<svg viewBox="0 0 24 24"><path d="M21 13.5A9 9 0 1 1 10.5 3a7 7 0 0 0 10.5 10.5z" fill="currentColor"/></svg>';
  const SUN='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  let saved=null;try{saved=localStorage.getItem('theme')}catch(e){}
  if(saved!=='light')root.classList.add('dk');
  const nv=document.querySelector('header nav');
  if(nv){
    const b=document.createElement('button');b.className='tg';b.type='button';
    const set=()=>{const d=root.classList.contains('dk');b.innerHTML=d?SUN:MOON;b.setAttribute('aria-label',d?'Mode clar':'Mode fosc')};
    b.onclick=()=>{root.classList.toggle('dk');try{localStorage.setItem('theme',root.classList.contains('dk')?'dark':'light')}catch(e){};set()};
    set();nv.after(b);
  }
}catch(e){console.error('dark',e)}

/* ===== slider de la portada ===== */
try{
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
}catch(e){console.error('slider',e)}

/* ===== brillantors (petites, a les vores, darrere el text) ===== */
try{
  const mob=innerWidth<700,K=mob?.55:1;
  const star=(c,o)=>'url("data:image/svg+xml,'+encodeURIComponent(o
    ?`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='none' stroke='${c}' stroke-width='1.4' stroke-linejoin='round' d='M12 1Q13.2 10.8 23 12Q13.2 13.2 12 23Q10.8 13.2 1 12Q10.8 10.8 12 1Z'/></svg>`
    :`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='${c}' d='M12 0Q13 11 24 12Q13 13 12 24Q11 13 0 12Q11 11 12 0Z'/></svg>`)+'")';
  const rnd=(a,b)=>a+Math.random()*(b-a);
  const pick=a=>a[Math.random()*a.length|0];
  const side=(a,b,c,d)=>Math.random()<.5?rnd(a,b):rnd(c,d);
  const put=(el,x,y,z,css,zi,cls)=>{
    const s=document.createElement('i');s.className='sp tw'+(cls||'');
    const px=(z*K).toFixed(1);
    s.style.cssText=`left:${x}%;top:${y}%;width:${px}px;height:${px}px;--d:${rnd(2.2,5)}s;--l:${rnd(0,4)}s;`+css+(zi!=null?`;z-index:${zi}`:'');
    el.appendChild(s);
  };
  const fixedCol=(el,x,y,z,o,zi)=>put(el,x,y,z,`background-image:${star(pick(['#ffffff','#ffffff','#d8b4fe','#8ec5ff']),o)}`,zi,'');
  const theme=(el,x,y,z,o,zi)=>put(el,x,y,z,`--m:${star('#000',o)}`,zi,' th '+pick(['a','b','c']));
  // portada (hero): només a les vores
  document.querySelectorAll('.hero').forEach(el=>{
    for(let i=0;i<(mob?8:16);i++)fixedCol(el,mob?side(1,10,90,98):side(1,20,80,98),rnd(4,88),rnd(7,20),false);
  });
  // slider: només a la part sense text
  document.querySelectorAll('.show').forEach(el=>{
    for(let i=0;i<(mob?6:12);i++)fixedCol(el,mob?rnd(4,94):rnd(52,97),mob?rnd(3,16):rnd(5,88),rnd(7,20),false,2);
  });
  // Hello: estrelles de contorn als costats
  document.querySelectorAll('.hello-wrap').forEach(el=>{
    for(let i=0;i<(mob?6:12);i++){
      const o=i%2===0;
      theme(el,mob?rnd(2,94):side(1,8,92,98),mob?side(1,5,94,98):rnd(5,88),o?rnd(18,34):rnd(7,14),o);
    }
  });
  // la resta de pàgines: capa fixa a les vores
  if(on!=='about'){
    const f=document.createElement('div');f.className='bgfx';document.body.appendChild(f);
    for(let i=0;i<(mob?8:16);i++)theme(f,mob?side(0,4,95,99):side(.5,6,94,99.5),rnd(4,94),rnd(8,22),i%3===0);
  }
  // estela del cursor (només amb ratolí)
  if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&matchMedia('(hover:hover)').matches){
    let last=0;const TR=['#ffffff','#d8b4fe','#8ec5ff','#c58bd6'];
    addEventListener('mousemove',e=>{
      const now=performance.now();if(now-last<45)return;last=now;
      const s=document.createElement('i'),z=rnd(8,18);
      s.className='sp trail';
      s.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;width:${z}px;height:${z}px;background-image:${star(pick(TR),false)};--dx:${rnd(-20,20)}px;--dy:${rnd(10,40)}px`;
      document.body.appendChild(s);setTimeout(()=>s.remove(),900);
    });
  }
}catch(e){console.error('sparkles',e)}

/* ===== aparició en fer scroll ===== */
try{
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
    document.querySelectorAll('.hub .card,.row3 .card,.tile,.hello>img,.hello>div').forEach(el=>{el.classList.add('rv');io.observe(el)});
  }
}catch(e){console.error('reveal',e)}
