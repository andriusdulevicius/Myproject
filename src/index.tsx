import React, { StrictMode } from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import { MainNavigation } from 'layouts/navigations';
import { Provider } from 'react-redux';
import { storeConfig } from 'state/store';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}
body {
    overflow: hidden auto;
}
html {
    font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
}
`;

export const wrapRootElement: React.FC<WrapPageElementBrowserArgs> = ({ element }) => (
  <StrictMode>
    <GlobalStyle />
    <MainNavigation />
    <Provider store={storeConfig().store}>{element}</Provider>
  </StrictMode>
);
