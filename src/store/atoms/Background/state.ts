import { atom } from 'recoil';

export const backgroundState = atom<boolean>({
  key: 'backgroundState',
  default:false,
});
