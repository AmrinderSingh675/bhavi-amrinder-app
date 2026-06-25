import { lazy } from "react";
const ProductList = lazy(() =>
  import("../features/products/pages/products")
);
const ManageProduct = lazy(() =>
  import("../features/products/pages/manageproduct")
);
const productRoutes = [
  {
    path: "/product/products",
    element: <ProductList />
  },
  {
    path: "/product/manageproduct",
    element: <ManageProduct />
  }
];

export default productRoutes;