import React from 'react';
import Header from '../../Header/Header.component';
import Sider from '../../Sider/Sider.component';
import './MainLayout.component.css';


export default function MainLayout({ children, onLogout }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onLogout={onLogout} />

<div
  className="offcanvas offcanvas-start"
  tabIndex="-1"
  id="mobileMenu"
  aria-labelledby="mobileMenuLabel"
>
  <div className="offcanvas-header">
    <h5 id="mobileMenuLabel">Menu</h5>

    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    />
  </div>

  <div className="offcanvas-body">
    <div className="list-group">
      <a href="#dashboard" className="list-group-item list-group-item-action">
        Dashboard
      </a>
      <a href="#profile" className="list-group-item list-group-item-action">
        Profile
      </a>

      <a href="#settings" className="list-group-item list-group-item-action">
        Settings
      </a>
    </div>
  </div>
</div>

      <div className="d-flex pt-5 mt-2 flex-grow-1">
        <div className="d-none d-md-block">
          <Sider />
        </div>

        <main className="main-content flex-grow-1 p-4 d-flex flex-column bg-light">
          <div className="container-fluid flex-grow-1">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}