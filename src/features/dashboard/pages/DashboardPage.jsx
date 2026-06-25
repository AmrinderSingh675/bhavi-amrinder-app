import React from 'react';
import DashboardForm from '../components/DashboardForm'; 

export default function DashboardPage() {
  return (
    <div className="container mt-5">
      <div className="card shadow border-0 p-4">
        <h2 className="fw-bold text-secondary mb-4">Operational Dashboard</h2>
        <p className="text-muted">Welcome to your workspace.</p>
        <DashboardForm /> 
      </div>
    </div>
  );
}