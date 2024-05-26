export interface GetMovieListPayload {
  status: number;
  message: string;
  data: MovieListPayload;
}

export interface MovieListPayload {
  defaultRecommendResult: MovieData[];
  genreMovieLists: GenreMovieList[];
}

export interface GenreMovieList {
  genreId: number;
  movieList: MovieData[];
}

export interface MovieData {
  id: number;
  movieId: number;
  rating: number;
  backdropPath: string;
  originalTitle: string;
  movieTitle: string;
  releaseDate: string;
  posterPath: string;
  overview: string;
}
