import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyle = ({ isActive }) =>
    `transition duration-300 ${
      isActive
        ? "text-red-500 font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-white sm:text-2xl"
        >
          <span className="text-2xl">🎬</span>
          <span>
            Movie<span className="text-red-500">Explorer</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4 sm:gap-8">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/movies" className={navLinkStyle}>
            Movies
          </NavLink>

          <Link
            to="/movies"
            className="hidden rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-red-600 sm:block"
          >
            Explore Movies
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;