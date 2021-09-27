import React, { StrictMode } from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import { MainNavigation } from 'layouts/navigations';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    
}
body {
    overflow: hidden auto;
    margin: 0;
}
html {
    font-family: Roboto, Helvetica Neue, sans-serif;
}
`;

export const wrapRootElement: React.FC<WrapPageElementBrowserArgs> = ({ element }) => (
  <StrictMode>
    <GlobalStyle />
    <MainNavigation />
    {element}
  </StrictMode>
);
