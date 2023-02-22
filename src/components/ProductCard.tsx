import { AiOutlineShoppingCart } from "react-icons/ai";

function ProductCard({ product }: any) {
  return (
    <div className="bg-gray-200 border pt-4 px-4 pb-10 w-[350px] rounded h-[450px] flex flex-col transition-all hover:bg-gray-100 duration-200">
      <img
        src={product.thumbnail}
        alt="item"
        className="h-44 object-cover rounded"
      />
      <div className="mt-5 text-xl font-bold">{product.title}</div>
      <div className="mt-5">{product.description}</div>
      <div className="mt-auto flex justify-between px-5">
        <div className=" text-left font-bold text-lg">
          ${product.price}
        </div>
        <button className="bg-green-400 py-2 px-6 hover:bg-green-500 rounded">
          <AiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
