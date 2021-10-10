import React from 'react';
import { Router } from '@reach/router';
import { Route } from 'components';
import { Footer } from './Footer';
import { QuizFooter } from './QuizFooter';

export const MainFooters: React.FC = () => {
  return (
    <>
      <Router>{Route(['/', '/home'], Footer)}</Router>
      <Router>{Route(['/quiz', '/loader'], QuizFooter)}</Router>
    </>
  );
};
