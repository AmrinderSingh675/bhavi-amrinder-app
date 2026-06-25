import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-top text-center text-muted py-3 mt-auto" style={{ height: '50px' }}>
      <small>&copy; {new Date().getFullYear()} Your Company. Secured with .NET Core API.</small>
    </footer>
  );
}