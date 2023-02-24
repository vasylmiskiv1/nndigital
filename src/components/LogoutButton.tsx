import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="py-2 px-6 bg-blue-200 rounded transition-all hover:bg-green-500 duration-200" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Logout
    </button>
  );
};

export default LogoutButton;