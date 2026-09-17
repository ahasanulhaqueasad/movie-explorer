import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        
        {/* Brand */}
        <div>
          <Link
            to="/"
            className="text-xl font-bold text-white"
          >
            🎬 Movie<span className="text-red-500">Explorer</span>
          </Link>

          <p className="mt-2 text-sm text-gray-400">
            Discover your favorite movies and shows.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-5 text-sm">
          <Link
            to="/"
            className="text-gray-400 transition duration-300 hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="text-gray-400 transition duration-300 hover:text-white"
          >
            Movies
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2026 MovieExplorer
        </p>
      </div>
    </footer>
  );
}

export default Footer;