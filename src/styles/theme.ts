import { DefaultTheme } from 'styled-components/dist/types';

export type Colors = typeof colors;

const colors = {
  choral: '#FE6F61',
  dark_gray1: '#262626',
  dark_gray2: '#211F1F',
  dark_gray3: '#484645',
  dark_gray4: '#353535',
  dark_gray5: '#535353',
  gray1: '#DEDEDE',
  gray2: '#A3A3A3',
  red: '#F64E4E',
  green: '#24E9A2',
};

export const theme: DefaultTheme = {
  colors,
};
