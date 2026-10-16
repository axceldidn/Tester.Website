/* AIS.NET service worker: PWA (bisa dipasang) + penerima notifikasi push */
const CACHE = 'aisnet-v1';
const SHELL = ['./', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png'];
const ICON = new URL('icons/icon-192.png', self.registration.scope).href;
const BADGE = new URL('icons/badge-96.png', self.registration.scope).href;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Hanya file milik sendiri yang di-cache. Data Supabase & CDN tidak disentuh.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
  );
});

// ---- Notifikasi push ----
self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data.json(); } catch (_) { d = { title: 'AIS.NET', body: e.data ? e.data.text() : '' }; }
  e.waitUntil(
    self.registration.showNotification(d.title || 'AIS.NET', {
      body: d.body || '',
      icon: ICON,
      badge: BADGE,
      tag: d.tag || undefined,
      renotify: !!d.tag,
      vibrate: [200, 100, 200],
      data: { tab: d.tab || '' }
    })
  );
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const tab = (e.notification.data && e.notification.data.tab) || '';
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ('focus' in c) { c.postMessage({ type: 'goto', tab }); return c.focus(); }
      }
      return self.clients.openWindow(self.registration.scope + (tab ? '?tab=' + tab : ''));
    })
  );
});
