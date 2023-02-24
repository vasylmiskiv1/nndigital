import { Link } from "react-router-dom";

function ProductCard({ product }: any) {
  return (
    <>
      <Link to={`products/${product.id}`}>
        <div
          className="bg-gray-100 border pt-4 px-4 pb-10 
      w-[350px] rounded h-[450px] flex flex-col shadow-md
      transition-all hover:bg-white duration-200 hover:shadow-lg"
        >
          <img
            src={product.thumbnail}
            alt="item"
            className="h-44 object-cover rounded"
          />
          <div className="mt-5 text-xl font-bold">{product.title}</div>
          <div className="mt-5 text-ellipsis overflow-hidden">
            {product.description}
          </div>
          <div className="mt-auto flex justify-between px-5">
            <div className=" text-left font-bold text-lg">${product.price}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
