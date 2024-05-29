export interface GetMyMoviesPayload {
  status: number;
  message: string;
  data: MyMovies;
}

export interface MyMovies {
  movies: Movie[];
}

export interface Movie {
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
