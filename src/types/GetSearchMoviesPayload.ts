import { MovieData } from './GetMovieListPayload';

export interface GetSearchMoviePayload {
  status: number;
  message: string;
  data: MovieData[];
}
