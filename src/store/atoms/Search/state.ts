import { atom } from 'recoil';
import { MovieData } from '../../../types/GetMovieListPayload';

export const searchState = atom<MovieData[]>({
  key: 'searchState',
  default: [],
});
