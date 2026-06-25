import { Link } from "react-router-dom";

function ManageProduct() {
  return (
    <div className="container">
      <h1>Home Page</h1>

      <p>
        Welcome to the Home Page of our React Application.
      </p>

      <h3>Quick Links</h3>

      <ul>
        <li>
          <Link to="/user/products">All Products</Link>
        </li>
      </ul>
    </div>
  );
}

export default ManageProduct;