import { Colors } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
  }
}
