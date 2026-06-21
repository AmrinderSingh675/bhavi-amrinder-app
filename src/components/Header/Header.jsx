// components/Header/Header.jsx

import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>My Application</h2>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/public">Public</Link> |
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;