import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <div className="flex justify-between items-center p-4 bg-green-600 text-white shadow-md">
      <h2 className="text-2xl font-bold">🍴 Food Courts</h2>
      <Link to="/cart" className="relative">
        <span className="text-3xl">🛒</span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
}
