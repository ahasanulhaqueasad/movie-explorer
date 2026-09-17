function MovieModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  const releaseDate = show.premiered
    ? new Date(show.premiered).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  const cleanSummary = show.summary
    ? show.summary.replace(/<[^>]*>/g, "")
    : "No summary available.";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition duration-300 hover:bg-red-500"
        >
          ✕
        </button>

        {/* Backdrop / Large Image */}
        <div className="relative h-64 overflow-hidden sm:h-80 md:h-96">
          {show.image?.original ? (
            <img
              src={show.image.original}
              alt={show.name}
              className="h-full w-full object-cover"
            />
          ) : show.image?.medium ? (
            <img
              src={show.image.medium}
              alt={show.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-slate-800">
              <div className="text-center text-gray-500">
                <div className="text-6xl">🎬</div>
                <p className="mt-2">No Image Available</p>
              </div>
            </div>
          )}

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
        </div>

        {/* Modal Content */}
        <div className="px-5 pb-7 sm:px-8 sm:pb-8">
          {/* Title */}
          <h2 className="-mt-8 relative z-10 text-3xl font-bold text-white sm:text-4xl">
            {show.name}
          </h2>

          {/* Rating & Release */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            {show.rating?.average && (
              <span className="rounded-full bg-yellow-500/10 px-4 py-2 font-semibold text-yellow-400">
                ⭐ Rating: {show.rating.average}
              </span>
            )}

            <span className="rounded-full bg-white/5 px-4 py-2 text-gray-300">
              📅 Release: {releaseDate}
            </span>
          </div>

          {/* Genres */}
          {show.genres?.length > 0 && (
            <div className="mt-5">
              <h3 className="mb-2 text-lg font-semibold">
                Genres
              </h3>

              <div className="flex flex-wrap gap-2">
                {show.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-red-500/10 px-3 py-1.5 text-sm text-red-400"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Summary */}
          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold">
              Overview
            </h3>

            <p className="text-sm leading-7 text-gray-400 sm:text-base">
              {cleanSummary}
            </p>
          </div>

          {/* Additional Information */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {show.language && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-500">
                  Language
                </p>

                <p className="mt-1 font-semibold text-white">
                  {show.language}
                </p>
              </div>
            )}

            {show.status && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-500">
                  Status
                </p>

                <p className="mt-1 font-semibold text-white">
                  {show.status}
                </p>
              </div>
            )}

            {show.runtime && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-500">
                  Runtime
                </p>

                <p className="mt-1 font-semibold text-white">
                  {show.runtime} minutes
                </p>
              </div>
            )}

            {show.network?.name && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-500">
                  Network
                </p>

                <p className="mt-1 font-semibold text-white">
                  {show.network.name}
                </p>
              </div>
            )}
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="mt-7 w-full rounded-lg bg-red-500 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;