/* 的士佬的士計數器 · PWA offline shell */
const CACHE = 'taxi-lo-taxi-pwa-2026-11-06-v4';
const APP_SHELL = ['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install', event => {
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('taxi-lo-taxi-pwa-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 if(url.origin!==self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 if(req.mode==='navigate') {
  event.respondWith(fetch(req).then(response=>{
    if(response && response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put('./index.html',copy)));}
    return response;
  }).catch(async()=> (await caches.match('./index.html')) || (await caches.match('./')) || Response.error()));
 } else {
  event.respondWith(caches.match(req,{ignoreSearch:true}).then(cached=>cached || fetch(req).then(response=>{
    if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(req,copy)));}
    return response;
  })));
 }
});
