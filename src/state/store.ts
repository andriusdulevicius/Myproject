import { configureStore } from '@reduxjs/toolkit';
import reducers from 'state/reducers';

export const storeConfig = () => {
  const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
  });
  return {
    store,
  };
};

export type AppState = ReturnType<typeof reducers>;
