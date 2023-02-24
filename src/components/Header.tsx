import { Link, useMatch } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import NavItem from "./NavItem";

function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="py-2 bg-blue-400">
      <div className="container m-auto flex items-center justify-between">
        <div>Logo Shop</div>
        <div className="flex gap-20 items-center ">
          <NavItem to="/products" label="Products" />
          <NavItem to="/profile" label="Profile" />
          <NavItem to="/cart" label="Cart" />
          {isAuthenticated && <LogoutButton />}
        </div>
      </div>
    </div>
  );
}

export default Header;
