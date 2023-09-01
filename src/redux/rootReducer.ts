// rootReducer.ts
import { combineReducers } from 'redux';
import beerReducer from './beerSlice';

const rootReducer = combineReducers({
  beers: beerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
