import { Link } from "react-router-dom";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 4);
  const categoryList = categories.filter((c) => c !== "All");

  const categoryEmoji = {
    Courses: "🎓",
    "E-Books": "📚",
    Music: "🎵",
    Games: "🎮",
    Software: "💻",
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Premium Digital Products<br />at Your Fingertips
          </h1>
          <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto">
            Explore thousands of software tools, e-books, courses, music packs, and games — instant digital delivery.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/shop"
              className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Browse Store
            </Link>
            <Link
              to="/shop?category=Courses"
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white hover:text-indigo-700 transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categoryList.map((cat) => (
            <Link
              key={cat}
              to={`/shop?category=${cat}`}
              className="bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 rounded-2xl p-6 text-center transition-colors group"
            >
              <div className="text-3xl mb-2">{categoryEmoji[cat]}</div>
              <p className="font-semibold text-indigo-700 group-hover:text-indigo-900">{cat}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            <Link to="/shop" className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Level Up?</h2>
          <p className="text-indigo-200 mb-6">Join thousands of creators and learners. Instant download, lifetime access.</p>
          <Link
            to="/shop"
            className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg inline-block"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
