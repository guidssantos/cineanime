import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './modules/favorite/rootReducer';

export const store = configureStore({ reducer: rootReducer });
