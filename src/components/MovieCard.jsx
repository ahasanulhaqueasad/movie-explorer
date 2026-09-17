function MovieCard({ show, onSeeDetails }) {
  const releaseYear = show.premiered
    ? new Date(show.premiered).getFullYear()
    : "N/A";

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-red-500/10">
      
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-slate-800">
        {show.image?.medium ? (
          <img
            src={show.image.medium}
            alt={show.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-5xl">🎬</div>

              <p className="mt-2 text-sm">
                No Image Available
              </p>
            </div>
          </div>
        )}

        {/* Rating */}
        {show.rating?.average && (
          <div className="absolute right-3 top-3 rounded-lg bg-black/80 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
            ⭐ {show.rating.average}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="line-clamp-1 text-xl font-bold text-white">
          {show.name}
        </h3>

        {/* Year + Genre */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <span>📅 {releaseYear}</span>

          {show.genres?.length > 0 && (
            <>
              <span>•</span>

              <span className="line-clamp-1">
                {show.genres.slice(0, 2).join(", ")}
              </span>
            </>
          )}
        </div>

        {/* Summary Preview */}
        {show.summary && (
          <div
            className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400"
            dangerouslySetInnerHTML={{
              __html: show.summary,
            }}
          />
        )}

        {/* See Details Button */}
        <button
          type="button"
          onClick={() => onSeeDetails(show)}
          className="mt-5 w-full rounded-lg bg-red-500 px-4 py-2.5 font-semibold text-white transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;