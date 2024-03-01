import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const isUserloggedIn = !!localStorage.getItem("token");

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="flex justify-around p-3 border-b border-zinc-500 items-center bg-[#1a1a1a]/90 text-zinc-300">
      <Link to="/">
        <h1 className="text-3xl">Maruthi K J's Website</h1>
      </Link>
      <ul className="flex gap-6 ">
        {isUserloggedIn ? (
          <>
            <Link to="/account">
              <li>Account</li>
            </Link>
            <li>
              <button onClick={handleSignOut}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/signup">
              <li>Sign Up</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
