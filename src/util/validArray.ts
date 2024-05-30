import { MovieData } from '../types/GetMovieListPayload';

export const validArray = (array: MovieData[]) => {
  return array && array.length !== 0;
};
