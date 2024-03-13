import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="sticky top-0 z-30 w-full px-2 bg-slate-900 shadow-xl shadow-blue-600/20 sm:px-4">
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-blue-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              SHOPPING ARENA
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer list-none font-bold text-lg text-blue-800">Home</li>
          </Link>
          <Link to={"/cart"}>
            <li className="cursor-pointer font-bold text-lg text-blue-800">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
