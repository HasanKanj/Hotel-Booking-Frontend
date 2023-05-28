import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Header.css";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (

    <nav className="w-full bg-blue-00 shadow">
      
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/">
            <h2 className="text-2xl font-bold text-black">Book Me</h2>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 justify-self-center py-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="flex items-center justify-center space-x-6">
            <li className="text-black">
              <NavLink  to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li className="text-black">
              <NavLink to="/hotels" activeclassname="active">
                Hotels
              </NavLink>
            </li>
            <li className="text-black">
              <NavLink to="/About" activeclassname="active">
                About Us
              </NavLink>
            </li>
            <li className="text-black">
              <NavLink to="/Contactus" activeclassname="active">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          {user ? (
            user.details.username && (
              <div className="flex items-center">
                <span className="text-black mr-2">{user.details.username}</span>
                <button className="Btnnn" onClick={handleLogout}>
                  <div className="sign">
                    <svg viewBox="0 0 512 512">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                  </div>
                  <div className="text">Logout</div>
                </button>
              </div>
            )
          ) : (
            <div className="hidden space-x-2 md:inline-block">
              <Link
                to="/signup"
                className="btn btn-secondary"
              >
                Sign up
              </Link>
              <Link
                to="/login"
                className="btn btn-primary"
              >
                Log in
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}