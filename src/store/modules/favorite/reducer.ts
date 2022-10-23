import { createReducer } from '@reduxjs/toolkit';
import { addToFavorite, removeFromFavorite } from './actions';

export const items = createReducer([], {
  [addToFavorite]: (state, action) => {
    const { payload } = action;
    const { id } = payload;

    const itemExist = state.find((item) => item.id === id);

    if (itemExist) {
      itemExist.amount += 1;
    } else {
      payload.amount = 1;
      state.push(payload);
    }
  },
  [removeFromFavorite]: (state, action) => {
    const productIndex = state.findIndex((item) => item.id === action.payload);

    if (productIndex >= 0) {
      state.splice(productIndex, 1);
    }
  },
});
