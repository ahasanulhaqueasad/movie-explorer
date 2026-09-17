import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const API_URL = "https://api.tvmaze.com";

function Movies() {
  const [shows, setShows] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadShows = async () => {
      try {
        const response = await fetch(`${API_URL}/shows`);

        if (!response.ok) {
          throw new Error("Failed to fetch shows.");
        }

        const data = await response.json();

        if (isMounted) {
          setShows(data);
          setError("");
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadShows();

    return () => {
      isMounted = false;
    };
  }, []);

  const fetchShows = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/shows`);

      if (!response.ok) {
        throw new Error("Failed to fetch shows.");
      }

      const data = await response.json();

      setShows(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const searchShows = async (query) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${API_URL}/search/shows?q=${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        throw new Error("Failed to search shows.");
      }

      const data = await response.json();

      const searchResults = data.map((item) => item.show);

      setShows(searchResults);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value;

    setSearchText(value);

    if (value.trim() === "") {
      fetchShows();
      return;
    }

    searchShows(value);
  };

  const handleSeeDetails = (show) => {
    setSelectedShow(show);
  };

  const handleCloseModal = () => {
    setSelectedShow(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <section className="border-b border-white/10 bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-500">
                Movie Explorer
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                Explore Movies & Shows
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                Search for your favorite movies and TV shows and discover
                something new to watch.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-3xl">
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl">
                  🔍
                </span>

                <input
                  type="text"
                  value={searchText}
                  onChange={handleSearch}
                  placeholder="Search for a movie or show..."
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-12 py-4 text-white outline-none transition duration-300 placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {!loading && !error && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold">
                {searchText
                  ? `Search Results for "${searchText}"`
                  : "All Shows"}
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                {shows.length} {shows.length === 1 ? "show" : "shows"} found
              </p>
            </div>
          )}

          {loading && (
            <div className="flex min-h-75 items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-red-500" />

                <p className="mt-4 text-gray-400">
                  Loading shows...
                </p>
              </div>
            </div>
          )}

          {!loading && error && (
            <div className="flex min-h-75 items-center justify-center">
              <div className="max-w-md rounded-xl border border-red-500/20 bg-red-500/10 p-8 text-center">
                <div className="text-4xl">⚠️</div>

                <h2 className="mt-4 text-xl font-bold text-red-400">
                  Something went wrong
                </h2>

                <p className="mt-2 text-gray-400">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={fetchShows}
                  className="mt-6 rounded-lg bg-red-500 px-5 py-2.5 font-semibold transition duration-300 hover:bg-red-600"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {!loading && !error && shows.length === 0 && (
            <div className="flex min-h-75 items-center justify-center">
              <div className="text-center">
                <div className="text-5xl">🎬</div>

                <h2 className="mt-4 text-2xl font-bold">
                  No Shows Found
                </h2>

                <p className="mt-2 text-gray-400">
                  Try searching with a different movie or show name.
                </p>
              </div>
            </div>
          )}

          {!loading && !error && shows.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {shows.map((show) => (
                <MovieCard
                  key={show.id}
                  show={show}
                  onSeeDetails={handleSeeDetails}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <MovieModal
        show={selectedShow}
        onClose={handleCloseModal}
      />

      <Footer />
    </div>
  );
}

export default Movies;