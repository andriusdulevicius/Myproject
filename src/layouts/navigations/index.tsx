import React from 'react';
import { Router } from '@reach/router';
import { Route } from 'components';
import { Navigation } from './Navigation';

export const MainNavigation: React.FC = React.memo(() => (
  <Router>{Route(['/', '/home', '/loader', '/faq', '/contacts', '/privacy-policy', '/t&c'], Navigation)}</Router>
));
