import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cart } = useCart();
  const inCart = cart.some((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col group">
      <Link to={`/product/${product.id}`} className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">
          {product.category}
        </span>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-gray-800 text-base mb-1 hover:text-indigo-700 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-1">{product.description}</p>
        <div className="flex items-center gap-1 mb-3">
          <span className="text-sm leading-none">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
            ))}
          </span>
          <span className="text-gray-500 text-xs">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-indigo-700 font-bold text-lg">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
              inCart
                ? "bg-green-100 text-green-700 cursor-default"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
            disabled={inCart}
          >
            {inCart ? "In Cart ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
