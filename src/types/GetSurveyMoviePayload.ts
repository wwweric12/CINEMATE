import { MovieData } from './GetMovieListPayload';

export interface GetSurveyMoviePayload {
  status: number;
  message: string;
  data: SurveyMovie;
}

export interface SurveyMovie {
  movies: MovieData[];
}
