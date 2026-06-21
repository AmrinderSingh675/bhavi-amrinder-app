import { Link } from "react-router-dom";

function ManageUser() {
  return (
    <div className="container">
      <h1>Home Page</h1>

      <p>
        Welcome to the Home Page of our React Application.
      </p>

      <h3>Quick Links</h3>

      <ul>
        <li>
          <Link to="/user/users">All Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default ManageUser;