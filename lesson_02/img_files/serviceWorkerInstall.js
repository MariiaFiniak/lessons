// register service worker if supported
// Service-worker file needs to exist in root folder, because it defines its scope = it can intercept only requests below it in the tree structure

window.addEventListener('load', async function () {
    if ('serviceWorker' in navigator &&
        (pwaEnabled || !swCacheDisabled)) {
        var controler = await navigator.serviceWorker.controller;
        var scriptUrl = controler ? await navigator.serviceWorker.controller.scriptURL : '';
        if (scriptUrl.includes('OneSignalSDKWorker.js') && !scriptUrl.includes('push/onesignal')) {
            var registrations = await navigator.serviceWorker.getRegistrations();
            registrations.forEach( async (reg) => {
                if (reg && reg.active && reg.active.scriptURL && reg.active.scriptURL === scriptUrl) {
                    await reg.unregister();
                }
            })
        } else {
            var sw = '/sw.js';
            if (pwaEnabled) {
                sw = sw.indexOf('?') > -1 ? sw + '&pwa=true' : sw + '?pwa=true';
            }
            if (swCacheDisabled) {
                sw = sw.indexOf('?') > -1 ? sw + '&sw-cache-dis=true' : sw + '?sw-cache-dis=true';
            }
            navigator.serviceWorker.register(sw).then(function (registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function (err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        }
    }
});
