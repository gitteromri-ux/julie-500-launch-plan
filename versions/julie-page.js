(() => {
  'use strict';
  // Carry attribution without allowing incoming parameters to change the product.
  const incoming = new URLSearchParams(location.search);
  const keys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','cid','fbclid','gclid','qa'];
  document.querySelectorAll('a[data-plan]').forEach(a => {
    if (!a.href.startsWith('http')) return;
    const u = new URL(a.href);
    if (a.dataset.plan === 'fullcourse') {
      u.pathname='/';
      u.searchParams.set('enroll','1');
      u.searchParams.set('code','JULIE249');
      // Preserve the established offer expiry rather than forcing a permanent discount.
      if (Date.now() <= Date.parse('2026-09-24T23:59:59-04:00')) u.searchParams.set('promo','on');
      else u.searchParams.set('promo','off');
    }
    for (const key of keys) if (incoming.has(key)) u.searchParams.set(key,incoming.get(key));
    a.href = u.href;
  });
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  const burger=document.querySelector('.burger');
  const menu=document.querySelector('.mobile-menu');
  burger?.addEventListener('click',()=>{menu?.classList.toggle('open');burger.setAttribute('aria-expanded',String(menu?.classList.contains('open')))});
  menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
  document.querySelectorAll('.acc-head').forEach(b=>b.addEventListener('click',()=>{
    const item=b.closest('.acc-item'),body=item.querySelector('.acc-body');
    item.classList.toggle('open');b.setAttribute('aria-expanded',String(item.classList.contains('open')));
    body.style.maxHeight=item.classList.contains('open')?body.scrollHeight+'px':'0px';
  }));
  const hero=document.querySelector('.hero video');
  const sound=document.getElementById('heroSound');
  if(sound){sound.textContent='Sound on';sound.addEventListener('click',()=>{if(!hero)return;hero.muted=!hero.muted;sound.textContent=hero.muted?'Sound on':'Sound off';hero.play().catch(()=>{})})}
  document.querySelectorAll('.openFilm').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const v=document.getElementById('trailerVideo');if(v){v.parentElement.classList.add('open');v.parentElement.style.display='flex';v.play().catch(()=>{})}}));
  document.getElementById('modalClose')?.addEventListener('click',()=>{
    const v=document.getElementById('trailerVideo');
    if(v){v.pause();v.parentElement.classList.remove('open');v.parentElement.style.display='none'}
  });
  const pricing=document.getElementById('pricing'),floater=document.getElementById('et-bumpyard-widget');
  if(pricing&&floater)new IntersectionObserver(([entry])=>{floater.style.visibility=entry.isIntersecting?'hidden':''}).observe(pricing);
})();
