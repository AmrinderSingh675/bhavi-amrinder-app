import React from 'react';

export default function Header({ user, onLogout }) {
  return (
    <nav
      className="navbar navbar-expand navbar-dark bg-dark px-3 fixed-top"
      style={{ height: '60px' }}
    >
      <button
        className="btn btn-outline-light d-md-none me-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileMenu"
      >
        ☰
      </button>

      <span className="navbar-brand fw-bold text-primary">
        SecurePortal
      </span>

      <div className="ms-auto d-flex align-items-center gap-3">
        <span className="text-light d-none d-sm-inline">
          Welcome, <strong>{user?.username || 'User'}</strong>
        </span>

        <button
          onClick={onLogout}
          className="btn btn-outline-danger btn-sm"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}