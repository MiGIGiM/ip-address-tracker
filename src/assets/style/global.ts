import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        color-scheme: light;
        font-family: 'Rubik', sans-serif;
        font-size: ${({ theme }) => theme.fontSize};
        font-weight: ${({ theme }) => theme.fonts['fw-400']};
        color: ${({ theme }) => theme.colors['clr-100']};
        overflow-y: hidden;
    }

    button, input {
        all: unset;
    }
`;

export default GlobalStyle;
