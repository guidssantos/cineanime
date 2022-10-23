import { createAction } from '@reduxjs/toolkit';

export const addToFavorite: any = createAction('favorite/add_item');
export const removeFromFavorite: any = createAction('favorite/remove_item');
