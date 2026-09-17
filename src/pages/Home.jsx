import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-950/80" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/30" />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Small Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
                <span>🎬</span>
                <span>Your Movie Discovery Platform</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Discover Your Next
                <span className="block text-red-500">Favorite Movie</span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                Explore amazing movies and TV shows from around the world.
                Search for your favorite titles, discover new stories, and learn
                more about the shows you love.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/movies"
                  className="rounded-lg bg-red-500 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-red-500/20 transition duration-300 hover:bg-red-600 hover:shadow-red-500/30"
                >
                  Explore Movies
                </Link>

                <Link
                  to="/movies"
                  className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-center font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/10"
                >
                  Browse Shows
                </Link>
              </div>

              {/* Features */}
              <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl">🔍</div>
                  <h3 className="mt-2 font-semibold">Search</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Find your favorite shows easily.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl">⭐</div>
                  <h3 className="mt-2 font-semibold">Ratings</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Check ratings and information.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl">🎞️</div>
                  <h3 className="mt-2 font-semibold">Discover</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Discover new shows and stories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
