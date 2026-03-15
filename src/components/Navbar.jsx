import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="bg-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="bg-white text-indigo-700 rounded-lg px-2 py-0.5">DS</span>
            DigitalStore
          </Link>

          <div className="flex items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "font-semibold underline underline-offset-4" : "hover:text-indigo-200 transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "font-semibold underline underline-offset-4" : "hover:text-indigo-200 transition-colors"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex items-center gap-1 ${isActive ? "font-semibold underline underline-offset-4" : "hover:text-indigo-200 transition-colors"}`
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
        </div>
      </div>
    </nav>
  );
}
