
import ProductForm from "../components/ProductForm";

const ProductPage = () => {
  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Product</h3>
        </div>

        <div className="card-body">
          <ProductForm />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;