import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="py-2 bg-blue-400">
      <div className="container m-auto flex justify-between">
        <div>Logo Shop</div>
        <div className="flex gap-2">
          <Link to="/products">Products</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">ShoppingCart</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
