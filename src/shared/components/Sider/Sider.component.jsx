import React from 'react';
import { NavLink } from "react-router-dom";

export default function Sider() {
  return (
    <div className="bg-light border-end" style={{ width: '240px', minHeight: 'calc(100vh - 60px)', position: 'fixed', top: '60px', left: 0 }}>
      <div className="list-group list-group-flush p-2">
        <NavLink to="/dashboard" className={({ isActive }) =>
            `list-group-item list-group-item-action rounded border-0 my-1 ${
              isActive ? "active" : ""
            }`}>
          <i className="bi bi-speedometer2 me-2"></i> Dashboard
        </NavLink>
        <NavLink to="/products" className={({ isActive }) =>
            `list-group-item list-group-item-action rounded border-0 my-1 ${
              isActive ? "active" : ""
            }`}>
          <i className="bi bi-speedometer2 me-2"></i> Product
        </NavLink>
      </div>
    </div>
  );
}