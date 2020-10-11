import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Q&App
      </Link>
      {isAuthenticated ? (
        <div>
          <label className="mr-2 text-white">{user.name}</label>
          <button
            className="btn btn-dark"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button className="btn btn-dark" onClick={loginWithRedirect}>
          Sign In
        </button>
      )}
    </nav>
  );
}

export default NavBar;
