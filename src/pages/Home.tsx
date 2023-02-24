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
  }, []);

  return (
    <div className="container m-auto">
     Banners?
    </div>
  );
}

export default Home;
