import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-sm border-0 p-4" style={{ width: '100%', maxWidth: '400px' }}>
        {children}
      </div>
    </div>
  );
}