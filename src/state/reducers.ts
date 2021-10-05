import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { setSelectedOption } from 'state/actions';
import { AppState } from './store';

const INITIAL_STATE = {
  selectedOption: {
    product_key: '',
    final_price: 0,
  },
};

const selectedOptionReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setSelectedOption, (state, { payload }) => {
    state.selectedOption = payload;
  });
});

const reducers = combineReducers({
  checkout: selectedOptionReducer,
});

export const checkoutOptionSelector = (state: AppState) => state.checkout.selectedOption;

export default reducers;
