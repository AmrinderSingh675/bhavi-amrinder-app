import { Link } from "react-router-dom";

function ProductList() {
  return (
    <div className="container">
      <h1>Home Page</h1>

      <p>
        Welcome to the Home Page of our React Application.
      </p>

      <h3>Quick Links</h3>

      <ul>
        <li>
          <Link to="/product/manageproduct">Add new product</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductList;