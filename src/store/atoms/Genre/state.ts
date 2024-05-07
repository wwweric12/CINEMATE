import { atom } from 'recoil';

export interface GenreList {
  [key: string]: boolean;
}

export const genreListState = atom<GenreList>({
  key: 'genreListState',
  default: {
    액션: false,
    모험: false,
    애니메이션: false,
    일대기: false,
    코미디: false,
    범죄: false,
    다큐멘터리: false,
    가족: false,
    판타지: false,
    역사: false,
    공포: false,
    음악: false,
    뮤지컬: false,
    미스터리: false,
    로맨스: false,
    SF: false,
    스포츠: false,
    스릴러: false,
    전쟁: false,
    서부: false,
  },
});
