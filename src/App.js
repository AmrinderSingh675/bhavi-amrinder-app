// src/App.js
import React, { useState, useEffect } from 'react';
import Loader from './shared/components/Loader/Loader.component';
import Toast from './shared/components/Toast/Toast.component.jsx';
import AppRoutes from "./routes/AppRoutes";
import { loaderService } from "./app/api/loaderService";
import { toastService } from "./shared/services/toastService"; 
import { store } from './app/store.js';
import { Provider } from 'react-redux';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'danger' });

  useEffect(() => {
    loaderService.subscribe((loadingStatus) => setIsLoading(loadingStatus));
    
    // Subscribe to toast alerts
    toastService.subscribe((toastStatus) => setToast(toastStatus));
  }, []);

  return (
    <Provider store={store}>
      <Loader isLoading={isLoading} />
      <Toast toast={toast} onClose={() => toastService.hide()} />
      <AppRoutes />
    </Provider>
  );
}