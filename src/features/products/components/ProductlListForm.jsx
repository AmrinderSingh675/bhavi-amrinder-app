import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

const ProductListForm = ({ }) => {
  const { getProducts } = useProduct();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
        const products = await getProducts()
        if (products) {
            setProducts(products);
        }
    };
    loadProducts();
  },[]);

  

   return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Products</h3>

        <button className="btn btn-primary" onClick={() => navigate("/product")}>
          Add Product
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">

          <table className="table table-striped table-hover align-middle">

            <thead className="table-dark">
              <tr>
                <th style={{ width: "80px" }}>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th style={{ width: "180px" }}>Action</th>
              </tr>
            </thead>

            <tbody>

              {products.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No products found.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.description}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => navigate(`/product/${product.id}`)}>Edit</button>
                      <button className="btn btn-sm btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductListForm;