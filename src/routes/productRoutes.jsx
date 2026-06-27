import { lazy } from "react";

const ProductListPage = lazy(() =>
  import("../features/products/pages/ProductlListPage")
);
const ProductPage = lazy(() =>
  import("../features/products/pages/ProductPage")
);
const productRoutes = [
  {
    path: "/products",
    element: <ProductListPage />
  },
  {
    path: "/product/0?",
    element: <ProductPage />
  },
  {
    path: "/product/:id",
    element: <ProductPage />
  }
];

export default productRoutes;