import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      )}
    </>
  );
};

export default Profile;
