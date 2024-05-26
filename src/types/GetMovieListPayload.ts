export interface GetMovieListPayload {
  status: number;
  message: string;
  data: MovieListPayload;
}

export interface MovieListPayload {
  defaultRecommendResult: DefaultRecommendResult[];
  genreMovieLists: GenreMovieList[];
}

export interface GenreMovieList {
  genreId: number;
  movieList: DefaultRecommendResult[];
}

export interface DefaultRecommendResult {
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
