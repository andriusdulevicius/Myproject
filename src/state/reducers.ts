import { createReducer } from '@reduxjs/toolkit';
import { setQuizAnswers } from 'state/actions';

const INITIAL_STATE = {
  quizAnswers: [{ question: '', answer: [''] }],
};

const selectedAnswersReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setQuizAnswers, (state, { payload }) => {
    state.quizAnswers = payload;
  });
});

const reducers = selectedAnswersReducer;

export default reducers;
