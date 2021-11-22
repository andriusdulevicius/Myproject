import { createAction } from '@reduxjs/toolkit';
import { Answer } from './../pages/quiz/index';

export const setQuizAnswers = createAction<Answer[]>('user/SET_QUIZ_ANSWERS');
