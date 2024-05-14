import { atom } from 'recoil';
import { MovieSurveyData } from '../../../components/template/MovieSurveyTemplate';

export interface MovieState extends MovieSurveyData {
  selected: boolean;
}

export interface MovieListState {
  first: MovieState[];
  second: MovieState[];
}

export const movieListState = atom<MovieListState>({
  key: 'movieListState',
  default: {
    first: [],
    second: [],
  },
});
