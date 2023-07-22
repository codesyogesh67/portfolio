import { createGlobalStyle } from 'styled-components';
// import fonts from './fonts';
import variables from './variables';
import TransitionStyles from './TransitionStyles';
// import PrismStyles from './PrismStyles';

const GlobalStyle = createGlobalStyle`
  
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  ul,li{
    list-style-type:none;
  }
  a{
    text-decoration:none;
  }

  

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--navy);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;


    
  }


  ${TransitionStyles};

  
`;

export default GlobalStyle;