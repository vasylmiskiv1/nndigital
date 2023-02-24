import React from "react";
import { Link } from "react-router-dom";

function AuthModal() {
  return (
    <div
      className="absolute bg-indigo-200 backdrop-blur-sm 
    bg-opacity-40 w-screen h-screen flex 
    justify-center items-center"
    >
      <div className="bg-white text-xl rounded py-20 px-40">
        If you want to add a product to your cart you need to
        <Link to="/login"> Log In</Link>
      </div>
    </div>
  );
}

export default AuthModal;
