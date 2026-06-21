import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Home Page</h1>

      <p>
        Welcome to the Home Page of our React Application.
      </p>

      <h3>Quick Links</h3>

      <ul>
        <li>
          <Link to="/register">Register Page</Link>
        </li>
        <li>
          <Link to="/login">Login Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;