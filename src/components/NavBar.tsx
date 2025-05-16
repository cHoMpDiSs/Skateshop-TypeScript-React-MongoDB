import React from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center"
            >
              <span className="text-white text-xl font-extrabold tracking-wider hover:text-gray-300 transition duration-300">
                SUS AF SKATEBOARDS
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div className="space-y-2">
                <div className="w-6 h-0.5 bg-current transition duration-300 transform"></div>
                <div className="w-6 h-0.5 bg-current transition duration-300 transform"></div>
                <div className="w-6 h-0.5 bg-current transition duration-300 transform"></div>
              </div>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/skateboards" className="text-white font-medium hover:text-gray-300 transition duration-300">
              SKATEBOARDS
            </Link>
            <Link to="/shirts" className="text-white font-medium hover:text-gray-300 transition duration-300">
              SHIRTS
            </Link>
            <Link to="/pants" className="text-white font-medium hover:text-gray-300 transition duration-300">
              PANTS
            </Link>
            <Link to="/cart" className="text-white hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${navbarOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
          <Link
            to="/skateboards"
            className="block px-3 py-2 text-white font-medium hover:bg-gray-900 rounded-md transition duration-300"
            onClick={() => setNavbarOpen(false)}
          >
            SKATEBOARDS
          </Link>
          <Link
            to="/shirts"
            className="block px-3 py-2 text-white font-medium hover:bg-gray-900 rounded-md transition duration-300"
            onClick={() => setNavbarOpen(false)}
          >
            SHIRTS
          </Link>
          <Link
            to="/pants"
            className="block px-3 py-2 text-white font-medium hover:bg-gray-900 rounded-md transition duration-300"
            onClick={() => setNavbarOpen(false)}
          >
            PANTS
          </Link>
          <Link
            to="/cart"
            className="block px-3 py-2 text-white font-medium hover:bg-gray-900 rounded-md transition duration-300"
            onClick={() => setNavbarOpen(false)}
          >
            <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
            CART
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;