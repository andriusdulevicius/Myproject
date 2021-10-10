import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { setQuizAnswers, setSelectedOption } from 'state/actions';
import { AppState } from './store';

const INITIAL_STATE = {
  selectedOption: {
    product_key: '',
    final_price: 0,
  },
  quizAnswers: [{ question: '', answer: [''] }],
};

const selectedOptionReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setSelectedOption, (state, { payload }) => {
    state.selectedOption = payload;
  });
});

const selectedAnswersReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setQuizAnswers, (state, { payload }) => {
    state.quizAnswers = payload;
  });
});

const reducers = combineReducers({
  user: selectedOptionReducer,
  selectedAnswersReducer,
});

export const checkoutOptionSelector = (state: AppState) => state.user.selectedOption;
export const selectedAndsersReducer = (state: AppState) => state.user.quizAnswers;

export default reducers;
