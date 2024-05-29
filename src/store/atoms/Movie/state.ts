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
        id: 1,
        key: 'Action',
        name: '액션',
        selected: false,
      },
      {
        id: 2,
        key: 'Adventure',
        name: '모험',
        selected: false,
      },
      {
        id: 3,
        key: 'Animation',
        name: '애니메이션',
        selected: false,
      },
      {
        id: 4,
        key: 'Biography',
        name: '일대기',
        selected: false,
      },
      {
        id: 5,
        key: 'Comedy',
        name: '코미디',
        selected: false,
      },
      {
        id: 6,
        key: 'Crime',
        name: '범죄',
        selected: false,
      },
      {
        id: 7,
        key: 'Documentary',
        name: '다큐멘터리',
        selected: false,
      },
      {
        id: 9,
        key: 'Family',
        name: '가족',
        selected: false,
      },
      {
        id: 10,
        key: 'Fantasy',
        name: '판타지',
        selected: false,
      },
      {
        id: 11,
        key: 'History',
        name: '역사',
        selected: false,
      },
      {
        id: 12,
        key: 'Horror',
        name: '공포',
        selected: false,
      },
      {
        id: 13,
        key: 'Music',
        name: '음악',
        selected: false,
      },
      {
        id: 14,
        key: 'Musical',
        name: '뮤지컬',
        selected: false,
      },
      {
        id: 15,
        key: 'Mystery',
        name: '미스터리',
        selected: false,
      },
      {
        id: 16,
        key: 'Romance',
        name: '로맨스',
        selected: false,
      },
      {
        id: 17,
        key: 'Sci - Fi',
        name: 'SF',
        selected: false,
      },
      {
        id: 18,
        key: 'Sport',
        name: '스포츠',
        selected: false,
      },
      {
        id: 19,
        key: 'Thriller',
        name: '스릴러',
        selected: false,
      },
      {
        id: 20,
        key: 'War',
        name: '전쟁',
        selected: false,
      },
      {
        id: 21,
        key: 'Western',
        name: '서부',
        selected: false,
      },
    ],
    movie: [],
  },
});
