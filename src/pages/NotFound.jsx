import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <p className="text-8xl font-extrabold text-indigo-200 mb-4">404</p>
      <h1 className="text-3xl font-bold text-gray-800 mb-3">Page Not Found</h1>
      <p className="text-gray-500 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          to="/"
          className="bg-indigo-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Go Home
        </Link>
        <Link
          to="/shop"
          className="bg-white border-2 border-indigo-600 text-indigo-600 font-bold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
        >
          Browse Store
        </Link>
      </div>
    </div>
  );
}
