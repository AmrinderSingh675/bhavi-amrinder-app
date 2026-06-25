// src/App.js
import React, { useState, useEffect } from 'react';
import Loader from './shared/components/Loader/Loader.component';
import AppRoutes from "./routes/AppRoutes";
import { loaderService } from "./app/api/loaderService"; // Import the service

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    loaderService.subscribe((loadingStatus) => {
      setIsLoading(loadingStatus);
    });
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <AppRoutes />
    </>
  );
}