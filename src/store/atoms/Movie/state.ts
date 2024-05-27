import { atom } from 'recoil';
import { MovieData } from '../../../types/GetMovieListPayload';
import { Genre } from '../Genre/state';

interface GenreState extends Genre {
  selected: boolean;
}

export interface MovieState extends MovieData {
  selected: boolean;
}

export interface SurveyListState {
  genre: GenreState[];
  movie: MovieState[];
}

export const surveyListState = atom<SurveyListState>({
  key: 'surveyListState',
  default: {
    genre: [
      {
        key: 'Action',
        name: '액션',
        selected: false,
      },
      {
        key: 'Adventure',
        name: '모험',
        selected: false,
      },
      {
        key: 'Animation',
        name: '애니메이션',
        selected: false,
      },
      {
        key: 'Biography',
        name: '일대기',
        selected: false,
      },
      {
        key: 'Comedy',
        name: '코미디',
        selected: false,
      },
      {
        key: 'Crime',
        name: '범죄',
        selected: false,
      },
      {
        key: 'Documentary',
        name: '다큐멘터리',
        selected: false,
      },
      {
        key: 'Family',
        name: '가족',
        selected: false,
      },
      {
        key: 'Fantasy',
        name: '판타지',
        selected: false,
      },
      {
        key: 'History',
        name: '역사',
        selected: false,
      },
      {
        key: 'Horror',
        name: '공포',
        selected: false,
      },
      {
        key: 'Music',
        name: '음악',
        selected: false,
      },
      {
        key: 'Musical',
        name: '뮤지컬',
        selected: false,
      },
      {
        key: 'Mystery',
        name: '미스터리',
        selected: false,
      },
      {
        key: 'Romance',
        name: '로맨스',
        selected: false,
      },
      {
        key: 'Sci - Fi',
        name: 'SF',
        selected: false,
      },
      {
        key: 'Sport',
        name: '스포츠',
        selected: false,
      },
      {
        key: 'Thriller',
        name: '스릴러',
        selected: false,
      },
      {
        key: 'War',
        name: '전쟁',
        selected: false,
      },
      {
        key: 'Western',
        name: '서부',
        selected: false,
      },
    ],
    movie: [],
  },
});
