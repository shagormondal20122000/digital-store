import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">DigitalStore</h3>
            <p className="text-sm text-gray-400">
              Your one-stop shop for premium digital products — software, courses, music, games, and e-books.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/cart" className="hover:text-white transition-colors">Cart</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Categories</h4>
            <ul className="space-y-2 text-sm">
              {["Software", "E-Books", "Courses", "Music", "Games"].map((cat) => (
                <li key={cat}>
                  <Link to={`/shop?category=${cat}`} className="hover:text-white transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DigitalStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
