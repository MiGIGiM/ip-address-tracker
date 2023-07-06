import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      'clr-100': string;
      'clr-900': string;
    };
    fonts: {
      'fw-400': number;
      'fw-500': number;
      'fw-700': number;
    };
    fontSize: '18px';
    sizes: {
      desktop: '1440px';
      mobile: '375px';
    };
  }
}
