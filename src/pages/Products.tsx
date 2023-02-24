import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../redux/actions/storeAction";
import { useTypedDispatch, useTypedSelector } from "../redux/store/initialState";

function Products() {
  const dispatch = useTypedDispatch();
  const products = useTypedSelector((state: any) => state.estore.products);

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, []);
  return (
    <div className="container m-auto">
      <div className="text-2xl font-bold py-4">Products</div>
      <div className="flex max-sm:justify-center justify-between flex-wrap gap-5">
        {products.length ? (
          products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>Products not found</div>
        )}
      </div>
    </div>
  );
}

export default Products;
