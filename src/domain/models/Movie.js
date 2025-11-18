export class Movie {
  constructor({
    id,
    title,
    overview,
    posterPath,
    backdropPath,
    releaseDate,
    voteAverage,
    voteCount,
    genreIds,
    originalLanguage,
    popularity,
  }) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.posterPath = posterPath;
    this.backdropPath = backdropPath;
    this.releaseDate = releaseDate;
    this.voteAverage = voteAverage;
    this.voteCount = voteCount;
    this.genreIds = genreIds;
    this.originalLanguage = originalLanguage;
    this.popularity = popularity;
  }

  get year() {
    return this.releaseDate ? new Date(this.releaseDate).getFullYear() : null;
  }

  get posterUrl() {
    return this.posterPath
      ? `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/w500${this.posterPath}`
      : null;
  }

  get backdropUrl() {
    return this.backdropPath
      ? `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/w1280${this.backdropPath}`
      : null;
  }
}
