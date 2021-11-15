import React, { StrictMode } from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import { MainNavigation } from 'layouts/navigations';
import { Provider } from 'react-redux';
import { storeConfig } from 'state/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  
}
body {
    overflow: hidden auto;
    min-height: 100%;

}
html {
    font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
    height: 100%;
}
`;

export const wrapRootElement: React.FC<WrapPageElementBrowserArgs> = ({ element }) => (
  <StrictMode>
    <GlobalStyle />
    <ToastContainer />
    <MainNavigation />
    <Provider store={storeConfig().store}>{element}</Provider>
  </StrictMode>
);
