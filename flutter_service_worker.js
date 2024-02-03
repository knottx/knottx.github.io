'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "335ce636bbcaef8bd5948d2896c97bac",
"index.html": "739d8d9656ba8e5178af998cd37dfe20",
"/": "739d8d9656ba8e5178af998cd37dfe20",
"main.dart.js": "609c09af03ba01234fb6adec57d03d66",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "d5d401897ae7585850de68b2e1784480",
"icons/icon-192.png": "d9ba04b8acc8a06f6dabc7eb0b69c809",
"icons/Icon-maskable-192.png": "d9ba04b8acc8a06f6dabc7eb0b69c809",
"icons/Icon-maskable-512.png": "b69a8c11d43ceb8c4db18e55b57ca4b3",
"icons/icon-512.png": "b69a8c11d43ceb8c4db18e55b57ca4b3",
"manifest.json": "70386106e1b6967a6eed1a0c7d2227f2",
"assets/AssetManifest.json": "a4520a7a248d08dac378d9107201546e",
"assets/NOTICES": "91b9417f9b6644d9fea74027c5b1e0e3",
"assets/FontManifest.json": "1ce0972f86107a6225bc6e66fd2ad88e",
"assets/AssetManifest.bin.json": "fca788ec016c2c5144858654c0a0e1df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "7a10dcc58dbc6fd49c174e318120e013",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7189e88d71afedf5396c1f9ea275e89f",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "b8ff645eecd1704cdfa124a0cf961df4",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/el_mercado_01.png": "ee100770de110ad743cd60f8dd49e201",
"assets/assets/images/el_mercado_02.png": "c7f6945b465c089edeefa9708ac33ebf",
"assets/assets/images/mewing_app_icon.png": "5b892c412349f80e1a93a373d707d47c",
"assets/assets/images/el_mercado_03.png": "bbbe0ae36949f182ac50d1f19bb60210",
"assets/assets/images/el_mercado_app_icon.png": "ff7fba4352b225e71136977ae47c9361",
"assets/assets/images/app_store_badge.svg": "2928664fe1fc6aca88583a6f606d60ba",
"assets/assets/images/google_play_badge.png": "faf732f09f86b1a970250f53f846e35c",
"assets/assets/images/vctpds_01.png": "ee09292c2d79edd6f519581807626671",
"assets/assets/images/sabuy_wash_01.png": "2d5edf8e17007096a53fb1102b8d23d1",
"assets/assets/images/sabuy_wash_03.png": "13a01fb068e4e653ad98036996a28233",
"assets/assets/images/vctpds_02.png": "81fb2d3d4b646de3dcbee8d842d63d4e",
"assets/assets/images/git_hub_badge.png": "11065b88597b542bc998a688ce0dbc74",
"assets/assets/images/icon-1024.png": "b665a8b238f062d62f913cb9d50f7ee2",
"assets/assets/images/vctpds_03.png": "9989b7128dc1187fa5d60d3ffc241a3f",
"assets/assets/images/sabuy_wash_02.png": "79f67e10eb363abb090e9dea8c631eb6",
"assets/assets/images/vctpds_app_icon.png": "12a453fb88721add5ad7f7b9e71c934a",
"assets/assets/images/profile.jpg": "af834450b71a4b5411d2f60b0ba08414",
"assets/assets/images/mewing_01.png": "29869650ea42f2cc96fd86e022e25905",
"assets/assets/images/mewing_02.png": "e24425fc00cb521a61d61aa9fa511a48",
"assets/assets/images/mewing_03.png": "f947fa72498246f34743f167615e04f8",
"assets/assets/images/sabuy_wash_app_icon.png": "3cbf27c5db847b8da181469edee432a9",
"assets/assets/fonts/NotoSansThai-SemiBold.ttf": "5ef8d61163ffd94e72e9ea1ab17de547",
"assets/assets/fonts/NotoSansThai-Regular.ttf": "0a4922cc5fdf576faa5133ea15e45517",
"assets/assets/fonts/NotoSansThai-Medium.ttf": "9398287f16b01bc912369cfb8d76e03a",
"assets/assets/fonts/NotoSansThai-Bold.ttf": "5a28b5cabf235a21cd1cdab9dbb19bf4",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
