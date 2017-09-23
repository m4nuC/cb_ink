import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import App from './containers/App';
import reducer from './reducers'
import 'normalize.css';

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);