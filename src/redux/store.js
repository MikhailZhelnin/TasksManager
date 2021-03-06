import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  saveState({
    groups: store.getState().groups,
    background: store.getState().background,
  });
});

export default store;
