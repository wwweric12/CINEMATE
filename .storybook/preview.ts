import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import {theme} from '../src/styles/theme'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle'


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  withThemeFromJSXProvider({
  themes: {theme},
  Provider: ThemeProvider,
  GlobalStyles: GlobalStyle
})];
