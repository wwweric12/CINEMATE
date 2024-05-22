import { DefaultTheme } from 'styled-components/dist/types';

export type Colors = typeof colors;

const colors = {
  choral: '#FE6F61',
  darkgray1: '#262626',
  darkgray2: '#211F1F',
  darkgray3: '#484645',
  darkgray4: '#353535',
  darkgray5: '#535353',
  darkgray6: 'rgba(163, 163, 163, 0.1)',
  gray1: '#DEDEDE',
  gray2: '#A3A3A3',
  gray3: '#C0C0C0',
  red: '#F64E4E',
  green: '#24E9A2',
};

export const theme: DefaultTheme = {
  colors,
};
