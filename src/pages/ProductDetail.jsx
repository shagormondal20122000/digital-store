import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart, cart } = useCart();

  if (!product) {
    return (
      <div className="text-center py-24">
        <p className="text-5xl mb-4">😕</p>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Product Not Found</h2>
        <Link to="/shop" className="text-indigo-600 hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const inCart = cart.some((item) => item.id === product.id);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-indigo-600">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={product.image} alt={product.name} className="w-full h-80 lg:h-full object-cover" />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider mb-2">
            {product.category}
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg leading-none">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
              ))}
            </span>
            <span className="text-gray-500 text-sm font-medium">{product.rating} ({product.reviews.toLocaleString()} reviews)</span>
          </div>
          <p className="text-gray-600 text-base leading-relaxed mb-6">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-extrabold text-indigo-700">${product.price.toFixed(2)}</span>
            <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
              Instant Download
            </span>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => addToCart(product)}
              disabled={inCart}
              className={`px-8 py-3 rounded-xl font-bold text-base transition-colors ${
                inCart
                  ? "bg-green-100 text-green-700 cursor-default"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {inCart ? "✓ Added to Cart" : "Add to Cart"}
            </button>
            {inCart && (
              <Link
                to="/cart"
                className="px-8 py-3 rounded-xl font-bold text-base bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                View Cart
              </Link>
            )}
          </div>

          <div className="mt-6 p-4 bg-indigo-50 rounded-xl text-sm text-indigo-800">
            <p>✅ Secure checkout &nbsp;|&nbsp; 📦 Instant digital delivery &nbsp;|&nbsp; 🔒 Lifetime access</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="bg-white rounded-2xl shadow hover:shadow-md transition-shadow overflow-hidden flex gap-3 p-3 items-center">
                <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm line-clamp-2">{p.name}</p>
                  <p className="text-indigo-600 font-bold text-sm">${p.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
