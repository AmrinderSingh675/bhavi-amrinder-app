
let toastCallback = null;

export const toastService = {
  subscribe(callback) {
    toastCallback = callback;
  },

  show(message, type = 'danger') {
    if (toastCallback) {
      toastCallback({ show: true, message, type });
    }
  },

  hide() {
    if (toastCallback) {
      toastCallback({ show: false, message: '', type: 'danger' });
    }
  }
};