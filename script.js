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
document.querySelectorAll('.slider').forEach(s=>{
  const t=s.querySelector('.track');
  s.querySelector('.prev').onclick=()=>t.scrollBy({left:-t.clientWidth*.8,behavior:'smooth'});
  s.querySelector('.next').onclick=()=>t.scrollBy({left:t.clientWidth*.8,behavior:'smooth'});
});
