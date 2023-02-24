import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../redux/store/initialState";

function Product() {
  const { id } = useParams();
  const product = useTypedSelector((state: any) =>
    state.estore.products.find((product: any) => product.id === Number(id))
  );

  return (
    <div className="container mx-auto mt-10">
      <Link to="/" className="py-2 px-6 bg-blue-200 rounded hover:bg-blue-400">
        Bo back
      </Link>
      <div className="mt-10 border-2 flex gap-20">
        <img src={product.thumbnail} alt="product" />
        <div className="flex flex-col py-5">
          <div className="text-2xl">{product.title}</div>
          <div>{product.description}</div>
          <div className="mt-auto text-2xl flex items-center gap-10">
            <div>${product.price}</div>
            <button className="bg-green-300 border py-1 px-4 rounded hover:bg-green-400">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
