import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated } = useAuth();

  const { handleLogout } = useAuth();

  return (
    <>
      <nav className="navbar fixed top-0 left-0  bg-white shadow-md z-50  text-black md:px-8 px-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-orange-500  rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/" className="text-gray-100 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-100 hover:text-gray-900">
                  About us
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-100 hover:text-gray-900">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-100 hover:text-gray-900">
                  Policy
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-100 hover:text-gray-900">
                  Pages
                </Link>
              </li>
            </ul>
          </div>
          <a className=" text-xl">Logo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="" className="text-black">
                About us
              </Link>
            </li>
            <li>
              <Link to="" className="text-black">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="" className="text-black">
                Policy
              </Link>
            </li>
            <li>
              <Link to="" className="text-black">
                Pages
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end  space-x-2">
       
         
  
     
      {
        !isAuthenticated && (
          <>
          <Link to="/login">Login</Link>
          </>
        )
      }
       
          {
            isAuthenticated && (
              <>
              <Link onClick={handleLogout}>Logout</Link>
              <Link
                to="/addlisting"
                className="bg-orange-500 p-2 rounded-md text-white"
              >
                + Add Listing
              </Link>
              </>
            )
          }
       
        </div>
      </nav>
    </>
  );
}
