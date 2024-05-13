import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

interface Keyword {
  id: number;
  text: string;
}

const { persistAtom } = recoilPersist({
  key: 'keyword',
  storage: localStorage,
});

export const keywordState = atom<Keyword[]>({
  key: 'keyword',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
