import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-semibold underline underline-offset-4"
      : "hover:text-indigo-200 transition-colors";

  return (
    <nav className="bg-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="bg-white text-indigo-700 rounded-lg px-2 py-0.5">DS</span>
            DigitalStore
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-6">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex items-center gap-1 ${navLinkClass({ isActive })}`
              }
            >
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="ml-1 bg-yellow-400 text-indigo-900 text-xs font-bold rounded-full min-w-[1.25rem] h-5 flex items-center justify-center px-1">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>

          {/* Mobile: cart badge + hamburger */}
          <div className="flex items-center gap-3 sm:hidden">
            <Link to="/cart" className="relative flex items-center">
              <span>🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-yellow-400 text-indigo-900 text-xs font-bold rounded-full min-w-[1.1rem] h-4 flex items-center justify-center px-0.5">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="p-1 rounded-lg hover:bg-indigo-600 transition-colors"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden bg-indigo-800 border-t border-indigo-600 px-4 py-3 space-y-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block py-2 font-semibold ${isActive ? "text-yellow-300" : "hover:text-indigo-200"}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `block py-2 font-semibold ${isActive ? "text-yellow-300" : "hover:text-indigo-200"}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `block py-2 font-semibold flex items-center gap-2 ${isActive ? "text-yellow-300" : "hover:text-indigo-200"}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Cart
            {cartCount > 0 && (
              <span className="bg-yellow-400 text-indigo-900 text-xs font-bold rounded-full min-w-[1.25rem] h-5 flex items-center justify-center px-1">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>
      )}
    </nav>
  );
}
