/* eslint-disable no-console */
import { defaultCache } from '@serwist/next/worker';
import type { PrecacheEntry, SerwistGlobalConfig } from 'serwist';
import { BackgroundSyncQueue, Serwist } from 'serwist';

// This declares the value of `injectionPoint` to TypeScript.
// `injectionPoint` is the string that will be replaced by the
// actual precache manifest. By default, this string is set to
// `"self.__SW_MANIFEST"`.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;
const queue = new BackgroundSyncQueue('example', {
  maxRetentionTime: 1,
  forceSyncFallback: true,
});

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  fallbacks: {
    entries: [
      {
        url: '/offline', // the page that'll display if user goes offline
        matcher({ request }) {
          return request.destination === 'document';
        },
      },
    ],
  },
});

// disableDevLogs();

self.addEventListener('fetch', (event) => {
  // Add in your own criteria here to return early if this
  // isn't a request that should use background sync.

  if (event.request.method !== 'POST') {
    return;
  }

  // console.log(event);
  // console.log(event.request.clone);

  const backgroundSync = async () => {
    try {
      const response = await fetch(event.request.clone());
      return response;
    } catch (error) {
      // console.log('SW ERR');
      await queue.pushRequest({ request: event.request });
      self.registration.sync.register('example');
      return Response.error();
    }
  };
  event.respondWith(backgroundSync());
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'example') {
    console.log('on SYNC');
    event.waitUntil(
      queue.replayRequests().catch((err) => {
        console.error('Replay failed:', err);
      }),
    );
  }
});

serwist.addEventListeners();
