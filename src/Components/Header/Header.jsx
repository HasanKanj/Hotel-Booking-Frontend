import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

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
    <nav className="w-full bg-white-700 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
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
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black">
                <NavLink exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/hotel" activeClassName="active">
                  Hotels
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/About" activeClassName="active">
                  About Us
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/Contactus" activeClassName="active">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            {user ? (
              user.username &&    <div className="flex items-center">
              <span className="text-black mr-2">{user.username}</span>
              <button
                className="text-black bg-black-600 rounded-md px-4 py-2 shadow hover:bg-white-800"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
            ) : (
              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <Link
                  to="/signup"
                  className="inline-block w-full px-4 py-2 text-center text-black bg-black-600 rounded-md shadow hover:bg-gray-200"
                >
                  Sign up
                </Link>
                <Link
                  to="/register"
                  className="inline-block w-full px-4 py-2 text-center text-black-800 bg-blue-500 rounded-md shadow"
                >
                  Log in
                </Link>
              </div>
            )}
          </div>
        </div>
        {user ? (
          user.username
        ) : (
          <div className="hidden space-x-2 md:inline-block">
            <Link
              to="/register"
              className="px-4 py-2 text-black bg-black-600 rounded-md shadow hover:bg-white-800"
            >
              Sign up
            </Link>
            <Link to="/login" className="btn btn-primary">
              Log in
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
