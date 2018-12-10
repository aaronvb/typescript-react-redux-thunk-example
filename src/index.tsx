import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { StoreState } from './types/index';
import { EnthusiasmAction } from './actions/index';
import { enthusiasm } from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore<StoreState, EnthusiasmAction, any, any>(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
    enthusiasmRequested: false,
  },
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
