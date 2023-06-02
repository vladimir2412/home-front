import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { shopApi } from './services/shopApi';
import { reducer as cartReduser } from './cart/cart.slice';

const reducers = combineReducers({
	cart: cartReduser,
	[shopApi.reducerPath]: shopApi.reducer,
});

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);
