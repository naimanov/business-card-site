import { createStore, combineReducers } from 'redux';
import { personReducer } from './personReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  personReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
