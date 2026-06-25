
import React, { useEffect } from 'react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // Auto-hide after 4 seconds
      return () => clearTimeout(timer);
    }
  }, [toast.show, onClose]);

  if (!toast.show) return null;

  // Map types to Bootstrap background colors
  const bgClass = toast.type === 'success' ? 'bg-success' : 'bg-danger';

  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1055 }}>
      <div className={`toast show align-items-center text-white ${bgClass} border-0 shadow`} role="alert">
        <div className="d-flex">
          <div className="toast-body fw-medium">
            {toast.message}
          </div>
          <button 
            type="button" 
            className="btn-close btn-close-white me-2 m-auto" 
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
}