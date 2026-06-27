import ProductListForm from "../components/ProductlListForm";


const ProductListPage = () => {
  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Product List</h3>
        </div>

        <div className="card-body">
          <ProductListForm />
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;