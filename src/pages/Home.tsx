import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

import { getProducts } from "../redux/actions/storeAction";
import {
  useTypedDispatch,
  useTypedSelector,
} from "../redux/store/initialState";

function Home() {
  const dispatch = useTypedDispatch();
  const products = useTypedSelector((state: any) => state.estore.products);

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, [products, dispatch]);

  return (
    <div>
      Home page
      <div className="flex max-sm:justify-center justify-between flex-wrap gap-5 container m-auto">
       {products.length ? products.map((product: any) => (
         <ProductCard key={product.id} product={product} />
       )) : <div>Products not found</div>}
      </div>
    </div>
  );
}

export default Home;
