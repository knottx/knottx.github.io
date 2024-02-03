'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "335ce636bbcaef8bd5948d2896c97bac",
"index.html": "6a492c1d8ad334048c892737d2743505",
"/": "6a492c1d8ad334048c892737d2743505",
"main.dart.js": "54338d4a4d1cb0eb2a677b026afad0f4",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "d5d401897ae7585850de68b2e1784480",
"icons/icon-192.png": "d9ba04b8acc8a06f6dabc7eb0b69c809",
"icons/Icon-maskable-192.png": "d9ba04b8acc8a06f6dabc7eb0b69c809",
"icons/Icon-maskable-512.png": "b69a8c11d43ceb8c4db18e55b57ca4b3",
"icons/icon-512.png": "b69a8c11d43ceb8c4db18e55b57ca4b3",
"manifest.json": "70386106e1b6967a6eed1a0c7d2227f2",
"assets/AssetManifest.json": "2baef01dde7ee9c61a738e0d6818e16e",
"assets/NOTICES": "91b9417f9b6644d9fea74027c5b1e0e3",
"assets/FontManifest.json": "1ce0972f86107a6225bc6e66fd2ad88e",
"assets/AssetManifest.bin.json": "e2b22cf240784fcabebbe306e3736b2d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "7a10dcc58dbc6fd49c174e318120e013",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7189e88d71afedf5396c1f9ea275e89f",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "5b0d556378d015f8495902af159b4530",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/el_mercado_01.jpg": "a8c9be3ed169587b14759113e7954e9b",
"assets/assets/images/mewing_app_icon.png": "b492feace77986bffc51efa3dd98428a",
"assets/assets/images/el_mercado_02.jpg": "c8e695ec77cce514eb369dd9e165a47e",
"assets/assets/images/el_mercado_03.jpg": "4f6c93d0f490397f991a3c3973d72712",
"assets/assets/images/el_mercado_app_icon.jpg": "46558d965a53837737bf583b26f9717d",
"assets/assets/images/app_store_badge.svg": "2928664fe1fc6aca88583a6f606d60ba",
"assets/assets/images/google_play_badge.png": "faf732f09f86b1a970250f53f846e35c",
"assets/assets/images/vctpds_01.jpg": "9c9fb3a5999d15fc8c2c1530d91e2a8a",
"assets/assets/images/sabuy_wash_01.jpg": "ceabdeafc68b717b790c6a404a488869",
"assets/assets/images/vctpds_02.jpg": "de70fc22be243652ff4995cc143b8da3",
"assets/assets/images/git_hub_badge.png": "11065b88597b542bc998a688ce0dbc74",
"assets/assets/images/sabuy_wash_03.jpg": "dedc1747733c0f601de2ea40ecff4c5a",
"assets/assets/images/icon-1024.png": "b665a8b238f062d62f913cb9d50f7ee2",
"assets/assets/images/sabuy_wash_02.jpg": "9ef93540db385a4f1f7d402654f4d462",
"assets/assets/images/vctpds_03.jpg": "c4323cad1a8c1e79c17a59827f846213",
"assets/assets/images/vctpds_app_icon.jpg": "1ecfbc3d5bc849adb221469116ca1b4b",
"assets/assets/images/just_app_icon.jpg": "125dfef690712b38f596b2e7f62b4203",
"assets/assets/images/profile.jpg": "af834450b71a4b5411d2f60b0ba08414",
"assets/assets/images/mewing_01.jpg": "56cd340eed153b29f9dcde682a734af9",
"assets/assets/images/just_01.jpg": "3d40e57468978168f1917d9806bb2c34",
"assets/assets/images/mewing_02.jpg": "fdebb89841eef5ce5c3f4d8122902383",
"assets/assets/images/just_02.jpg": "182c32486ce3ed599ac6c20fc206eae7",
"assets/assets/images/just_03.jpg": "6bf024115e8eaa54dd50f84baacc1eb2",
"assets/assets/images/mewing_03.jpg": "6356180266fc243b9060ea04ccf82962",
"assets/assets/images/iphone15_pro_portrait.png": "ca342394bdeda4fe788d9504300f74c7",
"assets/assets/images/sabuy_wash_app_icon.jpg": "81e6d29c3b39fa55ebdd3ec117946870",
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
