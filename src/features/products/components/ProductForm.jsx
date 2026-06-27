import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { validateProduct } from "../validations/productValidation";

const ProductForm = () => {
  const { createProduct, updateProduct, getProduct } = useProduct();
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [form, setForm] = useState({
    id: null,
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    debugger;
    if(!id)return
    const loadProduct = async () => {
        const product = await getProduct(id)
        if (product) {
            setForm(product);
        }
    };
    loadProduct();
  },[id]);

  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    const errors = validateProduct(form);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    setValidationErrors({});

    const isSuccess = !form.id
        ? await createProduct(form)
        : await updateProduct(form);

    if (isSuccess) {
      navigate("/products"); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
   
      <div className="mb-3">
        <label>Name</label>
        <input type="text" className="form-control" value={form.name}
          onChange={(e) => { setForm({...form, name: e.target.value });
          setValidationErrors({...validationErrors, name: ""})}}/>
        <small className="text-danger">
          {validationErrors.name}
        </small>
      </div>

      <div className="mb-3">
        <label>Price</label>
        <input type="number" className="form-control" value={form.price}
          onChange={(e) => { setForm({...form, price: e.target.value}); 
          setValidationErrors({...validationErrors, price: ""})}} />
        <small className="text-danger">
          {validationErrors.price}
        </small>
      </div>

      <div className="mb-3">
        <label>Description</label>
        <input type="text" className="form-control" value={form.description}
          onChange={(e) => setForm({...form, description: e.target.value})} />
        <small className="text-danger">
          {validationErrors.description}
        </small>
      </div>

      <button className="btn btn-primary w-100">
         {form.id ? "Update Product" : "Create Product"}
      </button>
    </form>
  );
};

export default ProductForm;