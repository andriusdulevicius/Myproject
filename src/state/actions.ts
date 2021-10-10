import { createAction } from '@reduxjs/toolkit';
import { Answer } from './../pages/quiz/index';

interface Option {
  product_key: string;
  final_price: number;
}

export const setSelectedOption = createAction<Option>('user/SET_SELECTED_OPTION');

export const setQuizAnswers = createAction<Answer[]>('user/SET_QUIZ_ANSWERS');
