import React from 'react';
import { Router } from '@reach/router';
import { Route } from 'components';
import { Footer } from './Footer';

export const MainFooter: React.FC = () => {
  return (
    <>
      <Router>{Route(['/', '/home', '/faq', '/contacts', '/t&c'], Footer)}</Router>
    </>
  );
};
