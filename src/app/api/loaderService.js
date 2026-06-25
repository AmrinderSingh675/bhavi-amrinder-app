
let loaderCallback = null;
let activeRequests = 0; 

export const loaderService = {
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
      activeRequests = 0; 
      if (loaderCallback) loaderCallback(false);
    }
  }
};