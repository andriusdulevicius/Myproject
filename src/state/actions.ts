import { createAction } from '@reduxjs/toolkit';

interface Option {
  product_key: string;
  final_price: number;
}

export const setSelectedOption = createAction<Option>('checkout/SET_SELECTED_OPTION');
