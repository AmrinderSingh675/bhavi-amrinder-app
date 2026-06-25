// src/app/api/loaderService.js

let loaderCallback = null;
let activeRequests = 0; // Tracks concurrent API calls so the loader doesn't disappear too early

export const loaderService = {
  // React will use this to listen for changes
  subscribe(callback) {
    loaderCallback = callback;
  },

  show() {
    activeRequests++;
    if (activeRequests === 1 && loaderCallback) {
      loaderCallback(true);
    }
  },

  hide() {
    activeRequests--;
    if (activeRequests <= 0) {
      activeRequests = 0; // Safety guard
      if (loaderCallback) loaderCallback(false);
    }
  }
};