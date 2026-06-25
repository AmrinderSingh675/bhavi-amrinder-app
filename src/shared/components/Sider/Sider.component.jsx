import React from 'react';

export default function Sider() {
  return (
    <div className="bg-light border-end" style={{ width: '240px', minHeight: 'calc(100vh - 60px)', position: 'fixed', top: '60px', left: 0 }}>
      <div className="list-group list-group-flush p-2">
        <a href="#dashboard" className="list-group-item list-group-item-action active rounded border-0 my-1">
          <i className="bi bi-speedometer2 me-2"></i> Dashboard
        </a>
        <a href="#profile" className="list-group-item list-group-item-action rounded border-0 my-1">
          <i className="bi bi-person me-2"></i> Profile
        </a>
        <a href="#settings" className="list-group-item list-group-item-action rounded border-0 my-1">
          <i className="bi bi-gear me-2"></i> Settings
        </a>
      </div>
    </div>
  );
}